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
  async createChannel(token, channel, username) {
    try {
      await axios.post(`${API_BASE_URL}/restapi_0/influencers/channel`, {
        channelName: channel,
        userName: username
      }, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      await axios.put(`${API_BASE_URL}/restapi_0/influencers/twitch`, {}, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
