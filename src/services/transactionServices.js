const TransactionRepository = require('../repositories/transactionRepository');
const logger = require('../loaders/logger/index')

const repocitory = new TransactionRepository();

const findAll = async () => {

    return await repocitory.findTransactions();
}

const save = async (transaction) => {

    return await repocitory.saveTransaction(transaction);
}

const update = async (id, transaction) => {

    return await repocitory.updateTransaction(id, transaction);
}

const findById = async (id) => {

    return await repocitory.findByID(id);
}

const removeById = async (id) => {

    return await repocitory.remove(id);
}

const getAmounts = async () => {

    let amounts = {};

    const arrTransactions = await repocitory.findTransactions();

    amounts = arrTransactions.length === 0 ? null : {
        "icome": 0,
        "expense": 0
    };

    arrTransactions.forEach(e => {
        amounts[e.type] += e.amount;
    });

    return amounts;
}

module.exports = {
    findAll,
    save,
    update,
    findById,
    removeById,
    getAmounts,
}