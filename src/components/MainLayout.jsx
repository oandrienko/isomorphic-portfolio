import React from 'react';
import MainHeader from './MainHeader';

const MainLayout = ({ children }) => (

    <div className="mainWrapper">
        <MainHeader />
        {
            children
        }
        <footer className="mainFooter">
            <a
                className="mainFooter__logoLink"
                href="https://github.com/oandrienko/isomorphic-portfolio"
                target="_blank"
            >
                x
            </a>
        </footer>
    </div>

);

export default MainLayout;
