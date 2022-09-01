import express, { Request, Response } from 'express';
import { Order, Cart } from '../models/orders';

import verifyAuthToken from '../util/verifyAuthToken';

const cart = new Cart();

const create = async (_req: Request, res: Response) => {
  const order: Order = {
    id: _req.body.id,
    userid: _req.body.userid,
    status: _req.body.status,
  };
  try {
    const newOrder = await cart.create(order);
    res.json(newOrder);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const addProduct = async (_req: Request, res: Response) => {
  const orderId: string = _req.params.id;
  const productId: string = _req.body.product_id;
  const quantity: number = parseInt(_req.body.quantity);

  try {
    const addedProduct = await cart.addProduct(quantity, orderId, productId);
    res.json(addedProduct);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const currentOrder = async (_req: Request, res: Response) => {
  try {
    const currOrders = await cart.currentOrder(_req.params.user_id);
    res.json(currOrders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const completedOrders = async (_req: Request, res: Response) => {
  try {
    const pastOrders = await cart.completedOrders(_req.params.user_id);
    res.json(pastOrders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const orderRoutes = (app: express.Application) => {
  app.post('/orders', create);
  app.post('/orders/:id/products', verifyAuthToken, addProduct);
  app.get('/orders/current/:user_id', verifyAuthToken, currentOrder);
  app.get('/orders/completed/:user_id', verifyAuthToken, completedOrders);
};

export default orderRoutes;
