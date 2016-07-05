import React from 'react';

// import '../../scss/views/links.scss';

export default class Links extends React.Component {
	constructor(pros) {
		super();
	}
	componentDidMount() {
		console.log('Links => componentDidMount');
	}
	render() {
		return (
			<div class="mainContent__links" role="main">
                <div class="mainContent__linksContainer">
	                <section class="links__content">
	                    <div class="links__content--text">
							<ul className="links__body-links">
								<li><a href="#lindedin" className="links__link">LinkedIn</a></li>
								<li><a href="#github" className="links__link">Github</a></li>
								<li><a href="#email" className="links_link">Email</a></li>
							</ul>
	                    </div>
	                </section>
                </div>
            </div>
		);
	}
}