import { NEW_POSTS } from '../Constants/RegisterConstants';
import {
  ALREADY_EXISTS,
  REGISTER_INITIAL_STATE,
} from '../Constants/RegisterConstants';

const initialState = {
  items: [],
  item: {},

  passwordexists: false,
  userexists: false,

  userRegistered: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload,
        userRegistered: true,
        usernameexists: false,
      };
    case ALREADY_EXISTS:
      //alert(action.email_exists+"reducer");
      return {
        ...state,
        item: action.payload,
        userexists: action.username_exists,
        userRegistered: false,
      };
    case REGISTER_INITIAL_STATE:
      return {
        ...state,
        items: [],
        item: {},
        userexists: false,
        userRegistered: false,
      };
    default:
      return state;
  }
}
