import { DiagnosticCategory } from 'typescript';
import { Product, ProductInventory } from '../../models/products';

const warehouse = new ProductInventory();

describe('Testing PRODUCTS Model', () => {
  //methods should be defined
  it('should have an index method', () => {
    expect(warehouse.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(warehouse.showProduct).toBeDefined();
  });

  it('should have a create method', () => {
    expect(warehouse.createProduct).toBeDefined();
  });

  //order1 was created in tests/handlers/orderSpec file

  it('create method should return created product', async () => {
    const newProduct = await warehouse.createProduct({
      id: 22,
      name: 'pineapple',
      price: 1,
      category: 'fruits',
      orderscount: 3,
    });
    expect(newProduct).toEqual({
      id: 22,
      name: 'pineapple',
      price: 1,
      category: 'fruits',
      orderscount: 3,
    });
    expect(newProduct.name).toEqual('pineapple');
  });

  it('show method should return one product', async () => {
    const result = await warehouse.showProduct('22');
    expect(result).toEqual({
      id: 22,
      name: 'pineapple',
      category: 'fruits',
      price: 1,
      orderscount: 3,
    });
  });


  it('index method should return a list of products', async () => {
    const result = await warehouse.index();
    expect(result).toBeDefined();
  });

  
  it('show method should return undefined if product does not exist', async () => {
    const result = await warehouse.showProduct('16');
    expect(result).toBeUndefined();
  });

});
