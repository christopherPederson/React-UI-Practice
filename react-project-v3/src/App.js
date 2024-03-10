import "./App.css";
import EmployeesGrouped from "./pages/EmployeesGrouped.js";
import Navbar from "./components/Header.js";
import CustomersGrouped from "./pages/CustomersGrouped.js";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import Error404 from "./components/Error404";
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
                        <Route path="/Definition/:search" element={<Definition />} />
                        <Route path="/404" element={<Error404/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </Navbar>
            </BrowserRouter>
        </div>
    );
};

export default App;
