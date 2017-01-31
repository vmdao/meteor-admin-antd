import React, { Component } from 'react'
import { Menu, Icon, Popover } from 'antd'
import Menus from './menu';
import { Spin } from 'antd'
import { classnames } from '../../utils'
const SubMenu = Menu.SubMenu

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.changeMenuPopover = this.changeMenuPopover.bind(this);
  }

  handleClickMenu(event) {
    console.log(event);
  }

  changeMenuPopover(event) {
    this.props.changeMenuPopover(!this.props.siderFold)
  }

  render() {
    console.log(this.state)
    let { user, logout, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover } = this.state;

    const menusProps = {
      siderFold: false,
      darkTheme: false,
      isNavbar,
      handleClickNavMenu: switchMenuPopover,
      location
    }
    return (
      <div className='header'>
        {isNavbar
          ? <Popover placement='bottomLeft' onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName='popovermenu' trigger='click' content={<Menus {...menusProps} />}>
            <div className='siderbutton'>
              <Icon type='bars' />
            </div>
          </Popover>
          : <div className='siderbutton' onClick={this.changeMenuPopover}>
            <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
          </div>}

        <Menu className='header-menu' mode='horizontal' onClick={this.handleClickMenu}>
          <SubMenu style={{
            float: 'right'
          }} title={<span> <Icon type='user' />
            {user.name} </span>}>
            <Menu.Item key='logout'>
              <a>Logout</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }

}

export default Header
