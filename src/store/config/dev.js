import {createStore, applyMiddleware, compose} from 'redux'
import {createBrowserHistory} from 'history'
import {routerMiddleware, routerActions} from 'connected-react-router'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import createRootReducers from 'store/reducers'
import * as usersActions from 'store/actions/usersActions'
import * as streamsActions from 'store/actions/streamsActions'
import * as channelsActions from 'store/actions/channelsActions'
import * as productsActions from 'store/actions/productsActions'
import {NODE_ENV} from 'globals.js'

const history = createBrowserHistory()
const rootReducers = createRootReducers(history)
const configureStore  = function (initState) {
  let middleware = [], enhancers = []
  middleware.push(thunk)
  let logger = createLogger({
    level: 'info',
    collapsed: true
  })
  if (NODE_ENV !== 'test') middleware.push(logger)
  let router = routerMiddleware(history)
  middleware.push(router)
  let actionsCreators = {
    ...channelsActions,
    ...productsActions,
    ...streamsActions,
    ...usersActions,
    ...routerActions
  }
  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsCreators
    }) : compose
  enhancers.push(applyMiddleware(...middleware))
  let enhancer = composeEnhancers(...enhancers)
  return createStore(rootReducers, initState, enhancer)
}

export default {configureStore, history}
