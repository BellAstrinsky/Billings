const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const transactionsBL = require('./src/services/TransactionsBL.js')
const customersBL = require('./src/services/CustomersBL.js')

const app = express();
app.use(cors({
  origin: '*'
}));

const hostname = 'localhost';
const port = 8080;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) =>{
  res.send('Home');
});

app.post('/transactions', transactionsBL.createTransaction);
app.put('/transactions/:id', transactionsBL.updateTransaction);
app.delete('/transactions/:id', transactionsBL.deleteTransaction);
app.get('/transactions', transactionsBL.getTransactions);
app.get('/transactions/:id', transactionsBL.getTransactionById);

app.post('/customers/', customersBL.createCustomer);
app.put('/customers/:id', customersBL.updateCustomer);
app.delete('/customers/:id', customersBL.deleteCustomer);
app.get('/customers', customersBL.getCustomers);
app.get('/customers/:id', customersBL.getCustomerById);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});