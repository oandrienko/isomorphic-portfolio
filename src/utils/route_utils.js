
export const changeRoutes = pathname => {
    if (!/^\/projects\/[a-zA-Z0-9_.-]*$/.test(pathname)) {
        window.scrollTo(0, 0); // eslint-disable-line
    }
    window.ga('send', 'pageview', pathname); // eslint-disable-line
};

