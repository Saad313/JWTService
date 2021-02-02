import { SignIn_Action } from '../Constants/loginactions';
import { BaseUrl, logOutUser } from '../_helpers/apiBaseUrl';
const jwt = require('jsonwebtoken');

export const login = (username, password) => (dispatch) => {
  var user = { UserName: username, Password: password };
  //alert(password);
  const postRequest = fetch(BaseUrl + '/api/Login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    mode: 'cors',
    body: JSON.stringify(user),
  }).then((response) => {
    console.log('********' + response.status);
    response.json().then((data) => {
      console.log('data:......' + data.loginStatus);
      if (data.loginStatus === 'Authorized') {
        localStorage.setItem('key', data.token1);
        //localStorage.setItem('type', data.type);

        localStorage.setItem('UserName', data.username);
        localStorage.setItem('Password', data.password);

        return dispatch({
          type: SignIn_Action.AUTHORIZED_employee,
          payload: data.username,
          list: data.permission,
          type1: data.type,
        });
        // } else {
        //   // alert(data.type);
        //   localStorage.setItem('Companyid', data.company_id);
        //   localStorage.setItem('Userid', data.userid);
        //   return dispatch({
        //     type: SignIn_Action.AUTHORIZED_Admin,
        //     type1: data.type,
        //   });
        // }
      } else if (data.loginStatus === 'unAuthorized') {
        return dispatch({ type: SignIn_Action.NOTAUTHORIZED });
      }
    });
  });
};
