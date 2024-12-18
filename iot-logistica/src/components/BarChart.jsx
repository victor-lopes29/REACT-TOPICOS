import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function BarChart() {
  const data = {
    labels: ["Gado 1", "Gado 2", "Gado 3", "Gado 4"],
    datasets: [
      {
        label: "Produção (kg)",
        data: [500, 400, 300, 700],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      },
    ],
  };

  return <Bar data={data} />;
}
