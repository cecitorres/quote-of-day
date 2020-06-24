import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import FavoriteQuotesPage from './views/FavoriteQuotesPage';
import QODPage from './views/QODPage';
import Header from './components/Header';

const App = () => (
  <div className="container">
    <Header />
    <Route exact path="/" component={QODPage} />
    <Route path="/favoriteQuotes" component={FavoriteQuotesPage} />
  </div>
);

export default App;