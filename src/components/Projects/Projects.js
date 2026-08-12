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
  {
    key: "ProfessionalProjects",
    title: "Professional Projects",
    children: [
      { key: "GoblinGetaway", title: "Goblin Getaway" },
      { key: "Locomoto", title: "Locomoto" },
      { key: "Receiver2", title: "Receiver 2" },
    ],
  },
  { key: "MultiProgrammer", title: "Team Projects (Multi-Programmer)" },
  { key: "SoleProgrammer", title: "Projects as Sole Programmer" },
  { key: "Other-projects", title: "Other projects" }
];

function scrollToProjectSection(key) {
  const el = document.getElementById(key);
  if (el) {
    const defaultOffset = -90;
    const topOffset = -170;

    const yOffset =
      key === "Locomoto" || key === "ProfessionalProjects"
        ? topOffset
        : defaultOffset;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
          <Container>
              {/* Side navigation */}
              <nav className="side-nav">
                  {groups.map((g) => (
                    <div key={g.key} className={g.children ? "nav-group" : undefined}>
                      <a
                        href={`#${g.key}`}
                        className={`nav-link ${g.children ? "nav-parent" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToProjectSection(g.key);
                        }}
                      >
                        {g.title}
                      </a>
                      {g.children && (
                        <div className="nav-submenu">
                          {g.children.map((child) => (
                            <a
                              key={child.key}
                              href={`#${child.key}`}
                              className="nav-link nav-sublink"
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToProjectSection(child.key);
                              }}
                            >
                              {child.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
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
        <h2
          id="ProfessionalProjects"
          className="project-heading"
          style={{ marginTop: "40px" }}
        >
          <b className="purple bold-link">Professional Projects</b>
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
          Released and announced titles from professional game development work.
        </p>
              <Row id="GoblinGetaway" style={{ justifyContent: "center", paddingBottom: "20px"}}>
                  <LargeProjectCards
              videoTitle = "Goblin Getaway"
              videoLink = "https://www.youtube.com/embed/Nrnvey4fs1s"
              videoHeight = "720"
              videoWidth = "1280"
              title=<a href="https://store.steampowered.com/app/4193660/Goblin_Getaway/" target="_blank" rel="noreferrer" className="purple bold-link">Goblin Getaway</a>
              description = <h6 style={{lineHeight:1.5}}>
                <i className="purple bold-link">Oct 2025 - Now</i><br></br>
                      My contribution:<br></br>· Working across gameplay features, game systems, and development tools for Goblin Getaway as the project continues production with the team.
                      <br></br>· A more detailed breakdown of my work will be added here later, once more of the project can be shown publicly.
              </h6>
            />
        </Row>
              <Row id="Locomoto" style={{ justifyContent: "center", paddingBottom: "20px"}}>
                  <LargeProjectCards
                      
              videoTitle = "Locomoto"
              videoLink = "https://www.youtube.com/embed/JiR_MJAEnCA"
              videoHeight = "720"
              videoWidth = "1280"
              // imgPath={chatify}
              title=<a href="https://store.steampowered.com/app/2328650/Locomoto/" target="_blank" rel="noreferrer" className="purple bold-link">Locomoto</a>
              description = <h6 style={{lineHeight:1.5}}>
                <i className="purple bold-link">Feb 2023 - Aug 2025</i><br></br>
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
              title=<a href="https://store.steampowered.com/app/1129310/Receiver_2/" target="_blank" rel="noreferrer" className="purple bold-link">Receiver 2</a>
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
Roots of Ruin is a third-person puzzle adventure built in Unreal Engine, where the player transforms into different animals and uses their unique abilities to interact with the environment.
<br></br>
<br></br>
👥 Team: 4 Programmers, 4 Designers, 2 Artists
<br></br>
<br></br>
My contribution:
<br></br>· Architected and implemented the core shape-shifting, animal ability, and interaction systems in <span className="purple bold-link">Unreal C++</span>, supporting multiple animal forms with different gameplay behaviors.
<br></br>· Built a <span className="purple bold-link">data-driven C++ / Data Asset / Blueprint</span> setup that connected animal definitions with abilities, animations, and world interactions.
<br></br>· Integrated gameplay code with animation, VFX, cutscenes, and Blueprint content, handling the full path from gameplay logic to in-engine presentation.
<br></br>· Worked closely with designers and artists to prototype, iterate, and polish animal abilities and environmental interactions.
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
              <br></br>My contribution: <br></br>· Built the core <span className="purple bold-link">action-combat system</span>, including combo chains, dash cancels, and rules for actions interrupting or overriding one another, inspired by Hades.
                  <br></br>· Built a <span className="purple bold-link">ScriptableObject-based ability system</span> connecting abilities with animation events, hit detection, and gameplay effects.
                  <br></br>· Implemented a <span className="purple bold-link">code-driven animation control system</span>, keeping gameplay logic independent from Unity Animator state transitions.
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
              Starbeat is a rhythm game where you play as an astronaut catching stars while traveling across different planets.
                  <br></br>
                  <br></br>👥 Team: 4 Programmers, 3 Artists, 5 Designers
                  <br></br>
              <br></br>My contribution: <br></br>· Built the core <span className="purple bold-link">rhythm gameplay system</span> for beat-accurate interactions and responsive player feedback.
                  <br></br>· Built and iterated a <span className="purple bold-link">Unity-FMOD level editing pipeline</span>, allowing designers to author and adjust rhythm sequences efficiently.
                  <br></br>· Worked closely with designers and audio developers to iterate on timing, note movement, readability, and overall gameplay feel.
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
                  <br></br>· Satisfying third person character controller using Cinemachine.
                  <br></br>· Worked with artists to polish animation system, AI system, and <span className="purple bold-link">Shadergraph</span>, created shader objects for the game environment and interaction system to improve the player experience.
              <br></br>· Implemented game progression system, save system, <span className="purple bold-link">quick time events (QTE) system</span> etc.
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
  {/* Team project cards */}
  {/* Keep this group readable on larger screens. */}
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
  {/* Solo project cards */}
  {/* Keep this group at three columns on desktop. */}
  <Col md={4} className="project-card"> <ProjectCard videoTitle="3D Snake" videoLink="https://www.youtube.com/embed/I0FJx3IJ0ls" videoHeight="213" videoWidth="100%" title="3D Snake" description=<h6 style={{lineHeight:1.5}}>
    <i className="purple bold-link">Mar 2026 - Apr 2026</i><br></br>
    A 3D reinterpretation of the classic Snake game, built with Unreal Engine 5 and C++. It expands the traditional grid into layered 3D spaces with six-direction movement, and includes single-player, local co-op, and competitive battle modes with human or AI-controlled snakes.
    <br></br>
    <br></br>👤 <span className="purple bold-link">Solo project</span>
    <br></br>
    <br></br>My contribution:
    <br></br>· Implemented the core gameplay entirely in <span className="purple bold-link">C++</span>, including the <span className="purple bold-link">3D grid</span>, movement, body-following, collision, game modes, and stage progression, while using Blueprints mainly for UI and presentation.
    <br></br>· Built <span className="purple bold-link">local split-screen</span> support for co-op and battle modes, with independent scoring and configurable human or AI-controlled players.
    <br></br>· Developed an <span className="purple bold-link">AI-controlled snake</span> that targets food while avoiding walls, itself, and other snakes.
    <br></br>· Improved spatial readability through wireframe materials, depth cues, and layer-based color coding.
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
              A lightweight Unity 2D AI life simulation built in one week, where predators, prey, and food interact through Utility AI, steering behaviors, and tunable simulation parameters.
                  <br></br>
                  <br></br>👤 <span className="purple bold-link">Solo project</span>
                  <br></br>
              <br></br>My contribution:
                  <br></br>· Built an AI decision-making system inspired by <span className="purple bold-link">GOAP and Utility AI</span>, allowing agents to evaluate changing survival priorities.
                  <br></br>· Separated <span className="purple bold-link">action selection</span> from <span className="purple bold-link">steering behaviors</span>, keeping decision-making and movement logic independent.
                  <br></br>· Built a shared steering system for goal seeking, avoidance, boundary steering, and optional flocking.
                  <br></br>· Developed <span className="purple bold-link">runtime parameter controls</span> and visual debugging tools for experimenting with and observing emergent behavior.
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
              A bullet-heaven game built in Unity over two weeks, focused on handling large numbers of enemies and projectiles while keeping gameplay systems easy to expand.
                  <br></br>
                  <br></br>👤 <span className="purple bold-link">Solo project</span>
                  <br></br>
              <br></br>My contribution:
                  <br></br>· Separated <span className="purple bold-link">entity configuration, runtime logic, and presentation</span>, making enemies and other gameplay entities easier to define and modify independently.
                  <br></br>· Built a <span className="purple bold-link">data-driven gameplay system</span> for reusable enemy definitions, upgrades, and stat scaling.
                  <br></br>· Implemented object pooling and a <span className="purple bold-link">centralized update loop</span> to efficiently handle large numbers of enemies and projectiles.
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
                  <br></br>· Implemented action component and attribute componenent for <span className="purple bold-link">game ability system(GAS)</span> and character attributes.
                  <br></br>· Utilized <span className="purple bold-link">environment query system(EQS)</span> and <span className="purple bold-link">behaviour tree</span> to created AI system.
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
