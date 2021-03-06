import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Mysteria.css';

class Mysteria extends Component {
    render() {
        return (
            <div>
                <div className="background"/>
                <div className="projectContent">
                    <Navbar />
                    <Jumbotron title="Mysteria" subtitle="2018 - Current" />
                    <div className="leftPics">
                        <img id="picFormat" src={require('../images/Mysteria2.PNG')} height="300" width="300" alt="MysteriaImg2"
                            title="Picture of my in progress Mysteria RPG game" />
                        <img src={require('../images/Mysteria3.PNG')} height="300" width="300" alt="MysteriaImg3"
                            title="Picture of my in progress Mysteria RPG game" />
                    </div>
                    <div className="rightPics">
                        <img id="picFormat" src={require('../images/Mysteria4.PNG')} height="300" width="300" alt="MysteriaImg4"
                            title="Picture of my in progress Mysteria RPG game" />
                        <img src={require('../images/Mysteria5.png')} height="300" width="300" alt="MysteriaImg5"
                            title="Picture of my in progress Mysteria RPG game" />
                    </div>
                    <div className="container">
                        <p>
                            <h2>Background</h2>

                            I have always been a big fan of games allowing you to gain experience, level
                            up, and forge your path based on your decisions. The challenge of visioning myself as the
                            character and making choices portrays a lifelike senario many players find enjoyable. The main structure
                            of this game is based on the player solving major quests, along with various optional side-quests that although not
                            mandatory, may provide an advantage to completing the main storyline.
                            <br /><br />
                            <h2>Development</h2>

                            Mysteria was created using the Unity game development engine. I considered using other engines, such as Unreal or GameMaker,
                            however many friends and professors recomended starting off with this engine, so I decided to use Unity. This knowledge
                            helped me greatly the following semester being apart of the Game Development Club on campus, where they primarly use Unity.
                            I was able to teach multiple members how to create their own games, and develop in groups. 
                            <br /><br />
                            To write the scripts, I used C# within Visual Studios. I decided to use this language because, although
                            it was my first time learning it, I am very fond of C++, and wanted to experience a
                            new language. 
                            <br /><br />
                            Mysteria needed a pathing algorithm for enemies as well as friendly NPC's to follow the player, so I decided to
                            impliment A* pathing. I used this pathing algorithm instead of a simple 'follow target' function
                            because the game was tile based. Enemies often got stuck on objects and I wanted to limit
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

export default Mysteria