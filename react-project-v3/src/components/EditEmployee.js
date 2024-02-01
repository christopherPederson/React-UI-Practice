import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

let EditEmployee = (props) => {
    const [show, setShow] = useState(false);

    const [name, setName] = useState(props.name);
    const [role, setRole] = useState(props.role);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update
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
                            <Modal.Title>Edit Employee</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <input type="text" defaultValue={name} />
                            <input type="text" defaultValue={role} />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </Modal>
        </>
    );
};

export default EditEmployee;
