import "./Home.css"
import Layout from '../layout/Layout'
import HomePageConstants from '../../constants/homepage';
import React from 'react';
import ModalComponent from "../../components/modalcomponent/ModalComponent";
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const isStarted = JSON.parse(localStorage.getItem('clueStatus'));
    const navigate = useNavigate();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var textBodyClassName = "";
    var playNowText = "Play now >>";
    var continueText = "Continue >>"
    if(isSafari){
        textBodyClassName = `disclaimer-text-body safari-font`;
    }
    else{
        textBodyClassName = `disclaimer-text-body other-browser-font`;
    }

    const onPlayNowHandler = () => {
        setModalShow(true)
    }

    const onContinueHandler = () =>{
        if(isStarted === 1){
            navigate('/Project13/Story');
        }
        else if(isStarted === 2){
            navigate('/Project13/Clue2');
        }

    }

    const onHide = () => {
        setModalShow(false)
    }

    const acceptHandler = (name) => {
        localStorage.setItem('userName', JSON.stringify(name));
        localStorage.setItem('clueStatus', JSON.stringify(1));
        onHide();
        navigate('/Project13/Story');
    }

    return (
        <Layout>
            <div className="home">
                <div className="home-disclaimer-text-box">
                    <p className={textBodyClassName}>{HomePageConstants.salutationtext}<br/>{HomePageConstants.textbody}<br/>
                        {!isStarted && <span className="play-now" onClick={onPlayNowHandler}>{playNowText}</span>}
                        {isStarted && <span className="play-now" onClick={onContinueHandler}>{continueText}</span>}
                    </p>
                </div>
            </div>
            <ModalComponent show={modalShow} hide={onHide} modaldata={HomePageConstants.modaldata} ishome="true" accepthandler={acceptHandler}/>
        </Layout>
    );
}

export default Home;

