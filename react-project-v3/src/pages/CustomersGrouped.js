import AddEmployee from "../components/AddEmployee.js";
import EditEmployee from "../components/EditEmployee.js";
import Employee from "../components/Employee.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

let EmployeesGrouped = () => {
    const [employee, setEmployees] = useState([
        {
            id: uuidv4(),
            name: "John Doe",
            role: "Manager",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "Jane Doe",
            role: "Employee",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "John Smith",
            role: "Employee",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "John Doe",
            role: "Manager",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "Jane Doe",
            role: "Employee",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "John Smith",
            role: "Employee",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "John Doe",
            role: "Manager",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "Jane Doe",
            role: "Employee",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        },
        {
            id: uuidv4(),
            name: "John Smith",
            role: "Employee",
            img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
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
        <div className="flex flex-wrap justify-center">
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
    );
};

export default EmployeesGrouped;
