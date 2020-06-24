import React from "react";

import MOCalendar from "../../components/mo-calendar/mo-calendar.component";
import "./asignacionmo.styles.scss";

import Header from "../../components/header/header.component";

const AsignacionMoPage = () => (
  <div>
    <Header />
    <div className="asignacionmo-page">
      <MOCalendar />
    </div>
  </div>
);

export default AsignacionMoPage;
