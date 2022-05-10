import './App.scss';
import NavBar from './components/NavBar'
import Button from './components/Button'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import HeroSection from "./components/HeroSection";
import Home from './components/pages/HomePage/Home'

function App() {
    return (
        <BrowserRouter className="app">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
