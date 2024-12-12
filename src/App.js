  import './App.css';
  import Navbar from './components/Navbar';
  import Home from './pages/Home';
  import About from './pages/Recipes';
  import Products from './pages/Products';
  import Contact from './pages/Contact';
  import { BrowserRouter, Route,  Routes } from 'react-router-dom';
  import Recipes from './pages/Recipes';
  import Theme from './components/Theme';
import Board from './TicTacGame/Board';

  function App() {
    return (
    <>
  {/* <BrowserRouter>
        <Navbar />
      
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food_items" element={<Recipes />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
      
          </BrowserRouter> */}

  {/* <Theme/> */}
  <Board/>
  
    </>
    );
  }

  export default App;
