import { NEW_POSTS } from '../Constants/RegisterConstants';
import {
  ALREADY_EXISTS,
  REGISTER_INITIAL_STATE,
  EMAIL_EXISTS_FALSE,
} from '../Constants/RegisterConstants';
import { BaseUrl, logOutUser } from '../_helpers/apiBaseUrl';

export const createPostsAdmin = (User) => (dispatch) => {
  // alert("abc"+Roles);
  var StaffUser = {
    username: User.username,
    password: User.password,
  };
  console.log('action Called');
  fetch(BaseUrl + '/api/Register', {
    method: 'POST',
    body: JSON.stringify(StaffUser),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  }).then((response) => {
    response.json().then((data) => {
      console.log('data:......' + data.Exists);
      if (response.status === 200) {
        // alert("abc");
        //alert(data.exists+"hsshsh");
        if (data.exists === true) {
          //  alert(data.exists+"hsshsh");

          dispatch({
            type: ALREADY_EXISTS,
            username_exists: data.usernameexists,
            password_exists: data.passwordexists,
          });
        } else {
          dispatch({
            type: NEW_POSTS,
          });
        }
      }
    });
  });
};

// export const createPostsAdmin = User => dispatch => {
//   var StaffUser = {
//     username: User.UserName,
//     email: User.email,
//     storename: User.storeName,
//     contactno: User.ContactNo,
//     password: User.password,
//     Usertype: "Admin"
//   };
//   console.log("action Called");
//   fetch(BaseUrl + "/api/Register", {
//     method: "POST",
//     body: JSON.stringify(StaffUser),
//     headers: {
//       "Content-Type": "application/json"
//     },
//     mode: "cors"
//   }).then(response => {
//     response.json().then(data => {
//       console.log("data:......" + data);
//       if (response.status == 200) {
//         if (data.exists) {
//           console.log(data.exists + "jjjj");
//           dispatch({
//             type: ALREADY_EXISTS,
//             Store_exists: data.storenameexists,
//             email_exists: data.emailexists,
//             username_exists: data.usernameexists,
//             usertype: "Admin"
//           });
//         } else {
//           dispatch({
//             type: NEW_POSTS
//           });
//         }
//       }
//     });
//   });
// };

export const clearRegisterReducer = () => (dispatch) => {
  dispatch({ type: REGISTER_INITIAL_STATE });
};

// export const setEmailExistsFalse = () => (dispatch) => {
//   dispatch({ type: EMAIL_EXISTS_FALSE });
// };
