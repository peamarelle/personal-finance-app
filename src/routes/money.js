const {Router} = require('express');
const {
    getAllTransactions, 
    createTransaction, 
    updateTransaction, 
    getTransactionById, 
    deleteTransaction
} = require('../controllers/money');

const router = Router();

router.get('/', getAllTransactions)

router.post('/', createTransaction)

router.put('/:id', updateTransaction)

router.get('/:id', getTransactionById)

router.delete('/:id', deleteTransaction)

module.exports = router;