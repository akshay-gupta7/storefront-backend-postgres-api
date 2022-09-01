# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

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
