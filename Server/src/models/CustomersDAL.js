const db = require('./DbConn.js');

const createNewCustomer = (request, response) => {

    const { id, firstName, lastName, mail, gender, country, city, street, phone } = request.body;

    db.query(
        'INSERT INTO customers (id, first_name, last_name, mail, gender, country, city, street, phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
        [ id, firstName, lastName, mail, gender, country, city, street, phone ],
        (error, results) => {
            if (error) {
                throw error
            }
    
            response.status(200).json(results.rows)
        }
    );
}

const updateCustomerById = (request, response) => {

    const id = request.params.id;
    const { firstName, lastName, mail, gender, country, city, street, phone } = request.body;

    db.query(
        'UPDATE customers SET first_name = $1, last_name = $2, mail = $3, gender = $4, country = $5, city = $6, street = $7, phone = $8 WHERE id = $9',
        [ firstName, lastName, mail, gender, country, city, street, phone, id],
        (error, results) => {
            if (error) {
                throw error
            }
    
            response.status(200).json(results.rows)
        }
    );
}

const deleteCustomerById = (request, response) => {
    const id = request.params.id;

    db.query(
        'DELETE FROM customers WHERE id = $1', 
        [id],
        (error, results) => {
            if (error) {
                throw error
            }
    
            response.status(200).json(results.rows)
        }
    );
}

const getAllCustomers = (request, response) => {
    db.query(
        'SELECT * FROM customers', 
        [],
        (error, results) => {
            if (error) {
                throw error
            }
    
            response.status(200).json(results.rows)
        }
    );
}

const getCustomerById = (request, response) => {
    const id = request.params.id;

    db.query(
        'SELECT * FROM customers WHERE id = $1', 
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
    createNewCustomer,
    updateCustomerById,
    deleteCustomerById,
    getAllCustomers,
    getCustomerById
};