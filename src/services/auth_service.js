import axios from "axios";
import qs from "qs";

const API_URL = "https://movie-review-team-a.herokuapp.com/api/";

const register = (name, username, email, password) => {
  //untuk API Call signup
  const data = {
    name: name,
    username: username,
    email: email,
    password: password,
  };

  return axios.post(API_URL + "signup", qs.stringify(data)).then((response) => {
    return response.data;
  });
};

const login = (username, password) => {
  //untuk API Call signin
  const data = { email: username, password: password };

  return axios.post(API_URL + "signin", qs.stringify(data)).then((response) => {
    if (response.data) {
      localStorage.setItem("token", JSON.stringify(response.data));
      localStorage.setItem("user", JSON.stringify(username));
    }
    return response.data;
  });
};

const logout = () => {
  //untuk API Call signout
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  //untuk API Call currentuser
  return (
    JSON.parse(localStorage.getItem("user")) +
    "|" +
    JSON.parse(localStorage.getItem("token"))
  );
};

//contoh testing
//'email=babecabita@gmail.com' \
//'password=0123456789'

// register(
//   "ingrid_test1",
//   "ingrid_1_username",
//   "ingrid_test3@testing.com",
//   "0123456789"
// );

// register(
//   "ingrid_test1",
//   "ingrid_1_username",
//   "ingrid_test1@testing.com",
//   "0123456789"
// );
//console.log(localStorage.getItem("token"));
//login("ingrid_test1@testing.com", "0123456789");
//console.log(getCurrentUser());
//console.log(localStorage.getItem("token"));
//end contoh testing

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
