import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

let EditEmployee = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Employee
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Role" />
                <button onClick={handleClose}>Submit</button>
            </Modal>
        </>
    );
};

export default EditEmployee;
