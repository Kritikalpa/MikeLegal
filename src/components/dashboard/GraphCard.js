import React, { useState, useEffect } from "react";
import variables from "../../utilities/_variables.scss";
import { Chart, registerables } from "chart.js";
import "../../styles/graphcard.scss";

function GraphCard({ name, data, type, color }) {
  const [chart, setChart] = useState();

  useEffect(() => {
    if (!data) {
      return;
    }
    if (chart) {
      chart.destroy();
    }
    Chart.register(...registerables);
    const context = document.getElementById(`graph-${name}`);
    let graphData;
    if (type === "line") {
      graphData = {
        type: type,
        fill: { target: false },
        tension: 0.5,
      };
    } else {
      graphData = {
        backgroundColor: color,
        borderColor: "transparent",
        borderWidth: 3,
        barPercentage: 0.3,
      };
    }
    setChart(
      new Chart(context, {
        data: {
          labels: data?.labels,
          datasets: [
            {
              data: data?.offline,
              borderColor: variables.blue,
              ...graphData,
            },
            {
              data: data?.online,
              borderColor: variables.pink,
              ...graphData,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            responsive: true,
          },
          elements: {
            point: {
              radius: 0.1,
            },
          },
        },
      })
    );
  }, [type, data]);

  return (
    <div className="graph-card">
      <div className="card-head">Total Sales</div>
      <canvas id={`graph-${name}`}></canvas>
    </div>
  );
}

export default GraphCard;
