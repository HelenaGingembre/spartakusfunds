import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import "./App.css";
//import initialArticles from "./services/article.json";
import { useState } from "react";
import { useEffect } from "react";

//import Articles from "./components/Articles/Articles";
import SubMenu from "./components/Navigation/SubMenu";
import {
  getArticleById,
  // getArticleByTitle,
  getArticles,
} from "./services/serviceApi";

const HomeView = lazy(() => import("./views/HomeView"));
const ProjectsView = lazy(() => import("./views/ProjectsView"));
const MarketView = lazy(() => import("./views/MarketView"));
const AboutView = lazy(() => import("./views/AboutView"));
const ContactView = lazy(() => import("./views/ContactView"));
const SinglePage = lazy(() => import("./views/SinglePage"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

const App = () => {
  const [articles, setArticles] = useState(getArticles());
  console.log("articles APP----->", articles);
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
          <Route path="*" element={<NotFoundView />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
