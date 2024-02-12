import "./App.css";
import EmployeesGrouped from "./components/EmployeesGrouped.js";
import Navbar from "./components/Header.js";
import CustomersGrouped from "./components/CustomersGrouped.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

let App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar>
                    <Routes>
                        <Route
                            path="/Employees"
                            element={<EmployeesGrouped />}
                        />
                        <Route
                            path="/Customers"
                            element={<CustomersGrouped />}
                        />
                    </Routes>
                </Navbar>
            </BrowserRouter>
        </div>
    );
};

export default App;
