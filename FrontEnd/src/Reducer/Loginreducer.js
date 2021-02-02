import { SignIn_Action, SignIn_Status } from '../Constants/loginactions';
const initialState = {
  signIn_status: SignIn_Status.NEW,
  username: '',
  permission: [],
  type: '',
  counter: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SignIn_Action.NEW:
      return { ...state, signIn_status: SignIn_Status.NEW };
    case SignIn_Action.EXIST_ALREADY_ACTION:
      return { ...state, signIn_status: 'Clearance' };
    case SignIn_Action.AUTHORIZED_employee:
      // console.log('reducer success employee');
      return {
        ...state,
        signIn_status: SignIn_Status.Employee,
        username: action.payload,
        permission: action.list,
        type: action.type1,
      };
    case SignIn_Action.NOTAUTHORIZED:
      return {
        ...state,
        counter: state.counter + 1,
        signIn_status: SignIn_Status.FAILED,
      };
    case SignIn_Action.SUCCESS:
      return { ...state, signIn_status: SignIn_Status.SUCCESS };
    default:
      return { ...state, signIn_status: SignIn_Status.NEW };
  }
}
