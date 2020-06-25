export const QUOTE_ADDED = 'Added';
export const QUOTE_DELETED = 'Deleted'
export const ERROR = 'Error';

export const addQuote = ({ firestore }, quote) => {
  return (dispatch, getState) => {
    firestore
      .collection('quotes')
      .add(quote)
      .then(() => {
        dispatch({ type: QUOTE_ADDED, quote });
      })
      .catch(err => {
        dispatch({ type: ERROR, err });
      });
  };
};

export const deleteQuote = ({ firestore }, idQuote) => {
  return (dispatch, getState) => {
    firestore
      .collection('quotes')
      .doc(idQuote)
      .delete()
      .then(() => {
        dispatch({ type: QUOTE_DELETED });
      });
  }
};