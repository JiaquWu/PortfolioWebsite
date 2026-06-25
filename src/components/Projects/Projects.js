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

const groups = [
  { key: "Locomoto", title: "Locomoto" },
  { key: "Receiver2", title: "Receiver2" },
  { key: "MultiProgrammer", title: "Team Projects (Multi-Programmer)" },
  { key: "SoleProgrammer", title: "Projects as Sole Programmer" },
  { key: "Other-projects", title: "Other projects" }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
          <Container>
              {/* 侧边导航栏 */}
              <nav className="side-nav">
                  {groups.map((g) => (
                      <a
                          key={g.key}
                          href={`#${g.key}`}
                          className="nav-link"
                          onClick={(e) => {
  e.preventDefault();
  const el = document.getElementById(g.key);
  if (el) {
    const defaultOffset = -90;
    const topOffset = -170; // 👈 Locomoto 专用

    const yOffset =
      g.key === "Locomoto" ? topOffset : defaultOffset;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}}
                      >
                          {g.title}
                      </a>
                  ))}
              </nav>

        <h1 className="project-heading">
                  <b className="purple bold-link">My Journey</b> 
        </h1>
              <p style={{
                  color: "white", zIndex: 10,
                  position: "relative",
                  pointerEvents: "auto",
                  fontStyle: "italic"
              }}>
                  From early solo prototypes to commercial releases, these selected projects are footprints along the winding path of my journey as a game developer
        </p>
              <Row id="Locomoto" style={{ justifyContent: "center", paddingBottom: "20px"}}>
                  <LargeProjectCards
                      
              videoTitle = "Locomoto"
              videoLink = "https://www.youtube.com/embed/JiR_MJAEnCA"
              videoHeight = "720"
              videoWidth = "1280"
              // imgPath={chatify}
              title="Locomoto"
              description = <h6 style={{lineHeight:1.5}}>
                <i className="purple bold-link">Feb 2023 - Now</i><br></br>
                      My contribution:<br></br>· See <a href="/#/Locomoto" className="purple bold-link">Locomoto</a></h6>  
            />
        </Row>
              <Row id="Receiver2" style={{ justifyContent: "center", paddingBottom: "20px"}}>
                  <LargeProjectCards
                      
              videoTitle = "Receiver 2"
              videoLink = "https://www.youtube.com/embed/g-SgoKBIE24"
              videoHeight = "720"
              videoWidth = "1280"
              // imgPath={chatify}
              title="Receiver 2"
              description = <h6 style={{lineHeight:1.5}}>
                <i className="purple bold-link">Apr 2021 - Jun 2021</i><br></br>
                My contribution: <br></br>· Implemented new game features, and resolved 20+ miscellaneous game bugs/issues, most of which can be found in this
                  <a href="https://store.steampowered.com/news/app/1129310/view/3019092467758679460" className= "purple bold-link"> game update information </a>.
                  <br></br>· Paired with another programmer to prototype new weapon variants and map layouts in Unity.</h6>  
            />
        </Row>
        {/* ===================== */}
{/* Team Projects (Multi-Programmer) */}
{/* ===================== */}
<h2
  id="MultiProgrammer"
  className="project-heading"
  style={{ marginTop: "40px" }}
>
  <b className="purple bold-link">Team Projects (Multi-Programmer)</b>
</h2>
<p
  style={{
    color: "white",
    zIndex: 10,
    position: "relative",
    pointerEvents: "auto",
    fontStyle: "italic",
    marginBottom: "20px",
  }}
>
  Projects developed in teams with multiple programmers.
</p>
<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
<ProjectCard
videoTitle="Roots of Ruin Trailer"
videoLink=""
videoHeight="213"
videoWidth="100%"
title="Roots of Ruin"
description={
<h6 style={{ lineHeight: 1.5 }}>
<i className="purple bold-link">May 2026 - Jun 2026</i>
<br></br>
Roots of Ruin is a third-person puzzle adventure built in Unreal
Engine, where the player transforms into different animals and uses
their unique abilities to interact with the environment.
<br></br>
<br></br>
👥 Team: 4 Programmers, 4 Designers, 2 Artists
<br></br>
<br></br>
My contribution:
<br></br>· Architected and implemented the core
shape-shifting, animal ability, and interaction systems
in <span className="purple bold-link">Unreal C++.</span>
<br></br>· Built a modular and data-driven architecture combining
C++, Data Assets, and Blueprint,
allowing animal forms, abilities, animations, and interactions to be
extended without changing the core code.
<br></br>· Implemented gameplay, animation, VFX, cutscenes, and debugging in Unreal Engine.
<br></br>· Collaborated with designers and artists to integrate
gameplay ideas and visual assets into functional and polished game
features.
</h6>
}
/>
</Col>
  <Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "Gracebound Trailer"
              videoLink = ""
              videoHeight = "213"
              videoWidth = "100%"
              title="Gracebound"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple bold-link">Jan 2026 - Feb 2026</i><br></br>
              Gracebound is a fast-paced single-player hack-and-slash action game focused on fluid combat, combo chaining, and ability-driven arena encounters.
                  <br></br>
                  <br></br>👥 Team: 3 Programmers, 4 Designers
                  <br></br>
              <br></br>My contribution: <br></br>· Designed and implemented a modular <span className="purple bold-link">action-combat</span> framework supporting combo chains, dash-cancels, and ability interruption inspired by Hades.
                  <br></br>· Built a flexible policy-based action system allowing actions to interrupt and override each other, enabling high player control and future extensibility.
                  <br></br>· Architected a data-driven ability framework (ScriptableObject-based) integrating animation events, hit detection, and gameplay effects.
              <br></br>· Implemented a code-driven animation control pipeline, decoupling gameplay logic from Unity’s Animator state transitions for greater flexibility and scalability.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://futuregames.itch.io/gracebound"
            />
          </Col>
  <Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "Starbeat Trailer"
              videoLink = "https://www.youtube.com/embed/VWuybmkzGZ4"
              videoHeight = "213"
              videoWidth = "100%"
              title="Starbeat"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple bold-link">Nov 2025</i><br></br>
              Starbeat is an accessible and addictive rhythm game where you dream of catching stars as an astronaut exploring spectacular planets. 
                  <br></br>
                  <br></br>👥 Team: 4 Programmers, 3 Artists, 5 Designers
                  <br></br>
              <br></br>My contribution: <br></br>· Architected the core <span className="purple bold-link">rhythm gameplay system</span>, ensuring beat-accurate interactions and responsive player feedback.
  
                  <br></br>· Built and iterated a <span className="purple bold-link">Unity–FMOD</span> level editing pipeline, enabling designers to author rhythm sequences efficiently.
                  <br></br>· Collaborated closely with designers and audio developers to continuously polish gameplay feel through rapid iteration.
              <br></br>· Refined 3D note movement and timing behavior to enhance clarity, readability, and overall player feel.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://futuregames.itch.io/starbeat"
            />
          </Col>
          
  <Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "Seabird Project"
              videoLink = "https://www.youtube.com/embed/3BfYPKANWiU"
              videoHeight = "213"
              videoWidth = "100%"
              title="Jump!"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple bold-link">Sep 2020 - Dec 2020</i><br></br>
              Jump! is a collaborated work with the University of Skövde, WWF, and SLU with the aim of increasing interest towards the seabirds living in the Baltic Sea. 
                  <br></br>
                  <br></br>👥 Team: 2 Programmers, 2 Artists
                  <br></br>
              <br></br>My contribution: <br></br>· Implemented most of game features with C# and Unity.         
                  <br></br>· Satisfying third person character controller using <span className="purple bold-link">Cinemachine</span>.
                  <br></br>· Worked with artists to polish animation system, AI system, and <span className="purple bold-link">Shadergraph</span>, created shader objects for the game environment and interaction system to improve the player experience.
              <br></br>· Implemented game progression system, save system, quick time events (QTE) system etc.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://jiaqu-wu.itch.io/jump"
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
              <i className="purple bold-link">Nov 2021 - Dec 2021</i><br></br>
              This project was an attempt by me and a few other developers to develop a <span className="purple bold-link">Steam online multiplayer</span> demo using Unreal4 at a Game Jam and ended up with a mini game that could be played by multiple players through Steam network.
                  <br></br>
                  <br></br>👥 Team: 2 Programmers, 3 Artists
                  <br></br>
              <br></br>My contribution: 
                  <br></br>· Implemented the multiplayer online marble mini game system using Unreal and Blueprint within the <span className="purple bold-link">Unreal-Steam multiplayer network framework</span>. 
              <br></br>·  Researched solutions for Steam online games through various sources and finally configured a viable solution, and migrated project code from Unity to Unreal's blueprints.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
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
              <i className="purple bold-link">Jul 2019 - Sep 2019</i><br></br>
              Call of Wind is a 2d puzzle platformer game that I worked on with other student developers for around two months in 2019, and it won a prize in a student game development competition in China at the time.
                  <br></br>
                  <br></br>👥 Team: 2 Programmers, 2 Artists, 1 Designer
                  <br></br>
              <br></br>My contribution:
              <br></br>· Design and implemented wind-related puzzles and game mechanics.
              <br></br>· Constantly optimised and iterated on game details based on player feedback.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
               demoLink="https://jiaqu-wu.itch.io/call-of-wind-v10"      //<--------Please include a demo link here 
            />
          </Col>
  {/* ✅ 把 Jump / Online Project / Call of Wind / 你新增的2个（多程序员）卡片放这里 */}
  {/* 建议这一组用 md={6} 让两列更舒服 */}
</Row>

{/* ===================== */}
{/* Projects as Sole Programmer */}
{/* ===================== */}
<h2
  id="SoleProgrammer"
  className="project-heading"
  style={{ marginTop: "40px" }}
>
  <b className="purple bold-link">Projects as Sole Programmer</b>
</h2>
<p
  style={{
    color: "white",
    zIndex: 10,
    position: "relative",
    pointerEvents: "auto",
    fontStyle: "italic",
    marginBottom: "20px",
  }}
>
  Projects where I was the only programmer (solo or with artists/designers).
</p>

<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  {/* ✅ 把其它所有项目卡片（唯一程序员 / solo）+ 新增的2个放这里 */}
  {/* 建议这一组保持 md={4} 三列 */}
  <Col md={4} className="project-card"> <ProjectCard videoTitle="3D Snake" videoLink="https://www.youtube.com/embed/I0FJx3IJ0ls" videoHeight="213" videoWidth="100%" title="3D Snake" description=<h6 style={{lineHeight:1.5}}> 
    <i className="purple bold-link">Mar 2026 - Apr 2026</i><br></br> 
    A 3D reinterpretation of the classic Snake game, built with Unreal Engine 5 and C++. It expands the traditional grid into layered 3D spaces with six-direction movement, and features single-player, local co-op, and competitive battle modes, with the option to play alongside or against an AI-controlled snake. <br></br> <br></br>👤 <span className="purple bold-link">Solo project</span>

  <br></br>
  <br></br>· Implemented the core gameplay systems entirely in <span className="purple bold-link">C++</span>, including the 3D grid, movement, body-following, collision, game modes, and stage progression, while using Blueprints mainly for UI and presentation. <br></br>· Built local split-screen support for co-op and battle modes, including independent scoring and configurable human or AI-controlled players. <br></br>· Developed a reusable AI component that targets food while avoiding walls, itself, and other snakes. <br></br>· Improved spatial readability through wireframe materials, depth cues, and layer-based color coding.
</h6>
isGithub="true"
ghLink="https://github.com/JiaquWu/UnrealSnake"
//demoLink=""

/>

</Col>
  <Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "AI Life Simulation"
              videoLink = "https://www.youtube.com/embed/VzQqo-MGH0Q"
              videoHeight = "213"
              videoWidth = "100%"
              title="AI Life Simulation"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple bold-link">Dec 2025</i><br></br>
              A lightweight Unity 2D AI life simulation where predators, prey, and food interact through utility-based decision-making, steering behaviors, and UI-driven parameter tuning to observe emergent behavior, and made in a week.
                  <br></br>
                  <br></br>👤 <span className="purple bold-link">Solo project</span> 

                  <br></br>
              <br></br>· Designed a modular AI architecture inspired by GOAP and Utility AI, enabling agents to dynamically evaluate survival priorities.
                  <br></br>· Implemented a utility-driven action selection system decoupled from steering behaviors to support scalable and extensible simulation logic.
<br></br>· Built a shared movement pipeline (goal seeking, avoidance, boundary steering, optional flocking) to unify agent locomotion.
<br></br>· Developed runtime parameter controls and visual debugging tools to experiment with and observe emergent behaviors.
              </h6>
              isGithub = "true"
              ghLink="https://github.com/JiaquWu/AI-Life-Simulation"
              //demoLink=""
            />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
              videoTitle = "MapleSurvivor"
              videoLink = "https://www.youtube.com/embed/uhc3aZbXWe0"
              videoHeight = "213"
              videoWidth = "100%"
              title="Vampire Survivor Project"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple bold-link">Oct 2025</i><br></br>
              A modular, data-driven bullet-heaven game built in Unity, focused on scalable entity architecture, performance optimization, and maintainable gameplay systems for large-scale enemy simulations, and made in 2 weeks.
                  <br></br>
                  <br></br>👤 <span className="purple bold-link">Solo project</span> 

                  <br></br>
              <br></br>· Designed a modular entity architecture separating configuration, runtime logic, and presentation to support scalable content expansion.
                  <br></br>· Implemented a data-driven gameplay framework enabling reusable enemy definitions, upgrade systems, and stat scaling without modifying core code.
<br></br>· Built a high-performance object pooling and centralized update pipeline to efficiently handle large numbers of enemies and projectiles.
<br></br>· Structured the project with long-term extensibility in mind, supporting future features such as co-op, save systems, and expanded ability mechanics.
              </h6>
              isGithub = "true"
              ghLink="https://github.com/JiaquWu/MapleSurvivors"
              //demoLink=""
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
              <i className="purple bold-link">Jul 2022 - Sep 2022</i><br></br>
              It's a game project that I have alone which contains basic features of the <span className="purple bold-link">auto-battler</span> game genre in single player game mode with Unity, including some of the more complex but interesting game systems:
<br></br>
                  <br></br>👤 <span className="purple bold-link">Solo project</span> 

                  <br></br>
              <br></br>· Utilized <span className="purple bold-link">A-star</span> algorithm to implement a dynamic pathfinding system for the champion during combat, and a <span className="purple bold-link">finite state machine</span> was used to implement changes in the champion's behaviour in different states, which together implemented the champion's AI system.
                  <br></br>· Built the champion's <span className="purple bold-link">attributes system</span>, <span className="purple bold-link">buff system</span>, and <span className="purple bold-link">ability system</span> using Scriptable Objects and C# object-oriented features. These together with the game's event system provide a solid infrastructure that allows for highly scalable game development and greatly reduces code coupling.

              </h6>
              isGithub = "true"
              ghLink="https://github.com/JiaquWu/CardGamePractice"
              //demoLink=""
            />
          </Col>
<Col id="Personal-projects-4-6" md={4} className="project-card">
            <ProjectCard  
              title="FPS Project"
              videoTitle = "FPS Project"
              videoLink = "https://www.youtube.com/embed/MJjFWTQX8S4"
              videoHeight = "213"
              videoWidth = "100%"
              description=<h6 style={{lineHeight:1.5}}>
              <i className="purple bold-link">Oct 2022</i><br></br>
              A first person shooter game prototype built with Unreal 5 and C++ in 2 weeks.
                  <br></br>
                  <br></br>👤 <span className="purple bold-link">Solo project</span> 
                  <br></br>
              <br></br>Main game features:
                  <br></br>· Implemented action component and attribute componenent for <span className="purple bold-link">game ability system</span> and character attributes.
                  <br></br>· Utilized <span className="purple bold-link">environment query system</span> and <span className="purple bold-link">behaviour tree</span> to created AI system.
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
              <i className="purple bold-link">Dec 2022</i><br></br>
              A 3d top-down Sokoban puzzle game built with Unity in a week, used for a friend's <a href="https://www.diva-portal.org/smash/record.jsf?dswid=2694&pid=diva2%3A1810059&c=1&searchType=SIMPLE&language=en&query=qian+lin&af=%5B%22topOrganisationId%3A81%22%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all" className="purple bold-link">thesis</a>,
                  researching the impact of dynamic game difficulty balancing on player user experience in puzzle games.
                  <br></br>
                  <br></br>👥 Team: 1 Programmers, 1 Artist/Level Designer
                  <br></br>
              <br></br>Main game features: 
                  <br></br>· Implemented a <span className="purple bold-link">grid-based</span> level design tool, and A Monster's Expedition-like character controller.
                  <br></br>· Implemented a <span className="purple bold-link">dynamic difficulty adjustment system</span> for the research purpose, the idea is that the level elements would change if the player has spent a lot of time on a level.
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
              <i className="purple bold-link">Mar 2021 - May 2021</i><br></br>
              A serious idle game prototype that I worked on with a friend for his <a href="https://www.diva-portal.org/smash/record.jsf?dswid=2694&pid=diva2%3A1574845&c=1&searchType=SIMPLE&language=en&query=siyuan+wang&af=%5B%22topOrganisationId%3A81%22%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all" className="purple bold-link">thesis</a>, it's designed to help procrastinators reduce academic procrastination.
                  <br></br>
                  <br></br>👥 Team: 1 Programmer, 1 Artist/Designer
                  <br></br>
              <br></br>Main game features:
                  <br></br>· Implemented a solid game <span className="purple bold-link">save system</span> with different save slots by using <span className="purple bold-link">JSON</span> for serializing and deserializing game object.
                  <br></br>· Implemented game time system and economic system for idle game features by calculating <span className="purple bold-link">real time</span>.
              </h6>
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://jiaqu-wu.itch.io/procrastinationsg"
            />
          </Col>
                  <Col id="Personal-projects-7-8" md={4} className="project-card">
            <ProjectCard 
              videoTitle = "Buddy"
              videoLink = "https://www.youtube.com/embed/jEAGbsIGn2E"
              videoHeight = "213"
              videoWidth = "100%"
              title="Buddy"
              description=<h6 style={{lineHeight:1.5}}>
                <i className="purple bold-link">Feb 2022 - May 2022</i><br></br>
                  This game project is my thesis work for my Master's degree at the University of Skövde, and I finished the whole project and <a href="http://www.diva-portal.org/smash/record.jsf?dswid=4471&pid=diva2%3A1676937&c=1&searchType=SIMPLE&language=en&query=jiaqu&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all" className= "purple bold-link">thesis</a> by myself, excluding the artwork. 
              <br></br>The game was originally designed to see if the player could understand the rules and get the "every life counts" message that I wanted to send to the player without providing explicit explanation of the rules to the player. Overall I spent more effort on the game design than on the programming.
                  <br></br>
                  <br></br>👥 Team: 1 Programmer, 1 Artist
                  <br></br>
              <br></br>Main game features: 
                  <br></br>· Implemented <span className="purple bold-link">undo system</span> with different game objects and commands from players by using new input system in Unity and command pattern.
              </h6> 
              
              ghLink="https://github.com/JiaquWu/ThesisProject"
              demoLink="https://jiaqu-wu.itch.io/buddy-a"// <--------Please include a demo link here
              isGithub = "true"
            />
          </Col>
</Row>
              {/* <Row id="Personal-projects-1-3" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          

          

                  

          
          
        </Row> */}
              <Row id="Other-projects" style={{ justifyContent: "center", paddingBottom: "20px"}}>
        <LargeProjectCards 
              videoTitle = "Other Projects"
              videoLink = "https://www.youtube.com/embed/skx8nTCCy2A"
              videoHeight = "720"
              videoWidth = "1280"
              // imgPath={chatify}
                      title="Other Projects"
                      description=<h6 style={{ lineHeight: 1.5 }}>This is a collection of videos of games that I have also worked on in addition to those above, they are all available at <a href="https://jiaqu-wu.itch.io" className="purple bold-link">jiaqu-wu.itch.io</a> for more information and can be played online or downloaded.
              </h6> 
            />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
