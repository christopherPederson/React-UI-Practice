import "./App.css";
import AddEmployee from "./components/AddEmployee.js";
import EditEmployee from "./components/EditEmployee.js";
import Employee from "./components/Employee.js";
import Navbar from "./components/Header.js";
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
    let createEmployee = (name, role, img) => {
        const latestEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img,
        };

        setEmployees([...employee, latestEmployee]);
    };

    return (
        <>
        <Navbar />
        <div className="App flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
                {employee.map((employee) => {
                    const EditEmployeeVar = (
                        <EditEmployee
                            id={employee.id}
                            name={employee.name}
                            role={employee.role}
                            updateEmployee={updateEmployee}
                        />
                    );

                    return (
                        <Employee
                            name={employee.name}
                            role={employee.role}
                            img={employee.img}
                            id={employee.id}
                            EditEmployee={EditEmployeeVar}
                        />
                    );
                })}
            </div>
            <AddEmployee createEmployee={createEmployee} />
        </div>
        </>
    );
};

export default App;
