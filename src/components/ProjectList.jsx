import React from 'react';
import { Link } from 'react-router';
 
const ProjectsItem = ({ project: { name, type, thumbnail, description, slug }, onClick }) => (
    <li className="project">
        <div className="project__title">
            <h4>{name}</h4>
        </div>
        <div className="project__image">
            <img src={thumbnail} alt={name} />
        </div>
        <div className="project__type">{type}</div>
        <div className="project__description">
            {description}
        </div>
        <Link
            className="project__button"
            to={`/projects/${slug}`}
            onClick={onClick}
        >
                Read More
        </Link>
    </li>
);

const ProjetList = ({ projects, changeProjectBanner }) => (
    <div className="section__allProjects">
        <div className="allProjects__header">
            <h3>Recent Work</h3>
        </div>
        <ul className="allProjects__projectList">
            {
                projects.map((proj, i) => {
                    const boundClick = changeProjectBanner.bind(null, i);
                    return (
                        <ProjectsItem
                            key={proj.slug}
                            project={proj}
                            onClick={boundClick}
                        />
                    );
                })
            }
        </ul>
    </div>
);

export default ProjetList;
