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
                            Back in <strong>2018</strong>, while attending university, I discovered that making games was not just a hobby-it was my <strong>true calling</strong>, a passion guiding every step of my journey since then. Starting from scratch, I began teaching myself <b className="purple">C#</b> and <b className="purple">Unity</b>, actively participating in numerous Game Jams, and creating a wide range of <a href="https://jiaqu-wu.itch.io/" className="purple bold-link"> mini-games</a> to steadily hone my skills.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            In <strong>2020</strong>, I moved to Sweden to further pursue this passion professionally. During my two years of studies here, I contributed as a game programmer to several game projects and had the opportunity to intern at <a href="https://www.blackdropinteractive.com/" className="purple bold-link"> Blackdrop Interactive</a>, where I made contributions to <a href="https://store.steampowered.com/app/1129310/Receiver_2/" className="purple bold-link">Receiver 2</a>. After completing my studies, I joined <a href="https://greentiledigital.com/" className="purple bold-link"> Green Tile Digital</a> and spent more than two years as a <b className="purple">Gameplay Programmer</b> on <a href="/#/Locomoto" className="purple bold-link">Locomoto</a>
                             , significantly contributing to the development of many core gameplay systems and features.
                        </p>

                        {/* —— Skills & Expertise —— */}
                        <h2 className="section-heading">Skills &amp; Expertise</h2>
                        <p className="locomoto-intro-desc white-text">
                            Throughout the years, I've continuously strengthened my proficiency with <b className="purple">C# and Unity</b>, comfortably utilizing them to implement a diverse array of gameplay features, interactive systems, and development tools. While there's always more to learn, I'm confident in my ability to create clean, robust, and extensible solutions using object-oriented programming principles.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            Additionally, I have experience with <b className="purple">Unreal Engine's Blueprints</b> and am actively developing my skills in <b className="purple">C++</b> for future personal projects. I'm also proficient with version control tools like <b className="purple">Git</b>, <b className="purple">Plastic</b>, and <b className="purple">Perforce</b>, ensuring efficient team collaboration.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            My passion lies in implementing engaging gameplay mechanics and polished game features. I enjoy iterating and refining these systems extensively, always aiming to deliver an outstanding player experience. I also excel at developing custom tools to support my team and rapidly resolve technical challenges.
                        </p>
                        <p className="locomoto-intro-desc white-text">
                            I thrive on diving deeply into complex systems, effectively utilizing various tools and plugins to overcome technical challenges, and continuously pushing my skills and expertise further in the fascinating and ever-evolving world of game development.
                        </p>
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
