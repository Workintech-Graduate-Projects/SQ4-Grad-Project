import React , { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import Title from './Title';
import axios from "axios";


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterChart = () => {
    const [vars, setVars] = useState({});
  
    useEffect(() => {
      axios
        .get("https://gradapp.adaptable.app/chart/pie")
        .then((res) => {
          setVars(res.data);
  
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
          label: 'A dataset',
          data: [],
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    };

  data.labels = Object.keys(vars);
  data.datasets[0].data = Object.values(vars);


  return (
  <div>
    <Title>Area Chart</Title>
    <Scatter data={data} /> 
    </div>);
}

export default ScatterChart