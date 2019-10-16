import Auth from 'api/Auth'
import {isEmpty} from 'lodash'

export const SET_TOKEN_USERS = 'SET_TOKEN_USERS'
export const REMOVE_TOKEN_USERS = 'REMOVE_TOKEN_USERS'
export const SET_DATA_USERS = 'SET_DATA_USERS'
export const REMOVE_DATA_USERS = 'REMOVE_DATA_USERS'
export const SET_LIST_USERS = 'SET_LIST_USERS'
export const REMOVE_LIST_USERS = 'REMOVE_LIST_USERS'
export const SET_TOKEN_DATA_USERS = 'SET_TOKEN_DATA_USERS'
export const REMOVE_TOKEN_DATA_USERS = 'REMOVE_TOKEN_DATA_USERS'
export const SET_DATA_INFLUENCER_USERS = 'SET_DATA_INFLUENCER_USERS'

export const setTokenUsers = function (payload) {
  return {
    type: SET_TOKEN_USERS,
    payload
  }
}
export const removeTokenUsers = function () {
  return {
    type: REMOVE_TOKEN_USERS
  }
}
export const setDataUsers = function (payload) {
  return {
    type: SET_DATA_USERS,
    payload
  }
}
export const removeDataUsers = function () {
  return {
    type: REMOVE_DATA_USERS
  }
}
export const setListUsers = function (payload) {
  return {
    type: SET_LIST_USERS,
    payload
  }
}
export const removeListUsers = function () {
  return {
    type: REMOVE_LIST_USERS
  }
}
export const setTokenDataUsers = function (payload) {
  return {
    type: SET_TOKEN_DATA_USERS,
    payload
  }
}
export const removeTokenDataUsers = function () {
  return {
    type: REMOVE_TOKEN_DATA_USERS
  }
}
export const setDataInfluencer = function (paylod) {
  return {
    type: SET_DATA_INFLUENCER_USERS,
    paylod
  }
}


export const removeStorage = function () {
  return function (dispatch) {
    localStorage.removeItem('token')
    localStorage.removeItem('isNew')
    dispatch(removeTokenDataUsers())
  }
}

export const handleStorageSetTokenData = function (token) {
  return async function (dispatch) {
    try {
      let data = await Auth.getUserInfo(token)
      dispatch(setTokenDataUsers({token, data}))
      return Promise.resolve()
    } catch (err) {
      if (err.response) {
        let {response: {data: {message}}} = err
        if (message === 'Auth Failed') dispatch(removeStorage())
      }
      return Promise.reject(err)
    }
  }
}

export const checkStorage = function () {
  return async function (dispatch) {
    let token = localStorage.getItem('token')
    if (isEmpty(token)) return
    try {
      let data = await Auth.getUserInfo(token)
      dispatch(setTokenDataUsers({token, data}))
    } catch (err) {
      if (err.response) {
        let {response: {data: {message}}} = err
        if (message === 'Auth Failed') dispatch(removeStorage())
      }
      return Promise.reject(err)
    }
  }
}
