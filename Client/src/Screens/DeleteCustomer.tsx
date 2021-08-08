import React from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core';

interface CustomersState {
    customerId: number
}

class DeleteCustomer extends React.Component<{}, CustomersState> {

    constructor(props: any) {
        super(props);
        this.state = {
            customerId: -1
        }
    }

    async deleteCustomer() {
        await axios.delete('http://localhost:8080/customers/' + (this.state.customerId as number))
        .then(res => {
            this.setState({ customerId: -1 });
        })
        .catch(e => {            
            console.log(e)
        });
    }

    handleFieldChange(value: any): void {
        if (!isNaN(value)) {
            this.setState({ customerId: (value as number) });
        }
    }

    render() {
        return (
            <div>
                <TextField 
                    value={this.state.customerId}
                    label="Customer to Delete:"
                    onChange={(event) => this.handleFieldChange(event.target.value)}>
                </TextField>
                <Button onClick={() => this.deleteCustomer()}>Delete</Button>
                {/* TODO - add notification on deleted */}
            </div>
        )
    }
};

export default DeleteCustomer;