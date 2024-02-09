import "./App.css";
import EmployeesGrouped from "./components/EmployeesGrouped.js";
import Navbar from "./components/Header.js";

let App = () => {
    return (
            <Navbar>
                <EmployeesGrouped />
            </Navbar>
    );
};

export default App;
