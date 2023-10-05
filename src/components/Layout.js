import { Outlet } from "react-router-dom";
import React from "react";

import Container from "./Container/Container";
import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";
import LoaderComponent from "./LoaderComponent/LoaderComponent";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense
          fallback={
            <div>
              Loading...
              <LoaderComponent />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
