import "./App.css";
import EMPLOYEE from "./components/EMPLOYEE.js";
import { useState } from "react";

function App() {
    const [role, setRole] = useState();
    const [employee, setEmployees] = useState([
        {
            name: "John Doe",
            role: "Manager",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Jane Doe",
            role: "Employee",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "John Smith",
            role: "Employee",
            image: "https://via.placeholder.com/150",
        },
    ]);
    return (
        <div className="App">

        </div>
    );
}

export default App;
