import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "https://movie-review-team-a.herokuapp.com/api/";

const getPublicMovie = (category) => {
  if (category === undefined) {
    //untuk kategori undefined
    return axios.get(API_URL + "movies");
  } else {
    //untuk filter kategori
    return axios.get(API_URL + "movies/" + category);
  }
};

//belom ada di API, jadi dipanggil juga gk bisa
const getUserBoard = () => {
  // untuk ambil user profile
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdminBoard = () => {
  // untuk ambil admin profile
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicMovie,
  getUserBoard,
  getAdminBoard,
};
