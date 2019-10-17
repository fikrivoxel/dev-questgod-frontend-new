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
  },
  async usersSpentPoint(product, stream, token) {
    try {
      let {data} = await axios.put(`${API_BASE_URL}/restapi_0/users/spentpoint`, {
        productId: product,
        streamId: stream
      }, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async checkToken(key) {
    try {
      await axios.get(`${API_BASE_URL}/restapi_0/influencers/hiddenlink/live/${key}`)
      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
