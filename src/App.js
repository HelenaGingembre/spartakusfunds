import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import "./App.css";
import initialArticles from "./services/article.json";
import { useState } from "react";
import { useEffect } from "react";

const HomeView = lazy(() => import("./views/HomeView"));
const ProjectsView = lazy(() => import("./views/ProjectsView"));
const MarketView = lazy(() => import("./views/MarketView"));
const AboutView = lazy(() => import("./views/AboutView"));
const ContactView = lazy(() => import("./views/ContactView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

const App = () => {
  const [articles, setArticles] = useState(() => initialArticles || []);

  // // 1. Run effect only on mount to init some library
  useEffect(() => {}, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView data={articles} />} />

          <Route
            path="/projects"
            element={<ProjectsView data={articles} />}
          ></Route>
          <Route
            path="/market"
            element={<MarketView data={articles} />}
          ></Route>
          <Route path="/about" element={<AboutView />}></Route>
          <Route path="/contact" element={<ContactView />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
