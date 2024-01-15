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
  name VARCHAR(255) 
);

-- Create the 'user_courses' table for the many-to-many relationship
CREATE TABLE user_courses (
  user_id SERIAL REFERENCES users(user_id),
  course_id SERIAL REFERENCES courses(course_id),
  PRIMARY KEY (user_id, course_id)
);

INSERT INTO courses (title, instructor, price, duration, description)
VALUES 
  ('Introduction to Programming', 'John Doe', 149.99, 30, 'This comprehensive course covers the fundamentals of programming, from basic syntax to problem-solving techniques. Whether you are a complete beginner or looking to enhance your skills, this course will provide a solid foundation in programming.'),
  ('Web Development Fundamentals', 'Jane Smith', 179.99, 45, 'Explore the essentials of web development in this hands-on course. From HTML and CSS to JavaScript and responsive design, you will gain the skills needed to create dynamic and visually appealing websites.'),
  ('Data Science for Beginners', 'Alice Johnson', 199.99, 60, 'Unlock the world of data science with this beginner-friendly course. Learn the basics of data analysis, visualization, and machine learning. Gain practical experience using popular data science tools and techniques.'),
  ('Advanced JavaScript', 'Bob Miller', 129.99, 40, 'Dive into the advanced concepts of JavaScript and take your web development skills to the next level. This course covers topics such as asynchronous programming, closures, and advanced DOM manipulation, equipping you with the knowledge to build more sophisticated web applications.'),
  ('Database Design and Management', 'Emily Davis', 149.99, 50, 'Master the art of database design and management in this comprehensive course. From relational database concepts to SQL queries and normalization, you will learn the skills needed to create efficient and scalable databases.'),
  ('Machine Learning Basics', 'David Wilson', 159.99, 55, 'Explore the fascinating world of machine learning in this introductory course. Understand key algorithms and techniques used in machine learning applications. Get hands-on experience with popular machine learning frameworks.'),
  ('Mobile App Development', 'Sarah Brown', 179.99, 60, 'Turn your app ideas into reality with this mobile app development course. Covering both iOS and Android platforms, you will learn the essentials of app design, development, and deployment. Build your own mobile applications from scratch.'),
  ('Cybersecurity Fundamentals', 'Michael Clark', 129.99, 45, 'Ensure the security of digital systems with this comprehensive cybersecurity course. From understanding common cyber threats to implementing security measures, you will gain the knowledge and skills needed to protect against cyber attacks.'),
  ('Cloud Computing Essentials', 'Karen Turner', 169.99, 55, 'Embark on a journey into the world of cloud computing with this essential course. Learn about cloud services, deployment models, and architecture. Gain hands-on experience with popular cloud platforms and services.'),
  ('Digital Marketing Strategies', 'Chris Taylor', 129.99, 40, 'Discover the secrets of successful digital marketing in this strategy-focused course. From social media marketing to content creation and SEO, you will learn the techniques to create effective digital marketing campaigns that drive results.');

