import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import SideBar from '../components/SideBar.jsx';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="background">
                <Navbar />
                <Jumbotron title="William Au" subtitle="Bachelor of Science, Computer Science" />
                <SideBar />
                <div className="cushBar"> </div>
                <div className="bio">
                    <p>
                        <h2>Welcome</h2>
                        This area is filled with random text I am currently writing on the spot. Hopefully this tutorial goes well so I can get experience being a front-end developer
                        and see if it is something I might consider doing in the future. I currently enjoy back-end developing more, however I believe experience in both fields is
                        crutial for a programmer to be at the best of his ability, and provide the best service for his employer.
                    </p>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home