CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    userId bigint REFERENCES users(id) NOT NULL,
    status VARCHAR(50) NOT NULL
);