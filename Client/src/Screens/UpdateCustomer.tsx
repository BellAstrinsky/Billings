import React from 'react'
import axios from 'axios'
import {Customer, customerHeader} from '../Entities/Customer'
import Form from '../Components/Form';
import { Button, TextField } from '@material-ui/core';

interface CustomersState {
    customer: Customer,
    error: {
        customerId: string,
    }
}

class UpdateCustomer extends React.Component<{}, CustomersState> {

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
            customer: this.initialCustomer,
            error: {
                customerId: ""
            }
        }
    }
    
    async getCustomerById() {
        await axios.get('http://localhost:8080/customers/' + this.state.customer.id)
        .then(res => {
            let customer: Customer = {
                id: res.data[0].id,
                firstName: res.data[0].first_name ,
                lastName: res.data[0].last_name ,
                mail: res.data[0].mail ,
                gender: res.data[0].gender,
                country: res.data[0].country,
                city: res.data[0].city,
                street: res.data[0].street,
                phone: res.data[0].phone 
            }
            this.setState({ customer: customer, error: { customerId: "" } });
        })
        .catch(e => {
            this.setState({ error: { customerId: "error in customer id" } });
            console.log(e)
        });
    }

    async updateCustomer() {
        await axios.put('http://localhost:8080/customers/' + this.state.customer.id, 
            this.state.customer)
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
                <TextField 
                    value={this.state.customer.id}
                    label="Customer to Update:" 
                    error={this.state.error.customerId !== ""}
                    helperText={this.state.error.customerId}
                    onChange={(event) => this.handleFieldChange('id', event.target.value)}>

                </TextField>
                <Button onClick={() => this.getCustomerById()}>Search</Button>
                <Form elements={Object.keys(customerHeader).map((key : string) => {
                    return ({
                        label: (customerHeader as any)[key],
                        value: (this.state.customer as any)[key],
                        onValueChange: (val: string) => this.handleFieldChange(key, val)
                    })})
                }>
                </Form>
                <Button onClick={() => this.updateCustomer()}>Update</Button>
                {/* TODO - add notification on updated */}
            </div>
        )
    }
};

export default UpdateCustomer;