import * as React from "react";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import axios from "axios";
import { nanoid } from "nanoid";

export default function Orders() {
  const [allAnswers, setAllAnswers] = useState(null);
  let rows = [];
  if (allAnswers) {
    rows = allAnswers.map((item) => {
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
  }

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

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
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
              <TableCell>{row.sektor}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.tecrube}</TableCell>
              <TableCell align="right">{`${row.maas}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
