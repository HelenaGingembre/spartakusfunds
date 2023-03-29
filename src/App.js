import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";

import "./App.css";

const HomeView = lazy(() => import("./views/HomeView"));

const ProjectsView = lazy(() => import("./views/ProjectsView"));
const MarketView = lazy(() => import("./views/MarketView"));
const AboutView = lazy(() => import("./views/AboutView"));
const ContactView = lazy(() => import("./views/ContactView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />

          <Route path="/projects" element={<ProjectsView />}></Route>
          <Route path="/market" element={<MarketView />}></Route>
          <Route path="/about" element={<AboutView />}></Route>
          <Route path="/contact" element={<ContactView />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
