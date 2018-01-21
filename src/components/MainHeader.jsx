import React from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

import ContactModal from 'contact-bot';


const MainNavigation = ({ openModal, onClick, mobileState }) => (
    <div>
        <div role="navigation">
            <ul className="mainNav__links mainNav__links--navCenter">
                <li>
                    <Link className="mainNav__link mainNav__link--navCenter" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="mainNav__link mainNav__link--navCenter" to="/projects">
                        Work
                    </Link>
                </li>
                <li id="tooltip">
                    {
                        ((process.env.BROWSER ? window.innerWidth : 0) > 768) // eslint-disable-line
                            ? <a className="mainNav__link mainNav__link--navCenter">Links</a>
                            : <Link className="mainNav__link mainNav__link--navCenter" to="/links">Links</Link>
                    }
                    <div className="mainNav__tooltip">
                        <span className="mainNav__tooltip--text">
                            <ul className="tooltip__links">
                                <li>
                                    <a
                                        className="tooltip__link blue"
                                        href="http://www.linkedin.com/in/oandrienko"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="tooltip__link purple"
                                        href="http://github.com/oandrienko"
                                        target="_blank"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="tooltip__link orange"
                                        href="mailto:oandrien@uwaterloo.ca"
                                        target="_blank"
                                    >
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </li>
            </ul>
            <div className="mainNav__contact mainNav__contact--navRight">
                <a onClick={openModal} id="mainModal__toggle" className="mainNav__contact--link">
                    Contact Bot
                </a>
            </div>
        </div>
        <MobileNavButton contactName="Oles" onClick={onClick} mobileState={mobileState} />
    </div>
);

const MobileNavButton = ({ mobileState, onClick }) => (
    <div className="toggleNav">
        <button
            className={`toggleNav__stackMenu toggleNav__stack-X ${mobileState ? 'is-active' : ''}`}
            onClick={onClick}
        >
            <span>
                Toggle Mobile Menu
            </span>
        </button>
    </div>
);

const MobileNavMenu = ({ mobileState, openModal, onClick }) => (

    <div className={`navOverlay ${mobileState ? 'is-active' : ''}`}>
        <div className="navOverlay__container">
            <div role="navigation">
                <ul className="navOverlay__selections">
                    <li>
                        <Link onClick={onClick} to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onClick} to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onClick} to="/links">
                            Links
                        </Link>
                    </li>
                    <li>
                        <a onClick={openModal}>
                            Connect
                        </a>
                    </li>
                </ul>
                <div className="navOverlay__footer">
                    <i style={{ cursor: 'cell' }}>{'\u00a9 Oles Andrienko 2016'}</i>
                </div>
            </div>
        </div>
    </div>
);

class MainHeader extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isMobileOpen: false,
            modalIsOpen: false
        };
        this.closeMobileNav = this.closeMobileNav.bind(this);
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        $(window).on('resize', () => {
            this.closeMobileNav();
        });
    }

    closeMobileNav() {
        this.setState({
            isMobileOpen: false
        });
    }

    sendEmail(body) {
        fetch('/mail/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ body })
        })
            .then(res => {
                if (res.err)
                    console.error('Error: [MainHeader.sendEmail] request failed:  ', res.err);
                return res;
            });
    }

    toggleMobileNav() {
        this.setState({
            isMobileOpen: !this.state.isMobileOpen
        });
        $('body').toggleClass('no-scroll');
    }

    openModal() {
        console.log("Open model...");
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <header>

                <div className="mainHeader">
                    <div className="mainHeader__inner">

                        <div className="mainHeader__logo mainHeader__logo--navLeft">
                            <h1 className="mainHeader__mainTitle">
                                <Link
                                    className="mainHeader__mainTitle--link"
                                    ref="logo"
                                    onClick={this.closeMobileNav}
                                    to="/"
                                >
                                    Oles Andrienko
                                </Link>
                            </h1>
                        </div>
                        <MainNavigation
                            openModal={this.openModal}
                            onClick={this.toggleMobileNav}
                            mobileState={this.state.isMobileOpen}
                        />
                    </div>
                </div>

                <MobileNavMenu
                    openModal={this.openModal}
                    onClick={this.toggleMobileNav}
                    mobileState={this.state.isMobileOpen}
                />

                <ContactModal
                    loaderImagePath="/bundles/loader.gif"
                    isOpen={this.state.modalIsOpen}
                    onClose={this.closeModal}
                    onSubmitMessageThread={this.sendEmail}
                />
            </header>
        );
    }
}

export default MainHeader;
