import React from 'react';

if (process.env.BROWSER) {
    require('stylesRoot/views/links.scss');
}

const Links = (props) => (
	<div className="mainContent__links" role="main">
        <div className="mainContent__linksContainer">
            <section className="links__content">
                <div className="links__content--text">
					<ul className="links__body-links">
						<li>
							<a target="_blank" href="http://www.linkedin.com/in/oandrienko" className="links__link">
								<img src="/images/links/linkedin_icon.jpg" alt="Oles Andrienko LinkedIn Profile" />
							</a>
						</li>
						<li>
							<a target="_blank" href="http://github.com/oandrienko" className="links__link">
								<img src="/images/links/github_icon.jpg" alt="Oles Andrienko Github Profile" />
							</a>
						</li>
						<li>
							<a href="mailto:oandrien@uwaterloo.ca" className="links__link">
								<img src="/images/links/mail_icon.jpg" alt="Oles Andrienko University of Waterloo Email" />
							</a>
						</li>
					</ul>
                </div>
            </section>
        </div>
    </div>
);

export default Links;