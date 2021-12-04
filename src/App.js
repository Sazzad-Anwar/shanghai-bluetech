import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Screens/Home';
import Products from './Screens/Products';
import Product from './Screens/Product';
import TermsCondition from './Screens/TermsCondition';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import ContactUs from './Screens/ContactUs';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/products/:category/:product" element={<Product />} />
      <Route path="/terms-&-condition" element={<TermsCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
