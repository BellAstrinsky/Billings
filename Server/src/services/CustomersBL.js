const customersDAL = require('../models/CustomersDAL.js');
    
const createCustomer = (request, response) => {
    customersDAL.createNewCustomer(request,response);
}

const updateCustomer = (request, response) => {
    customersDAL.updateCustomerById(request,response);
}

const deleteCustomer = (request, response) => {
    customersDAL.deleteCustomerById(request,response);
}

const getCustomers = (request, response) => {
    customersDAL.getAllCustomers(request,response);
}

const getCustomerById = (request, response) => {
    customersDAL.getCustomerById(request,response);
}

module.exports = {
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomers,
    getCustomerById
};