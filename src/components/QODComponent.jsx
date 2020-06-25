import React from "react";

const QODComponent = ({ quote }) => (
  <blockquote className="blockquote">
    <p className="mb-0">
      <i className="material-icons text-primary">format_quote</i>
      <span>{quote.body}</span>
      <i className="material-icons text-primary">format_quote</i>
    </p>
    <p className="text-center text-primary">.. {quote.author}</p>
  </blockquote>
);

export default QODComponent;
