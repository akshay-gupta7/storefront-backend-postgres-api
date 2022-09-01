CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price integer,
    category VARCHAR(200),
    orderscount integer
);
