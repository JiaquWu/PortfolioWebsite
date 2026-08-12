/*eslint-disable unicode-bom */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
//import avatar1 from "../../Assets/avatar1.jpg"
import avatar2 from "../../Assets/avatar2.jpg"
//import itch1 from "../../Assets/itch1.png"    
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram, 
} from "react-icons/ai";
import { FaLinkedinIn,FaItchIo } from "react-icons/fa";

export default function Home2() {
    return (
        <Container fluid className="home-about-section" id="about" style={{ paddingTop: "0rem" }}>
            <Container>
                <Row className="align-items-baseline">
                    <Col md={8} className="home-about-description">

                        {/* —— About Me —— */}
                        <h2 className="section-heading">About me</h2>
                        <p className="locomoto-intro-desc white-text">
                            I have been addicted to video games since I was eight. In <strong>2018</strong>, while I was obsessed with indie games and still unsure what I wanted to do with my future, I happened to watch <strong><em>Indie Game: The Movie</em></strong>. I was deeply inspired by <strong>Jonathan Blow</strong>, his words in the film, his games <strong><em>Braid</em></strong> and <strong><em>The Witness</em></strong>, and the talks he gave over the years. That was when I realized that making games was my <strong>true calling</strong>, and that games are a medium with a unique depth that is hard to fully describe. I knew I wanted to keep exploring that depth for years to come. I began teaching myself <b className="purple">C#</b> and <b className="purple">Unity</b>, took part in numerous game jams, and created a wide range of <a href="https://jiaqu-wu.itch.io/" className="purple bold-link">mini-games</a> and experiments.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            In <strong>2020</strong>, I moved to Sweden to pursue game development more professionally. During my two years of studies there, I worked on several <a href="/#/Project" className="purple bold-link">game projects</a> as a programmer and completed an internship at <a href="https://www.blackdropinteractive.com/" className="purple bold-link">Blackdrop Interactive</a>, where I contributed to <a href="https://store.steampowered.com/app/1129310/Receiver_2/" className="purple bold-link">Receiver 2</a>. After graduating, I joined <a href="https://greentiledigital.com/" className="purple bold-link">Green Tile Digital</a> and spent more than two years working as a <b className="purple">Gameplay Programmer</b> on <a href="/#/Locomoto" className="purple bold-link">Locomoto</a>, from early development through release and post-launch updates.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            From <strong>2025</strong> to <strong>2026</strong>, I studied Game Programming at <a href="https://futuregames.se/program/game-programmer-specialization-stockholm/" className="purple bold-link">Futuregames</a> while continuing to make games with former colleagues outside of school, most notably our announced project <a href="https://store.steampowered.com/app/4193660/Goblin_Getaway/" className="purple bold-link">Goblin Getaway</a>. I am now working full-time on the game with the team, continuing to explore new gameplay ideas and find ways to turn them into something enjoyable, surprising, and worth playing.
                        </p>

                        {/* —— Skills & Expertise —— */}
                        <h2 className="section-heading">Skills &amp; Expertise</h2>
                        <p className="locomoto-intro-desc white-text">
                            <b className="purple">C#</b> and <b className="purple">Unity</b> have been my primary development tools for the past <b className="purple">eight years</b>. I use them to build gameplay mechanics, larger game systems, reusable components, and custom development tools. I also work with <b className="purple">C++</b> and <b className="purple">Blueprints in Unreal Engine</b>, both through personal projects and during my studies at <a href="https://futuregames.se/program/game-programmer-specialization-stockholm/" className="purple bold-link">Futuregames</a>, where I further developed and applied these skills in coursework and game projects. In addition, I have practical experience with version control systems including <b className="purple">Git</b>, <b className="purple">Plastic SCM</b>, and <b className="purple">Perforce</b>.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            Gameplay programming is where I feel most at home. I enjoy taking an idea from its first rough implementation through repeated testing, iteration, and polish until it becomes something that genuinely feels good to play. I am especially drawn to mechanics and systems that can interact in interesting ways, and to figuring out the technical details needed to make those ideas work reliably in a real game.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            I also enjoy the less visible side of development: helping designers, artists, and other programmers solve day-to-day production problems, building tools that make their work easier, and finding practical ways to use and adapt existing systems and plugins when they fit the problem. There is always more to learn, and I want to keep expanding both my technical abilities and my understanding of what games can do, one project at a time.
                        </p>
                        {/*<p className="locomoto-intro-desc white-text">*/}
                            
                        {/*</p>*/}
                    </Col>

                    <Col md={4} className="myAvtar align-self-start" style={{ marginTop: "-2.7rem" }}>
                        <Tilt>
                            <img src={avatar2} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>

                {/* …social links 等保持不变… */}
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/JiaquWu"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
                            <li className="social-icons">
                                <a
                                    href="https://jiaqu-wu.itch.io"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaItchIo />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/jiaqu-wu"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>


                            {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
