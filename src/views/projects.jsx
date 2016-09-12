import React from 'react';
import { Link, withRouter } from 'react-router';

import _projects from './_projects';

if (process.env.BROWSER) {
    require('stylesRoot/views/projects.scss');
}

//TODO: setup MongoDB with simple API for getting/setting projects

const ProjectsItem = (props) => (
    <li className="project">
        <div className="project__title">
            <h4>{props.project.name}</h4>
        </div>
        <div className="project__image">
            <img src={props.project.thumbnail}/>
        </div>
        <div className="project__description">
            {props.project.description}
        </div>
        <Link 
            className="project__button" 
            to={'/projects/' + props.project.slug} 
            onClick={props.onClick}>Read More</Link>
    </li>
);

class Projects extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
            currentProject: props.projects[0],
            bannerLinks: {}
        }
	}

    changeProjectBanner(projectIndex) {
        if ($(window).width() < 768) {
            $("html, body").animate({ scrollTop: 0 }, 400);
        }
        this.setState({
            currentProject: this.props.projects[projectIndex]
        });
    }

    toggleHover(i) {
        let newState = {}; 
        if (this.state.bannerLinks[i]) {
            this.state.bannerLinks[i] = !this.state.bannerLinks[i];
        } else {
            this.state.bannerLinks[i] = true;
        }
        this.setState({bannerLinks: this.state.bannerLinks});
    }

	render() {

        let projects = this.props.projects.map( (project, i) => {
            let boundClick = this.changeProjectBanner.bind(this, i);
            return (<ProjectsItem project={project} onClick={boundClick} key={i} /> );
        });

        let links = this.state.currentProject.links.map( (link, i) => {
            let onHover = this.toggleHover.bind(this, i);
            let hoverColor = this.state.bannerLinks[i] == true 
                                ? {color: link.color, borderColor: link.color}
                                : {color: 'white', borderColor: 'white'};
            return (
                <li key={i} 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                    <a target="_blank"
                        href={link.url} 
                        style={ hoverColor }
                        className="projectDetails__button info"
                    >{link.title}</a>
                </li>
            );
        });

        let bannerImage = { 
            backgroundImage: 'url(' + this.state.currentProject.bgImageUrl + ')'
        };

		return (
			<div className="mainContent__projects" role="main">
                <div className="mainContent__projectsContainer">

                    {/* Left main banner - project summary */}
                    <section className="section__leftContent">
                        <div className="section__container section__container--detailed">
                            <div className="section__projectDetails" 
                                style={ bannerImage }>

                                <div className="projectDetails__header">
                                    <div className="projectDetails__headerTitle">
                                        <h3>{ this.state.currentProject.name }</h3>
                                        <ul className="projectDetails__links">
                                        { links }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Right project list - gets all projects */}
                    <section className="section__rightContent">
                        <div className="section__container section__container--summary">
                            <div className="section__allProjects">
                                <div className="allProjects__header">
                                    <h3>Projects</h3>
                                </div>
                                <ul className="allProjects__projectList">
                                { projects }
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
		);
	}
}
Projects.defaultProps = _projects;

export default Projects;