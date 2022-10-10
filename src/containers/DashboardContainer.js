import React, { useEffect, useState } from "react";
import Banner from "../components/dashboard/Banner";
import GraphCard from "../components/dashboard/GraphCard";
import "../styles/dashboardcontainer.scss";
import axios from "axios";

function DashboardContainer() {
  const [sales, setSales] = useState(null);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/41546d39-eecc-44d5-8cf9-f060a8d8faa8")
      .then((res) => {
        const salesData = res.data["online"].reduce((acc, item, index) => {
          return {
            ...acc,
            labels: [
              ...(acc["labels"] || []),
              new Date(item["base_date"]).toDateString().slice(4, 10),
            ],
            online: [...(acc["online"] || []), item["values"].length],
            offline: [
              ...(acc["offline"] || []),
              res.data["offline"][index]["values"].length,
            ],
          };
        }, {});
        setSales(salesData);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="top-row">
        <div className="banner-container">
          <div className="dashboard-title">Dashboard</div>
          <div>
            <div>Overview</div>
            <div className="dashboard-btn">Check now</div>
          </div>
          <Banner />
        </div>
        <div>
          <div className="graph-head">
            <div className="line-legend">
              <div>
                <div></div>
                <div>Online</div>
              </div>
              <div>
                <div></div>
                <div>Offline</div>
              </div>
            </div>
            <div className="dashboard-btn">View Details</div>
          </div>
          <div>
            <GraphCard name="sales" data={sales} type="line" />
          </div>
        </div>
      </div>
      <div className="bottom-row">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default DashboardContainer;
