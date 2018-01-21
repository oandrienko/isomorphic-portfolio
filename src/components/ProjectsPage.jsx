import React from 'react';

import ProjectDetails from '../components/ProjectDetails';
import ProjectList from '../components/ProjectList';
import { projectsMap } from './../config';

class ProjectsPage extends React.Component {

    constructor(props) {
        super(props);
        const initProject = this.checkProjectRoutes(
            props.params.name,
            props.projects
        );

        this.state = {
            currentProject: initProject,
            bannerLinks: {}
        };

        this.changeProjectBanner = this.changeProjectBanner.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { params, projects } = nextProps;
        return this.checkProjectRoutes(params.name, projects);
    }

    checkProjectRoutes(searchKey, projects) {
        let initProject = projects[0];
        const findProjectList = projects.filter(p =>
            p.slug === searchKey);

        if (searchKey && findProjectList.length > 0) {
            [initProject] = findProjectList;
        } else {
            console.log("this.props.router", this.props.router);
        }
        return initProject;
    }

    changeProjectBanner(projectIndex) {
        const currentProject = this.props.projects[projectIndex];
        if (window.innerWidth < 768) window.scrollTo(0, 0); // eslint-disable-line
        this.setState({ currentProject });
    }

    toggleHover(i) {
        let bannerLinks = this.state.bannerLinks[i];

        if (bannerLinks) bannerLinks = !bannerLinks;
        else bannerLinks = true;
        this.setState({ bannerLinks });
    }

    render() {

        const { projects } = this.props;
        const { currentProject, bannerLinks } = this.state;

        return (
            <div className="mainContent__projects" role="main">
                <div className="mainContent__projectsContainer">

                    <section className="section__leftContent">
                        <div className="section__container section__container--detailed">
                            <ProjectDetails
                                name={currentProject.name}
                                bgImage={currentProject.bgImageUrl}
                                links={currentProject.links}
                                bannerLinks={bannerLinks}
                                onToggleHover={this.toggleHover}
                            />
                        </div>
                    </section>

                    <section className="section__rightContent">
                        <div className="section__container section__container--summary">
                            <ProjectList
                                projects={projects}
                                changeProjectBanner={this.changeProjectBanner}
                            />
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

ProjectsPage.defaultProps = projectsMap;

export default ProjectsPage;
