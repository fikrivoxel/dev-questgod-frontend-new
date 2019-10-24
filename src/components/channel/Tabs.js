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

import Product from './tabs/Product'
import Achievement from './tabs/Achievement'
import About from './tabs/About'

class Tabs extends Component {
  get isLive() {
    return this.props.streams.onLive ?
      <Home products={this.props.products} channels={this.props.channels} username={this.props.username} streams={this.props.streams}/> : <NoLive />
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
    {tabname: 'Product', componentName: <Product />},
    {tabname: 'Achievement', componentName:  <Achievement />},
    {tabname: 'About', componentName:  <About />}
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
      <div >
        <section id="channel-tabs">
        <Nav tabs>
          {this.tabsLinkMap}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.tabsContent}
        </TabContent>
        </section>
      </div>
    )
  }
}

export default Tabs
