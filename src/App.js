import Main from './components/main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './css/style.css';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>} />
          <Route path="/home" element={<Main/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
