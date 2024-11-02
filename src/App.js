import { Routes, Route } from 'react-router-dom'; 
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Navbar from './component/navbar';
import Transactions from './pages/transactions';
import Budgets from './pages/budget';
import Settings from './pages/settings';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='flex gap-10'>
        <Navbar className='lg:w-[20%]' />
        <div className='lg:w-[80%] overflow-y-auto'>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

          <Routes>
            {' '}
            {/* Directly use Routes here without Router */}
            <Route path='/' element={<Dashboard />} />
            <Route path='*' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/budgets' element={<Budgets />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
