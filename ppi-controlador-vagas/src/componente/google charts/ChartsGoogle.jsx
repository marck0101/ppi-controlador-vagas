import React from "react";
import { ChartStyle } from "./style";
import { Chart } from "react-google-charts";

const dataBase = {
  month: ["7/2022", "8/2022", "9/2022", "10/2022"],
  income: [3500, 2500, 3000.65, 8000],
  expense: [2500, 36000, 8950, 7000],
};

let arrIndice = Object.keys(dataBase);
let arrValues = Object.values(dataBase);
export let data = [];

for (let i = 0; i < arrValues[0].length; i++) {
  data[i] = arrValues.map((item) => {
    return item[i];
  });
}
data.unshift(arrIndice);

console.log(data);

export const options = {
  title: "Receitas X Despesas",
  curveType: "function",
  legend: { position: "botton" },
  hAxis: { format: "currency" },
  animation: { duration: 500, easing: "linear", startup: true },
};

const ChartView = () => {
  return (
    <>
      <ChartStyle>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
          chartLanguage="pt-BR"
        />
      </ChartStyle>
    </>
  );
};

export default ChartView;
