import {createStore, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducers from 'store/reducers'

const history = createBrowserHistory()
const rootReducer = createRootReducers(history)
const router = routerMiddleware(history)
const enhancer = applyMiddleware(thunk, router)
const configureStore = function (initialState) {
  return createStore({
    rootReducer,
    initialState,
    enhancer
  })
}

export default { configureStore, history }
