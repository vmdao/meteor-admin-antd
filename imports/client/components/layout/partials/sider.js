import React, { Component } from 'react'
import { Icon, Switch } from 'antd'
import { config } from '../utils'
import Menus from './menu'

class Sider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { siderFold, darkTheme, location, changeTheme} = this.props;
    const menusProps = {
      siderFold,
      darkTheme,
      location
    }
    return (
      <div>
        <div className='logo'>
          <img src={config.logoSrc} />
          {siderFold ? '' : <span>{config.logoText}</span>}
        </div>
        <Menus {...menusProps} />
        {!siderFold ? <div className='switchtheme'>
          <span><Icon type='bulb' />Light</span>
          <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren='On' unCheckedChildren='Off' />
        </div> : ''}
      </div>
    )
  }
}

export default Sider
