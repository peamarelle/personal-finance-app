class Transaction {

    constructor(concept, amount, date, transactionType) {
        this.id = uuidv4();
        this.concept = concept;
        this.amount = amount;
        this.date = date;
        this.transactionType = transactionType;
    }
}

module.exports = Transaction;