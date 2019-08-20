import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import FormLogin from './component/FormLogin';
import Menu from './component/Menu'
import Tiket from './component/ticket/tiket';
import Admin from './component/admin/Admin';
import Agen from './component/agent/Agen'
import Pic from './component/pic/Pic';
import AddTiket from './component/ticket/AddTiket';
import AddAgent from './component/agent/AddAgent'
import { AuthProvider } from './component/Auth';
import Customer from './component/customer/Customer';
import AddCustomer from './component/customer/AddCustomer';
import Company from './component/company/company';
import AddCompany from './component/company/AddCompany';



export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
            <div>
              <Menu />
              <Route exact path="/login" component={FormLogin} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/agent" component={Agen} />
              <Route exact path="/mapping" component={Pic} />
              <Route exact path="/ticket" component={Tiket} />
              <Route exact path="/addTicket" component={AddTiket} />
              <Route exact path="/addAgent" component={AddAgent} />
              <Route exact path="/company" component={Company} />
              <Route exact path="/addCompany" component={AddCompany} />
              <Route exact path="/customer" component={Customer} />
              <Route exact path="/addCustomer" component={AddCustomer} />
            </div>
        </Router>

      </AuthProvider>
    )
  }
}
