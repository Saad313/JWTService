import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './SignIn';

import { login } from '../../../../Server/LoginServer';
import { SignIn_Action } from '../../../../Constants/loginactions';
import { withRouter } from 'react-router-dom';

import { SignIn_Status } from '../../../../Constants/loginactions';

const mapStateToProps = (state) => {
  return {
    signIn_Status: state.Loginreducer.signIn_status,
    userid: state.Loginreducer.userid,
    counter: state.Loginreducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn: (username, password) => {
      dispatch(login(username, password));
    },
    handleBackClick: () => {
      dispatch({ type: SignIn_Action.NEW });
    },
  };
};

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.counter != this.props.counter) {
      //alert("Working");
    }
  }

  getScreen(status) {
    switch (status) {
      case SignIn_Status.NEW:
        return (
          <LoginForm
            handleSignIn={this.props.handleSignIn}
            serverResponse='New'
            handleBackClick={this.props.handleBackClick}
            handleClearReducer={this.handleClearReducer}
          />
        );
        break;
      case SignIn_Status.EXIST_ALREADY:
        return (
          <LoginForm
            handleSignIn={this.props.handleSignIn}
            serverResponse='EXIST_ALREADY'
            handleBackClick={this.props.handleBackClick}
          />
        );
        // case SignIn_Status.Employee:
        //   // this.props.history.push('/Permission');
        //   this.props.history.push("/Permission");

        break;
      case SignIn_Status.Admin:
        this.props.handleBackClick();
        this.props.history.push('/Dashboard');
        break;
      case SignIn_Status.FAILED:
        return (
          <LoginForm
            handleSignIn={this.props.handleSignIn}
            serverResponse='NotExist'
          />
        );
      default:
        break;
    }
  }

  render() {
    return <div>{this.getScreen(this.props.signIn_Status)}</div>;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginView)
);

// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
