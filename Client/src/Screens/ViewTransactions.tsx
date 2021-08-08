import React from 'react'
import axios from 'axios'
import { Transaction } from '../Entities/Transaction';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

interface TransactionsState {
    transactions: Transaction[]
}

class ViewTransactions extends React.Component<{}, TransactionsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            transactions: []
        }

        this.getAllTransactions();
    }

    async getAllTransactions() {
        let res = await axios.get('http://localhost:8080/transactions');
        let transactions: Transaction[] = res.data.map((row: any) => {
            return(
                {
                    id: row.id,
                    totalPrice: row.total_price,
                    currency: row.currency,
                    creditCardType: row.cerdit_card_type,
                    creditCardNumber: row.cerdit_card_number
                }
            )
        })

        this.setState({ transactions: transactions });
    }

    render() {
        return (
            <div>
                {this.state.transactions.length != 0 && 
                <Table>
                    <TableHead>
                        <TableRow>
                            {Object.keys(this.state.transactions[0]).map(transaction => {
                                return (<TableCell>{transaction}</TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.transactions.map((transaction: Transaction) => (
                            <TableRow key={transaction.id}>
                                {Object.keys(this.state.transactions[0]).map((col: string) => (
                                    <TableCell>
                                        {(transaction as any)[col]}
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

export default ViewTransactions;