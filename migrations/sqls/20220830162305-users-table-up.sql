CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(90) NOT NULL,
    lastName VARCHAR(90) NOT NULL,
    password VARCHAR(200) NOT NULL
);