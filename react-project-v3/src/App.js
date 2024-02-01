import "./App.css";
import EMPLOYEE from "./components/Employee.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [employee, setEmployees] = useState([
        {
            id: uuidv4(),
            name: "John Doe",
            role: "Manager",
            img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
        },
        {
            id: uuidv4(),
            name: "Jane Doe",
            role: "Employee",
            img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
        },
        {
            id: uuidv4(),
            name: "John Smith",
            role: "Employee",
            img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
        },
    ]);
    return (
        <div className="App">
            {employee.map((employee) => {
                return (
                        <EMPLOYEE
                            name={employee.name}
                            role={employee.role}
                            img={employee.img}
                            id={employee.id}
                        />
                );
            })}
        </div>
    );
}

export default App;
