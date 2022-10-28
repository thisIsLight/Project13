import "./Home.css"
import Layout from '../layout/Layout'
import HomePageConstants from '../../constants/homepage';
import React from 'react';
import ModalComponent from "../../components/modalcomponent/ModalComponent";
import Alert from 'react-bootstrap/Alert';

const Home = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [showAlert, setshowAlert] = React.useState(false);
    const [name, setName] = React.useState(``);
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var textBodyClassName = "";
    var playNowText = "Play now >>";
    if(isSafari){
        textBodyClassName = `disclaimer-text-body safari-font`;
    }
    else{
        textBodyClassName = `disclaimer-text-body other-browser-font`;
    }

    const onPlayNowHandler = () => {
        setModalShow(true)
    }

    const onHide = () => {
        setModalShow(false)
    }

    const acceptHandler = (name) => {
        setName(name);
        setshowAlert(true);
        onHide();
    }

    return (
        <Layout>
            <div className="home">
                <div className="home-disclaimer-text-box">
                    <p className={textBodyClassName}>{HomePageConstants.salutationtext}<br/>{HomePageConstants.textbody}<br/>
                    <span className="play-now" onClick={onPlayNowHandler}>{playNowText}</span></p>
                </div>
            </div>
            <ModalComponent show={modalShow} hide={onHide} modaldata={HomePageConstants.modaldata} acceptHandler={acceptHandler}/>
            {showAlert && <Alert variant="danger">{name}</Alert>}
        </Layout>
    );
}

export default Home;

