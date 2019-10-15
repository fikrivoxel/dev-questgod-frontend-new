import axios from 'axios'
import {API_BASE_URL} from 'globals.js'

export default {
  async getUserInfo(token) {
    try {
      let {data} = await axios.get(`${API_BASE_URL}/restapi_0/users/token`, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      return data.userInfo[0]
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
