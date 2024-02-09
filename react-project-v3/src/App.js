import "./App.css";
import EmployeesGrouped from "./components/EmployeesGrouped.js";
import Navbar from "./components/Header.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"

let App = () => {
    return (
        <Navbar>
            <BrowserRouter><EmployeesGrouped /></BrowserRouter>
            
        </Navbar>
    );
};

export default App;
