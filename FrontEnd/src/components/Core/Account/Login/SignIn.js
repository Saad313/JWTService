import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import Footer from "../../Layout/Footer/Footer";
//import NavBar from "../../Layout/Navbar/NavBar";

import CircularProgress from '@material-ui/core/CircularProgress';
var validate = require('validate.js');

const styles = (theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: '#00695c',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -9,
    marginLeft: -12,
  },
});
const newStyles = {
  background: '#0781bd',
  color: '#ffffff',
  borderColor: '#007bff',
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userNameError: '',
      passwordError: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //alert(validate.isString(this.state.username)+"jkwjd");
    if (!this.validate()) {
      this.props.handleSignIn(this.state.username, this.state.password);
      this.setState({ loading: true });
    }
  }

  componentDidMount() {
    if (localStorage.getItem('key')) {
      this.props.history.push('/Dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.serverResponse == 'NotExist') {
      this.setState({ loading: false });
    }
  }

  validate() {
    var isError = false;
    const Errors = {
      userNameError: '',
      passwordError: '',
    };

    if (!this.state.password) {
      isError = true;
      Errors.passwordError = "Password can't be null";
    }
    this.setState({ ...this.state, ...Errors });
    return isError;
  }

  render() {
    const { classes } = this.props;
    // var errorMessage = (this.props.status != undefined && this.props.status=="AUTHORIZED FAILED") ? "Username or password is incorrect" :""

    return (
      <div>
        {/* <NavBar /> */}
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            {this.props.serverResponse === 'NotExist' ? (
              <Typography component='h6' variant='h5' style={{ color: 'red' }}>
                Invalid username or password
              </Typography>
            ) : null}
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='username'
                label='username'
                name='username'
                type='text'
                //autoComplete='email'
                onChange={this.handleChange}
                value={this.state.username}
                error={this.state.userNameError}
                helperText={this.state.userNameError}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={this.handleChange}
                value={this.state.password}
                error={this.state.passwordError}
                helperText={this.state.passwordError}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <div className={classes.wrapper}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  style={newStyles}
                  disabled={this.state.loading}
                >
                  Sign In
                </Button>
                {this.state.loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
              <Grid container>
                <Grid item xs>
                  {/* <NavLink
                    to="/ForgetPassword"
                    style={{ color: "White", textDecoration: "none" }}
                  >
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </NavLink> */}
                </Grid>
                <Grid item>
                  <NavLink
                    to='/Register'
                    style={{ color: 'White', textDecoration: 'none' }}
                  >
                    <Link href='#' variant='body2'>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        {/* <Footer /> */}
      </div>
    );
  }
}
LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(withRouter(LoginForm)));

/*
<form>
<div style={{padding:'6%',width:'40%'}} >
<h1>Login Here</h1>
    <p style={{color: 'red'}}>{errorMessage}</p>
   <input   id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username} />
   <br /><br />
   <input   id="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password} />
   <br /><br />
   <button onClick={this.handleSubmit} type="submit">Login</button>
</div>
</form>
*/
