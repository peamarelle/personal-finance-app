const express = require('express');
const { v4: uuidv4 } = require("uuid");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllTransactions = (req, res) => {

    const transactions = [
        {
            id: uuidv4(),
            concept: "payment",
            amount: 2000.7,
            date: new Date(),
            transactionType: "icome"
        }
    ]

    res.json(transactions);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const createTransaction = (req, res) => {

    const {concept, date, transactionType} = req.body;

    const transaction = {
        id: uuidv4(),
        concept,
        amount,
        date,
        transactionType
    }

    res.status(201).json(transaction);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updateTransaction = (req, res) => {

    const { id } = req.params;

    const message = {
        message: `Transaction ${id} modifed!`
    }
    res.json(message);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getTransactionById = (req, res) => {

    const { id } = req.params;

    const transaction = {
        
    }

    res.json(transaction);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const deleteTransaction = (req, res) => {

    const { id } = req.params;

    const message = {
        message: `User ${id} deleted!`
    }

    res.json(message);
}

module.exports = {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    getTransactionById,
    deleteTransaction
}