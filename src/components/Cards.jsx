import React from "react";
import { Card } from 'primereact/card';

const Cards = (props) => {

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        {props.data.map((data, i) => {
          return (
            <div className="col-lg-2 col-md-4 col-sm-1 mb-3">
              <Card title={data.currency} subTitle={data.price}>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
