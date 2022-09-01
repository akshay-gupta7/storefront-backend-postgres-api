import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing Users Routes endpoints', () => {
  let token: string;

  beforeAll(async () => {
    const userTyler = await request
      .post('/users')
      .send({
        id: 1,
        firstname: 'tyler',
        lastname: 'lindsey',
        password: 'business',
      })
      .set('Accept', 'application/json');
    token = userTyler.body;
  });

  it('GET request to fetch all users endpoint should work', async () => {
    const response = await request
      .get('/users')
      .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('POST request to add a user endpoint should work', async () => {
    const response = await request.post('/users').send({
      id: 1,
      firstname: 'sathya',
      lastname: 'prasad',
      password: 'pass@123',
    });
    expect(response.status).toBe(200);
  });

  it('GET request to show user with passed id parameter endpoint should work', async () => {
    const response = await request
      .get('/users/19')
      .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});