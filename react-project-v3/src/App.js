import "./App.css";
import EMPLOYEE from "./components/Employee.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

let App = () => {
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

    let updateEmployee = (id, newName, newRole) => {
        let latestEmployee = employee.map((e) => {
            if (e.id === id) {
                e.name = newName;
                e.role = newRole;
            }

            return e;
        });

        setEmployees(latestEmployee);
    };

    return (
        <div className="App flex flex-wrap justify-center">
            {employee.map((employee) => {
                return (
                    <EMPLOYEE
                        name={employee.name}
                        role={employee.role}
                        img={employee.img}
                        id={employee.id}
                        updateEmployee={updateEmployee}
                    />
                );
            })}
        </div>
    );
};

export default App;
