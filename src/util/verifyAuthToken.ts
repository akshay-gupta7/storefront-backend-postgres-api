import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const verifyAuthToken = (_req: Request, res: Response, next: any): void => {
  try {
    const authorizationHeader = _req.headers.authorization;
    const token: string = (authorizationHeader as string).split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret);
    next();
  } catch (error) {
    console.log("Here, failed");
    res.status(401);
  }
};

export default verifyAuthToken;