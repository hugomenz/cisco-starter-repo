import "./App.css";
import React from "react";
import { Exhibit } from "./components/Exhibit/Exhibit.component";
import { Banner } from "./components/Banner/Banner";

export const App = () => {
  const REACT_APP_DOCUMENT_TITLE = "Sextant";

  return (
    <div className="App">
      <Banner bannerText={REACT_APP_DOCUMENT_TITLE} />
      <Exhibit name={`Showing customer IP`} />
    </div>
  );
};
