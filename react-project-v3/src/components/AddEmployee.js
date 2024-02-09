import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

let AddEmployee = (props) => {
    const [show, setShow] = useState(false);

    const [name, setName] = useState("name");
    const [role, setRole] = useState("role");
    const [img, setImg] = useState("https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="tertiary" onClick={handleShow}>
                + Add Employee
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton onClick={handleClose}>
                            <Modal.Title>Add Employee</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <input
                                className="border-2 border-gray-300 rounded-md p-1"
                                type="text"
                                defaultValue={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <input
                                className="border-2 border-gray-300 rounded-md p-1"
                                type="text"
                                defaultValue={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                            />
                            <input
                                className="border-2 border-gray-300 rounded-md p-1"
                                type="text"
                                defaultValue={img}
                                onChange={(e) => {
                                    setImg(e.target.value);
                                }}
                            />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    handleClose();
                                    setName("name");
                                    setRole("role");
                                    setImg("https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg");
                                    props.createEmployee(name, role, img);
                                }}
                            >
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </Modal>
        </>
    );
};

export default AddEmployee;
