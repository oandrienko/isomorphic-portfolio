import React from 'react';

const LinksPage = () => (

    <div className="mainContent__links" role="main">
        <div className="mainContent__linksContainer">
            <section className="links__content">
                <div className="links__content--text">
                    <ul className="links__body-links">
                        <li>
                            <a
                                className="links__link"
                                href="http://www.linkedin.com/in/oandrienko"
                                target="_blank"
                            >
                                <img src="/images/links/linkedin_icon.jpg" alt="Oles Andrienko LinkedIn Profile" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="links__link"
                                href="http://github.com/oandrienko"
                                target="_blank"
                            >
                                <img src="/images/links/github_icon.jpg" alt="Oles Andrienko Github Profile" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="links__link"
                                href="mailto:oandrien@uwaterloo.ca"
                            >
                                <img src="/images/links/mail_icon.jpg" alt="Oles Andrienko University of Waterloo Email" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>

);

export default LinksPage;
