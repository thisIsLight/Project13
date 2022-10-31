import Layout from "../layout/Layout";
import Toaster from "../../components/toaster/Toaster"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Story.css"
import StoryPageConstants from "../../constants/storypage";
import ModalComponent from "../../components/modalcomponent/ModalComponent";
import React from 'react';



const Story = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const onHide = () => {
        setModalShow(false)
    }

    const ShowFindingsHandler = () => {
        setModalShow(true)
    }

    const acceptHandler = () => {
        localStorage.setItem('clueStatus', JSON.stringify(2));
    }

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col>
                    <Card className="text-center">
                        <Card.Header className="story-header"><b  className="story-title-texts">The lost bird🦅</b></Card.Header>
                        <Card.Body className="story-body">
                            <Card.Title>Captain {JSON.parse(localStorage.getItem('userName'))},</Card.Title>
                                <Card.Text className="story-body-text">
                                {StoryPageConstants.StoryPrologue}<br/><br/>
                                {StoryPageConstants.StoryCharacterIntro}<br/><br/>
                                {StoryPageConstants.StoryFollowUp}
                                </Card.Text>
                            <Button className="story-button" variant="primary" onClick={ShowFindingsHandler}>Show Findings</Button>
                            <ModalComponent show={modalShow} hide={onHide} modaldata={StoryPageConstants.modaldata} ishome="false" accepthandler={acceptHandler}/>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Toaster></Toaster>
            </Container>


            
        </Layout>
    )
}

export default Story;