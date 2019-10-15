import React, {Component} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import {isEmpty, pick} from 'lodash'
import routes from 'routers/routes'
import Layouts from 'layouts'
import {handleStorageSetTokenData, checkStorage} from 'store/actions/usersActions'

class Routers extends Component {
  routes = routes
  constructor(props) {
    super(props)
    this.handleStorage = this.handleStorage.bind(this)
  }
  async componentDidMount() {
    await this.checkStorage()
    window.addEventListener('storage', this.handleStorage, false)
  }
  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorage, false)
  }
  get layout() {
    let {location} = this.props
    if (location.pathname === '/authentication/user')
      return 'Auth'
    else
      return 'Normal'
  }
  get routesMap() {
    return this.routes.map((route, idx) => (
      <Route {...route} key={idx}/>
    ))
  }
  async handleStorage(e) {
    let {location} = this.props
    if (location.pathname === '/authentication/user') return
    if (e.newValue === e.oldValue) return
    if (e.key === 'token' && !isEmpty(e.newValue)) {
      let token = e.newValue
      try {
        await this.props.handleStorageSetTokenData(token)
      } catch (err) {
        console.log(err)
      }
    }
  }
  async checkStorage() {
    try {
      await this.props.checkStorage()
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <Layouts is={this.layout}>
        <Switch>
          {this.routesMap}
        </Switch>
      </Layouts>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    users: pick(state.usersReducers, [
      'token',
      'data'
    ])
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({handleStorageSetTokenData, checkStorage}, dispatch)
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Routers)
