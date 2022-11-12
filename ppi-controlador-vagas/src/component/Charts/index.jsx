import React from "react";
// import { ChatsStyles } from "./styles";
import {
  // LineChart,
  // Line,
  XAxis,
  YAxis,
  // Tooltip,
  // Legend,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
// import { Bar } from "react-chartjs-2";

const a = "VAGA 1";
const b = "VAGA 2";
const c = "VAGA 3";
const d = "VAGA 4";
const e = "VAGA 5";
const f = "VAGA 6";
const g = "VAGA 7";

export default function Chart() {
  // const data = [
  //   {
  //     name: `${a}`,
  //     uv: 4000, // linha verde uv
  //     pv: 2400, // linha roxa => pv
  //     amt: 2400, // pontos nos traços
  //   },
  //   {
  //     name: `${b}`,
  //     uv: 3000, // linha verde uv
  //     pv: 1398, // linha roxa => pv
  //     amt: 2210, // pontos nos traços
  //   },
  //   {
  //     name: `${c}`,
  //     uv: 2000, // linha verde uv
  //     pv: 9800, // linha roxa => pv
  //     amt: 2290, // pontos nos traços
  //   },
  //   {
  //     name: `${d}`,
  //     uv: 2780, // linha verde uv
  //     pv: 3908, // linha roxa => pv
  //     amt: 2000, // pontos nos traços
  //   },
  //   {
  //     name: `${e}`,
  //     uv: 1890, // linha verde uv
  //     pv: 4800, // linha roxa => pv
  //     amt: 2181, // pontos nos traços
  //   },
  //   {
  //     name: `${f}`,
  //     uv: 2390, // linha verde uv
  //     pv: 3800, // linha roxa => pv
  //     amt: 2500, // pontos nos traços
  //   },
  //   {
  //     name: `${g}`,
  //     uv: 3490, // linha verde uv
  //     pv: 4300, // linha roxa => pv
  //     amt: 2100, // pontos nos traços
  //   },
  // ];
  const data = [
    {
      name: `${a}`,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: `${b}`,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: `${c}`,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: `${d}`,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: `${e}`,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: `${f}`,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: `${g}`,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    // <ChatsStyles>
    <div className="chartContainer">
      {/* <LineChart width={900} height={300} data={data}>
          <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 1 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart> */}
      <BarChart width={900} height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
    // </ChatsStyles>
  );
}
