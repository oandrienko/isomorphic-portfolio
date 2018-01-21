import React from 'react';
import { Link } from 'react-router';

/* eslint-disable */
const initJqueryAnimations = () => {
    if ($('#home-video').get(0)) $('#home-video').get(0).play();
    $(window).on('scroll load', jqueryAnimationBgFading);
    $(window).on('resize load', jqueryAnimationBgSizing);
    jqueryAnimationBgSizing();
    jqueryAnimationBgFading();
};

const jqueryAnimationBgSizing = () => {
    var 
    bgHeight,
    bgWidth,
    bgElements = $('.section__background img');
    bgElements.each(function(i, val) {
        if ($(window).width() > $(window).height()) {
            bgHeight = 'auto';
            bgWidth = $(window).width();
        } else {
            bgHeight = $(window).height()-75;
            bgWidth = 'auto';
        }
        $(this).css({
            'height' : bgHeight*1.2,
            'width' : bgWidth*1.2
        });
    });
};

const jqueryAnimationBgFading = () => {
    var 
    st,
    height,
    transform,
    mainSections = $('.m-section'),
    parallaxElements = $('.mainVideo__overlay, .section__background.change');
    mainSections.each(function(i, val) {
        if ( $(window).scrollTop() >= $(this).offset().top-75
            && $(window).scrollTop() <= $(this).offset().top+$(this).height()-75 ) {

            st = $(window).scrollTop() - i*$(this).height();
            height = $(this).height();
            $(this).css({
                'opacity': Math.pow( 1-st/height , 2),
             }); 

            transform = ( 200*(st/height) ) ;
            parallaxElements.eq(i).css({
                'transform': 'translateY(' + transform +'px)'
            });

        } else {

            if( $(window).scrollTop() <= $(this).offset().top+$(this).height()-75 ) {
                // element is below
                $(this).css({
                    'opacity': 1
                }); 
                parallaxElements.eq(i).css({
                    'transform': 'translateY(0px)'
                });

            } else {
                $(this).css({
                    'opacity': 0
                }); 
            }

        }
    });
};
/* eslint-enable */

class Home extends React.Component {

    componentDidMount() {
        initJqueryAnimations();
    }

    render() {
        return (
            <div className="mainContent" role="main">
                <div className="mainContent__container">

                    <section id="introBlock" className="m-section">
                        <div className="mainVideo">
                            <div className="mainVideo__container">
                                {
                                    ((process.env.BROWSER ? window.innerWidth : 0) > 768) ? // eslint-disable-line
                                        <video id="home-video" className="mainVideo__video" loop="loop" autoPlay="true">
                                            <source type="video/mp4" src="/images/bg_mainvideo.mp4" />
                                            <source type="video/mp4" src="/images/bg_mainvideo.mov" />
                                        </video> :
                                        <div className="mainVideo__mobile">
                                            <img
                                                className="mainVideo__mobile--image"
                                                src="/images/bg_mainmobile.jpg"
                                                alt="waterloo"
                                            />
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="mainVideo__overlay">
                            <div className="mainVideo__colorOverlay" />
                            <h2 className="mainVideo__nameOverlay">
                                Oles Andrienko
                            </h2>
                            <h2 className="mainVideo__titleOverlay">
                                Robotics Student | University of Waterloo
                            </h2>
                        </div>
                    </section>

                    <section id="aboutBlock" className="m-section">
                        <div className="section__background change">
                            <img src="/images/bg_circuit.jpg" alt="background engineer electrical hardware" />
                        </div>
                        <article className="section__content section__content--blackText">
                            <p>
                                My name is Oles Andrienko. I&apos;m a student at the University of Waterloo
                                studying Mechatronics Engineering. I love to work on technology projects
                                that have an emphasis on software, robotics and machine learning.
                            </p>
                        </article>
                    </section>

                    <section id="aboutBlock" className="m-section">
                        <div className="section__background change">
                            <img src="/images/bg_engineer.jpg" alt="background engineer mechanical hardware" />
                        </div>
                        <article className="section__content section__content--blackText right">
                            <p>
                                Whether it&apos;s building with the newest software library or keeping up with popular
                                tech trends - I&apos;m always looking to learn something new. Check out some of my recent
                                <Link to="/projects"> Projects</Link> here on my page.
                            </p>
                        </article>
                    </section>

                    <section id="aboutBlock" className="m-section">
                        <div className="section__background change">
                            <img src="/images/bg_awardgroup.jpg" alt="background award group" />
                        </div>
                        <article className="section__content section__content--blackText">
                            <p>
                                Do you have a project that you need help with? Are you looking for a developer for your
                                latest app idea? Do you need an engineer in training to add to your current team? Let&apos;s work
                                on something awesome together, <Link to="/links">Contact Me</Link>.
                            </p>
                        </article>
                    </section>


                    <section id="linksBlock" className="m-section">
                        <div className="section__background">
                            <img className="center" src="/images/bg_toronto.jpg" alt="toronto" />
                        </div>
                        <ul className="section__halfContent">
                            <li className="section__halfContent--link">
                                <Link to="projects">Browse Projects</Link>
                            </li>
                            <li className="section__halfContent--link">
                                <Link to="about">More About Me</Link>
                            </li>
                        </ul>
                    </section>

                    <div className="mainContent__footer" />
                </div>
            </div>
        );
    }
}

export default Home;
