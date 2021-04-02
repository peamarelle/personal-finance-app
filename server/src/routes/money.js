const {Router} = require('express');
const {
    findTransactions, 
    createTransaction, 
    updateTransaction, 
    getTransactionById, 
    deleteTransaction,
    getBalance,
} = require('../controllers/money');

const router = Router();

router.get('/', findTransactions)

router.get('/balance/', getBalance)

router.post('/', createTransaction)

router.put('/:id', updateTransaction)

router.delete('/:id', deleteTransaction)

router.get('/:id', getTransactionById)

module.exports = router;