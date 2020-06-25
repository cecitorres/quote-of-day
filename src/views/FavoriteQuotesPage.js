import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { deleteQuote } from "../actions";

const FavoriteQuotesPage = () => {
  const firestore = useFirestore();
  const dispatch = useDispatch();

  useFirestoreConnect("quotes");
  const quotes = useSelector((state) => state.firestore.data.quotes);
  // console.log(Object.entries(quotes));

  const deleteFavQuote = useCallback(
		idQuote => {
			return dispatch(deleteQuote({ firestore }, idQuote))
		},
    [firestore]
	);
  return (
    <>
      {Object.entries(quotes)} 
      {quotes &&
        Object.values(quotes).map((quote) => (
          <div key={quote.id}>
            <p className="mb-0">{quote.body}</p>
            <div className="align-items-end text-center text-wrap">
              <span>-- {quote.author}</span>
              <button
                onClick={() => deleteFavQuote(quote.id)}
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
