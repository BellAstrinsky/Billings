const db = require('./DbConn.js');

const createNewTransaction = (request, response) => {

    const { totalPrice, currency, creditCardType, creditCardNumber } = request.body;

    db.query(
        'INSERT INTO transactions (total_price, currency, cerdit_card_type, cerdit_card_number) VALUES ($1, $2, $3, $4)',
        [ totalPrice, currency, creditCardType, creditCardNumber ],
        (error, results) => {
            if (error) {
                throw error
            }
    
            console.log('server new transactions success: ', results.rows)
            response.status(200).json(results.rows)
        }
    );
}

const updateTransactionById = (request, response) => {

    const id = parseInt(request.params.id);
    const { totalPrice, currency, creditCardType, creditCardNumber } = request.body;

    db.query(
        'UPDATE transactions SET total_price = $1, currency = $2, cerdit_card_type = $3, cerdit_card_number = $4 WHERE id = $5',
        [ totalPrice, currency, creditCardType, creditCardNumber, id],
        (error, results) => {
            if (error) {
                throw error
            }
    
            console.log('server update transactions success: ', results.rows)
            response.status(200).json(results.rows)
        }
    );
}

const deleteTransactionById = (request, response) => {
    const id = parseInt(request.params.id);

    db.query(
        'DELETE FROM transactions WHERE id = $1', 
        [id],
        (error, results) => {
            if (error) {
                throw error
            }
    
            console.log('server delete transactions success: ', results.rows)
            response.status(200).json(results.rows)
        }
    );
}

const getAllTransactions = (request, response) => {
    db.query(
        'SELECT * FROM transactions', 
        [],
        (error, results) => {
            if (error) {
                throw error
            }
    
            response.status(200).json(results.rows)
        }
    );
}

const getTransactionById = (request, response) => {
    const id = parseInt(request.params.id);

    db.query(
        'SELECT * FROM transactions WHERE id=$1', 
        [id],
        (error, results) => {
            if (error) {
                throw error
            }
    
            response.status(200).json(results.rows)
        }
    );
}

module.exports = {
    createNewTransaction,
    updateTransactionById,
    deleteTransactionById,
    getAllTransactions,
    getTransactionById
};