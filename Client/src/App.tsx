import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ViewCustomers from './Screens/ViewCustomers'
import NewCustomer from './Screens/NewCustomer'
import UpdateCustomer from './Screens/UpdateCustomer'
import DeleteCustomer from './Screens/DeleteCustomer'
import ViewTransactions from './Screens/ViewTransactions'
import NewTransaction from './Screens/NewTransaction'
import UpdateTransaction from './Screens/UpdateTransaction'
import DeleteTransaction from './Screens/DeleteTransaction'
import Nav from './Utils/Nav'

function App() {
  return (
    <div >
      <Router>
        <Nav/>
        <Switch>
          <Route path="/newTransaction" component={NewTransaction} />          
          <Route path="/updateTransaction" component={UpdateTransaction} />          
          <Route path="/deleteTransaction" component={DeleteTransaction} />          
          <Route path="/viewTransactions" component={ViewTransactions} />          
          <Route path="/newCustomer" component={NewCustomer} />
          <Route path="/updateCustomer" component={UpdateCustomer} />
          <Route path="/deleteCustomer" component={DeleteCustomer} />
          <Route path="/viewCustomers" component={ViewCustomers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;