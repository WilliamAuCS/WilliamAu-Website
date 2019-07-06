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
                    <div className="leftPics">
                        <img id="picFormat" src={require('../images/CubeRunner2.PNG')} height="300" width="300" alt="CubeRunnerImg2"
                            title="My first Unity game" />
                        <img src={require('../images/CubeRunner4.PNG')} height="300" width="300" alt="CubeRunnerImg4"
                            title="My first Unity game" />
                    </div>
                    <div className="rightPics">
                        <img id="picFormat" src={require('../images/CubeRunner5.PNG')} height="300" width="300" alt="CubeRunnerImg5"
                            title="My first Unity game" />
                        <img src={require('../images/CubeRunner6.PNG')} height="300" width="300" alt="CubeRunnerImg6"
                            title="My first Unity game" />
                    </div>
                    <div className="container">
                        <p>
                            <h2>Background</h2>

                            Cube Runner was my very first game created using the Unity engine. I used this project as a 'test' to learn the 
                            basics and capabilities of this engine, and see what larger games I could make with it in the future. 
                            <br /><br />
                            When I opened Unity for the first time, I was lost. I did not know where to start or even what the engine was 
                            capable of. I watched multiple YouTube tutorial videos, as well as dozens of StackOverflow posts to familiarize
                            myself with the engine. After understanding the basics of the program, I started my 'test' project, Cube Runner. 
                            <br /><br />
                            <h2>Development</h2>

                            Cube Runner, being my first project created using Unity, was extremly beneficial in learning how the engine worked. 
                            It allowed me to become familiar with physics, such as RigidBody3D and surface friction. I have used these multiple
                            times in the future for larger projects, such as in Mysteria. Creating this game also allowed me to learn the basics
                            of UI creation, such as creating simple Menu screens and even an Options menu, allowing the payer to configure the system
                            from within the game. 
                            <br /><br />
                            To write the scripts in this project, I used C# within Visual Studios. I decided to use this language because, although
                            it was my first time learning it, and I did have more experience in the other option, Java, I wanted to experience a
                            new language and see how it felt, expecially because many of my friends favorite langague is C#. I also have a large
                            amount of experience in C++, so I was hoping it was very similar.
                            <br /><br />
                            Mysteria needed a pathing algorithm for enemies as well as friendly NPC's to follow the player, so I decided to
                            impliment A* pathing. I used this pathing algorithm instead of a simple 'follow target' function I could have simply
                            created myself because since the game was tile based, enemies often got stuck on objects and I wanted to limit
                            players abusing this exploit. A* pathing proved to work very well for what I needed with minimal alterations.
                            <br /><br />
                        </p>
                    </div>
                <Footer />
                </div>
            </div>
        );
    }
}

export default CubeRunner