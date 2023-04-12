import { combineReducers } from "redux";

const tableReducer = (tableData = [], action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...tableData];

    default:
      return tableData;
  }
};

export default combineReducers({ table: tableReducer });
