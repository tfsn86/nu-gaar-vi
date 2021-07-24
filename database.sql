CREATE DATABASE stepcount;

-- CREATE TABLE stepstable(
--   step_id SERIAL PRIMARY KEY,
--   steps INT,
--   date_count DATE default CURRENT_DATE
-- );

CREATE TABLE users (
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE stepstable (
  step_id SERIAL,
  user_id UUID,
  steps INT NOT NULL,
  date_count DATE default CURRENT_DATE,
  PRIMARY KEY (step_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Dummy users data
INSERT INTO users (user_name, user_email, user_password) VALUES ('Christina', 'christina@hotmail.com','1234');

-- Dummy stepcount data
INSERT INTO stepstable (user_id, steps, date_count) VALUES ('c76be45f-30f9-41de-84e0-5ea7f204ee4f', '3247', '2021-06-22');