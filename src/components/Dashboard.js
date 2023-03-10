import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from './Dashboard.module.css';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, LineChart, Line, Tooltip, AreaChart,
  Area} from 'recharts';
import CalendarHeatmap from 'reactjs-calendar-heatmap'

function Dashboard() {
  const [BarChartValue, setBarChartValue] = useState([]);
  const [PieChartValue, setPieChartValue] = useState([]);
  const [LineChartValue, setLineChartValue] = useState([]);
  const [RecentActivity,setRecentActivity] = useState([]);

  var bodyFormData = new FormData();
  bodyFormData.append('username', 'kapil'); //Current User
  bodyFormData.append('password', 'kapilpwd'); //Current Password

  const fetchPiechartData = (bodyFormData) => {
    return axios({
      method: "post",
      url: "http://172.174.180.163:8500/users/StorageDetails",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // var ChartValue = response.data.Allocated;
        var ChartData = response.data;
        console.log(ChartData);
        // setPieChartValue({...PieChartValue, ChartValue});
        setPieChartValue([response.data]);
        console.log(response.data);
        
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  useEffect(() => {
    fetchPiechartData(bodyFormData);
  }, []);


  

  const fetchBarchartData = (bodyFormData) => {
    return axios({
      method: "post",
      url: "http://172.174.180.163:8500/stats/TypeBasedFrequency",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // var BarChartData = response.data.txt;
        // console.log(BarChartValue);
        setBarChartValue([response.data]);
        console.log(response.data);
        
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  useEffect(() => {
    fetchBarchartData(bodyFormData);
  }, []);

  

  const fetchLinechartData = (bodyFormData) => {
    return axios({
      method: "post",
      url: "http://172.174.180.163:8500/stats/DateBasedFrequency",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // var LineChartData = response.data;
        // console.log(LineChartData);
        setLineChartValue([response.data]);
        console.log(response.data);
        
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  useEffect(() => {
    fetchLinechartData(bodyFormData);
  }, []);

  var bodyFormData = new FormData();
  bodyFormData.append('username', 'charan'); //Current User
  bodyFormData.append('password', 'charanpwd'); 

  const fetchRecentActivity = (bodyFormData) => {
    return axios({
      method: "post",
      url: "http://172.174.180.163:8500/users/GetMetaData",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // var LineChartData = response.data;
        // console.log(LineChartData);
        var dateTime = response.data.Files[0]['file_date'];
        // var Time = dateTime.split('');
        // console.log(Time);
        setRecentActivity([response.data.Files]);
        console.log(typeof response.data.Files[0]['file_date']);
        
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  useEffect(() => {
    fetchRecentActivity(bodyFormData);
  }, []);

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
    "Upload Rate": 2400,
    "amt": 2400
  },
  {
    "name": "March",
    "uv": 3000,
    "Upload Rate": 1398,
    "amt": 2210
  },
  {
    "name": "June",
    "uv": 2000,
    "Upload Rate": 9800,
    "amt": 2290
  },
  {
    "name": "Aug",
    "uv": 2780,
    "Upload Rate": 3908,
    "amt": 2000
  },
  {
    "name": "Sept",
    "uv": 1890,
    "Upload Rate": 4800,
    "amt": 2181
  },
  {
    "name": "Nov",
    "uv": 2390,
    "Upload Rate": 3800,
    "amt": 2500
  },
  {
    "name": "Dec",
    "uv": 3490,
    "Upload Rate": 4300,
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
                                      // data = {Object.entries(PieChartValue).filter(([key]) => !['Unit'].includes(key)).map( ([key,value]) => value)}
                                      data={PieChartValue}

                                    // data={PieChartValue.ChartValue}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey= "Allocated"
                                    // nameKey="Allocated"
                                >
                                  {/* {[PieChartValue.Allocated, PieChartValue.Used].map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))} */}
                                    {PieChartValue.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                                    {/* {PieChartValue.map( */}
                                </Pie>
                                <Tooltip />
                            </PieChart>
			</div>

      <div className={Style.Barchart}>
        <p>Uploaded Files based on file type</p>
      <BarChart width={450} height={196} margin={{ right:20}} 
      data={BarChartValue}>
    <Bar dataKey="txt" fill="#FF69B4"></Bar>
    {/* <CartesianGrid stroke="#ccc" /> */}
    <XAxis dataKey="BarChartValue" />
    <YAxis />
    <Tooltip cursor={false}/>
  </BarChart>
      </div>
      
     <div className={Style.Areachart}>
      <p>Monthly Overview</p>
     <AreaChart width={400} height={196} margin={{ right:20}} data={time}>
    <Area dataKey="students" fill="orange" stroke="orange" />
    {/* <CartesianGrid stroke="#ccc" /> */}
    <XAxis dataKey="name" />
    <YAxis/>
    <Tooltip />
  </AreaChart>
     </div>

     
     <div className={Style.Linechart}>
      <p>Growth over Time</p>
     <LineChart width={770} height={290} data={LineChartValue}
  margin={{right: 20, left: 20, bottom: 5 }}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="20.01.2022" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="20.01.2022" stroke="#8B008B" />
  <Line type="monotone" dataKey="21.01.2022" stroke="#82ca9d" />
</LineChart>
     </div>

     <div className={Style.Activity}>
        <p>Recent Activity</p>
        {RecentActivity.map(([key,value])=> <div className={Style.ActivityDiv}>
          You uploaded {value.file_name} {value.file_date}
        </div>) }
        {/* <div className={Style.ActivityDiv}>
          You uploaded 7 files 4 mins ago
        </div> */}
        {/* {RecentActivity.forEach((item,index)=>
        <div key={index}><div>You Uploaded {item.file_name}</div></div>)}; */}


        
      <BarChart color={"white"} width={400} height={260} margin={{ right:20}} data={files}>
        
    {/* <Bar dataKey="students" fill="#8884d8">
    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
    </Bar> */}
    {/* <CartesianGrid stroke="#ccc" /> */}
    {/* <XAxis dataKey="name" />
    <YAxis />
    <Tooltip  cursor={false} /> */}
  </BarChart>
      </div>

     
     {/* <div className={Style.Calendarheatmap}>
     <CalendarHeatmap
  data={calendar}>
</CalendarHeatmap>
     </div> */}
     
      </div>
		</div>
    {/* <div style={{marginLeft:"500px"}}><div>{PieChartValue.ChartValue}</div></div> */}
    {/* <div style={{marginLeft:"500px"}}><div>{PieChartValue.ChartData}</div></div> */}
</>
  )
}

export default Dashboard