import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
//  import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import LargeProjectCards from "./LargeProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some game projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "20px"}}>
        <LargeProjectCards
              videoTitle = "Receiver 2"
              videoLink = "https://www.youtube.com/embed/g-SgoKBIE24"
              videoHeight = "720"
              videoWidth = "1280"
              // imgPath={chatify}
              title="Receiver 2"
              description = <h6 style={{lineHeight:1.5}}>
                <i className="purple">Apr 2021 - Jun 2021</i><br></br>
                My contribution: <br></br>· Implemented new game features, and resolved 20+ miscellaneous game bugs/issues, most of which can be found in this 
              <a href="https://store.steampowered.com/news/app/1129310/view/3019092467758679460"> game update information </a>.
              <br></br>· Worked with other developers to develop new weapons and new game maps.</h6>  
            />
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "Seabird Project"
              videoLink = "https://www.youtube.com/embed/3BfYPKANWiU"
              videoHeight = "213"
              videoWidth = "100%"
              title="Jump!"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple">Sep 2020 - Dec 2020</i><br></br>
              Jump! is a collaborated work with the University of Skövde, WWF, and SLU with the aim of increasing interest towards the seabirds living in the Baltic Sea. 
              <br></br>
              <br></br>My contribution: <br></br>· Implemented most of game features with C# and Unity.
              <br></br>· Satisfying third person character controller using Cinemachine.
              <br></br>· Worked with artists to polish animation system, AI system, and Shadergraph, created shader objects for the game environment and interaction system to improve the player experience.
              <br></br>· Implemented game progression system, save system, quick time events (QTE) system etc.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://jiaqu-wu.itch.io/jump"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "Auto-Battler Project"
              videoLink = "https://www.youtube.com/embed/IGpLF2rV2hg"
              videoHeight = "213"
              videoWidth = "100%"
              title="Auto-Battler Project"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple">Jul 2022 - Sep 2022</i><br></br>
              It's a game project that I have been working on alone recently which contains basic features of the auto-battler game genre in single player game mode with Unity, including some of the more complex but interesting game systems:
              <br></br>
              <br></br>· Utilized A-star algorithm to implement a dynamic pathfinding system for the champion during combat, and a finite state machine was used to implement changes in the champion's behaviour in different states, which together implemented the champion's AI system.
              <br></br>· Built the champion's attributes system, buff system, and ability system using Scriptable Objects and C# object-oriented features. These together with the game's event system provide a solid infrastructure that allows for highly scalable game development and greatly reduces code coupling.

              </h6>
              isGithub = "true"
              ghLink="https://github.com/JiaquWu/CardGamePractice"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              videoTitle = "Online Project"
              videoLink = "https://www.youtube.com/embed/PWY39cBVAY8"
              videoHeight = "213"
              videoWidth = "100%"
              title="Online Project"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple">Nov 2021 - Dec 2021</i><br></br>
              This project was an attempt by me and a few other developers to develop a Steam online multiplayer demo using Unreal4 at a Game Jam and ended up with a mini game that could be played by multiple players through Steam network.
              <br></br>
              <br></br>My contribution: 
              <br></br>· Implemented the multiplayer online marble mini game system using Unreal and Blueprint within the Unreal-Steam multiplayer network framework. 
              <br></br>·  Researched solutions for Steam online games through various sources and finally configured a viable solution, and migrated project code from Unity to Unreal's blueprints.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard  
              title="FPS Project"
              videoTitle = "FPS Project"
              videoLink = "https://www.youtube.com/embed/MJjFWTQX8S4"
              videoHeight = "213"
              videoWidth = "100%"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple">Oct 2022</i><br></br>
              A first person shooter game prototype built with Unreal 5 and C++ in 2 weeks.
              <br></br>
              <br></br>Main game features:
              <br></br>· Implemented action component and attribute componenent for game ability system and character attributes.
              <br></br>· Utilized EQS and behaviour tree to created AI system.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://jiaqu-wu.itch.io/procrastinationsg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              videoTitle = "IceSokoban"
              videoLink = "https://www.youtube.com/embed/lLLQDieJXjc"
              videoHeight = "213"
              videoWidth = "100%"
              title="An Ice-Sokoban puzzle game"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple">Dec 2022</i><br></br>
              <br></br>A 3d top-down Sokoban puzzle game built with Unity in a week.
              <br></br>
              <br></br>Main game features: 
              <br></br>· Implemented a A Monster's Expedition-like character controller.
              </h6> 
              
              ghLink="https://github.com/JiaquWu/IceSokoban"
              demoLink="https://jiaqu-wu.itch.io/icesokoban"// <--------Please include a demo link here
              isGithub = "true"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard  
              title="Cat Clinic"
              videoTitle = "Cat Clinic"
              videoLink = "https://www.youtube.com/embed/hjEBOPoB3uk"
              videoHeight = "213"
              videoWidth = "100%"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple">Mar 2021 - May 2021</i><br></br>
              This is a serious game prototype that I worked on with a friend for his thesis, it's designed to help procrastinators reduce academic procrastination. I built it with his artwork and design draft.
              <br></br>
              <br></br>Main game features:
              <br></br>· Implemented a solid game save system with different save slots by using JSON for serializing and deserializing game object.
              <br></br>· Implemented game time system and economic system for idle game features by calculating real time.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://jiaqu-wu.itch.io/procrastinationsg"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard 
              videoTitle = "Buddy"
              videoLink = "https://www.youtube.com/embed/jEAGbsIGn2E"
              videoHeight = "213"
              videoWidth = "100%"
              title="Buddy"
              description=<h6 style={{lineHeight:1.5}}>
                <i className="purple">Feb 2022 - May 2022</i><br></br>
                This game project is my thesis work for my Master's degree at the University of Skövde, and I finished the whole project and <a href="http://www.diva-portal.org/smash/record.jsf?dswid=4471&pid=diva2%3A1676937&c=1&searchType=SIMPLE&language=en&query=jiaqu&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all">thesis</a> by myself, excluding the artwork. 
              <br></br>The game was originally designed to see if the player could understand the rules and get the "every life counts" message that I wanted to send to the player without providing explicit explanation of the rules to the player. Overall I spent more effort on the game design than on the programming.
              <br></br>
              <br></br>Main game features: 
              <br></br>· Implemented undo system with different game objects and commands from players by using new input system in Unity and command pattern.
              </h6> 
              
              ghLink="https://github.com/JiaquWu/ThesisProject"
              demoLink="https://jiaqu-wu.itch.io/buddy-a"// <--------Please include a demo link here
              isGithub = "true"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "Call of Wind"
              videoLink = "https://www.youtube.com/embed/_C2x1P2uSmw"
              videoHeight = "213"
              videoWidth = "100%"
              title="Call of Wind"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple">Jul 2019 - Sep 2019</i><br></br>
              Call of Wind is a 2d puzzle platformer game that I worked on with other student developers for around two months in 2019, and it won a prize in a student game development competition in China at the time.
              <br></br>
              <br></br>My contribution:
              <br></br>· Design and implemented wind-related puzzles and game mechanics.
              <br></br>· Constantly optimised and iterated on game details based on player feedback.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
               demoLink="https://jiaqu-wu.itch.io/call-of-wind-v10"      //<--------Please include a demo link here 
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "20px"}}>
        <LargeProjectCards 
              videoTitle = "Other Projects"
              videoLink = "https://www.youtube.com/embed/skx8nTCCy2A"
              videoHeight = "720"
              videoWidth = "1280"
              // imgPath={chatify}
              title="Other Projects"
              description = <h6 style={{lineHeight:1.5}}>This is a collection of videos of games that I have also worked on in addition to those above, they are all available at <a href="https://jiaqu-wu.itch.io">jiaqu-wu.itch.io</a> for more information and can be played online or downloaded.
              </h6> 
            />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
