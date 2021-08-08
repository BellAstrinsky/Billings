const transactionsDAL = require('../models/TransactionsDAL.js');
    
const createTransaction = (request, response) => {
    transactionsDAL.createNewTransaction(request,response);
}

const updateTransaction = (request, response) => {
    transactionsDAL.updateTransactionById(request,response);
}

const deleteTransaction = (request, response) => {
    transactionsDAL.deleteTransactionById(request,response);
}

const getTransactions = (request, response) => {
    transactionsDAL.getAllTransactions(request,response);
}

const getTransactionById = (request, response) => {
    transactionsDAL.getTransactionById(request,response);
}

module.exports = {
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getTransactions,
    getTransactionById
};