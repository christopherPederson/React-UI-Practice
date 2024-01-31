import MODAL from "./EditEmployee.js";

let Employee = (props) => {
    return (
        <div className="h-52 w-26 flex">
            <img src={props.image} alt={props.name} className="size-36" />
            <div className="text-base">
                <h1>{props.name}</h1>
                <h3>{props.role}</h3>
                <p className="text-sm">{props.id}</p>
                <MODAL name={props.name} role={props.role} />
            </div>
        </div>
    );
};

export default Employee;
