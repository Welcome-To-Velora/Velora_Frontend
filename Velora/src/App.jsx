import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>
    </div>
  )
}

export default App;
