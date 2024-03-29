CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255),
    email_verified BOOLEAN,
    date_created DATE, 
    last_login DATE
);