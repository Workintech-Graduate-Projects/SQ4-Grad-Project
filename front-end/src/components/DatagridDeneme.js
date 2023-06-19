import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
function CellDeneme() {
  return <button>risk hesapla</button>;
}
const PataGrid = ({ allAnswers }) => {
  const dataForGridTable = allAnswers.map((item) => {
    const answers = item.answers;
    const obj = {};
    answers.map((answer) => {
      const objKey = answer.field.ref;
      const a = answer.type;
      const objValue = answer[a];
      obj[objKey] = objValue;
      if (a === "choice") {
        obj[objKey] = objValue.label;
      }
    });
    obj.id = nanoid();
    obj.submitted = item["submitted_at"];
    return obj;
  });

  const keys = Object.keys(dataForGridTable[0]);
  const newColumn = keys.map((key) => {
    return {
      field: key,
      headerName: key.toUpperCase(),
    };
  });
  const newColumn2 = [
    ...newColumn,
    { field: "risk", headerName: "Risk", renderCell: CellDeneme },
  ];
  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={dataForGridTable}
        columns={newColumn2}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};
// valueGetter valueFormatter
// rendercell içerisinde component renderlanabilir
//Row editing  column editing admin için geçerli olacak
// datagrid inital state problemini çöz
// hesaplanan riski objenin içerisine ve databaseye kaydetmek gerekli

export default PataGrid;
