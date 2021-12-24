import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Products from './Screens/Products';
import Product from './Screens/Product';
import TermsCondition from './Screens/TermsCondition';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import ContactUs from './Screens/ContactUs';
import Service from './Screens/Service';
import AboutUs from './Screens/AboutUs';
import Error from './Components/Error';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<Products />} />
      <Route path="/products/:category/:product" element={<Product />} />
      <Route path="/terms-&-condition" element={<TermsCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
