import './App.scss';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp'

function App() {
    return (
        <BrowserRouter className="app">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/services'  element={<Services />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/sign-up' element={<SignUp />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
