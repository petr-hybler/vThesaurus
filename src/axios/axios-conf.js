import axios from 'axios'

const instance = axios.create({
  baseURL: "https://dictionaryapi.com/api/v3/references/collegiate/json",
  headers: {
    "Content-type": "application/json"
  }
})

export default instance
