import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import SignInForm from './components/SignInForm';
import './index.css';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/inloggen' element={<SignInForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
