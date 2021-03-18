export default function authHeader() {
  //untuk setting header autorisasi
  const token = JSON.parse(localStorage.getItem("token"));

  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
