import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";
import Cards from "./Cards";
import { Card } from "primereact/card";

const BarChart = () => {
  const [data, setData] = useState();
  const [alldata, setAllData] = useState();
  useEffect(() => {
    axios.get("http://localhost:8081/user/get").then((res) => {
      console.log(res.data.data);
      setAllData(res.data.data);
      let currencies = new Array();
      let prices = new Array();
      res.data.data.forEach((element) => {
        currencies.push(element.currency);
        prices.push(element.price);
      });

      setData({
        labels: currencies,
        datasets: [
          {
            label: "Currency Exchange Rates Base- USD",
            backgroundColor: "green",
            data: prices,
          },
        ],
      });
    });
  }, []);

  function sync(e) {
    e.preventDefault();
    axios.get("http://localhost:8081/sync").then((res) => {});
  }
  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#393f45",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };
    return {
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();
  if (alldata !== undefined) {
    return (
      <div>
        <div className="card ">
          <Chart
            type="bar"
            style={{ height: "20rem" }}
            data={data}
            options={basicOptions}
          />
        </div>
        <div className="text-white mt-3">
          Currency Exchange Rate Base - USD &nbsp;&nbsp;&nbsp;
          <button onClick={sync} className='btn btn-primary'>Sync data</button>
        </div>

        <div className="row">
          <div className="col-lg-1"></div>
          {alldata.map((data, i) => {
            return (
              <div
                className="col-lg-2 col-md-4 col-sm-1 mb-3 mt-3"
                key={data.currency}
              >
                <Card title={data.currency} subTitle={data.price}></Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Waiting</div>;
  }
};

export default BarChart;
