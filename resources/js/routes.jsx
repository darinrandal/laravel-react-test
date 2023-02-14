import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import ReactDOM from 'react-dom/client';
import React from 'react';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);