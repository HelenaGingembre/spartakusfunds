import { useState, useEffect } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import CookieConsent from "react-cookie-consent";
import Layout from "./components/Layout";
import "./App.css";

import { getArticles } from "./services/serviceApi";

const HomeView = lazy(() => import("./views/HomeView"));
const ProjectsView = lazy(() => import("./views/ProjectsView"));
const MarketView = lazy(() => import("./views/MarketView"));
const AboutView = lazy(() => import("./views/AboutView"));
const ContactView = lazy(() => import("./views/ContactView"));
const SinglePage = lazy(() => import("./views/SinglePage"));
const PrivacyPolicy = lazy(() =>
  import("./views/PrivacyPolicyView/PrivacyPolicy")
);
const NotFoundView = lazy(() => import("./views/NotFoundView"));

const App = () => {
  const [articles, setArticles] = useState(getArticles());

  useEffect(() => {
    setArticles((prevState) => prevState);
  }, [articles]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView data={articles} />} />

          <Route path="/projects" element={<ProjectsView data={articles} />} />
          <Route
            path="/projects/:postName"
            element={<SinglePage data={articles} />}
          />

          <Route path="/market" element={<MarketView data={articles} />} />
          <Route
            path="/market/:postName"
            element={<SinglePage data={articles} />}
          />
          <Route path="/about" element={<AboutView />}></Route>
          <Route path="/contact" element={<ContactView />}></Route>
          <Route path="/policy" element={<PrivacyPolicy />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Route>
      </Routes>
      <ScrollToTop smooth color="white" className="to-top" />
      <CookieConsent
        disableStyles={true}
        containerClasses="alert-cookie"
        buttonClasses="btn-cookie"
        acceptOnScroll={true}
        expires={5}
      >
        This website uses cookies to enhance the user experience. See our
        <a href="/policy" rel="noopener noreferrer  nofollow">
          {" "}
          privacy policy{" "}
        </a>
        for more.
      </CookieConsent>
    </>
  );
};

export default App;
