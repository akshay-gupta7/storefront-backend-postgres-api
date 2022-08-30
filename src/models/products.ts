//@ts-ignore
import Client from '../database';

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  numorders: number;
};

export class ProductInventory {
  async index(): Promise<Product[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not access products. Error: ${err}`);
    }
  }

  async showProduct(id: string): Promise<Product> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products WHERE id = ($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error accessing product ${id}. Error is: ${err}`);
    }
  }

  async createProduct(p: Product): Promise<Product> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql =
        'INSERT INTO products (name, price, category, numorders) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await conn.query(sql, [
        p.name,
        p.price,
        p.category,
        p.numorders,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error creating a new product. Error is: ${err}`);
    }
  }

  async productsByCategory(category: string): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products WHERE category=($1)';
      const result = await conn.query(sql, [category]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Error fetching any products in this category. Error is : ${err}`
      );
    }
  }
}