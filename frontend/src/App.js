import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NavBar from './Components/NavBar';
import Cart from './Pages/Cart';
import PaymentSuccess from './Pages/PaymentSuccess';
import ProductForm from './Pages/ProductForm'
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
     <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Payment-success' element={<PaymentSuccess/>} />
         <Route path='/ProductForm' element={<ProductForm />} />
         <Route path='/admin' element={<Dashboard />} />
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
