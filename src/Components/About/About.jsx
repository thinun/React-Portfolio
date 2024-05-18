import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_me.jpg'

const About = () => {
    return (
        <div className={"about"} id={"about"}>
            <div className={"about-title"}>
                <h1>About Me</h1>

            </div>
            <div className={"about-section"}>
                <div className={"about-left"}>
                    <img src={profile_img} alt={"Profile Image"}/>
                </div>
                <div className={"about-right"}>
                    <div className={"about-content"}>
                        <p>Hey there! I'm Thinun, a passionate software engineer with a background in applied sciences,
                            including computer science and physics. I made the leap from a career in production to
                            pursue my true calling in coding, and I haven't looked back since. I thrive on challenges
                            and love to explore new technologies.
                        </p>
                        <p>
                            Whether it's crafting sleek user interfaces or building robust web applications, I'm
                            always up for the task. When I'm not immersed in lines of code, you can find me indulging in
                            my hobbies—binge-watching the latest TV shows or diving into immersive computer games. I'm
                            on a constant quest for knowledge and growth, eager to tackle new projects and contribute my
                            skills to innovative teams. Let's connect and bring ideas to life through code!
                        </p>
                    </div>
                    <div className={"about-skill"}>
                        <div className={"skill"}>
                            <div className={"skill-name"}>HTML & CSS</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "70%"}}/>
                            </div>
                        </div>
                        <div className={"skill"}>
                            <div  className={"skill-name"}>Java Script</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "60%"}}/>
                            </div>
                        </div>
                        <div className={"skill"}>
                            <div className={"skill-name"}>React</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "60%"}}/>
                            </div>
                        </div>
                        <div className={"skill"}>
                            <div className={"skill-name"}>Python</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "85%"}}/>
                            </div>
                        </div>
                        <div className={"skill"}>
                            <div className={"skill-name"}>Tkinter</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "70%"}}/>
                            </div>
                        </div>
                        <div className={"skill"}>
                            <div className={"skill-name"}>Flask</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "60%"}}/>
                            </div>
                        </div>
                        <div className={"skill"}>
                            <div className={"skill-name"}>MySQL</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "60%"}}/>
                            </div>
                        </div>
                        <div className={"skill"}> <div  className={"skill-name"}>SQLAlchemy</div>
                            <div className={"skill-level"}>
                                <hr style={{width: "60%"}}/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;