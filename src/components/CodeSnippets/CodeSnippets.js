import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";

import statemachine from "../../Assets/../Assets/CodeSnippets/statemachine.png";
import action from "../../Assets/../Assets/CodeSnippets/action.png";
import gameplaytag from "../../Assets/../Assets/CodeSnippets/gameplaytag.png";
import ability from "../../Assets/../Assets/CodeSnippets/ability.png";
import ability_02 from "../../Assets/../Assets/CodeSnippets/ability_02.png";
import buff_01 from "../../Assets/../Assets/CodeSnippets/buff_01.png";
import buff_02 from "../../Assets/../Assets/CodeSnippets/buff_02.png";
import event_01 from "../../Assets/../Assets/CodeSnippets/event_01.png";
import event_02 from "../../Assets/../Assets/CodeSnippets/event_02.png";
import event_03 from "../../Assets/../Assets/CodeSnippets/event_03.png";
import event_04 from "../../Assets/../Assets/CodeSnippets/event_04.png";
import event_05 from "../../Assets/../Assets/CodeSnippets/event_05.png";
import event_06 from "../../Assets/../Assets/CodeSnippets/event_06.png";
import path_01 from "../../Assets/../Assets/CodeSnippets/path_01.png";
import path_02 from "../../Assets/../Assets/CodeSnippets/path_02.png";
import path_03 from "../../Assets/../Assets/CodeSnippets/path_03.png";
import command_01 from "../../Assets/../Assets/CodeSnippets/command_01.png";
import command_02 from "../../Assets/../Assets/CodeSnippets/command_02.png";
import command_03 from "../../Assets/../Assets/CodeSnippets/command_03.png";

function CodeSnippets() {
    return(
        <Container fluid className="project-section">
            <Particle />
        <Container>
        <h1 className="project-heading">
          My <strong className="purple">Code Snippets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some code snippets that I would like to present.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "20px"}}>
        
        <Col md={6} className="project-card">
        <Card className="project-codesnippet-card-view">
            <Card.Title>ability and buff system</Card.Title>
            <Card.Img src={buff_02} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={buff_01} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={ability_02} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={ability} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            ability and buff system
            </Card.Text>
        </Card>
        </Col>
        <Col md={6} className="project-card">
        <Card className="project-codesnippet-card-view">
            <Card.Title>game event system</Card.Title>
            <Card.Img src={event_01} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={event_02} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={event_03} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={event_04} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={event_05} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={event_06} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            game event system
            </Card.Text>
        </Card>
        <Card className="project-codesnippet-card-view">
            <Card.Title>dynamic path finding system </Card.Title>
            <Card.Img src={path_01} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={path_02} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={path_03} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            dynamic path finding system
            </Card.Text>
        </Card>
        <Card className="project-codesnippet-card-view">
            <Card.Title>finite state machine </Card.Title>
            <Card.Img src={statemachine} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            finite state machine 
            </Card.Text>
        </Card>
        </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "20px"}}>
        <Col md={6} className="project-card">
        <Card className="project-codesnippet-card-view">
            <Card.Title>undo system</Card.Title>
            <Card.Img src={command_01} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={command_02} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={command_03} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            undo system
            </Card.Text>
        </Card>

        </Col>
        <Col md={6} className="project-card">
        <Card className="project-codesnippet-card-view">
            <Card.Title>action system</Card.Title>
            <Card.Img src={gameplaytag} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={action} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            action system
            </Card.Text>
        </Card>
        
        </Col>
        </Row>
        </Container>
        </Container>
    );
}

export default CodeSnippets;