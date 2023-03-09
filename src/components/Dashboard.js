import React from 'react'
import Style from './Dashboard.module.css';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, LineChart, Line, Tooltip, AreaChart,
  Area} from 'recharts';
import CalendarHeatmap from 'reactjs-calendar-heatmap'

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
  {name: 'March', students: 400},
  {name: 'May', students: 700},
  {name: 'Sept', students: 200},
  {name: 'Dec', students: 1000}
];


const upload = [
  {
    "name": "Jan",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "March",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "June",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Aug",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Sept",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Nov",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Dec",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

// var calendar = [{
//   "date": "2016-01-01",
//   "total": 17164,
//   "details": [{
//     "name": "file 1",
//     "date": "2016-01-01 12:30:45",
//     "value": 9192
//   }, {
//     "name": "file 2",
//     "date": "2016-01-01 13:37:00",
//     "value": 6753
//   },
//   {
//     "name": "file 3",
//     "date": "2016-01-01 17:52:41",
//     "value": 1219
//   },
//   {
//     "name": "file 4",
//     "date": "2016-01-01 17:52:41",
//     "value": 1219
//   }]
// }]


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
    <p>User Storage</p>
                            <PieChart width={300} height={196}>
                                <Legend wrapperStyle={{bottom:9, left: 45}} layout="horizontal" horizontal="bottom" align="bottom" />
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
        <p>Uploaded Files based on file type</p>
      <BarChart width={450} height={196} margin={{ right:20}} data={files}>
    <Bar dataKey="students" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
      </div>
      
     <div className={Style.Areachart}>
      <p>Monthly Overview</p>
     <AreaChart width={400} height={196} margin={{ right:20}} data={time}>
    <Area dataKey="students" fill="orange" stroke="orange" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis/>
  </AreaChart>
     </div>

     
     <div className={Style.Linechart}>
      <p>File Growth over Time</p>
     <LineChart width={1190} height={290} data={upload}
  margin={{right: 20, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
</LineChart>
     </div>

     {/* <div className={Style.Calendarheatmap}>
     <CalendarHeatmap
  data={calendar}>
</CalendarHeatmap>
     </div> */}
     
      </div>
		</div>

</>
  )
}

export default Dashboard