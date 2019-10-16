import {forEach, includes, isEmpty} from 'lodash'
import {
  SET_TOKEN_USERS,
  REMOVE_TOKEN_USERS,
  SET_DATA_USERS,
  REMOVE_DATA_USERS,
  SET_LIST_USERS,
  REMOVE_LIST_USERS,
  SET_TOKEN_DATA_USERS,
  REMOVE_TOKEN_DATA_USERS,
  SET_DATA_INFLUENCER_USERS
} from 'store/actions/usersActions'

const initState = {
  token: '',
  data: {},
  list: []
}

const setTokenUsers = function(state, payload) {
  return {
    ...state,
    token: payload
  }
}
const removeTokenUsers = function (state) {
  return {
    ...state,
    token: ''
  }
}
const setDataUsers = function (state, payload) {
  return {
    ...state,
    data: payload
  }
}
const removeDataUsers = function (state) {
  return {
    ...state,
    data: {}
  }
}
const setListUsers = function (state, payload) {
  return {
    ...state,
    list: payload
  }
}
const removeListUsers = function (state) {
  return {
    ...state,
    list: []
  }
}
const setTokenDataUsers = function (state, payload) {
  let set = {}
  forEach(payload, (val, key) => {
    if (includes(['token', 'data'], key)) {
      set[key] = val
    }
  })
  if (isEmpty(set)) return state
  return {
    ...state,
    ...set
  }
}
const removeTokenDataUsers = function (state) {
  return {
    ...state,
    token: '',
    all: []
  }
}
const setDataInfluencer = function (state, payload) {
  return {
    ...state,
    data: {
      ...state.data,
      influencer: payload
    }
  }
}

export default function usersReducers(state = initState, action) {
  let {payload} = action
  switch(action.type) {
    case SET_TOKEN_USERS:
      return setTokenUsers(state, payload)
    case REMOVE_TOKEN_USERS:
      return removeTokenUsers(state)
    case SET_DATA_USERS:
      return setDataUsers(state, payload)
    case REMOVE_DATA_USERS:
      return removeDataUsers(state)
    case SET_LIST_USERS:
      return setListUsers(state, payload)
    case REMOVE_LIST_USERS:
      return removeListUsers(state)
    case SET_TOKEN_DATA_USERS:
      return setTokenDataUsers(state, payload)
    case REMOVE_TOKEN_DATA_USERS:
      return removeTokenDataUsers(state)
    case SET_DATA_INFLUENCER_USERS:
      return setDataInfluencer(state, payload)
    default:
      return state
  }
}
