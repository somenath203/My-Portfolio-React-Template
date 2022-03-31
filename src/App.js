import React from 'react';
import About from './About';
import Contact from './Contact';
import Copyright from './CopyrightSection';
import Footer from './Footer';
import Masterhead from './Masterhead';
import NavBar from './Navigation';
import Portfolio from './Portfolio';
import PortfolioModalOne from './PortfolioModalOne';
import PortfolioModelThree from './PortfolioModalThree';
import PortfolioModelTwo from './PortfolioModelTwo';
import PortfolioProjectFive from './PortfolioProjectFive';
import PortfolioProjectFour from './PortfolioProjectFour';
import PortfolioProjectSix from './PortfolioProjectSix';

const App = () => {
  return (
    <div>
      <NavBar title="My Portfolio" />
      <Masterhead
        heading="My name is Somenath Choudhury"
        skills="Frontend Web - Backend Web"
      />
      <Portfolio />
      <About
        title="About Me"
        desone="I am a passionate Web Developer who loves to create beautiful full stack applications."
        desctwo="Apart from Web Development, I also have deep interest in Python and Machine Learning."
        resumeTitle="Download my Resume"
      />
      <Contact btnTitle="Submit" />
      <Footer
        locationTitle="My Location"
        myLocationOne="Street No.24, Mumbai"
        myLocationTwo="India"
        socialTitle="My Social Media Handles"
        aboutWebsiteTitle="About This Website"
        aboutWebsiteDescription="This website is created with the help of React and Bootstrap-Template"
      />
      <Copyright createdBy="Somenath Choudhury" />
      <PortfolioModalOne
        title="First Project"
        description="This is a House Website created with the help of bootstrap and js"
      />
      <PortfolioModelTwo
        title="Second Project"
        description="This is a Tasty Cake Website built with the help of React.js"
      />
      <PortfolioModelThree
        title="Third Project"
        description="This is a Tent Website created with the help of materialize css"
      />
      <PortfolioProjectFour
        title="Fourth Project"
        description="This is a Video Game Website created with the help of Vue.js"
      />
      <PortfolioProjectFive
        title="Fifth Project"
        description="This is a Lock-Key Website created with the help of Scass and javascript"
      />
      <PortfolioProjectSix
        title="Sixth Project"
        description="This is a Submarine Game Website created with the help of Svelte.js"
      />
    </div>
  );
};

export default App;
