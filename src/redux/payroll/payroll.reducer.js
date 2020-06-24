import EMPLOYEE_DATA from './payroll.data'

const INITIAL_STATE = {
    employee: EMPLOYEE_DATA
}

const payrollReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
        return state
    }
}

export default payrollReducer