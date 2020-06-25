import { QUOTE_ADDED, QUOTE_DELETED, ERROR } from "./actions";

const initState = {};

const quoteReducer = (state = initState, action) => {
  switch (action.type) {
    case QUOTE_ADDED:
      console.log(action.quote + " quote added succesfully");
      return state;
    case QUOTE_DELETED:
      console.log("Quote deleted succesfully");
      return state;
    case ERROR:
      console.log("quote error : " + action.err);
      return state;
    default:
      return state;
  }
};

export default quoteReducer;
