import React from "react";
import "./index.css";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./containers/mainPage"
import Login from "./containers/login";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;