import { combineReducers } from "redux";
import { firebaseStateReducer as firebase } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import quoteReducer from "./quoteReducer";

const rootReducer = combineReducers({
  quote: quoteReducer,
  firebase,
  firestore: firestoreReducer
});

export default rootReducer;
