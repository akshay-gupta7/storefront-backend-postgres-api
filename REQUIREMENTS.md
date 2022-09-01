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

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- userId
- status

#### Products_Orders
- id
- quantity
- product_id
- order_id
