const express = require('express');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllTransactions = (req, res) => {

    const transactions = [{
        id: '605407f340bc9e39749e20a0',
        name: 'Patricio'
    },
    {
        id: '605407f340bc9e39749e20a1',
        name: 'Natali'
    }]

    res.json(transactions);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const createTransaction = (req, res) => {

    const { id, name } = req.body;

    const user = {
        id,
        name
    }

    res.status(201).json(user);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updateTransaction = (req, res) => {

    const { id } = req.params;

    const message = {
        message: 'Transaction modifed!'
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
        id: '605407f340bc9e39749e20a0',
        name: 'Patricio'
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