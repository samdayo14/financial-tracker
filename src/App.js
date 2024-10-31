import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../src/pages/login';
import Register from './pages/register';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
