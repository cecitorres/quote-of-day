import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { addQuote } from "../actions";

const App = () => {
  const firestore = useFirestore();
  useFirestoreConnect("quotes");
  const quotes = useSelector((state) => state.firestore.ordered.quotes);
  return (
    <>
      {quotes &&
        Object.values(quotes).map((quote) => (
          <div key={quote.id}>
            <p className="mb-0">{quote.body}</p>
            <div className="align-items-end text-center text-wrap">
              <span>-- {quote.author}</span>
              <button
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

export default App;
