import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Brands from './components/Brands';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main-content">
          <Banner />
          <Brands />
          <Products />
        </main>
      </div>
    </div>
  );
}

export default App;