import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Menu from "../Dashboard/Menu";

import Box from "@mui/material/Box";

import axios from "axios";

const DataGridChart = () => {
  const [allAnswers, setAllAnswers] = useState(null);
  function PipeDriveSend(params) {
    async function handleOnclick(e) {
      try {
        await axios.post(
          "https://gradapp.adaptable.app/users/" + params.params.row._id
        );

        console.log(params.params.row);
        params.params.row.isSendToPipeDrive = true;
        setAllAnswers(
          allAnswers.map((item) => {
            if (item._id === params.params.row._id) {
              return { ...item, isSendToPipeDrive: true };
            } else {
              return item;
            }
          })
        );

        e.preventDefault();
        console.log("post işe yaradı");
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <button
        onClick={handleOnclick}
        disabled={params.params.row.isSendToPipeDrive}
      >
        PipeDrive Yolla
      </button>
    );
  }

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

  const upDateRow = (newRow, oldRow) => {
    console.log(newRow, oldRow);
    axios
      .put("https://gradapp.adaptable.app/mongo/" + newRow._id, {
        data: newRow,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("hata:", error);
      });
    return newRow;
  };

  console.log(allAnswers);
  const dataForGridTable = allAnswers ? allAnswers : [];

  const keys = dataForGridTable[0] ? Object.keys(dataForGridTable[0]) : [];
  const newColumn = [];
  keys.map((key) => {
    if (key !== "exception") {
      newColumn.push({
        field: key,
        headerName: key.toUpperCase(),
        flex: 1,
        minWidth: 150,
        editable: true,
      });
    }
  });

  const newColumn2 = [
    ...newColumn,
    {
      field: "exception",
      headerName: "Exception",
      sortable: false,
      filterable: false,
      width: 150,
      editable: true,
      valueGetter: (params) => {
        if (
          (params.row.exception.title,
          params.row.exception.sector,
          params.row.exception.preference)
        ) {
          return (
            params.row.exception.title +
            " " +
            params.row.exception.sector +
            " " +
            params.row.exception.preference
          );
        } else {
          return "none";
        }
      },
    },
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
        editMode="row"
        components={{
          Toolbar: GridToolbar,
        }}
        autoHeight
        processRowUpdate={upDateRow}
        isCellEditable={(params) =>
          params.row.isSendToPipeDrive ? false : true
        }
      />
    </Box>
  );
};
const PataGrid = () => {
  return (
    <div>
      <Menu>
        <DataGridChart />
      </Menu>
    </div>
  );
};
export default PataGrid;
