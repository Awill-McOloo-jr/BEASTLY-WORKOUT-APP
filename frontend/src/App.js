import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Home}  from './pages/Home';
import { Navbar } from './components/Navbar';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { UseAuthContext } from './hooks/UseAuthContext';

function App() {
  const { user } = UseAuthContext()
  return (
   <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to='/login' /> } />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        </Routes>

      </div>



   </BrowserRouter>
     
  );
}

export default App;
