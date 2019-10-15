import React, {Component} from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import Home from 'components/channel/tabs/Home'
import NoLive from 'components/channel/tabs/NoLive'
import ComingSoon from 'components/channel/tabs/ComingSoon'

class Tabs extends Component {
  get isLive() {
    return this.props.streams.onLive ?
      <Home products={this.props.products} channels={this.props.channels} /> : <NoLive />
  }
  get tabsLinkMap() {
    return this.tabsLink.map((tab, idx) => {
      let active = this.state.activeTab === idx ? 'active' : ''
      return (
        <NavItem key={idx}>
          <NavLink className={active} onClick={() => this.toggle(idx)}>
            {tab.tabname}
          </NavLink>
        </NavItem>
      )
    })
  }
  get tabsContent() {
    return this.tabsLink.map((tab, idx) => {
      return (
        <TabPane tabId={idx} key={idx}>
          {tab.componentName}
        </TabPane>
      )
    })
  }
  tabsLink = [
    {tabname: 'Home', componentName: this.isLive},
    {tabname: 'Product', componentName: <ComingSoon />},
    {tabname: 'Achievement', componentName:  <ComingSoon />},
    {tabname: 'About', componentName:  <ComingSoon />}
  ]
  state = {
    activeTab: 0
  }
  toggle(idx) {
    if (this.state.activeTab === idx) return
    this.setState({
      activeTab: idx
    })
  }
  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <Nav tabs>
            {this.tabsLinkMap}
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            {this.tabsContent}
          </TabContent>
        </div>
      </div>
    )
  }
}

export default Tabs
