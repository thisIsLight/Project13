import React from "react";
import VerticalModal from '../verticalmodal/VerticalModal';


const ModalComponent = (props) => {

    return (
        <React.Fragment>
            <VerticalModal show={props.show} onHide={props.hide} modaldata={props.modaldata} ishome={props.ishome} accepthandler={props.accepthandler}/>
        </React.Fragment>
    )
}

export default ModalComponent;