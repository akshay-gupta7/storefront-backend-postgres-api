# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal or npm install to ensure that all packages required for this api are installed.

## Technologies Used
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
- bcrypt from npm for hashing passwords in db

## Steps to Completion

### 1. Postgres Setup

psql -U postgres CREATE USER udacity WITH PASSWORD 'secret@123'; CREATE DATABASE storefront_db; CREATE DATABSE storefront_test; \c storefront_db GRANT ALL PRIVILEGES ON DATABASE storefront_db TO udacity; \c storefront_test GRANT ALL PRIVILEGES ON DATABASE storefront_test TO udacity;

Details to be included in .env file: 
POSTGRES_HOST = 127.0.0.1
POSTGRES_DB = storefront_db
POSTGRES_TEST_DB = storefront_test
POSTGRES_USER = udacity
POSTGRES_PASSWORD = secret@123
ENV=dev
TOKEN_SECRET=akshay@123
BCRYPT_PASSWORD=secret@123
SALT_ROUNDS=10

### 2.  Running tests

npm run test to run all tests

### 3. Starting Server

Run "yarn watch" and open localhost:3000. Port: 5432


