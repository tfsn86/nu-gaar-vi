CREATE DATABASE stepcount;

-- Users table
CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_name character varying(255) NOT NULL,
    user_email character varying(255) NOT NULL UNIQUE,
    user_password character varying(255) NOT NULL
);

-- Step count table
CREATE TABLE stepstable (
    step_id SERIAL PRIMARY KEY,
    user_id uuid REFERENCES users(user_id),
    steps integer NOT NULL,
    date_count date DEFAULT CURRENT_DATE
);

-- Dummy users data
INSERT INTO users (user_name, user_email, user_password) VALUES ('Christina', 'christina@hotmail.com','1234');

-- Dummy stepcount data
INSERT INTO stepstable (user_id, steps, date_count) VALUES ('d94cca94-24b8-4fe0-8ff5-53156c0bf366', '10430', '2021-06-28');