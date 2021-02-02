import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
// import Footer from '../../Layout/Footer/Footer';
// import Bar from '../../Layout/Navbar/NavBar';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(12),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#0781bd',
    color: '#ffffff',
  },
  success: {
    backgroundColor: green[600],
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
  numberInput: {
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
}));

const RegisterView = (props) => {
  const classes = useStyles();
  const {
    UserName,
    password,
    confirmPassword,
    onhandleChange,
    onSubmit,
    UserNameError,
    passwordError,
    confirmPasswordError,
  } = props;
  return (
    <div>
      <div>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete='fname'
                    name='UserName'
                    variant='outlined'
                    fullWidth
                    id='UserName'
                    label='User Name'
                    autoFocus
                    value={UserName}
                    error={UserNameError}
                    helperText={UserNameError}
                    onChange={onhandleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    value={password}
                    error={passwordError}
                    helperText={passwordError}
                    onChange={onhandleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    fullWidth
                    id='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    autoComplete='confirm-password'
                    value={confirmPassword}
                    error={confirmPasswordError}
                    helperText={confirmPasswordError}
                    onChange={onhandleChange}
                  />
                </Grid>
              </Grid>
              <div className={classes.wrapper}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  className={classes.submit}
                  style={{ background: '#0781bd' }}
                  disabled={props.loading}
                  //onClick={() => this.props.history.push("/Manage")}
                >
                  Sign Up
                </Button>
                {props.loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
              <Grid container justify='flex-end'>
                <Grid item>
                  <NavLink
                    to='/SignIn'
                    style={{ color: 'White', textDecoration: 'none' }}
                  >
                    <Link href='#' variant='body2'>
                      Already have an account? Sign in
                    </Link>
                  </NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
      {/* <Footer /> */}

      {/* Notification SnackBar */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={props.snackBarOpen}
        autoHideDuration={4000}
        onClose={props.closeSnackBar}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      >
        <SnackbarContent
          className={classes.success}
          aria-describedby='client-snackbar'
          message={<span id='client-snackbar'>Succesfully Registered</span>}
        />
      </Snackbar>
    </div>
  );
};

export default RegisterView;
