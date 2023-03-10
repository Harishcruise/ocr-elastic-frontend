import axios from "axios";


// const API_URL = "http://172.174.180.163:8500/users/Login";

// const fetchPiechartData = (bodyFormData) => {
//   return axios({
//     method: "post",
//     url: "http://172.174.180.163:8500/users/StorageDetails",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       // var ChartValue = response.data.Allocated;
//       var ChartData = response.data;
//       console.log(ChartData);
//       // setPieChartValue({...PieChartValue, ChartValue});
//       setPieChartValue([response.data]);
//       console.log(response.data);
      
//     })
//     .catch(function (response) {
//       console.log(response);
//     });
//   }

const login = (bodyFormData) => {
  return axios({
    method: "post",
    url: "http://172.174.180.163:8500/users/Login",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
        localStorage.setItem("userCredentials", JSON.stringify({username: bodyFormData.get("username"),password : bodyFormData.get("password")}))
        }
      
      console.log(typeof response.data.status);
      return response;
    });
};


const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userCredentials");

  // caches.keys().then((names) => {
  //   names.forEach((name) => {
  //     caches.delete(name);
  //   });
  // });
  // alert('Complete Cache Cleared')
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;

