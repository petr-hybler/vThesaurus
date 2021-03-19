import axios from './../../axios/axios-conf'
import {key} from './thesaurus.mixin'

let secretKey = key

class ThesaurusService {

  getDefinition(word){
    let url = word+'?key='+secretKey
    return axios.get(url)
  }
}

 export default new ThesaurusService()
