import React from 'react';
import { IWorkExperience } from '../../Pages/Resume/const';

const ResumeItem: React.FC<IWorkExperience> = ({ name, url, jobPosition, period, project }) => {
    return (
        <div className="row item">
            <div className="twelve columns">
                <h3>
                    <a target="_blank" rel="noopener noreferrer" href={url}>
                        {name}
                    </a>
                </h3>
                <p className="info">
                    {jobPosition}
                    <br />
                    <span>•</span>
                    <em className="date">{period}</em>
                </p>
                {project.map((item) => (
                    <div className="nes-container with-title ">
                        <p className="title">{item.name}</p>
                        <div className="lists">
                            <ul className="nes-list is-circle">
                                {item.tasks.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResumeItem;
