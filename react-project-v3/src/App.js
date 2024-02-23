import "./App.css";
import EmployeesGrouped from "./pages/EmployeesGrouped.js";
import Navbar from "./components/Header.js";
import CustomersGrouped from "./pages/CustomersGrouped.js";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
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
                        <Route path="/Dictionary" element={<Dictionary />} />
                        <Route path="/Definition" element={<Definition />} />
                    </Routes>
                </Navbar>
            </BrowserRouter>
        </div>
    );
};

export default App;
