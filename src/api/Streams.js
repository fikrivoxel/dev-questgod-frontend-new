import axios from 'axios'
import {has} from 'lodash'
import {API_BASE_URL} from 'globals.js'

export default {
  async getAllLiveStream() {
    try {
      let {data: {streams}} = await axios.get(`${API_BASE_URL}/restapi_0/influencers/stream`)
      return streams.filter(stream => {
        return has(stream, 'TwitchStreams')
      })
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async getLiveStreamsByChannels(username) {
    try {
      let {data} = await axios.get(`${API_BASE_URL}/restapi_0/influencers/channel/live/${username}`)
      if (has(data, 'TwitchStreams')) return {
        onLive: true,
        TwitchStreams: data.TwitchStreams.data[0],
        QGStreams: data.QGStreams[0]
      }
      else return {
        onLive: false
      }
    } catch (err) {
      return {
        onLive: false
      }
    }
  }
}
