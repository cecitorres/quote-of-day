export const QUOTE_ADDED = "Added";
export const ERROR = "Error";

export const addQuote = ({ firestore }, quote) => {
  return (dispatch, getState) => {
    firestore
      .collection("quotes")
      .add(quote)
      .then(() => {
        console.log("Then it was done");
        dispatch({ type: QUOTE_ADDED, quote });
      })
      .catch(err => {
        dispatch({ type: ERROR, err });
      });
  };
};
