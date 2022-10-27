import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Single from './components/Single';
import Cat from './components/Cat';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cat/:category' element={<Cat/>}/>
      <Route path='/single/:id' element={<Single/>}/>
      <Route path='/single' element={<Single/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </>
  );
}
export default App;
