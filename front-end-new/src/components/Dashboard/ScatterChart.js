import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import Title from "./Title";
import axios from "axios";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterChart = () => {
  const [vars, setVars] = useState({});

  useEffect(() => {
    axios
      .get("https://gradapp.adaptable.app/chart/sector")
      .then((res) => {
        setVars(res.data);
        console.log(res.data);
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
        label: "A dataset",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  data.labels = Object.keys(vars);
  data.datasets[0].data = Object.values(vars).map((item, index) => {
    return { x: index, y: item };
  });

  console.log(data);

  return (
    <div>
      <Title>Scatter Chart</Title>
      <Scatter data={data} />
    </div>
  );
};

export default ScatterChart;
