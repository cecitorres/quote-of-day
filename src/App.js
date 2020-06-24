import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import QODPage from './views/QODPage';
import QuotesPage from './views/QuotesPage';
import FavoriteQuotesPage from './views/FavoriteQuotesPage';
import Header from './components/Header';

const App = () => (
  <div className="container">
    <Header />
    <Route exact path="/" component={QODPage} />
    <Route path="/favoriteQuotes" component={FavoriteQuotesPage} />
    <Route path="/quotes" component={QuotesPage} />
  </div>
);

export default App;