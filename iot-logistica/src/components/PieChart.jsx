import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function PieChart() {
  const data = {
    labels: ["Leite", "Carne", "Corte"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  return <Pie data={data} />;
}
