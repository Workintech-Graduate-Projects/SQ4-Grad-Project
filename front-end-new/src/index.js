import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{
  /*<DataGrid
  getRowId={(row) => row._id}
  rows={dataForGridTable}
  columns={newColumn2}
  editMode="row"
  components={{
    Toolbar: GridToolbar,
  }}
  autoHeight
  processRowUpdate={upDateRow}
  isCellEditable={(params) => (params.row.isSendToPipeDrive ? false : true)}
/>;*/
}
