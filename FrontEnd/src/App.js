import React from 'react';

import Nabar from './components/NavBAr/bar';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import './App.css';
import CE from './components/ForgetPassword/ConfirmFromEmail';
import FP from './components/ForgetPassword/ForgetPassword';
import ConfirmNPass from './components/ForgetPassword/CreateNewPassword';
import Footer from './components/Footer/newFooter';
import managesales from './components/MANAGE/ManageSales';
import manageinvent from './components/MANAGE/ManageInventory';
import drwr from './components/addUsers/AddUsers';
import dropdown from './components/addUsers/dropdown';

import UserE from './components/addUsers/EditUser';
import Editt from './components/addUsers/editusers';

function App() {
  return (
    <div className="App">
      
      <Nabar/>
      
      <Router>
        <Switch>
          <Route exact path= "/EditUsers" component={UserE} />
          <Route exact path= "/EditUser" component={Editt} />
          <Route exact path= "/dropdown" component={dropdown} />
          <Route exact path= "/drawer" component={drwr} />
          <Route exact path= "/ForgetPassword" component={FP} />
          <Route exact path= "/managesales" component={managesales} />
          <Route exact path= "/manageInventory" component={manageinvent} />
          <Route exact path= "/ForgetPassword/ConfirmFromEmail" component={CE} />
          <Route exact path= "/ForgetPassword/ConfirmFromEmail/CreateNewPassword" component={ConfirmNPass} />
          
        </Switch>
      </Router>

      <Footer/>
      
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(App));
