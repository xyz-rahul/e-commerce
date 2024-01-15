-- Create the 'blog' database
CREATE DATABASE blog;

-- Connect to the 'blog' database
\c blog;

-- Create the 'courses' table
CREATE TABLE courses (
  course_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  instructor VARCHAR(255),
  price DECIMAL(10, 2),
  duration INT,
  description TEXT
);

-- Create the 'users' table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  clerk_user_id VARCHAR(36),
  name VARCHAR(255) );
);

-- Create the 'user_courses' table for the many-to-many relationship
CREATE TABLE user_courses (
  user_id SERIAL REFERENCES users(user_id),
  course_id SERIAL REFERENCES courses(course_id),
  PRIMARY KEY (user_id, course_id)
);

