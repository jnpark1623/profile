import Main from './components/main';
import Profile from './components/profile';
import Awards from './components/awards';

import Header from './components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './css/style.css';
function App() {
  return (
    
    <div>
      
      <BrowserRouter>
      
      <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>} />
          <Route path="/home" element={<Main/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/awards" element={<Awards/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
