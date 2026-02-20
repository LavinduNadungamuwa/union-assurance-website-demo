import React from "react";
import Home from "../pages/Home/Home";
import Page2 from "../pages/Page2/Page2";
import Page3 from "../pages/Page3/Page3";
import Page4 from "../pages/Page4/Page4";
import Page5 from "../pages/Page5/Page5";
import Page6 from "../pages/Page6/Page6";

const routes = [
    {
        name: 'Home',
        path: '/',
        content: <Home/>,
    },

    {
        name: 'Page2',
        path: '/page2',
        content: <Page2/>,
    },

    {
        name: 'Page3',
        path: '/page3',
        content: <Page3/>,
    },

    {
        name: 'Page4',
        path: '/page4',
        content: <Page4/>,
    },

    {
        name: 'Page5',
        path: '/page5',
        content: <Page5/>,
    },

    {
        name: 'Page6',
        path: '/page6',
        content: <Page6/>,
    }
];

export default routes;