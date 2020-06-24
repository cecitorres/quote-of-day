import React from "react";

const QuoteResult = ({ quote }) => (
  <div className="alert alert-dark my-3">
    <p className="mb-0">{quote.body}</p>
    <div className="align-items-end text-center text-wrap">
      <span>-- {quote.author}</span>
      <button
        type="button"
        className="btn btn-secondary btn-sm ml-3 rounded-circle float-right"
      >
        <i className="material-icons">favorite</i>
      </button>
    </div>
  </div>
);

export default QuoteResult;
