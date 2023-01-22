import React, { useState } from "react";
import { Chart } from "primereact/chart";
import BarChart from "./BarChart";
import Navbar from "./Navbar";
import Cards from "./Cards";

function Home() {
  let name = localStorage.getItem("name");


  return (
    <div style={{ paddingBottom: "100px" }}>
      <Navbar />

      <h2 className=" text-uppercase mt-1 text-warning">Welcome {name} 😇</h2>
      {/* <h4 className="text-uppercase mt-1 text-end text-warning">Logged in at {Houres} : {Minutes} </h4> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 mt-5">
            <BarChart />
          </div>
          <div className="col-lg-2"></div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
