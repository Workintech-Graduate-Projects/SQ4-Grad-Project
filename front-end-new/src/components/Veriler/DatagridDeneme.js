import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import creditScoreCalculator from "../../functions/calculate";
import axios from "axios";

function PipeDriveSend(params) {
  const newObj = {
    preference: params.params.row.preference,
    creditScore: params.params.row.creditScore,
    sector: params.params.row.sector,
    experience: params.params.row.experience,
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

const PataGrid = () => {
  const [allAnswers, setAllAnswers] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9000/typeformfetch")
      .then((res) => {
        setAllAnswers(res.data.items);
        console.log("allAnswers:", res.data.items);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }, []);

  console.log(allAnswers);
  const dataForGridTable = allAnswers
    ? allAnswers.map((item) => {
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
      })
    : [];

  const keys = dataForGridTable[0] ? Object.keys(dataForGridTable[0]) : [];
  const newColumn = keys.map((key) => {
    return {
      field: key,
      headerName: key.toUpperCase(),
    };
  });
  const newColumn2 = [
    ...newColumn,
    {
      field: "creditScore",
      headerName: "creditScore",
      valueGetter: (params) => {
        const credit = creditScoreCalculator({
          sector: params.row.sector,
          title: params.row.title,
          experience: params.row.experience,
        });
        return credit.creditScore;
      },
    },
    {
      field: "preference",
      headerName: "preference",
      valueGetter: (params) => {
        const credit = creditScoreCalculator({
          sector: params.row.sector,
          title: params.row.title,
          experience: params.row.experience,
        });
        return credit.preference;
      },
    },
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
