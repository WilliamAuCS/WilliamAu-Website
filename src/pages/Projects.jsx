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
                <div className="projectMe">
                    <p>
                        <h2>Projects</h2>
                        This area is filled with random text I am currently writing on the spot. Hopefully this tutorial goes well so I can get experience being a front-end developer
                        and see if it is something I might consider doing in the future. I currently enjoy back-end developing more, however I believe experience in both fields is
                        crutial for a programmer to be at the best of his ability, and provide the best service for his employer.
                        </p>
                </div>
                </div>
            <Footer />
            </div >
        );
    }
}

export default Projects