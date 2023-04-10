import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import RegisterCard from './pages/card/RegisterCard';
import { MenuOpenContext } from './context/MenuContext';
import Menu from './pages/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <MenuOpenContext.Provider value={{ menuOpen, setMenuOpen }}>
        <NavBar />
        <RegisterCard />
        { menuOpen && <Menu/>}
      </MenuOpenContext.Provider>
    </div>
  );
}

export default App;
