import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import PrivatePage from './Components/PrivatePage';
import UpdateProduct from './Components/UpdateProduct';
import AboutPage from './Components/AboutPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivatePage />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
