// import React, { useEffect, useState } from "react";
// import { useTheme } from "@mui/material/styles";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Label,
//   ResponsiveContainer,
// } from "recharts";
// import Title from "./Title";

// const Chart = ({ allAnswers }) => {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>General Credit Score </Title>
//       <ResponsiveContainer>
//         <LineChart
//           // data={chartData}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis
//             dataKey="person"
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           />
//           <YAxis
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           >
//             <Label
//               angle={270}
//               position="left"
//               style={{
//                 textAnchor: "middle",
//                 fill: theme.palette.text.primary,
//                 ...theme.typography.body1,
//               }}
//             >
//               Score
//             </Label>
//           </YAxis>
//           <Line
//             isAnimationActive={false}
//             type="monotone"
//             dataKey="score"
//             stroke={theme.palette.primary.main}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// };

// export default Chart;

// Data retrieved from https://netmarketshare.com/
// Build the chart

var Highcharts = require("highcharts");

require("highcharts/modules/exporting")(Highcharts);

Highcharts.chart("container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in March, 2022",
    align: "left",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 74.77,
          sliced: true,
          selected: true,
        },
        {
          name: "Edge",
          y: 12.82,
        },
        {
          name: "Firefox",
          y: 4.63,
        },
        {
          name: "Safari",
          y: 2.44,
        },
        {
          name: "Internet Explorer",
          y: 2.02,
        },
        {
          name: "Other",
          y: 3.28,
        },
      ],
    },
  ],
});
