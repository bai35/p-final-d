import '../styles/Sidebar.css';
import { useState } from 'react';

function Sidebar() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (category) => {
    setExpanded(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    'Categorías',
    'Filtros',
    'Madera',
    'Hierro',
    'Acero',
    'Plástico',
    'Cobre',
    'Aluminio',
    'Oro'
  ];

  return (
    <aside className="sidebar">
      <div className="filters-section">
        {categories.map((cat) => (
          <div key={cat} className="filter-item">
            <button 
              className="filter-btn"
              onClick={() => toggleExpand(cat)}
            >
              {cat}
              <span className="expand-icon">▼</span>
            </button>
          </div>
        ))}
      </div>

      <div className="price-filter">
        <h4>Precio menor-mayor:</h4>
        <div className="price-range">
          <span className="price-min">$/.35</span>
          <span className="price-max">$/.290</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
