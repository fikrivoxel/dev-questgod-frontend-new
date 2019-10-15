import {
  SET_DATA_CHANNELS,
  REMOVE_DATA_CHANNELS
} from 'store/actions/channelsActions'

const initState = {
  data: {
    onLive: false
  }
}

const setDataChannels = function (state, payload) {
  return {
    ...state,
    data: payload
  }
}
const removeDataChannels = function (state) {
  return {
    ...state,
    data: {}
  }
}

export default function channelsReducers(state = initState, action) {
  let {payload} = action
  switch(action.type) {
    case SET_DATA_CHANNELS:
      return setDataChannels(state, payload)
    case REMOVE_DATA_CHANNELS:
      return removeDataChannels(state)
    default:
      return state
  }
}
