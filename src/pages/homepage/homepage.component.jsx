import React from "react";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

import Header from "../../components/header/header.component";

const HomePage = () => (
  <div>
    <Header />
    <div className="homepage">
      <Directory />
    </div>
  </div>
);

export default HomePage;
