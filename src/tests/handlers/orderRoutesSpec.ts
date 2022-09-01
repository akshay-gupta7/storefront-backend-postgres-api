import app from '../../server';
import supertest from 'supertest';
import { User, UserInfo } from '../../models/users';
import { Product, ProductInventory } from '../../models/products';

const request = supertest(app);
const userInfo = new UserInfo();
const warehouse = new ProductInventory();

describe('Testing Orders endpoints', () => {
  let token: string;

  beforeAll(async () => {
    const userPaige = await request
      .post('/users')
      .send({
        id: 26,
        firstname: 'Paige',
        lastname: 'Wilson',
        password: 'test@123',
      })
      .set('Accept', 'application/json');
    token = userPaige.body;
    const productMilk = await request
      .post('/products')
      .send({
        id: 1,
        name: 'milk',
        price: 1,
        category: 'dairy',
        numorders: 8,
      })
      .set('authorization', `Bearer ${token}`);
  });

  it('POST Request to create an order should work and return 200', async () => {
    const response = await request
      .post('/orders')
      .send({
        id: 19,
        userid: '19',
        status: 'active',
      })
      .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('POST request to Add a Product TO an Order should work and return 200', async () => {
    const response = await request
      .post('/orders/13/products')
      .send({
        product_id: '19',
        quantity: '15',
      })
      .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('GET request to return the current orders with the order id parameter should work and return 200', async () => {
    const response = await request.get('/orders/current/13').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('GET request to return the completed orders with the order id parameter should work and return 200', async () => {
    const response = await request.get('/orders/completed/1').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});