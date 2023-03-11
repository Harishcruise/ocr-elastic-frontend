import axios from "axios";

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

