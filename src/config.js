
export const pagesTitles = {

    '/': 'Oles Andrienko Personal Website',

    '/about': 'About - Oles Andrienko',

    '/projects': 'Projects - Oles Andrienko',

    '/links': 'Links - Oles Andrienko'

};

export const projectsMap = {

    projects: [
        {
            name: 'Realty Sheets Platform',
            type: 'Project',
            thumbnail: '/images/projects/realtor-suite.jpg',
            bgImageUrl: '/images/projects/realtor-suite-banner.jpg',
            description: 'Realty Sheets is a technology platform for Realtos. The product helps ' +
                         'Realtors automate the information request cycle and conregate data ' +
                         'on Open House visitors. Currently being tested with a small group of Realtors',
            slug: 'realty-sheets',
            links: [
                {
                    title: 'Realty Sheets',
                    url: 'http://www.realtysheets.com',
                    color: '#fc662c'
                }
            ]
        },
        {
            name: 'Gesture Presenter - Hack the North 2016',
            type: 'Project',
            thumbnail: '/images/projects/hack-the-north.jpg',
            bgImageUrl: '/images/projects/hack-the-north-banner.jpg',
            description: 'Participant of Canada\'s largest hackathon. Build a ' +
                         'Chrome Extension that sends webcam stream to a server ' +
                         'running OpenCV. After some image processing, the server ' +
                         'returns coordinates to allow control of Google Slides ' +
                         'using gestures.',
            slug: 'hack-the-north-2016',
            links: [
                {
                    title: 'Project Demo',
                    url: 'https://s3-us-west-2.amazonaws.com/andrienko/htn-2016.mp4',
                    color: '#d3d3d3'
                },
                {
                    title: 'Github Repo',
                    url: 'https://github.com/oandrienko/gesture-presenter',
                    color: '#d3d3d3'
                }
            ]
        },
        {
            name: 'Star Slam Game',
            type: 'Project',
            thumbnail: '/images/projects/star-slam.jpg',
            bgImageUrl: '/images/projects/star-slam-banner.jpg',
            description: 'iOS and Android App “Star Slam”. Built with HTML5 Canvas and ' +
                         'Javascript. Was ported to mobile using Cordova and CocoonJS. Has ' +
                         'over 500 downloads from around the world through the Appstore and Google Play Store.',
            slug: 'star-slam',
            links: [
                {
                    title: 'Google Play Store',
                    url: 'http://play.google.com/store/apps/details?id=com.olesandrienko.starslam&hl=en',
                    color: '#6ffbfe'
                }
            ]
        }
    ]
};
