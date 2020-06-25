import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { deleteQuote } from "../actions";

const FavoriteQuotesPage = () => {
  const firestore = useFirestore();
  const dispatch = useDispatch();

  useFirestoreConnect("quotes");
  const quotes = useSelector((state) => state.firestore.data.quotes);

  const deleteFavQuote = useCallback(
  	idQuote => {
  		return dispatch(deleteQuote({ firestore }, idQuote))
  	},
    [firestore]
  );
  return (
    <>
      {quotes &&
        Object.entries(quotes).map((quote) => (
          <div key={quote[0]}>
            <p className="mb-0">{quote[1].body}</p>
            <div className="align-items-end text-center text-wrap">
              <span>-- {quote[1].author}</span>
              <button
                onClick={() => deleteFavQuote(quote[0])}
                type="button"
                className="btn btn-warning btn-sm ml-3 rounded-circle float-right"
              >
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default FavoriteQuotesPage;
