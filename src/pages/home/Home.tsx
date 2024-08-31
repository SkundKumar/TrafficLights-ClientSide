import React, { useState, useEffect } from "react";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  // State to keep track of the active light
  const [activeLight, setActiveLight] = useState("red");

  // Example data to trigger the light toggle
  const trafficData = "green"; // Replace this with your dynamic data

  useEffect(() => {
    // Toggling light based on trafficData value
    if (trafficData === "green") {
      setActiveLight("green");
    } else if (trafficData === "yellow") {
      setActiveLight("yellow");
    } else {
      setActiveLight("red");
    }
  }, [trafficData]); // Re-run the effect when trafficData changes

  return (
    <div className="home">
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box3">
        <div className="eme">Lights</div>
        <div className="black">
          {/* Conditionally render the active light */}
          <div className={`red ${activeLight === "red" ? "active" : ""}`}></div>
          <div className={`yellow ${activeLight === "yellow" ? "active" : ""}`}></div>
          <div className={`green ${activeLight === "green" ? "active" : ""}`}></div>
        </div>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box3">
        <div className="eme">Emergency</div>
      </div>
    </div>
  );
};

export default Home;
