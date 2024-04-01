-- Users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    address VARCHAR(255),
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    role ENUM ('user', 'admin') DEFAULT 'user'
);


-- Products table
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    category VARCHAR(255),
    user_id INT NOT NULL,
    thumbnail_url TEXT;
);


-- Inserting 2 users into the users table
INSERT INTO
    users (name, email, address, phone, password, role)
VALUES
    (
        'John Doe',
        'john@example.com',
        '123 Main St, Anytown',
        '123-456-7890',
        'password1',
        'user'
    ),
    (
        'Jane Smith',
        'jane@example.com',
        '456 Elm St, Othertown',
        '987-654-3210',
        'password2',
        'admin'
    );


-- Inserting 5 products into the products table with user IDs 1 and 2
INSERT INTO
    products (
        name,
        description,
        price,
        stock_quantity,
        category,
        user_id
    )
VALUES
    (
        'Product 1',
        'Description for Product 1',
        19.99,
        100,
        'Category A',
        1
    ),
    (
        'Product 2',
        'Description for Product 2',
        29.99,
        80,
        'Category B',
        2
    ),
    (
        'Product 3',
        'Description for Product 3',
        39.99,
        120,
        'Category A',
        1
    ),
    (
        'Product 4',
        'Description for Product 4',
        49.99,
        50,
        'Category C',
        1
    ),
    (
        'Product 5',
        'Description for Product 5',
        59.99,
        200,
        'Category B',
        2
    );
