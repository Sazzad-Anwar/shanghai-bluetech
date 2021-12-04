import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Screens/Home';
import Products from './Screens/Products';
import Product from './Screens/Product';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/products/:category/:product" element={<Product />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
