import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Trainers from './components/Trainers';
import Details from './components/Details';

function App() {
  return (
      <div className="grid-container">
      <Router basename="/">

        <header className="header">
          <div>
            <Link to="/" className="header-links">Trainers</Link>
          </div>
          <div>
            <Link to="/details" className="header-links">Details</Link>
          </div>
        </header>

        <main className="main">
          <Route path="/" exact component={Trainers} />
          <Route path="/details" component={Details} />
        </main>

        <footer className="footer">
          All rights reserved.
        </footer>

      </Router>
      </div>
  );
}

export default App;
