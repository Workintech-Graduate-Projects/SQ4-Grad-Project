import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Title from "./Title";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const [variable, setVariable] = useState({});

  useEffect(() => {
    axios
      .get("https://gradapp.adaptable.app/chart/pref")
      .then((res) => {
        setVariable(res.data);
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
        label: "# of preference",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  data.labels = Object.keys(variable);
  data.datasets[0].data = Object.values(variable);

  return (
    <div className="Chart" style={{ width: "50%", height: "50%" }}>
      <section>
        <Title>Pie Chart</Title>
        <Pie data={data} />
      </section>
    </div>
  );
};

export default Charts;
