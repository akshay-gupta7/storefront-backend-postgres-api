//@ts-ignore
import Client from '../database';

export type Order = {
  id: number;
  userid: string;
  status: string;
};

export class Cart {
  //create order (like an addToCart method)
  async create(order: Order): Promise<Order> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql =
        'INSERT INTO orders (userId, status) VALUES ($1, $2) RETURNING *';
      const result = await conn.query(sql, [order.userid, order.status]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Error creating new order. Error is: ${err}`);
    }
  }

  async addProduct(
    quantity: number,
    orderId: string,
    productId: string
  ): Promise<{
    id: number;
    quantity: number;
    order_id: string;
    product_id: string;
  }> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql =
        'INSERT INTO products_orders (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *';
      const result = await conn.query(sql, [quantity, orderId, productId]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Error adding product ${productId} to order ${orderId}. Error is: ${err}`
      );
    }
  }
  
  async currentOrder(userId: string): Promise<Order[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql = `SELECT * FROM orders WHERE userId=($1) AND status='active'`;
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Error finding current order for user ${userId}. Error is: ${err}`
      );
    }
  }

  //completed orders
  async completedOrders(userId: string): Promise<Order[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql = `SELECT * FROM orders WHERE userId=($1) AND status='completed'`;
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Error fetching completed orders for user ${userId}. Error is : ${err}`
      );
    }
  }
}