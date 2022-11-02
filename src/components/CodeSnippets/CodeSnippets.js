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
            This is the infrastructure for the ability and buffs system in the Auto Battler project. The acquisition of custom buffs and the various functions associated with buffs are implemented through the abstract factory pattern and ScriptableObject. 
            Buffs are part of the trait and ability system in this project, while other abilities are implemented by passing data and methods to custom triggers.
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
            An example of a global event system with a champion parameter, where the champion triggers the corresponding event by calling the static method TriggerEvent in the singleton script, and other objects that need to be notified can subscribe to the event to trigger other functions. 
            The event system in the Auto Battler project is implemented with events of different parameters and reduces code coupling.
            </Card.Text>
        </Card>
        <Card className="project-codesnippet-card-view">
            <Card.Title>dynamic path finding system </Card.Title>
            <Card.Img src={path_01} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={path_02} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={path_03} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            The basic logic of the champion pathfinding system in the Auto Battler project. 
            When a champion moves around the map after a route has been found, it marks the next target quad it moves to as non-walkable and marks the current quad as walkable. This way, when other champions request a route from the A* pathfinding algorithm, the algorithm will recognise that the next target quad of other champions is unwalkable, 
            thus avoiding overlap between the routes of different champions.
            </Card.Text>
        </Card>
        <Card className="project-codesnippet-card-view">
            <Card.Title>finite state machine </Card.Title>
            <Card.Img src={statemachine} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            Code snippet of the champion finite state machine from the Auto Battler project. 
            The project splits the logic of the champion's behaviour by creating instances of the different states of the champion, 
            and customising the transition conditions between the different state machines makes it easy to switch between event-based champion states.
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
            Implementation of the undo feature based on command pattern in Buddy games. When the player performs an action in the game, the action is not implemented directly, but the action itself and undo action are stored in a command, which is stored in a stack. When the player performs an undo action, 
            it simply pops the command from the stack and executes the undo delegate, and the game's undo feature is implemented.
            </Card.Text>
        </Card>

        </Col>
        <Col md={6} className="project-card">
        <Card className="project-codesnippet-card-view">
            <Card.Title>action system</Card.Title>
            <Card.Img src={gameplaytag} style = {{paddingBottom:2}}></Card.Img>
            <Card.Img src={action} style = {{paddingBottom:2}}></Card.Img>
            <Card.Text style={{ textAlign: "left" }}> 
            Implementation of a GameplayTags based action system in a third person shooter project developed in C++ and blueprints in Unreal5. 
            The game's character abilites and buffs are specifically implemented in blueprints that inherits from the Action class. Abilites and buffs that have a duration are given a specific GameplayTag, which is removed at the end of the duration or other conditions. Other systems in the game recognise these tags and react to them, 
            for example if the player has a buff that they are currently immune, they will be skipped when others are dealing damage to them.
            </Card.Text>
        </Card>
        
        </Col>
        </Row>
        </Container>
        </Container>
    );
}

export default CodeSnippets;