import React, { Component } from 'react';
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
                    <p>
                        This is there the side bar will go for the project page
                    </p>
                </div>
                <div className="projectCushBar"> </div>
                <div className="projectOverview">
                    <p>
                        <h2>Projects</h2>
                        The projects listed below are projects completed independently from my course work. Many are projects completed
                        in a team of two or more programmers, however there are also many completed myself. Below each project is a brief
                        description, including a screenshot of the actual project. If you wish to learn more, you may click on the project
                        name and a more in-depth explanation will be given. <br />
                        (If you are not redirected, the page is probably still in progress and will be up soon!)
                        </p>
                </div>
                </div>
            <Footer />
            </div >
        );
    }
}

export default Projects