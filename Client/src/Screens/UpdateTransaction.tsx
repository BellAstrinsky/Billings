import React from 'react'
import axios from 'axios'
import {Transaction, transactionHeader} from '../Entities/Transaction'
import Form from '../Components/Form';
import { Button, TextField } from '@material-ui/core';

interface TransactionsState {
    transaction: Transaction,
    error: {
        transactionId: string,
    }
}

class UpdateTransaction extends React.Component<{}, TransactionsState> {

    initialTransaction: Transaction = {
        id: 0,
        totalPrice: '',
        currency: '',
        creditCardType: '',
        creditCardNumber: ''
    };

    constructor(props: any) {
        super(props);
        this.state = {
            transaction: this.initialTransaction,
            error: {
                transactionId: ""
            }
        }
    }
    
    async getTransactionById() {
        await axios.get('http://localhost:8080/transactions/' + (this.state.transaction.id as number))
        .then(res => {
            let trans: Transaction = {
                id: res.data[0].id,
                totalPrice: res.data[0].total_price,
                currency: res.data[0].currency,
                creditCardType: res.data[0].cerdit_card_type,
                creditCardNumber: res.data[0].cerdit_card_number
            }
            this.setState({ transaction: trans, error: { transactionId: "" } });
        })
        .catch(e => {
            this.setState({ error: { transactionId: "error in transaction id" } });
            console.log(e)
        });
    }

    async updateTransaction() {
        await axios.put('http://localhost:8080/transactions/' + (this.state.transaction.id as number), 
            this.state.transaction)
        .then(res => {
            this.setState({ transaction: this.initialTransaction });
        })
        .catch(e => {            
            console.log(e)
        });
    }

    handleFieldChange(key: string, value: string | number): void {
        let transaction: Transaction = {...this.state.transaction};
        (transaction as any)[key] = value;
        this.setState({ transaction: transaction });
    }

    render() {
        return (
            <div>
                <TextField 
                    value={this.state.transaction.id}
                    label="Transaction to Update:" 
                    error={this.state.error.transactionId !== ""}
                    helperText={this.state.error.transactionId}
                    onChange={(event) => this.handleFieldChange('id', event.target.value)}>

                </TextField>
                <Button onClick={() => this.getTransactionById()}>Search</Button>
                <Form elements={Object.keys(transactionHeader).map((key : string) => {
                    return ({
                        label: (transactionHeader as any)[key],
                        value: (this.state.transaction as any)[key],
                        onValueChange: (val: string) => this.handleFieldChange(key, val)
                    })})
                }>
                </Form>
                <Button onClick={() => this.updateTransaction()}>Update</Button>
                {/* TODO - add notification on updated */}
            </div>
        )
    }
};

export default UpdateTransaction;