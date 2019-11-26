import React from 'react';
import Navbar from "./components/Introduction/Navbar";
import IntroSection from "./components/Introduction/IntroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import MembersSection from "./components/MembersSection/MembersSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import BlogSection from "./components/BlogSection/BlogSection";
import ContactSection from "./components/ContactSection/ContactSection";
import SocialNetworkSection from "./components/SocialNetworkSection/SocialNetworkSection";
import Footer from "./components/Footer/Footer";
import './index.css'
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";

function App() {
  return (
    <div>
        <div className="wrapper">
            <Navbar/>
            <IntroSection/>
        </div>
        <ServiceSection/>
        <ProjectsSection/>
        <MembersSection/>
        <FeedbackSection/>
        <PartnersSection/>
        <BlogSection/>
        <ContactSection/>
        <SocialNetworkSection/>
        <Footer/>
    </div>
  );
}

export default App;
