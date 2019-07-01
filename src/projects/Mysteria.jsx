import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Mysteria.css';

class Mysteria extends Component {
    render() {
        return (
            <div>
                <div className="background">
                    <Navbar />
                    <Jumbotron title="Mysteria" subtitle="2018 - Current" />
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

export default Mysteria