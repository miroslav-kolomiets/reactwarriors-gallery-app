import React, { Fragment } from "react";
import ImageGallery from "./components/ImageGallery";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <ImageGallery />
    </Fragment>
  );
}

export default App;
