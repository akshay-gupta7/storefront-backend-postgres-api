import { User, UserInfo } from '../models/users';
import express, { Request, Response } from 'express';
import verifyAuthToken from '../util/verifyAuthToken';
import jwt, { verify } from 'jsonwebtoken';

const userDatabase = new UserInfo();

const index = async (_req: Request, res: Response) => {
  try {
    const users = await userDatabase.index();
    res.json(users);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show = async (_req: Request, res: Response) => {
  try {
    const user = await userDatabase.show(_req.params.id as unknown as number);
    res.json(user);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (_req: Request, res: Response) => {
  const user: User = {
    id: _req.body.id,
    firstname: _req.body.firstname,
    lastname: _req.body.lastname,
    password: _req.body.password,
  };
  try {
    const newUser = await userDatabase.create(user);
    var token = jwt.sign(
      { user: newUser },
      process.env.TOKEN_SECRET as jwt.Secret
    );
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const authenticate = async (_req: Request, res: Response) => {
  const user: User = {
    id: _req.body.id,
    firstname: _req.body.firstname,
    lastname: _req.body.lastname,
    password: _req.body.password,
  };
  try {
    const newUser = await userDatabase.authenticate(
      user.firstname,
      user.lastname,
      user.password
    );
    var token = jwt.sign(
      { user: newUser },
      process.env.TOKEN_SECRET as jwt.Secret
    );
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const userRoutes = (app: express.Application) => {
    app.get('/users/:id', verifyAuthToken,  show);
    app.get('/users', verifyAuthToken,  index);
    app.post('/users', create);
};

export default userRoutes;