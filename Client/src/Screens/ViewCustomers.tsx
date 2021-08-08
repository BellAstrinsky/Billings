import React from 'react'
import axios from 'axios'
import { Customer } from '../Entities/Customer';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

interface CustomersState {
    customers: Customer[]
}

class ViewCustomers extends React.Component<{}, CustomersState> {

    constructor(props: any) {
        super(props);
        this.state = {
            customers: []
        }

        this.getAllCustomers();
    }

    async getAllCustomers() {
        let res = await axios.get('http://localhost:8080/customers');
        let customers: Customer[] = res.data.map((row: any) => {
            return(
                {
                    id: row.id,
                    firstName: row.first_name,
                    lastName: row.last_name,
                    mail: row.mail,
                    gender: row.gender,
                    country: row.country,
                    city: row.city,
                    street: row.street,
                    phone: row.phone 
                }
            )
        })

        this.setState({ customers: customers });
    }

    render() {
        return (
            <div>
                {this.state.customers.length != 0 && 
                <Table>
                    <TableHead>
                        <TableRow>
                            {Object.keys(this.state.customers[0]).map(customer => {
                                return (<TableCell>{customer}</TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.customers.map((customer: Customer) => (
                            <TableRow key={customer.id}>
                                {Object.keys(this.state.customers[0]).map((col: string) => (
                                    <TableCell>
                                        {(customer as any)[col]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                }
            </div>
        )
    }
};

export default ViewCustomers;