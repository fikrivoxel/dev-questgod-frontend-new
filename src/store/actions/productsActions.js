import Products from 'api/Products'

export const SET_LIST_PRODUCTS = 'SET_LIST_PRODUCTS'
export const REMOVE_LIST_PRODUCTS = 'REMOVE_LIST_PRODUCTS'

export const setListProducts = function (payload) {
  return {
    type: SET_LIST_PRODUCTS,
    payload
  }
}
export const removeListProducts = function () {
  return {
    type: REMOVE_LIST_PRODUCTS
  }
}

export const getProductsByStream = function (id) {
  return async function(dispatch) {
    let products = await Products.getProductsByStream(id)
    dispatch(setListProducts(products))
    return Promise.resolve()
  }
}
