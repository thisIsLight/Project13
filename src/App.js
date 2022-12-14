import React, {useEffect} from 'react';
import Home from './pages/home/Home';
import Story from './pages/story/Story';
import Clue2 from './pages/clue/Clue2';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    document.title = "Project13";  
  }, []);
  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
              <Route path="/Project13" element={<Home />} />
              <Route path="/Project13/Story" element={<Story />} />
              <Route path="/Project13/Clue2" element={<Clue2 />} />
              <Route path="/Project13/AboutUs" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
