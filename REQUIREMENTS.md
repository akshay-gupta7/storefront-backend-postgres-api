# API Requirements

## API Endpoints
#### Products
- Index -- 'products' [GET]
- Show -- 'products/id/:id' [GET]
- Create [token required] -- 'products' [POST]
- Products by category (args: product category) - 'products/category:category' [GET]

#### Users
- Index [token required] -- 'users' [GET]
- Show [token required] -- 'users/:id' [GET]
- Create -- 'users' [POST]

#### Orders
- Create [token required] -- 'orders' [POST]
- Completed Orders by user (args: user id)[token required] -- 'orders/completed/:user_id' [GET]
- Current Order by user (args: user id)[token required] -- 'orders/current/:user_id' [GET]
- addProduct [token required] -- 'orders/:id/products' [POST]

## Data Shapes
#### Product
-  id
- name
- price
- category
- orderscount

Schema:
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price integer,
    category VARCHAR(200),
    orderscount integer
);

Table "public.products"
   Column    |          Type          | Collation | Nullable |               Default                
-------------+------------------------+-----------+----------+--------------------------------------
 id          | integer                |           | not null | nextval('products_id_seq'::regclass)
 name        | character varying(255) |           | not null | 
 price       | integer                |           |          | 
 orderscount | integer                |           |          | 
 category    | character varying      |           |          | 
Indexes:
    "products_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "products_orders" CONSTRAINT "products_orders_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id)


#### User
- id
- firstName
- lastName
- password

Schema:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(90) NOT NULL,
    lastName VARCHAR(90) NOT NULL,
    password VARCHAR(200) NOT NULL
);

Table: public.users
Column   |          Type          | Collation | Nullable |              Default              
-----------+------------------------+-----------+----------+-----------------------------------
 id        | integer                |           | not null | nextval('users_id_seq'::regclass)
 firstname | character varying(90)  |           | not null | 
 lastname  | character varying(90)  |           | not null | 
 password  | character varying(200) |           | not null | 
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "orders" CONSTRAINT "orders_user_id_fkey" FOREIGN KEY (userid) REFERENCES users(id)

#### Orders
- id
- userId
- status

Schema:
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    userId bigint REFERENCES users(id) NOT NULL,
    status VARCHAR(50) NOT NULL
);

Table "public.orders"
 Column |         Type          | Collation | Nullable |              Default               
--------+-----------------------+-----------+----------+------------------------------------
 id     | integer               |           | not null | nextval('orders_id_seq'::regclass)
 userid | bigint                |           | not null | 
 status | character varying(50) |           | not null | 
Indexes:
    "orders_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "orders_user_id_fkey" FOREIGN KEY (userid) REFERENCES users(id)
Referenced by:
    TABLE "products_orders" CONSTRAINT "products_orders_order_id_fkey" FOREIGN KEY (order_id) REFERENCES orders(id)

#### Products_Orders
- id
- quantity
- product_id
- order_id

Schema:
CREATE TABLE products_orders(
    id SERIAL PRIMARY KEY,
    quantity integer NOT NULL,
    product_id bigint REFERENCES products(id) NOT NULL,
    order_id bigint REFERENCES orders(id) NOT NULL
);

Table "public.products_orders"
   Column   |  Type   | Collation | Nullable |                   Default                   
------------+---------+-----------+----------+---------------------------------------------
 id         | integer |           | not null | nextval('products_orders_id_seq'::regclass)
 quantity   | integer |           | not null | 
 product_id | bigint  |           | not null | 
 order_id   | bigint  |           | not null | 
Indexes:
    "products_orders_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "products_orders_order_id_fkey" FOREIGN KEY (order_id) REFERENCES orders(id)
    "products_orders_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id)