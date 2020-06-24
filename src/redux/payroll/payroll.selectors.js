import { createSelector } from "reselect";

const selectPayroll = state => state.payroll;

export const selectEmployee = createSelector(
  [selectPayroll],
  payroll => payroll.employee
);
