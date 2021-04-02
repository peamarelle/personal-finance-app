const express = require('express');
const { findAll, save, update, findById, removeById, getAmounts } = require('../services/transactionServices');
const Success = require('../handlers/successHandler');
const balanceHandler = require('../handlers/balance');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const findTransactions = async (req, res, next) => {
    try {
        const transactions = await findAll();

        res.json(new Success(transactions));

    } catch (error) {
        next(error);
    }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const createTransaction = async (req, res, next) => {
    try {
        const transaction = await save(req.body);

        res.status(201).json(new Success(transaction));

    } catch (error) {
        next(error);
    }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updateTransaction = async (req, res, next) => {
    try {
        const { id } = req.params;

        const transactionUpdated = await update(id, req.body);

        res.json(new Success(transactionUpdated));

    } catch (error) {
        next(error);
    }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getTransactionById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const transaction = await findById(id);

        res.json(new Success(transaction));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const deleteTransaction = async (req, res, next) => {
    try {
        const { id } = req.params;

        await removeById(id);

        res.json(new Success({
            message: `Transaction with ${id} deleted`
        }));

    } catch (error) {
        next(error);
    }

}

const getBalance = async (req, res, next) => {
    try {
        const amounts = await getAmounts();
        const balance = balanceHandler(amounts);
        res.json(new Success(balance));
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findTransactions,
    createTransaction,
    updateTransaction,
    getTransactionById,
    deleteTransaction,
    getBalance,
}