import {
  SET_LIST_STREAMS,
  REMOVE_LIST_STREAMS,
  SET_DATA_STREAMS,
  REMOVE_DATA_STREAMS
} from 'store/actions/streamsActions'

const initState = {
  list: [],
  data: {}
}

const setListStreams = function (state, payload) {
  return {
    ...state,
    list: payload
  }
}
const removeListStreams = function (state) {
  return {
    ...state,
    list: []
  }
}
const setDataStreams = function (state, payload) {
  return {
    ...state,
    data: payload
  }
}
const removeDataStreams = function (state) {
  return {
    ...state,
    data: {}
  }
}

export default function streamsReducers(state = initState, action) {
  let {payload} = action
  switch(action.type) {
    case SET_LIST_STREAMS:
      return setListStreams(state, payload)
    case REMOVE_LIST_STREAMS:
      return removeListStreams(state)
    case REMOVE_DATA_STREAMS:
      return removeDataStreams(state)
    case SET_DATA_STREAMS:
      return setDataStreams(state, payload)
    default:
      return state
  }
}
