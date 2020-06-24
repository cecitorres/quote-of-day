import React, { useState } from "react";
import { getQuotes } from "../api/quoteService";
import QuoteResult from "../components/QuoteResult.jsx";

const QuotesPage = () => {
  const [textFilter, setTextFilter] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <QuoteResult quote={quote} key={quote.id} />
  ));

  return (
    <>
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
        {resultsHtml}
      </div>
    </>
  );
};

export default QuotesPage;
