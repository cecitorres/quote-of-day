import React from 'react';
import { Route } from "react-router-dom";
import QODPage from './views/QODPage';
import QuotesPage from './views/QuotesPage';
import FavoriteQuotesPage from './views/FavoriteQuotesPage';
import Header from './components/Header';
import './index.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';

const App = () => (
  <>
    <Header />
    <div className="container">
      <Route exact path="/" component={QODPage} />
      <Route path="/favoriteQuotes" component={FavoriteQuotesPage} />
      <Route path="/quotes" component={QuotesPage} />
    </div>
  </>
);

export default App;