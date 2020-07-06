create table product (
product_id  SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(40) NOT NULL,
price INTEGER NOT NULL,
image_url TEXT NOT NULL
);

select * from product;