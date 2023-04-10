import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import RegisterCard from './pages/card/RegisterCard';
import { MenuOpenContext } from './context/MenuContext';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <MenuOpenContext.Provider value={{ menuOpen, setMenuOpen }}>
        <NavBar />
        <RegisterCard />
      </MenuOpenContext.Provider>
    </div>
  );
}

export default App;
