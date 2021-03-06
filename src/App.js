import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MovieList, NewMovie, EditMovie, NotFound, MovieDetails,
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/edit/" component={EditMovie} />
        <Route path="/movies/new/" component={NewMovie} />
        <Route path="/movies/:id/" component={MovieDetails} />
        <Route path="/" component={MovieList} />
        <Route path="*" render={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
