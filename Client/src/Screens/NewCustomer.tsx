import React from 'react'
import axios from 'axios'
import {Customer, customerHeader} from '../Entities/Customer'
import Form from '../Components/Form';
import { Button } from '@material-ui/core';

interface CustomersState {
    customer: Customer
}

class NewCustomer extends React.Component<{}, CustomersState> {

    initialCustomer: Customer = {
        id: 0,
        firstName: '',
        lastName: '',
        mail: '', 
        gender: '', 
        country: '', 
        city: '', 
        street: '', 
        phone: ''
    };

    constructor(props: any) {
        super(props);
        this.state = {
            customer: this.initialCustomer
        }
    }

    async createNewCustomer() {
        await axios.post('http://localhost:8080/customers', this.state.customer)
        .then(res => {
            this.setState({ customer: this.initialCustomer });
        })
        .catch(e => {
            console.log(e)
        });
    }

    handleFieldChange(key: string, value: string | number): void {
        let customer: Customer = {...this.state.customer};
        (customer as any)[key] = value;
        this.setState({ customer: customer });
    }

    render() {
        return (
            <div>
                <Form elements={Object.keys(customerHeader).map((key : string) => {
                    return ({
                        label: (customerHeader as any)[key],
                        value: (this.state.customer as any)[key],
                        onValueChange: (val: string) => this.handleFieldChange(key, val)
                    })})
                }>
                </Form>
                <Button onClick={() => this.createNewCustomer()}>Create</Button>
            </div>
        )
    }
};

export default NewCustomer;