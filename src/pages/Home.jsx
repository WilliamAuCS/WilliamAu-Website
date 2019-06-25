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
                            <br />
                            Computer Science is not simply a major, a job, or even a hobby. Computer Science is the future. Technology not only
                            connects our world together, it saves lives in the medical field with persicion and speed unmatched by humans,
                            stores incredible amounts of information in databases essential to buisnesses, and gives us the ability to grow
                            past our wildest dreams. The possibilities are endless. <br /> <br />
                            Technology is 
                        </p>
                    </div>
                <Footer />
                </div>
            </div>
        );
    }
}

export default Home