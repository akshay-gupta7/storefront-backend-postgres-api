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

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers


