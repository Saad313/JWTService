import Loginreducer from './Loginreducer';
import RegisterReducer from './RegisterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  Loginreducer,

  RegisterReducer,
});

export default rootReducer;
