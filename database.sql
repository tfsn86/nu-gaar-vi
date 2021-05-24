-- CREATE DATABASE stepcount;

CREATE TABLE stepstable(
  step_id SERIAL PRIMARY KEY,
  steps VARCHAR(255)
);

ALTER TABLE stepstable 
ADD COLUMN date_count DATE default CURRENT_DATE;