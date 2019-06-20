import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutBackground">
                <Navbar />
                <Jumbotron title="About" subtitle="Who am I?" />
                <div className="aboutSideBar">
                    <p>
                        This is there the side bar will go for the about page
                    </p>
                </div>
                <div className="aboutCushBar"> </div>
                <div className="aboutMe">
                    <p>
                        <h2>About</h2>
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

export default About