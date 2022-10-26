import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'

function App() {
  return (
    <React.Fragment>
        <Router>
          <Header></Header>
          <Routes>
              <Route path="/Project13/" element={<Home />} />
          </Routes>
        </Router>
    </React.Fragment>
    
  );
}

export default App;
