import React from "react";
import { GlobalStyle } from "./App.styled";
import Header from "./components/Header/Header";
import { Wrapper } from "./App.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import AboutMe from "./pages/AboutMe";
import ProjectsPage from "./pages/ProjectsPage";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";
import { DarkModeSwitch } from "./components/Header/MobileNav";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence exitBeforeEnter={true}>
          <Router>
            <DarkModeSwitch />
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <Footer />
          </Router>
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default App;
