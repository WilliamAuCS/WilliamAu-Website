import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="projectBackground">
                    <Navbar />
                    <Jumbotron title="My Projects" subtitle="Independent Projects" />
                    <div className="projectSideBar">
                        <div id="project1Image">
                            <p>Mysteria</p>
                        </div>
                        <div id="project2Image">
                            <p>Cube Runner</p>
                        </div>
                    </div>
                    <div className="projectCushBar"> </div>
                    <div className="projects">
                        <p className="overview">
                            <h2>Projects</h2>
                            The projects listed below are projects completed independently from my course work. Many are projects completed
                            in a team of two or more programmers, however there are also many completed myself. Below each project is a brief
                            description, including a screenshot of the actual project. If you wish to learn more, you may click on the project
                            name and a more in-depth explanation will be given. <br />
                            (If you are not redirected, the page is still in progress and will be up soon!)
                        </p>
                        <p className="project1">
                            <Link to="/mysteria"><h2>Mysteria</h2></Link>
                            
                            This project was my first major game created using the Unity Engine. This game is an RPG style, tile based game
                            allowing the player to make decisions that will help progress the storyline, as well as make NPC friends. 
                        </p>
                        <p className="project2">
                            <Link to="/cuberunner"><h2>Cube Runner</h2></Link>

                            This was my first Unity project. Starting off, I used many tutorials learning how to utilize the Unity rigid body
                            system and implimenting physics. The game is playable with multiple complete levels, challenging even the best players. 
                            What is going on here bruj
                        </p>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Projects