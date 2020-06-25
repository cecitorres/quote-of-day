import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = composeWithDevTools({
  realtime: true
  // options like actionSanitizer, stateSanitizer
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);