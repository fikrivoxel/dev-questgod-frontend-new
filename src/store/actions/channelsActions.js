import Channels from 'api/Channels'

export const SET_DATA_CHANNELS = 'SET_DATA_CHANNELS'
export const REMOVE_DATA_CHANNELS = 'REMOVE_DATA_CHANNELS'

export const setDataChannels = function (payload) {
  return {
    type: SET_DATA_CHANNELS,
    payload
  }
}

export const removeDataChannels = function () {
  return {
    type: REMOVE_DATA_CHANNELS
  }
}

export const getChannelData = function (username) {
  return async function(dispatch) {
    try {
      let data = await Channels.getChannelData(username)
      dispatch(setDataChannels(data))
      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
