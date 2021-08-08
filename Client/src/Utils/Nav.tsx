import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component<any, any> {

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to={'/NewTransaction'}>New Transaction</Link>
                    </li>
                    <li>
                        <Link to={'/NewCustomer'}>NewCustomer</Link>
                    </li>
                    <li>
                        <Link to={'/UpdateTransaction'}>Update Transaction</Link>
                    </li>
                    <li>
                        <Link to={'/UpdateCustomer'}>Update Customer</Link>
                    </li>
                    <li>
                        <Link to={'/DeleteTransaction'}>Delete Transaction</Link>
                    </li>
                    <li>
                        <Link to={'/DeleteCustomer'}>Delete Customer</Link>
                    </li>
                    <li>
                        <Link to={'/ViewTransactions'}>View Transactions</Link>
                    </li>
                    <li>
                        <Link to={'/ViewCustomers'}>View Customers</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;