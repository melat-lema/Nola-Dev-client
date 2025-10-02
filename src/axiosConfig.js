import axios from "axios"

const axiosBase= axios.create({
  baseURL: 'https://nola-d-server.onrender.com/api'
})
export default axiosBase