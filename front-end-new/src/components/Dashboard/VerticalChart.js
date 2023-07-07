import React , { useEffect, useState }  from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
 
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Title from "./Title";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  
  Tooltip,
  Legend
);

const VerticalChart = () => {

    const [value, setValue] = useState({});

  useEffect(() => {
    axios
      .get("https://gradapp.adaptable.app/chart/pie")
      .then((res) => {
        setValue(res.data);

        console.log("allAnswers:", res.data);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }, []);




const data = {
  labels : [],
  datasets: [
    {
      label: 'Dataset 1',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data:[],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  data.labels = Object.keys(value);
  data.datasets[0].data = Object.values(value);


  return(
  <div>
    <Title >Vertical Chart</Title>
    <Bar data={data} />
  </div>);
}


export default VerticalChart