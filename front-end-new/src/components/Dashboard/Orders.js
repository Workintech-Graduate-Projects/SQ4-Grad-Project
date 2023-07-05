import * as React from "react";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import axios, { all } from "axios";
import PataGrid from "../Veriler/DatagridDeneme";
import { nanoid } from "nanoid";


export default function Orders() {
  // const [allAnswers, setAllAnswers] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://tolgaapp.herokuapp.com/mongo")
      .then((res) => {
        const allAnswers = res.data;
        console.log("allAnswers:", allAnswers);
        const extractedRows = allAnswers.map((answer) => ({
          name: answer.name,
          sector: answer.sector,
          title: answer.title,
          experience: answer.experience,
          salary: answer.salary,
        }));
        setRows(extractedRows);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }, []);

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="large" sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>İsim</TableCell>
            <TableCell>Sektör</TableCell>
            <TableCell>Unvan</TableCell>
            <TableCell>Deneyim</TableCell>
            <TableCell align="right">Maaş Bilgisi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sector}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.experience}</TableCell>
              <TableCell align="right">{`${row.salary}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="/orders" onClick={PataGrid} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
