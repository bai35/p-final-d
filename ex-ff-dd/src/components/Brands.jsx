import '../styles/Brands.css';

function Brands() {
  const brands = [
    { name: 'SALI', color: '#FF4444' },
    { name: 'JUSTOOLS', color: '#000' },
    { name: 'TOYAKI', color: '#8B4513' },
    { name: 'VAINSA', color: '#003366' },
    { name: 'SPALUX', color: '#FF6633' }
  ];

  return (
    <section className="brands-section">
      <h2>Grandes marcas</h2>
      <div className="brands-grid">
        {brands.map((brand) => (
          <div key={brand.name} className="brand-item" style={{ borderColor: brand.color }}>
            <span className="brand-name">{brand.name}</span>
          </div>
        ))}
      </div>
      <a href="#more-brands" className="saber-mas">Saber mas...</a>
    </section>
  );
}

export default Brands;
