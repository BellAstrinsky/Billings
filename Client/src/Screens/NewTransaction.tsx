import React from 'react'
import axios from 'axios'
import {Transaction, transactionHeader} from '../Entities/Transaction'
import Form from '../Components/Form';
import { Button } from '@material-ui/core';

interface TransactionsState {
    transaction: Transaction
}

class NewTransaction extends React.Component<{}, TransactionsState> {

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
            transaction: this.initialTransaction
        }
    }

    async createNewTransaction() {
        await axios.post('http://localhost:8080/transactions', this.state.transaction)
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
                <Form elements={Object.keys(transactionHeader).map((key : string) => {
                    // TODO remove id from list
                    return ({
                        label: (transactionHeader as any)[key],
                        value: (this.state.transaction as any)[key],
                        onValueChange: (val: string) => this.handleFieldChange(key, val)
                    })})
                }>
                </Form>
                <Button onClick={() => this.createNewTransaction()}>Create</Button>
            </div>
        )
    }
};

export default NewTransaction;