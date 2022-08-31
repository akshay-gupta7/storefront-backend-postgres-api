import { Order, Cart } from '../../models/orders';
import { User, UserInfo } from '../../models/users';
import { Product, ProductInventory } from '../../models/products';

const cart = new Cart();
const userInfo = new UserInfo();
const warehouse = new ProductInventory();

describe('Testing ORDERS Model', () => {
  //methods should exist
  it('should have a create method', () => {
    expect(userInfo.create).toBeDefined();
  });
  it('should have an addProduct method', () => {
    expect(cart.addProduct).toBeDefined();
  });

  it('should have an currentOrder method', () => {
    expect(cart.currentOrder).toBeDefined();
  });

  it('should have an completedOrders method', () => {
    expect(cart.completedOrders).toBeDefined();
  });

  it('create method should return created order', async () => {
    const user1: User = await userInfo.create({
      id: 1,
      firstname: 'akshay',
      lastname: 'gupta',
      password: 'pswd',
    });
    const product1: Product = await warehouse.createProduct({
      id: 1,
      name: 'milk',
      price: 2,
      category: 'dairy',
      orderscount: 5,
    });

    const order1: Order = await cart.create({
      id: 1,
      userid: '1',
      status: 'active',
    });
    expect(order1).toEqual({
      id: 1,
      userid: '1',
      status: 'active',
    });
  });

  it('addProduct method should add row to products_orders table', async () => {
    const result = await cart.addProduct(1, '1', '1');
    expect(result).toEqual({
      id: 1,
      quantity: 4,
      order_id: '1',
      product_id: '1',
    });
  });

  it('currentOrder method should return list of current orders', async () => {
    const result = await cart.currentOrder('1');
    expect(result).toEqual([
      {
        id: 1,
        userid: '1',
        status: 'active',
      },
      {
        id: 2,
        userid: '1',
        status: 'active',
      },
    ]);
  });

  it('completedOrders method should return list of current orders', async () => {
    const result = await cart.completedOrders('1');
    expect(result).toEqual([]);
  });
});