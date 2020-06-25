import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "./firebase";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { store } from "./store";

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("app")
);
