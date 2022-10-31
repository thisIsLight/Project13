import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function VerticalModal(props) {

    const [name, setName] = useState('');
    const [buttonState, setButtonState] = useState(true);
    const [buttonText, setButtonText] = useState('Locked🔒');

    const onNameChange = (event) => {
        if(props.ishome === "true"){
            setButtonState(false)
            if(event.target.value === ''){
                setButtonState(true)
            }
            setName(event.target.value);
        }
        else{
            if(event.target.value === 'Mango' || event.target.value === 'mango' || event.target.value === 'Mangoes' || event.target.value === 'mangoes'){
                setButtonState(false)
                setButtonText('Unlocked🔓')
            }
            else{
                setButtonState(true)
                setButtonText('Locked🔒')
            }
        }
    }

    const letsGoHandler = () =>{
        props.accepthandler(name)
    }

    const submitHandler = () =>{
        props.accepthandler()
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
                <InputGroup.Text id="basic-addon1">{props.modaldata.modalfootericon}</InputGroup.Text>
                <Form.Control
                    onChange={onNameChange}
                    placeholder={props.modaldata.modalfooterplaceholder}
                />
            </InputGroup>
            {props.ishome==="true" && <Button onClick={letsGoHandler} disabled={buttonState} >Lets Go ?</Button>}
            {props.ishome==="false" && <Button onClick={submitHandler} disabled={buttonState} >{buttonText}</Button>}
        </Modal.Footer>
        </Modal>
    );
}

export default VerticalModal;