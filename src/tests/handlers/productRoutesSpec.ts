import app from '../../server';
import supertest from 'supertest';
import { ProductInventory } from '../../models/products';
/*
const request = supertest(app);
const warehouse = new ProductInventory();

describe('Testing PRODUCTS endpoints', () => {
  let token: string;

  beforeAll(async () => {
    const userDenise = await request
      .post('/users')
      .send({
        id: 1,
        firstname: 'denise',
        lastname: 'hadley',
        password: 'test@123',
      })
      .set('Accept', 'application/json');
    token = userDenise.body;
  });

  it('POST request to add a product should work', async () => {
    const response = await request
      .post('/products')
      .send({
        id: 1,
        name: 'pear',
        price: 3,
        category: 'fruits',
        numorders: 1,
      })
      .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});

it('GET request to  return list of products endpoint should work', async () => {
  const response = await request.get('/products');
  expect(response.status).toBe(200);
});

it('GET request to return exact product endpoint with id parameter should work', async () => {
  const response = await request.get('/products/id/19');
  expect(response.status).toBe(200);
});

it('GET request to return a products of specific category with category parameter should work', async () => {
  const response = await request.get('/products/category/fruits');
  expect(response.status).toBe(200);
});

*/