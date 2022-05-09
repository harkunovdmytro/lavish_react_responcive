import './App.scss';
import NavBar from './components/NavBar'
import Button from './components/Button'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter className="app">
            <NavBar/>
            <Routes>
                <Route path='/'/>
            </Routes>
            <h1>Hello, world</h1>
            <Button>hi</Button>
        </BrowserRouter>
    );
}

export default App;
