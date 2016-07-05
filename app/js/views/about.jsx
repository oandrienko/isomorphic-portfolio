import React from 'react';

// import '../../scss/views/about.scss';

export default class About extends React.Component {
    constructor(pros) {
        super();
    }
    componentDidMount() {
        console.log('About => componentDidMount');
        $(window).on('scroll load', this.renderEffect);
        this.renderAnimation();
    }
    renderAnimation() {
        var section = $('.about__content'), st, height;
        var st = $(window).scrollTop();
        var height = section.height();
        $('.about__img').css({
            'opacity': Math.pow( 1-st/height , 2),
        });
    }
    render() {
        return (
            <div className="mainContent__about" role="main">
                <div className="mainContent__aboutContainer">

                    <section className="about__background"></section>
                    <section className="about__background m-section about__img"></section>
                    <div className="about__header"><h2>ABOUT ME</h2></div>
                    <section className="about__content">
                        <div className="about__content--text">
                            <p>
                                I’m flattered that you’d like to know more about me! I’m currently a student at the University of Waterloo studying Mechatronics Engineering - a hybrid of mechanical engineering, electrical engineering and computer science. <br/><br/>

                                Why study three disciplines? Other than wanting to build an Iron Man suit all by myself, I don’t want to be bound by one engineering discipline, given that innovation in the twenty-first century entails interdisciplinary engineering knowledge. I know that competency in several disciplines will provide me unique opportunities to work on a wider range of projects with less reliance on external sources. <br/><br/>

                                Overall, I love to create and work on awesome projects, whether it be working on the software, hardware, or mechanical side of a technical project. I have seen how engineers have solved some of the world's most complex problems, which is why I am always looking to learn new technologies to help me move towards my goal of becoming Tony Stark. <br/><br/>

                                Do you need help on your next project? Connect with me and let’s build something awesome!
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

                   