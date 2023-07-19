import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import { LineChart1 } from "./LineChart";
import VerticalChart from "./VerticalChart";
import ScatterChart from "./ScatterChart";
import Menu from "./Menu";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts1 = () => {
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
              <LineChart1 />
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
const Charts = () => {
  return (
    <div>
      <Menu>
        <Charts1 />
      </Menu>
    </div>
  );
};

export default Charts;
