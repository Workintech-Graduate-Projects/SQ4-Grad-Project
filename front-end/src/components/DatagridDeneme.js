import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import creditScoreCalculator from "./calculating/calculate";
import axios from "axios";
function PipeDriveSend(params) {
  const newObj = {
    prefenrece: params.params.row.prefenrece,
    creditScore: params.params.row.creditScore,
    sektor: params.params.row.sektor,
    tecrube: params.params.row.tecrube,
    title: params.params.row.title,
  };
  async function handleOnclick() {
    try {
      await axios.post("http://localhost:9000/users", { newObj });
      console.log("post işe yaradı");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(params.params);
  return <button onClick={handleOnclick}>PipeDrive Yolla</button>;
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
    //{ field: "risk", headerName: "Risk", renderCell: CellDeneme returns html },
    {
      field: "creditScore",
      headerName: "creditScore",
      valueGetter: (params) => {
        const credit = creditScoreCalculator({
          sektor: params.row.sektor,
          title: params.row.title,
          tecrube: params.row.tecrube,
        });
        return credit.creditScore;
      },
    },
    {
      field: "preference",
      headerName: "preference",
      valueGetter: (params) => {
        const credit = creditScoreCalculator({
          sektor: params.row.sektor,
          title: params.row.title,
          tecrube: params.row.tecrube,
        });
        return credit.preference;
      },
    },
    ,
    {
      field: "pipeDrive",
      headerName: "Pipe-Drive",
      renderCell: (params) => <PipeDriveSend params={params} />,
    },
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
