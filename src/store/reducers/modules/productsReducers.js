import {
  SET_LIST_PRODUCTS,
  REMOVE_LIST_PRODUCTS
} from 'store/actions/productsActions'

const initState = {
  list: []
}

const setListProducts = function (state, payload) {
  return {
    ...state,
    list: payload
  }
}
const removeListProducts = function (state) {
  return {
    ...state,
    list: []
  }
}

export default function productsReducers(state = initState, action) {
  let {payload} = action
  switch(action.type) {
    case SET_LIST_PRODUCTS:
      return setListProducts(state, payload)
    case REMOVE_LIST_PRODUCTS:
      return removeListProducts(state)
    default:
      return state
  }
}

