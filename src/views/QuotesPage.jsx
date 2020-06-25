import React, { useState, useCallback } from "react";
import { useFirestore } from "react-redux-firebase";
import { useDispatch } from "react-redux";
import { getQuotes } from "../api/quoteService";
import QuoteResult from "../components/QuoteResult";
import { addQuote } from "../actions";

const QuotesPage = () => {
  const [textFilter, setTextFilter] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const firestore = useFirestore();
  const dispatch = useDispatch();

  const saveFavQuote = useCallback(
    (quote) => {
      return dispatch(addQuote({ firestore }, quote));
    },
    [firestore]
  );

  const handleSearchInput = (e) => {
    const text = e.target.value;
    setTextFilter(text);
  };

  const searchQuotes = async () => {
    if (textFilter === "") return;
    setLoading(true);
    const response = await getQuotes(textFilter);
    setResults(response.data.quotes);
    setLoading(false);
  };

  const resultsHtml = results.map((quote) => (
    <QuoteResult quote={quote} key={quote.id} saveHandler={saveFavQuote} />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="input-group mb-3">
          <input
            value={textFilter}
            onChange={handleSearchInput}
            type="text"
            className="form-control"
            placeholder="quote text filter"
          />
          <div className="input-group-append">
            <button
              onClick={searchQuotes}
              className="btn btn-outline-primary"
              type="button"
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "SEARCH"
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="row">{resultsHtml}</div>
    </div>
  );
};

export default QuotesPage;
