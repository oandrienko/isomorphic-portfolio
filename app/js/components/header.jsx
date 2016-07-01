import React from 'react';
import { Link } from 'react-router';

import 'appRoot/scss/components/header.scss';

class MainNav extends React.Component {
	render() {
		return (
			<div>

				<nav role="navigation">
					<ul className="mainNav__links mainNav__links--navCenter">
						<li><Link className="mainNav__link mainNav__link--navCenter" to="about">About</Link></li>
						<li><Link className="mainNav__link mainNav__link--navCenter" to="projects">Projects</Link></li>
						<li id="tooltip">
							<Link className="mainNav__link mainNav__link--navCenter" to="links">
								Links
							</Link>
							<div className="mainNav__tooltip">
							  <span className="mainNav__tooltip--text">
							      <ul className="tooltip__links">
							        <li><a href="#lindedin" className="tooltip__link">LinkedIn</a></li>
							        <li><a href="#github" className="tooltip__link">Github</a></li>
							        <li><a href="#email" className="tooltip__link">Email</a></li>
							      </ul>
							  </span>
							</div>
						</li>
					</ul>
				    <div className="mainNav__contact mainNav__contact--navRight">
			            <a id="mainModal__toggle" className="mainNav__contact--link" href="#modal">Contact Bot</a>
			        </div>
		        </nav>

		        <MobileNavButton onClick={this.props.onClick} mobileState={this.props.mobileState}/>

	        </div>
		);
	}
}

class MobileNavButton extends React.Component {
	render() {
		var toggleClass = this.props.mobileState ? 'is-active' : '';
		return (
			<div className="toggleNav">
	            <button onClick={this.props.onClick} 
	            	className={'toggleNav__stackMenu toggleNav__stack-X '+ toggleClass}>
	                <span>Toggle Mobile Menu</span>
	            </button>
	        </div>
		);
	}
}

class MobileNavMenu extends React.Component {
	render() {
		var toggleClass = this.props.mobileState ? 'is-active' : '';
		return (
			<div className={'navOverlay '+ toggleClass}>
                <div className="navOverlay__container">
                    <nav role="navigation">
                        <ul className="navOverlay__selections">
                            <li><Link to="about">About</Link></li>
                            <li><Link to="projects">Projects</Link></li>
                            <li><Link to="links">Links</Link></li>
                            <li><Link to="about">Connect</Link></li>
                        </ul>
                        <div className="navOverlay__footer"><i style={{cursor: 'cell'}}>{'\u00a9 Oles Andrienko 2016'}</i></div>
                    </nav>
                </div>
            </div>
		);
	}
}

export default class MainHeader extends React.Component {
	constructor(pros) {
		super();
		this.state = { isMobileOpen: false};
		this.toggleMobileNav = this.toggleMobileNav.bind(this);
	}
	toggleMobileNav(e) {
		console.log('Main Header => NewStates:' + !this.state.isMobileOpen);
		var newState = { isMobileOpen: !this.state.isMobileOpen};
		this.setState(newState);
		$('body').toggleClass('no-scroll');
	}
	render() {
		return (
			<div>

				<header className="mainHeader">
					<div className="mainHeader__inner">

						<div className="mainHeader__logo mainHeader__logo--navLeft">
		                    <h1 className="mainHeader__mainTitle">
		                        <Link className="mainHeader__mainTitle--link" to="/">Oles Andrienko</Link>
		                    </h1>
		                </div>

		                <MainNav onClick={this.toggleMobileNav} mobileState={this.state.isMobileOpen}/>

					</div>
				</header>

				<MobileNavMenu mobileState={this.state.isMobileOpen}/>
			</div>
		);
	}
}

MainHeader.propTypes = {
	isMobileOpen: React.PropTypes.bool
}