import React, {useEffect} from 'react';
import Home from './pages/home/Home';
import Header from './components/header/Header'

function App() {

  useEffect(() => {
    document.title = "Project13";  
  }, []);
  return (
    <React.Fragment>
        <Header></Header>
        <Home />
    </React.Fragment>
  );
}

export default App;
