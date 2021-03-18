import axios from 'axios'

const instance = axios.create({
  baseURL: "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/",
  headers: {
    "Content-type": "application/json"
  }
})

export default instance
