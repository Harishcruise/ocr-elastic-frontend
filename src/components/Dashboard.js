import React from 'react'
import Style from './Dashboard.module.css';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, LineChart, Line, Tooltip, AreaChart,
  Area} from 'recharts';


function Dashboard() {

  const files = [
    {name: 'pdf', students: 80},
    {name: 'jpg', students: 200},
    {name: 'txt', students: 500}
  ];
  const data = [
    { name: 'Total Storage', value: 600 },
    { name: 'Free Space', value: 400 }
];
const time = [
  {name: 'Date1', students: 400},
  {name: 'Date2', students: 700},
  {name: 'Date3', students: 200},
  {name: 'Date4', students: 1000}
];


const upload = [
  {
    "name": "user 1",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "user 2",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "user 3",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "user 4",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "user 5",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "user 6",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "user 7",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

  return (
    <>
    <div style={{paddingTop:"50px"}}>

  <div className= {Style.wrapper}>
  <div className= {Style.piechart}>
                            <PieChart width={300} height={250}>
                                <Legend wrapperStyle={{bottom:10, left: 45}} layout="horizontal" horizontal="bottom" align="bottom" />
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
			</div>

      <div className={Style.Barchart}>
      <BarChart width={450} height={250} data={files}>
    <Bar dataKey="students" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
      </div>
      
     <div className={Style.Areachart}>
     <AreaChart width={400} height={250} data={time}>
    <Area dataKey="students" fill="orange" stroke="orange" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </AreaChart>
     </div>

     
     <div className={Style.Linechart}>
     <LineChart width={1190} height={290} data={upload}
  margin={{ top: 10, right: 30, left: 80, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
     </div>
     
      </div>
		</div>

</>
  )
}

export default Dashboard