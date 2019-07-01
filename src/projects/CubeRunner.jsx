import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './CubeRunner.css';

class CubeRunner extends Component {
    render() {
        return (
            <div>
                <div className="background">
                    <Navbar />
                    <Jumbotron title="Cube Runner" subtitle="2018" />
                    <div className="cushBar"> </div>
                    <div className="bio">
                        <p>
                            Random stuff here
                        </p>
                    </div>
                <Footer />
                </div>
            </div>
        );
    }
}

export default CubeRunner