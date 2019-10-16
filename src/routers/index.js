import React, {Component} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import {isEmpty, pick, isEqual} from 'lodash'
import routes from 'routers/routes'
import Layouts from 'layouts'
import {handleStorageSetTokenData, checkStorage} from 'store/actions/usersActions'

class Routers extends Component {
  routes = routes
  state = {
    isLoading: false
  }
  auth = {
    is: ['/create-channel'],
    isnt: ['/registration', '/invitation']
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
  constructor(props) {
    super(props)
    this.handleStorage = this.handleStorage.bind(this)
  }
  async componentDidMount() {
    this.setLoading(true)
    await this.checkStorage()
    this.setLoading(false)
    this.checkLocation()
    window.addEventListener('storage', this.handleStorage, false)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!isEqual(prevProps.users, this.props.users) || !isEqual(prevProps.location, this.props.location)) {
      this.checkLocation()
    }
  }
  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorage, false)
  }
  checkLocation() {
    let {users, location} = this.props
    if (!isEmpty(users.token)) {
      if (
        this.auth.isnt.some((v) => {
          let rgx = new RegExp("^(\\"+ v +")", "i")
          let check = location.pathname.search(rgx)
          return check !== -1
        })
      ) {
        return this.props.history.push('/')
      }
    }
    if (isEmpty(users.token)) {
      if (
        this.auth.is.some((v) => {
          let rgx = new RegExp("^(\\"+ v +")", "i")
          let check = location.pathname.search(rgx)
          return check !== -1
        })
      ) {
        return this.props.history.push('/')
      }
    }
  }
  setLoading(bol) {
    this.setState({
      isLoading: bol
    })
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
    if (this.state.isLoading) return (
      <div>Loading</div>
    )
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
