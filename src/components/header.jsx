import React from 'react';
import { Link } from 'react-router';

 import ContactModal from './Modal';
 // import ContactModal from './ContactModal';

if (process.env.BROWSER) {
	require('stylesRoot/components/header.scss');
}

class MainNav extends React.Component {
	render() {
			let width = typeof(window) == 'undefined' ? new Object() : window.innerWidth;
		return (
			<div>

				<nav role="navigation">
					<ul className="mainNav__links mainNav__links--navCenter">
						<li><Link className="mainNav__link mainNav__link--navCenter" to="/about">About</Link></li>
						<li><Link className="mainNav__link mainNav__link--navCenter" to="/projects">Projects</Link></li>
						<li id="tooltip">
						{
							width > 768
							 	? (<a className="mainNav__link mainNav__link--navCenter">Links</a>)
							 	: (<Link className="mainNav__link mainNav__link--navCenter" to="/links">Links</Link>)
						}
							<div className="mainNav__tooltip">
							  <span className="mainNav__tooltip--text">
							      <ul className="tooltip__links">
							        <li><a href="http://www.linkedin.com/in/oandrienko" target="_blank" className="tooltip__link blue">LinkedIn</a></li>
							        <li><a href="http://github.com/oandrienko" target="_blank" className="tooltip__link purple">Github</a></li>
							        <li><a href="mailto:oandrien@uwaterloo.ca" target="_blank" className="tooltip__link orange">Email</a></li>
							      </ul>
							  </span>
							</div>
						</li>
					</ul>
				    <div className="mainNav__contact mainNav__contact--navRight">
			            <a onClick={this.props.openModal} id="mainModal__toggle" className="mainNav__contact--link">Contact Now</a>
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
                            <li><Link onClick={this.props.onClick} to="/about">About</Link></li>
                            <li><Link onClick={this.props.onClick} to="/projects">Projects</Link></li>
                            <li><Link onClick={this.props.onClick} to="/links">Links</Link></li>
                            <li><a onClick={this.props.openModal}>Connect</a></li>
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
		this.state = { 
			isMobileOpen: false,
			modalIsOpen: false
		};
	}

	componentDidMount() {
		$(window).on('resize', () => {
			this.closeMobileNav();
		});

		console.log(window.innerWidth);
	}

	closeMobileNav () {

		let newState = { 
			isMobileOpen: false
		};
		this.setState(newState);
	}

	toggleMobileNav () {
		console.log('Main Header => NewStates:' + !this.state.isMobileOpen);

		let newState = { 
			isMobileOpen: !this.state.isMobileOpen
		};
		this.setState(newState);
		
		$('body').toggleClass('no-scroll');
	}

	openModal() {
    	this.setState({modalIsOpen: true});
  	}

  	closeModal() {
    	this.setState({modalIsOpen: false});
  	}

	render() {
		return (
			<header >

				<div className="mainHeader">
					<div className="mainHeader__inner">

						<div className="mainHeader__logo mainHeader__logo--navLeft">
		                    <h1 className="mainHeader__mainTitle">
		                        <Link className="mainHeader__mainTitle--link" ref="logo" onClick={()=>this.closeMobileNav()} to="/">Oles Andrienko</Link>
		                    </h1>
		                </div>

		                <MainNav openModal={()=>this.openModal()} onClick={()=>this.toggleMobileNav()} mobileState={this.state.isMobileOpen}/>

					</div>
				</div>

				<MobileNavMenu openModal={()=>this.openModal()} onClick={()=>this.toggleMobileNav()} mobileState={this.state.isMobileOpen}/>

				<ContactModal modalIsOpen={this.state.modalIsOpen} closeModal={()=>this.closeModal()} />

			</header>
		);
	}
}

MainHeader.propTypes = {
	isMobileOpen: React.PropTypes.bool
}