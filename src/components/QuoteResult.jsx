import React from "react";

const QuoteResult = ({ quote, saveHandler }) => (
  <div className="alert alert-quote border my-3 container-fluid">
    <p className="mb-0">{quote.body}</p>
    <div className="align-items-end text-center text-wrap">
      <span>-- {quote.author}</span>
      <button
        onClick={() => saveHandler(quote)}
        type="button"
        className="btn btn-secondary btn-sm ml-3 rounded-circle float-right"
      >
        <i className="material-icons">favorite</i>
      </button>
    </div>
  </div>
);

export default QuoteResult;
