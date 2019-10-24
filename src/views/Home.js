import React, {Component, Fragment} from 'react'
import Content from 'components/home/Content'
import Channel from 'components/home/Channel'
import Header from 'components/common/Header'
import {
  Container
} from 'reactstrap';
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getLiveAllStreams, removeListStreams} from 'store/actions/streamsActions'

class Home extends Component {
  state={
    isLoading: true,
  }

  setLoading(bol) {
    this.setState({
      isLoading: bol
    })
  }

  async componentDidMount() {
    await this.getAllStreams()
    this.setLoading(false)
  }

  componentWillUnmount() {
    this.props.removeListStreams()
  }

  async getAllStreams() {
    try {
      await this.props.getLiveAllStreams()
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.props.streams[0])
    if(this.state.isLoading){
      return(
        <div className="loader-wrapper">
          <span class="loader"><span class="loader-inner"></span></span>
        </div>
      )
    }
    return (
        <Container fluid className="m-0 p-0">
          <Header
            primaryColor='rgba(0,0,0,.4)'
            secondaryColor='rgba(0,0,0,.5)'
            treeColor='#0F0F11'
          />
          <Content streams={this.props.streams} />
          <Channel streams={this.props.streams} />
      </Container>

    )
  }
}

const mapStateToProps = function (state) {
  return {
    streams: state.streamsReducers.list
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getLiveAllStreams,
    removeListStreams
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home)

