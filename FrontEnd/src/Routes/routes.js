import React from 'react';
import { browserHistory } from '../history';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import LoginView from '../components/Core/Account/Login/signIn_View';
import Register from '../components/Core/Account/Register/Register';
import newDashboard from '../components/Admin Panel/DashboardManagement/Dashboard';

//import addproducts from "../components/Admin Panel/Manage Products/addproducts";
//import AddCategory from "../components/Admin Panel/Manage Categories/addcategory";

const checkAuth = () => {
  const token = localStorage.getItem('key');
  if (token) {
    return true;
  } else {
    return false;
  }
};
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/SignIn' }} />
      )
    }
  />
);
class routes extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/SignIn' component={LoginView} />
            <Route exact path='/Register' component={Register} />
            <AuthRoute exact path='/Dashboard' component={newDashboard} />
            {/*  */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default routes;
