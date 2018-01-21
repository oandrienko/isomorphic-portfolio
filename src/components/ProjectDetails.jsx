import React from 'react';

const LinkItem = ({ title, url, color, onHover }) => (
    <li
        onMouseEnter={onHover}
        onMouseLeave={onHover}
    >
        <a
            className="projectDetails__button info"
            style={{ color, borderColor: color }}
            target="_blank"
            href={url}
        >
            { title }
        </a>
    </li>
);

const ProjetDetails = ({ name, bgImage, links, bannerLinks, onToggleHover }) => (
    <div
        className="section__projectDetails"
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="projectDetails__header">
            <div className="projectDetails__headerTitle">
                <h3>{ name }</h3>
                <ul className="projectDetails__links">
                    {
                        links.map((link, i) => {
                            const onHover = onToggleHover.bind(this, i);
                            const hoverColor = bannerLinks[i]
                                ? link.color
                                : 'white';
                            return (
                                <LinkItem
                                    key={link.title}
                                    title={link.title}
                                    url={link.url}
                                    color={hoverColor}
                                    onHover={onHover}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
);

export default ProjetDetails;
