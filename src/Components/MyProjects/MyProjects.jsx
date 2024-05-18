import React, { useState } from 'react';
import './MyProjects.css';
import myProjects from '../../assets/mywork_data.js';

const MyProjects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div className="my-projects" id="my-projects">
            <div className="projects-titles">
                <h1>My Latest Projects</h1>
            </div>
            <div className="projects-container">
                {myProjects.map((item, index) => (
                    <div
                        key={index}
                        className={`project-item ${hoveredProject === index ? 'hover' : ''}`}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <a href={item.w_url} target="_blank" rel="noopener noreferrer">
                            <img src={item.w_img} alt={`Project ${index + 1}`} />
                        </a>
                        <div className="button-container">
                            <button className="project-button">
                                <a href={item.g_hub} target="_blank" rel="noopener noreferrer">GIT HUB</a>
                            </button>
                            <h4>{item.w_name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;
