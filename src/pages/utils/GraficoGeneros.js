import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraficoGeneros() {
  const dados = {
    labels: ['MMORPG', 'Shooter', 'Strategy', 'Card Game', 'MOBA', 'Outros'],
    datasets: [
      {
        label: 'Total de Jogos',

        data: [159, 104, 54, 31, 19, 52],
        backgroundColor: [
          '#38bdf8', 
          '#0284c7',
          '#0369a1',
          '#075985',
          '#0c4a6e',
          '#475569',
        ],
        borderRadius: 6,
      },
    ],
  };

  const opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Distribuição do Catálogo por Género (Total: 419 Jogos)',
        color: '#f8fafc',
        font: { size: 15, weight: 'bold' },
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
        ticks: { color: '#94a3b8' },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: '#334155' },
      },
    },
  };

  return (
    <div style={estilos.container}>
      <Bar data={dados} options={opcoes} />
    </div>
  );
}

const estilos = {
  container: {
    backgroundColor: '#1e293b',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '900px',
    height: '300px',
    margin: '20px auto 30px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
};