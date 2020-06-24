import React from "react";
import Timeline from "react-calendar-timeline";
import moment from "moment";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./mo-calendar.styles.scss";

import { selectEmployee } from "../../redux/payroll/payroll.selectors";

// const groups = [
//   { id: 1, title: "24417197-4. Cañada Momblant, Antonio" },
//   { id: 2, title: "group 2" },
//   { id: 3, title: "group 3" }
// ];

const items = [
  {
    id: 1,
    group: 614,
    title: "item 1",
    start_time: moment(),
    end_time: moment().add(1, "week")
  },
  {
    id: 2,
    group: 1066,
    title: "item 2",
    start_time: moment().add(1, "day"),
    end_time: moment().add(3, "day")
  },
  {
    id: 3,
    group: 379,
    title: "item 3",
    start_time: moment().add(2, "day"),
    end_time: moment().add(3, "day")
  }
];

const MOCalendar = ({ employee }) => {
  const groups = employee.map(emp => ({
    title: emp.full_name,
    id: emp.emp_id
  }));

  return (
    <Timeline
      items={items}
      groups={groups}
      defaultTimeStart={moment().add(-15, "day")}
      defaultTimeEnd={moment().add(16, "day")}
      sidebarWidth={300}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  employee: selectEmployee
});

export default connect(mapStateToProps)(MOCalendar);
