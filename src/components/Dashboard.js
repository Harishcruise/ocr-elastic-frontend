import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from './Dashboard.module.css';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, LineChart, Line, Tooltip, AreaChart,
  Area} from 'recharts';
import user from "../assets/user.png";
import { FiUser} from "react-icons/fi";
import datetime from 'react-datetime';

function Dashboard() {
  const [BarChartValue, setBarChartValue] = useState([]);
  const [PieChartValue, setPieChartValue] = useState([]);
  const [LineChartValue, setLineChartValue] = useState([]);
  const [AreaChartValue, setAreaChartValue] = useState([]);
  

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
  
  var AreaFormData = new FormData();
  AreaFormData.append('username', 'admin'); //Current User
  AreaFormData.append('password', 'admin'); //Current Password

  const fetchAreachartData = (AreaFormData) => {
    return axios({
      method: "post",
      url: "http://172.174.180.163:8500/users/GetAll",
      data: AreaFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // var LineChartData = response.data;
        // console.log(LineChartData);
        setAreaChartValue(response.data);
        console.log(response.data);
        
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  useEffect(() => {
    fetchAreachartData(AreaFormData);
  }, []);

  
  var LineFormData = new FormData();
  LineFormData.append('username', 'balaji'); //Current User
  LineFormData.append('password', 'balajipwd'); //Current Password

  const fetchLinechartData = (LineFormData) => {
    return axios({
      method: "post",
      url: "http://172.174.180.163:8500/stats/DateBasedFrequency",
      data: LineFormData,
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
    fetchLinechartData(LineFormData);
  }, []);

  var ActivityFormData = new FormData();
  ActivityFormData.append('username', 'charan'); //Current User
  ActivityFormData.append('password', 'charanpwd'); 


  const [RecentActivity,setRecentActivity] = useState([]);
  const fetchRecentActivity = (ActivityFormData) => {
    return axios({
      method: "post",
      url: "http://172.174.180.163:8500/users/GetMetaData",
      data: ActivityFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        // var string = response.data.Files[0]['file_date'];
        // console.log(string);
        // const dateTime = Date(string);
        // console.log(dateTime);
        // var d2 = new Date()
        // console.log(d2);
        // var currTime = d2.getTime();
        // console.log(currTime);
        
        // var diff = Math.floor((dateTime - currTime)/(24*3600*1000));
        // console.log(diff);

       setRecentActivity(response.data.Files);
        console.log(response.data.Files);
      
        
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  useEffect(() => {
    fetchRecentActivity(ActivityFormData);
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
  {name: 'kapil', Used_Storage: 400},
  {name: 'Balaji', Used_Storage: 700},
  {name: 'Harish',Used_Storage: 200},
  {name: 'Charan', Used_Storage: 1000}
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






const COLORS = ['#32CD32', '#00C49F', '#FFBB28', '#FF8042'];

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
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip cursor={false}/>
  </BarChart>
      </div>
      
     <div className={Style.Areachart}>
      <p>Users based Storage</p>
     <AreaChart width={400} height={196} margin={{ right:20}} data={AreaChartValue}>
    <Area dataKey="used_size" fill="orange" stroke="orange" />
    {/* <CartesianGrid stroke="#ccc" /> */}
    <XAxis dataKey="username" />
    <YAxis/>
    <Tooltip />
  </AreaChart>
     </div>

     
     <div className={Style.Linechart}>
      <p>File Growth over Time</p>
     <LineChart width={770} height={290} data={LineChartValue}
  margin={{right: 20, left: 20, bottom: 5 }}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="09/03/2023 16:12:38" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="09/03/2023 16:12:38" stroke="#8B008B" />
  <Line type="monotone" dataKey="10/03/2023 12:39:42" stroke="#82ca9d" />
</LineChart>
     </div>

     <div className={Style.Activity}>
        <p>Recent Activity</p>
        {
        RecentActivity.map((file, index)=>
          <div className={Style.ActivityDiv} key={index} >
            <img className={Style.User} src={user} />
            <p className={Style.Log}> You uploaded {file.file_name} on {file.file_date}</p>
          </div>
          ) 
      }
    
      </div>

      </div>
		</div>
    
</>
  )
}

export default Dashboard