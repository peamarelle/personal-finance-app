CREATE DATABASE db_personal_finance;

USE db_personal_finance;

CREATE TABLE money_transaction(
    id INTEGER NOT NULL PRIMARY KEY,
    concept VARCHAR(255),
    amount FLOAT,
    type VARCHAR(255),
    date DATE
);