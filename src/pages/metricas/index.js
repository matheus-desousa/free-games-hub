import {useState, useEffect} from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  Title, BarElement, CategoryScale, LinearScale
} from 'chart.js';
import { DivMe } from "./style";
import { DivMeDois } from "./style";
import { DivContainer } from "./style";

ChartJS.register(ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale);

export default function Metricas() {

  const [game, setGame] = useState([]);
      
      useEffect(() =>{
        axios.get(`https://www.freetogame.com/api/games`).
        then((response)=>{
          setGame(response.data)
        }).catch((err)=>{
          console.log(err)
        })
      }, [])

  const dataPizza = {
    labels: ['MMORPG', 'Shooter', 'Strategy', 'Card Game', 'MOBA', 'Outros'],
    datasets: [
      {
        label: 'Quantidade de Jogos',
        data: [159, 104, 54, 31, 19, 52],
        backgroundColor: [
          '#38bdf8', // (MMORPG)
          '#f43f5e', // (Shooter)
          '#10b981', // (Strategy)
          '#f59e0b', // (Card Game)
          '#a855f7', // (MOBA)
          '#64748b', // (Outros)
        ],
        borderColor: '#1e293b',
        borderWidth: 2,
      },
    ],
  };
  const dataPublishers = {
    labels: ['Electronic Arts', 'Ubisoft', 'Blizzard', 'Wargaming', 'Kakao Games'],
    datasets: [
      {
        label: 'Jogos Publicados',
        data: [28, 22, 18, 14, 11], 
        backgroundColor: [
          '#38bdf8',
          '#f43f5e',
          '#10b981',
          '#f59e0b',
          '#a855f7',
        ],
        borderRadius: 6,          
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Distribuição por Categorias de Jogos',
        color: '#f8fafc',              
        font: {
          size: 18,                   
          weight: 'bold',
          family: 'system-ui, sans-serif',
        },
        padding: {
          bottom: 20,               
        },
      },
      legend: {
        labels: {
          color: '#f8fafc',        
        },
      },
    },
  };
  const optionsPublishers = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Top 5 Distribuidoras',
        color: 'white',
        font: {
          size: 18,
          weight: 'bold',
          family: 'system-ui, sans-serif',
        },
        padding: {
          bottom: 16,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#38bdf8',
        bodyColor: '#ffffff',
        borderColor: '#38bdf8',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#fdfdfd', stepSize: 5 },
        grid: { color: '#334155' },
      },
    },
  };
  return (
    <>
      <Header />
      <DivContainer>
        <DivMe><Pie data={dataPizza} options={options} />
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <span style={{
              backgroundColor: '#0f172a',
              color: '#38bdf8',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 'bold',
              border: '1px solid #334155'
            }}>
              Total Analisado: 419 Jogos
            </span>
          </div>
        </DivMe>

        <DivMeDois><Bar data={dataPublishers} options={optionsPublishers} />
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
  <span
    style={{
      backgroundColor: '#0f172a',
      color: '#38bdf8',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 'bold',
      border: '1px solid #334155',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
    }}
  >
    🏢 Total Representado: <strong>93 Jogos no Top 5</strong>
  </span>
</div>
        </DivMeDois>
      </DivContainer>
    </>

  )
}