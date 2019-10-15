import axios from 'axios'
import {API_BASE_URL} from 'globals.js'
import {pick} from 'lodash'

export default {
  async getChannelData(username) {
    try {
      let {data} = (await axios.get(`${API_BASE_URL}/restapi_0/influencers/channel/username/${username}`))
      return pick(data, [
        'followers',
        'userName',
        'channelName',
        'channelUrl',
        'displayPicture',
        'channelBanner'
      ])
    } catch (err) {
      return Promise.reject(err)
    }
  },
}
