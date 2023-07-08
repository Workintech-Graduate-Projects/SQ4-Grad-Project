import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Box from "@mui/material/Box";

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
      .get("https://gradapp.adaptable.app/mongo")
      .then((res) => {
        setAllAnswers(res.data);
        console.log("allAnswers:", res.data);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }, []);

  console.log(allAnswers);
  const dataForGridTable = allAnswers ? allAnswers : [];

  const keys = dataForGridTable[0] ? Object.keys(dataForGridTable[0]) : [];
  const newColumn = keys.map((key) => {
    return {
      field: key,
      headerName: key.toUpperCase(),
      flex: 1, 
      minWidth: 150, 
    };
  });

  const newColumn2 = [
    ...newColumn,

    {
      field: "pipeDrive",
      headerName: "Pipe-Drive",
      renderCell: (params) => <PipeDriveSend params={params} />,
      sortable: false, 
      filterable: false, 
      width: 150, 
    },
  ];

  return (
    <Box sx={{ mt: 2, mb: 2, ml: 2, width: "calc(100% - 2rem)" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={dataForGridTable}
        columns={newColumn2}
        components={{
          Toolbar: GridToolbar,
        }}
        autoHeight
      />
    </Box>
  );
};

export default PataGrid;
