import { User, UserInfo } from '../../models/users';

const userInfo = new UserInfo();

describe('Testing USERS Model', () => {
  it('should have an index method', () => {
    expect(userInfo.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(userInfo.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(userInfo.create).toBeDefined();
  });

  //testing methods
  it('create method should add a user', async () => {
    const newUser = await userInfo.create({
      id: 6,
      firstname: 'akshay',
      lastname: 'gupta',
      password: 'test@123',
    });
    expect(newUser.id).toEqual(6);
    expect(newUser.firstname).toEqual('akshay');
    expect(newUser.lastname).toEqual('gupta');
  });

  it('index method should return a list of users', async () => {
    const result = await userInfo.index();
    expect(result[0].id).toEqual(1);
    expect(result[0].firstname).toEqual('mudit');
    expect(result[0].lastname).toEqual('pandey');
    expect(result[1].id).toEqual(2);
    expect(result[1].firstname).toEqual('lee');
    expect(result[1].lastname).toEqual('gomes');
  });

  it('show method should return one user', async () => {
    const result = await userInfo.show(2);
    expect(result.id).toEqual(2);
    expect(result.firstname).toEqual('mudit');
    expect(result.lastname).toEqual('pandey');
  });

  it('authenticate method should return one user', async () => {
    const pass = await userInfo.authenticate('akshay', 'gupta', 'test@123');
    expect(pass).not.toEqual(null);
  });
});