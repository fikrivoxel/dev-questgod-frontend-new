import Streams from 'api/Streams'

export const SET_LIST_STREAMS = 'SET_LIST_STREAMS'
export const REMOVE_LIST_STREAMS = 'REMOVE_LIST_STREAMS'
export const SET_DATA_STREAMS = 'SET_DATA_STREAMS'
export const REMOVE_DATA_STREAMS = 'REMOVE_DATA_STREAMS'

export const setListStreams = function (payload) {
  return {
    type: SET_LIST_STREAMS,
    payload
  }
}
export const removeListStreams = function () {
  return {
    type: REMOVE_LIST_STREAMS
  }
}
export const setDataStreams = function (payload) {
  return {
    type: SET_DATA_STREAMS,
    payload
  }
}
export const removeDataStreams = function () {
  return {
    type: REMOVE_DATA_STREAMS
  }
}


export const getLiveAllStreams = function () {
  return async function(dispatch) {
    try {
      let streams = await Streams.getAllLiveStream()
      dispatch(setListStreams(streams))
      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
export const getLiveStreamsByChannels = function (username) {
  return async function(dispatch) {
    let data = await Streams.getLiveStreamsByChannels(username)
    dispatch(setDataStreams(data))
    return Promise.resolve()
  }
}
