import axios from 'axios'
import {API_BASE_URL} from 'globals.js'

export default {
  async getProductsByStream(id) {
    try {
      let {data: {products}} = await axios.get(`${API_BASE_URL}/restapi_0/influencers/channel/product/stream/${id}`)
      return products
    } catch (err) {
      return []
    }
  }
}
