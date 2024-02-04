import EditEmployee from "./EditEmployee";

function Employee(props) {
    return (
        <div className="w-96 m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
                className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                src={props.img}
            />
            <div className="text-center space-y-2 sm:text-left">
                    <p className="text-lg text-black font-semibold">
                        {props.name} &#183; <span className="text-slate-500 font-medium">{props.role}</span>
                    </p>
                    <EditEmployee id={props.id} name={props.name} role={props.role} updateEmployee={props.updateEmployee}/>
            </div>
        </div>
    );
}

export default Employee;
