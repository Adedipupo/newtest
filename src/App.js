import './App.css'
 import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { Home } from './pages/Homepage/Home';
import Login from './components/Login';
import Signup from './components/Signup/Signup';
import Product from './components/Product/Product';


 function Layout() {
    <div className="container">
       <Navbar />
       <Outlet />
    </div>
 }


function App() {

  return (
    <>
    <Routes>
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/product" element={<Product />}></Route>
    </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>  
    </>     
)
}
export default App;