INSERT INTO `categories` (category_name, description, enabled)
VALUES ('Electronics', 'Electronics category description', 'true');

INSERT INTO `categories` (category_name, description, enabled)
VALUES ('Clothing', 'Clothing category description', 'true');

INSERT INTO `categories` (category_name, description, enabled)
VALUES ('Books', 'Books category description', 'true');

INSERT INTO `categories` (category_name, description, enabled)
VALUES ('Home Appliances', 'Home Appliances category description', 'true');

INSERT INTO `categories` (category_name, description, enabled)
VALUES ('Sports Equipment', 'Sports Equipment category description', 'true');

-- second time
INSERT INTO categories (category_name, description, enabled, image)
VALUES
    ('Books', 'Collections of All kinds of books', "true", 'Books.jpg'),
    ('Watches', 'Collections of All kinds of watches', "true", 'Watches.jpg'),
    ('SmartPhones', 'Collections of All kinds of SmartPhones', "true", 'SmartPhones.jpg'),
    ('Furniture', 'Collections of All kinds of Furniture', "true", 'Furniture.jpg');
