import axios from "axios"
const baseUrl = 'https://jsonplaceholder.typicode.com'

export default axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    "Content-type": "application/json"
  }
});