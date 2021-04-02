const express = require('express');
const { v4: uuidv4 } = require("uuid");
const RepositoryTransaction = require('../repositories/transactionRepository')
const repocitory = new RepositoryTransaction();
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllTransactions = async (req, res) => {

    const transactions = await repocitory.findTransactions()

    res.json(transactions);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const createTransaction = async (req, res) => {

    const transaction = await repocitory.saveTransaction(req.body)

    res.status(201).json(transaction);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updateTransaction = async (req, res) => {

    const { id } = req.params;

    const transactionUpdated = await repocitory.updateTransaction(id, req.body);

    res.json(transactionUpdated);
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