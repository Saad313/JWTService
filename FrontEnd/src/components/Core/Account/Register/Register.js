import React, { Component } from 'react';
import RegisterView from './Register.view';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createPostsAdmin,
  clearRegisterReducer,
  setEmailExistsFalse,
} from '../../../../Server/RegisterActions';
const mapStateToProps = (state) => {
  // alert("match");
  return {
    user_status: state.RegisterReducer.userexists,
    // usertype: state.RegisterReducer.usertype,
    //  email_status: state.RegisterReducer.emailexists,
    //   storeName_status: state.RegisterReducer.storeexist,
    userRegistered: state.RegisterReducer.userRegistered,
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',

      password: '',
      confirmPassword: '',

      ErrorUsername: '',

      passwordError: '',
      UserNameError: '',
      confirmPasswordError: '',

      snackBarOpen: false,
      loading: false,
    };

    this.onhandleChange = this.onhandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.openSnackBar = this.openSnackBar.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user_status) {
      this.setState({ usernamelength: true });
      this.setState({ ErrorUsername: 'This Username already Exists' });
    }

    if (nextProps.userRegistered === true) {
      this.openSnackBar();
      this.setState({ loading: false });
      this.props.clearRegisterReducer();
    }
  }

  openSnackBar() {
    this.setState({ snackBarOpen: true });
  }

  closeSnackBar() {
    this.setState({ snackBarOpen: false });
  }

  validate = () => {
    let isError = false;
    const errors = {
      UserNameError: '',

      passwordError: '',
      confirmPasswordError: '',
    };

    if (!this.state.UserName) {
      isError = true;

      errors.UserNameError = 'Name must not be null';
    } else if (!this.state.UserName.match(/^[a-zA-Z]+$/)) {
      isError = true;

      errors.UserNameError = 'Name must not include numbers and Alphanumeric';
    } else if (this.state.UserName.length < 3) {
      isError = true;

      errors.UserNameError = 'Name must not small then 3 characters';
    }

    if (!this.state.password) {
      isError = true;
      errors.passwordError = 'Password must not be null ';
    } else if (this.state.password.length < 5) {
      isError = true;
      errors.passwordError = 'Password must not be  small then 5 charecters';
    }

    if (!this.state.confirmPassword) {
      isError = true;
      errors.confirmPasswordError = 'Password must not be null ';
    } else if (this.state.password != this.state.confirmPassword) {
      isError = true;
      errors.confirmPasswordError = 'Password Not Match ';
    }

    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };
  onhandleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const err = this.validate();

    if (!err) {
      const User = {
        UserName: this.state.UserName,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      };

      this.props.createPostsAdmin(User);
      this.setState({ loading: true });
      this.handleClear();
    }
  }

  handleClear() {
    this.setState({
      UserName: '',

      password: '',
      confirmPassword: '',
      UserNameError: '',

      confirmPasswordError: '',
      passwordError: '',
    });
  }

  render() {
    return (
      <div>
        <RegisterView
          UserName={this.state.UserName}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          onhandleChange={this.onhandleChange}
          onSubmit={this.onSubmit}
          ErrorUsername={this.state.ErrorUsername}
          usernamelength={this.state.usernamelength}
          UserNameError={this.state.UserNameError}
          passwordError={this.state.passwordError}
          confirmPasswordError={this.state.confirmPasswordError}
          snackBarOpen={this.state.snackBarOpen}
          openSnackBar={this.openSnackBar}
          closeSnackBar={this.closeSnackBar}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
SignUp.protoTypes = {
  createPost: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, {
  createPostsAdmin,
  clearRegisterReducer,
})(SignUp);
