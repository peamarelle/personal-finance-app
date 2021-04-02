const Transaction = require('../models/transaction')

class TransactionRepository {

    constructor() {

    }

    async findTransactions() {
        return await Transaction.findAll();
    }

    async saveTransaction(transaction) {
        return await Transaction.create(transaction);
    }

    async updateTransaction(id, transaction) {
        const transact = await Transaction.findByPk(id);

        transact.amount = transaction.amount;
        transact.concept = transaction.concept;
        transact.date = transaction.date;

        await transact.save();

        return transact;
    }
    
}

module.exports = TransactionRepository;