import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('jwt')
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: token
    }
  })
}

export default axiosWithAuth;