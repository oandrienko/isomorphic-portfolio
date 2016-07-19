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
							<a target="_blank" href="#lindedin" className="links__link">
								<img src="/images/links/linkedin_icon.jpg" target="_blank" alt="" />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://github.com/oandrienko" className="links__link">
								<img src="/images/links/github_icon.jpg" target="_blank" alt="" />
							</a>
						</li>
						<li>
							<a href="mailto:oandrien@uwaterloo.ca" className="links__link">
								<img src="/images/links/mail_icon.jpg" target="_blank" alt="" />
							</a>
						</li>
					</ul>
                </div>
            </section>
        </div>
    </div>
);

export {Links as default};