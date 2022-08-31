import { User, UserInfo } from '../../models/users';

const userInfo = new UserInfo();

//Check existence of all users functions:
/*describe('Testing USERS Model', () => {
  it('should have an index method', () => {
    expect(userInfo.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(userInfo.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(userInfo.create).toBeDefined();
  });

  it('create method should add a user', async () => {
    const newUser = await userInfo.create({
      id: 23,
      firstname: 'lee',
      lastname: 'gomes',
      password: 'test@123',
    });
    expect(newUser.id).toEqual(23);
    expect(newUser.firstname).toEqual('lee');
    expect(newUser.lastname).toEqual('gomes');
  });

  it('index method should return a list of users', async () => {
    const result = await userInfo.index();
    expect(result[0].id).toEqual(19);
    expect(result[0].firstname).toEqual('akshay');
    expect(result[0].lastname).toEqual('gupta');
    expect(result[1].id).toEqual(20);
    expect(result[1].firstname).toEqual('mudit');
    expect(result[1].lastname).toEqual('pandey');
  });

  it('show method should return one user', async () => {
    const result = await userInfo.show(20);
    expect(result.id).toEqual(20);
    expect(result.firstname).toEqual('mudit');
    expect(result.lastname).toEqual('pandey');
  });

  /*it('authenticate method should return one user', async () => {
    const pass = await userInfo.authenticate('akshay', 'gupta', 'test@123');
    expect(pass).not.toEqual(null);
  });
}

});

*/