import "./App.css";
import EMPLOYEE from "./components/EMPLOYEE.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MODAL from "./components/EMPLOYEE-MODAL.js";

function App() {
    const [employee, setEmployees] = useState([
        {
            id: uuidv4(),
            name: "John Doe",
            role: "Manager",
            image: "https://via.placeholder.com/150",
        },
        {
            id: uuidv4(),
            name: "Jane Doe",
            role: "Employee",
            image: "https://via.placeholder.com/150",
        },
        {
            id: uuidv4(),
            name: "John Smith",
            role: "Employee",
            image: "https://via.placeholder.com/150",
        },
    ]);
    return (
        <div className="App">
            {employee.map((employee) => {
                return (
                    <>
                        <EMPLOYEE
                            name={employee.name}
                            role={employee.role}
                            image={employee.image}
                            id={employee.id}
                        />
                        <MODAL />
                    </>
                );
            })}
        </div>
    );
}

export default App;
