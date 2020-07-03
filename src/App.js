import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./global/navbar/Navbar";
import MobileNavbar from "./global/navbar/MobileNavbar";
import Branding from "./routes/branding/Branding";
import Contact from "./routes/contact/Contact";
import About from "./routes/about/About";
import ScrollToTop from "./global/ScrollToTop";
const App = () => {
    return (
        <Application>
            <ScrollToTop />
            <MobileNavbar />
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/branding' component={Branding} />
            <Route path='/contact' component={Contact} />
        </Application>
    );
};
const Application = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 75px 1fr;
        grid-template-areas: "navbar content";
    }
`;
export default App;
