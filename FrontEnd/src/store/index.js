import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../Reducer/index";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware)
  // compose(
  //   applyMiddleware(thunk)
  //   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
export default store;
