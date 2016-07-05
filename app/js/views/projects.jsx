import React from 'react';

// import '../../scss/views/projects.scss';

export default class Projects extends React.Component {
	constructor(pros) {
		super();
	}
	componentDidMount() {
		console.log('Projects => componentDidMount');
	}
	render() {
		return (
			<div className="mainContent__projects" role="main">
                <div className="mainContent__projectsContainer">

                    <section className="section__leftContent">
                        <div className="section__container section__container--detailed">
                            <div className="section__projectDetails">

                                <div className="projectDetails__header">
                                    <div className="projectDetails__headerTitle">
                                        <h3>Sample Project Name</h3>
                                        <ul className="projectDetails__links">
	                                        <li>
	                                            <a href="#" className="projectDetails__button info">Project Information</a>
	                                        </li>
	                                        <li>
	                                            <a href="#" className="projectDetails__button link">Project Link</a>
	                                        </li>
                                    	</ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="section__rightContent">
                        <div className="section__container section__container--summary">
                            <div className="section__allProjects">

                                <div className="allProjects__header">
                                    <h3>Projects</h3>
                                </div>

                                <ul className="allProjects__projectList">
                                    <li className="project"  data-url="http://realtorsuite.com" data-img="test.jpg" data-page="realtor-suite">
                                        <div className="project__title"><h4>Realtor Suite Platform</h4></div>
                                        <div className="project__image"><img src="./assets/images/projects/realtor-suite.jpg"/></div>
                                        <div className="project__description">A full scale web and mobile application for residential Realtors to use at open houses. Currently being developed using the Laravel framework for an Alpha release for a team of investors.</div>
                                        <a href="#" className="project__button">Project Details</a>
                                    </li>
                                    <li className="project" data-url="http://apple.com" data-img="test2.jpg" data-page="star-slam">
                                        <div className="project__title"><h4>Star Slam Game</h4></div>
                                        <div className="project__image"><img src="./assets/images/projects/star-slam.jpg"/></div>
                                        <div className="project__description">iOS and Android App “Star Slam”. Built with HTML5 Canvas and Javascript. Was ported to mobile using Cordova and CocoonJS. Has over 500 downloads from around the world through the Appstore and Google Play Store.</div>
                                        <a href="#" className="project__button">Project Details</a>
                                    </li>
                                    <li className="project" data-url="http://liveinchinatown.com" data-img="work.jpg" data-page="none">
                                        <div className="project__title"><h4>LiveIN Website Network</h4></div>
                                        <div className="project__image"><img src="./assets/images/projects/live-in.jpg"/></div>
                                        <div className="project__description">Updated, maintained and contributed to the overall front and backend architecture of the main LiveIN websites.Provided expertise on technical features of the website and business strategy.</div>
                                        <a href="#" className="project__button">Project Details</a>
                                    </li>
                                    <li className="project">
                                        <div className="project__title" data-url="http://andrienko.co/naturylbornkillers/" data-img="video-wall.jpg" data-page="none"><h4>Naturyl Born Killers Webstore</h4></div>
                                        <div className="project__image"><img src="./assets/images/projects/nbk.jpg"/></div>
                                        <div className="project__description">Originally developed as a custom eCommerce mockup for a popular user on Instagram. Built on top of the Community Edition of the Magento eCommerce platform.</div>
                                        <a href="#" className="project__button">Project Details</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </section>

                </div>
            </div>
		);
	}
}