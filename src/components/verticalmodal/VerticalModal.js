import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function VerticalModal(props) {

    const [name, setName] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const letsGoHandler = () =>{
        props.acceptHandler(name)
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {props.modaldata.modalTitle}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{props.modaldata.modalbodyheader}</h4>
            <p>
            {props.modaldata.modalbodycontent}
            </p>
        </Modal.Body>
        <Modal.Footer>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">👶</InputGroup.Text>
                <Form.Control
                    onChange={onNameChange}
                    placeholder="Your name"
                />
            </InputGroup>
            <Button onClick={letsGoHandler}>Lets Go ?</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default VerticalModal;