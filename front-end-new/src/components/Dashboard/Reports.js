import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar, Line, Scatter } from "react-chartjs-2";
import Title from "./Title";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const [variable, setVariable] = useState({});

  useEffect(() => {
    axios
      .get("https://gradapp.adaptable.app/chart/pie")
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
        label: "# of Votes",
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
    <div className="Chart">
      <section>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Pie Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Title>Pie Chart</Title>
                <Pie data={data} />
              </Paper>
            </Grid>

            {/* Bar Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Title>Bar Chart</Title>
                <Bar data={data} />
              </Paper>
            </Grid>

            {/* Line Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Title>Line Chart</Title>
                <Line data={data} />
              </Paper>
            </Grid>

            {/* Scatter Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Title>Scatter Chart</Title>
                <Scatter data={data} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Charts;
