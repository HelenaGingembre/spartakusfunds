import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import LoaderComponent from "./components/LoaderComponent";

import "./App.css";

const HomeView = lazy(() => import("./views/HomeView"));

const ProjectsView = lazy(() => import("./views/ProjectsView"));

const NotFoundView = lazy(() => import("./views/NotFoundView"));

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<LoaderComponent />}>
          <Route path="/" exact>
            <p>My first project http://spartacusfunds.com/</p>
            <HomeView />
          </Route>

          <Route path="/projects">
            <ProjectsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Suspense>
      </Container>
      <Footer />
    </>
  );
}

export default App;
