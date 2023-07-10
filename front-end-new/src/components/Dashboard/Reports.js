import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import LineChart from "./LineChart";
import VerticalChart from "./VerticalChart";
import ScatterChart from "./ScatterChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  return (
    <div className="Chart">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
       
          <section>
            {/* Chart */}
            <Grid item xs={12} md={5} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Chart />
              </Paper>
            </Grid>

            <Grid item xs={12} md={5} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <LineChart />
              </Paper>
            </Grid>

            {/* Scatter Chart */}
            <Grid item xs={12} md={5} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <ScatterChart />
              </Paper>
            </Grid>

            {/* Vertical Chart */}
            <Grid item xs={12} md={5} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
              >
                <VerticalChart />
              </Paper>
            </Grid>
          </section>
    
      </Container>
    </div>
  );
};

export default Charts;
