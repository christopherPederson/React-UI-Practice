import "./App.css";
import EmployeesGrouped from "./components/EmployeesGrouped.js";
import Navbar from "./components/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

let App = () => {
    return (
        <div className="App">
            <Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route path="/team" element={<EmployeesGrouped />} />
                    </Routes>
                </BrowserRouter>
            </Navbar>
        </div>
    );
};

export default App;
