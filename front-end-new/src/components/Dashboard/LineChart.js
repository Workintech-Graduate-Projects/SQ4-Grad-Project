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

const LineChart = () => {
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
export default LineChart;
