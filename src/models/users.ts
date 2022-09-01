//@ts-ignore
import Client from '../database';
import bcrypt from 'bcrypt';

export type User = {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
};

const pepper = process.env.BCRYPT_PASSWOORD || '';
const salt = process.env.SALT_ROUNDS || '';
export class UserInfo {
  async index(): Promise<User[]> {
    try {
      //@ts-ignore
      console.log("Here in index function");
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error in accessing users table. Error is: ${err}`);
    }
  }

  async show(userid: number): Promise<User> {
    try {
      const conn = await Client.connect();
      console.log("here in show function");
      const sql = 'SELECT * FROM users WHERE id = ($1)';
      const result = await conn.query(sql, [userid]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error in finding user ${userid}. Error: ${err}`);
    }
  }

  async create(user: User): Promise<User> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      console.log("here in async create function");
      const sql =
        'INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3) RETURNING *';
      const hash = bcrypt.hashSync(user.password + pepper, parseInt(salt));
      const result = await conn.query(sql, [user.firstname, user.lastname, hash]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error in creating a new user. Error is: ${err}`);
    }
  }

  async authenticate(
    firstName: string,
    lastName: string,
    pswd: string
  ): Promise<User | null> {
    const conn = await Client.connect();
    console.log("here in async authenticate function");
    const sql =
      'SELECT password FROM users WHERE firstname=($1) AND lastname=($2)';
    const result = await conn.query(sql, [firstName, lastName]);
    if (result.rows.length) {
      const user = result.rows[0];
      if (bcrypt.compareSync(pswd + pepper, user.password)) return user;
    }
    return null;
  }
}