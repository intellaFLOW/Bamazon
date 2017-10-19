DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  dept_name VARCHAR(45) NULL,
  price VARCHAR(45) NULL,
  available INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("1", "Brain - I'm Brain", "Entertainment", "9.99", "10");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("2", "Belly - Mumble Rap", "Entertainment", "12.99", "13");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("3", "Log Cabin Maple Syrup", "Grocery", "3.99", "22");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("4", "Gold Framed Door Mirror", "Home Essentials", "19.99", "5");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("5", "Jansport Galaxy Backpack", "School Supplies", "49.99", "3");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("6", "Finding Nemo", "Entertainment", "19.99", "7");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("7", "iPhone 8 Plus", "Mobile Phones and Accessories", "799.99", "400");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("8", "Macbook Pro", "Computers and Accessories", "1449.99", "6");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("9", "Tote Bag", "Checkout", "0.49", "78");

INSERT INTO products (item_id, product_name, dept_name, price, available)
VALUES ("10", "Kraft Mac and Cheese", "Grocery", "0.99", "39");