CREATE DATABASE db_personal_finance;

USE db_personal_finance;

CREATE TABLE money_transaction(
    id VARCHAR(200) NOT NULL PRIMARY KEY,
    concept VARCHAR(200),
    amount FLOAT,
    date DATE,
    transactionType VARCHAR(100)
);

DESCRIBE money_transaction;