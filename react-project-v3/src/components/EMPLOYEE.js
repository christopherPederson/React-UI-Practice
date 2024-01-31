let EMPLOYEE = (props) => {
    return (
        <div className="employeeWrapper">
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <h3>{props.role}</h3>
            <p>{props.id}</p>
        </div>
    );
};

export default EMPLOYEE;