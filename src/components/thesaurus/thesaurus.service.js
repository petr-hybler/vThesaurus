import axios from './../../axios/axios-conf'

let secretKey = "ac87995d-cd2d-43fb-aca5-9ac2aa05661c"

class ThesaurusService {

  getDefinition(word){
    let url = word+'?key='+secretKey
    return axios.get(url)
  }
}

 export default new ThesaurusService()
