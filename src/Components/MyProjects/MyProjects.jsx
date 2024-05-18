import React,{useState} from 'react';
import './MyProjects.css';
import myProjects from '../../assets/mywork_data.js';




const MyProjects = () => {
    const [hoverdProject, setHoveredProject] = useState(null);
    return (
        <div className="my-projects" id={"my-projects"}>
            <div className="projects-titles">
                <h1>My Latest Projects</h1>
            </div>
            <div className="projects-container">
                {myProjects.map((item, index) => (
                    <div key={index} className="project-item" onMouseEnter={() => setHoveredProject(index)}
                         onMouseLeave={() => setHoveredProject(null)}>
                        <a href={""}><img src={item.w_img} alt={`Project ${index + 1}`}/></a>
                        {hoverdProject === index && (
                            <div className={"button-container"}>
                                <button className={"project-button"}><a href={""}>GIT HUB</a></button>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;
