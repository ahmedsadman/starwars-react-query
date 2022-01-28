import { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';


function App() {
  const [page, setPage] = useState('planet');

  function navigateToPage(pageName) {
    setPage(pageName);
  }

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar navigateToPage={navigateToPage} />
      <div className="content">
        {page === 'planet' ? <Planet /> : <People />}
      </div>
    </div>
  );
}

export default App;
