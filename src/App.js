import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound'
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/viewproduct' element={<ViewProduct/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
