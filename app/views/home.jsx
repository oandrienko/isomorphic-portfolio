import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
    require('stylesRoot/views/home.scss');
}

//TODO: Remove JQuery dependencies 
//TODO: Seperate scroll component that wraps HOME

export default class Home extends React.Component {
	constructor(pros) {
		super();
	}

	componentDidMount() {
		console.log('Home => componentDidMount');

		$('#home-video').get(0).play();
		$(window).on('scroll load', this.renderAnimation_bgFading);
		$(window).on('resize load', this.renderAnimation_bgSizing);
		this.renderAnimation_bgSizing();
		this.renderAnimation_bgFading();
	}

	componentWillUnmount() {
		console.log('Home => ***componentDidUnmount');

	}


	renderAnimation_bgSizing() {

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

	}
	renderAnimation_bgFading() {

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

	}
	render() {

		return (
			<div className="mainContent" role="main">
                <div className="mainContent__container">

                    <section id="introBlock" className="m-section">
                        <div className="mainVideo">
                            <div className="mainVideo__container">
                                <video id="home-video" className="mainVideo__video" loop="loop" autoPlay="true" >
                                    <source type="video/mp4" src="./images/hero_vid.mp4"></source>
                                    {/* <source type="video/mov" src="ssets/vid/hero_vid.mov"></source> */}
                                </video>
                            </div>
                        </div>
                        <div className="mainVideo__overlay">
                            <div className="mainVideo__colorOverlay"></div>
                            <h2 className="mainVideo__logo"></h2>
                            <h2 className="mainVideo__titleOverlay mainContent__text">Hello, It's Nice to Meet You</h2>
                        </div>
                    </section>

                    <section id="aboutBlock" className="m-section">
                        <div className="section__background change">
                            <img src="./images/circ.jpg"/>
                        </div>
                        <article className="section__content section__content--blackText">
                            <p>
                                My name is Oles Andrienko. I'm a student at the University of Waterloo 
                                studying Mechatronics Engineering. I love to work on technology projects 
                                that have an emphasis on software and business.
                            </p>
                        </article>
                    </section>

                    <section id="aboutBlock" className="m-section">
                        <div className="section__background change">
                            <img src="./images/work.jpg"/>
                        </div>
                        <article className="section__content section__content--blackText right">
                            <p>
                                Whether it's building with the newest software library or keeping up with popular 
                                tech trends - I'm always looking to learn something new. Check out some of my recent 
                            	<Link to="/projects">Projects</Link> here on my website.
                            </p>
                        </article>
                    </section>

                    <section id="aboutBlock" className="m-section">
                        <div className="section__background change">
                            <img src="./images/ja_bc3.jpg"/>
                        </div>
                        <article className="section__content section__content--blackText">
                            <p>
                                Do you have a project that you need help with? Are you looking for a developer for your 
                                latest app idea? Do you need an engineer in training to add to your current team? Let's work 
                                on something awesome together, <Link to="/contact">Contact Me</Link>.
                            </p>
                        </article>
                    </section>


                    <section id="linksBlock" className="m-section">
                        <div className="section__background">
                            <img className="center" src="./images/video-wall.jpg"/>
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


                    <div className="mainContent__footer"></div>

                </div>
            </div>
		);
	}
}

