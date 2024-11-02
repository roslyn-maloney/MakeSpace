DROP DATABASE IF EXISTS SellingSetup;

CREATE DATABASE IF NOT EXISTS SellingSetup;

USE SellingSetup;

CREATE TABLE sellers
(
    id integer AUTO_INCREMENT PRIMARY KEY,
    username varchar(25) UNIQUE NOT NULL,
    firstName varchar(25),
    lastName varchar(30),
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    items_sold integer NOT NULL DEFAULT 0
);

CREATE TABLE items
(
    id integer AUTO_INCREMENT PRIMARY KEY,
    title varchar(50),
    seller_id integer NOT NULL,
    posted_at datetime DEFAULT CURRENT_TIMESTAMP,
    negotiability bool NOT NULL DEFAULT false,
    `condition` varchar(20) NOT NULL,
    description varchar(255),
    availability_timeframe varchar(20),
    FOREIGN KEY (seller_id) REFERENCES sellers(id)
);

CREATE TABLE photos
(
    id integer AUTO_INCREMENT PRIMARY KEY,
    image_url varchar(255) NOT NULL,
    item_id int NOT NULL,
    caption varchar(50),
    FOREIGN KEY (item_id) REFERENCES items(id)
);

CREATE TABLE tags
(
    id integer AUTO_INCREMENT PRIMARY KEY,
    tag_name varchar(255) NOT NULL,
    description varchar(75)
);

CREATE TABLE item_tags
(
    item_id int NOT NULL,
    tag_id int NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);