import React from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core';

interface TransactionsState {
    transactionId: number
}

class DeleteTransaction extends React.Component<{}, TransactionsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            transactionId: -1
        }
    }

    async deleteTransaction() {
        await axios.delete('http://localhost:8080/transactions/' + (this.state.transactionId as number))
        .then(res => {
            this.setState({ transactionId: -1 });
        })
        .catch(e => {            
            console.log(e)
        });
    }

    handleFieldChange(value: any): void {
        if (!isNaN(value)) {
            this.setState({ transactionId: (value as number) });
        }
    }

    render() {
        return (
            <div>
                <TextField 
                    value={this.state.transactionId}
                    label="Transaction to Delete:"
                    onChange={(event) => this.handleFieldChange(event.target.value)}>
                </TextField>
                <Button onClick={() => this.deleteTransaction()}>Delete</Button>
                {/* TODO - add notification on deleted */}
            </div>
        )
    }
};

export default DeleteTransaction;



