// import * as React from "react";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
// import Title from "./Title";

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Deposits() {
//   return (
//     <React.Fragment>
//       <Title>Credit Score</Title>
//       <Typography component="p" variant="h4">
//         $3,024.00
//       </Typography>
//       <Typography color="text.secondary" sx={{ flex: 1 }}>
//         on 15 March, 2019
//       </Typography>
//       <div>
//         <Link color="primary" href="#" onClick={preventDefault}>
//           View balance
//         </Link>
//       </div>
//     </React.Fragment>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";
import Title from "./Title";
import axios from "axios";
import Menu from "./Menu";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

export const LineChart1 = () => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios
      .get("https://gradapp.adaptable.app/chart/countOfPeople")
      .then((res) => {
        setPerson(res.data);

        console.log("allAnswers:", res.data);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }, []);

  const data = {
    labels: [],
    datasets: [
      {
        label: "başvuru sayısı",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "tarih",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  data.labels = Object.keys(person);
  data.datasets[0].data = Object.values(person);

  return (
    <div>
      <Title>Line Chart</Title>
      <Line data={data} />
    </div>
  );
};
const LineChart = () => {
  return (
    <div>
      <Menu>
        <LineChart1 />
      </Menu>
    </div>
  );
};
export default LineChart;
