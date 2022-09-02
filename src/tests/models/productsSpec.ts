import { DiagnosticCategory } from 'typescript';
import { Product, ProductInventory } from '../../models/products';

const warehouse = new ProductInventory();

//Checking to see existence of function definitions first
describe('Testing PRODUCTS Model', () => {

  it('should have an index method', () => {
    expect(warehouse.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(warehouse.showProduct).toBeDefined();
  });

  it('should have a create method', () => {
    expect(warehouse.createProduct).toBeDefined();
  });

  it('create method should return created product', async () => {
    const newProduct = await warehouse.createProduct({
      id: 4,
      name: 'pineapple',
      price: 1,
      category: 'fruits',
      orderscount: 3,
    });
    expect(newProduct).toEqual({
      id: 3,
      name: 'pineapple',
      price: 1,
      category: 'fruits',
      orderscount: 3,
    });
    expect(newProduct.name).toEqual('pineapple');
  });

  it('show method should return one product', async () => {
    const result = await warehouse.showProduct('2');
    expect(result).toEqual({
      id: 2,
      name: 'bread',
      category: 'dairy',
      price: 2,
      orderscount: 1,
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
