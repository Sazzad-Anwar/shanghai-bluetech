import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Components/Loader';

const Home = lazy(() => import('./Screens/Home'));
const Products = lazy(() => import('./Screens/Products'));
const Product = lazy(() => import('./Screens/Product'));
const TermsCondition = lazy(() => import('./Screens/TermsCondition'));
const PrivacyPolicy = lazy(() => import('./Screens/PrivacyPolicy'));
const ContactUs = lazy(() => import('./Screens/ContactUs'));
const Service = lazy(() => import('./Screens/Service'));
const AboutUs = lazy(() => import('./Screens/AboutUs'));
const Error = lazy(() => import('./Components/Error'));

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>}
      />
      <Route path="/category/:category" element={
        <Suspense fallback={<Loader />}>
          <Products />
        </Suspense>
      } />
      <Route path="/products/:category/:product" element={
        <Suspense fallback={<Loader />}>
          <Product />
        </Suspense>
      } />
      <Route path="/terms-&-condition" element={
        <Suspense fallback={<Loader />}>
          <TermsCondition />
        </Suspense>
      } />
      <Route path="/privacy-policy" element={
        <Suspense fallback={<Loader />}>
          <PrivacyPolicy />
        </Suspense>
      } />
      <Route path="/contact-us" element={
        <Suspense fallback={<Loader />}>
          <ContactUs />
        </Suspense>
      } />
      <Route path="/services" element={
        <Suspense fallback={<Loader />}>
          <Service />
        </Suspense>
      } />
      <Route path="/about-us" element={
        <Suspense fallback={<Loader />}>
          <AboutUs />
        </Suspense>
      } />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
