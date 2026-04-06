import '../styles/Header.css';
import { useState } from 'react';

function Header() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchText);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">HERRAMIENTAS</div>
        <form className="search-form" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>
        <div className="header-icons">
          <a href="#facebook" className="social-icon">f</a>
          <a href="#pinterest" className="social-icon">P</a>
          <a href="#instagram" className="social-icon">📷</a>
          <a href="#youtube" className="social-icon">▶</a>
          <button className="login-btn">Ingresar</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
