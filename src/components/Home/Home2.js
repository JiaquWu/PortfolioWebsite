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
                        <h2 className="section-heading">About Me</h2>
                        <p className="locomoto-intro-desc white-text">
                            I have been addicted to video games since I was eight. Back in <strong>2018</strong> while I was obesessed with indie games and not sure what future looked like to me, I had a chance to watch <strong><em>Indie Game: The Movie</em></strong>.
                            Deeply inspired by <strong>Jonathan Blow</strong>'s talk in the movie, his games <strong><em>Braid</em></strong>, <strong><em>the Witness</em></strong>, and his speeches in different places, I realized that making games is my <strong>true calling</strong>, and I made up my mind to explore the unspeakable magic and infinite potential in this area where I truly belong.
                            At that time, I started teaching myself <b className="purple">C#</b> and <b className="purple">Unity</b>, participated in numerous Game Jams, and created a wide range of <a href="https://jiaqu-wu.itch.io/" className="purple bold-link"> mini-games</a>.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            In <strong>2020</strong>, I moved to Sweden to further pursue this passion in a more professional way. During my two years of studies in Sweden, I contributed to several <a href="/#/Projects" className="purple bold-link">game projects</a> as a game programmer and had the opportunity to do an internship at <a href="https://www.blackdropinteractive.com/" className="purple bold-link"> Blackdrop Interactive</a>, where I made contributions to <a href="https://store.steampowered.com/app/1129310/Receiver_2/" className="purple bold-link">Receiver 2</a>. After completing my studies, I joined <a href="https://greentiledigital.com/" className="purple bold-link"> Green Tile Digital</a> and spent more than two years as a <b className="purple">Gameplay Programmer</b> on <a href="/#/Locomoto" className="purple bold-link">Locomoto</a>.
                        </p>

                        {/* —— Skills & Expertise —— */}
                        <h2 className="section-heading">Skills &amp; Expertise</h2>
                        <p className="locomoto-intro-desc white-text">
                            In the past 7 years, I've continuously developed my understanding and proficiency with <b className="purple">C# and Unity</b>, and become comfortable using them to implement various gameplay features, game systems, and custom tools.
                            <b className="purple">Unreal Engine's Blueprints</b> and <b className="purple">C++</b> are also in my skill set and I'm actively using them in my personal projects, and I have a solid understanding of some version control systems like <b className="purple">Git</b>, <b className="purple">Plastic</b>, and <b className="purple">Perforce</b>. 
                            While there's always more to learn, I'm confident in my ability to deliver clean, stable, and extensible code using object-oriented programming principles.
                        </p>
                        {/*<p className="locomoto-intro-desc white-text">*/}
                            
                        {/*</p>*/}
                        <p className="locomoto-intro-desc white-text">
                            My strongest passion lies in implementing engaging and creative gameplay mechanics, game systems and polished game features, and I do really enjoy the process of continously iterating and refining them. Creating something new and fun excites me a lot, and I'm always pursuing to craft an enjoyable and memorable player experience. Apart from that, I love helping other developers, developing custom tools to support my team and quickly resolving miscellaneous issues in day-to-day development. I'm always into complex game systems, various tools and plugins to solve technical issues and challenges, and I long to push my skills further in the fantastic world of game development step by step.
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
