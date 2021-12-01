import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Screens/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
