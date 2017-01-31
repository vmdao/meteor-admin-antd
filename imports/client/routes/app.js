import React, { Component, PropTypes } from 'react'
import Login from './login'
import Header from '../components/layout/partials/header'
import Bread from '../components/partials/bread'
import Footer from '../components/partials/footer'
import Sider from '../components/partials/sider'
import { Spin } from 'antd'
import { classnames } from '../utils'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = props;
    let location = FlowRouter.current().context;
    this.changeTheme = this.changeTheme.bind(this);
    this.changeMenuPopover = this.changeMenuPopover.bind(this);
  }

  changeTheme(value) {
    this.setState({ darkTheme: value })
  }

  changeMenuPopover(value) {
    this.setState({ siderFold: value })
  }

  render() {
    let { children, user, siderFold, darkTheme, isNavbar, menuPopoverVisible} = this.state;
    const headerProps = {
      user,
      siderFold,
      location,
      isNavbar,
      changeMenuPopover: this.changeMenuPopover,
      switchMenuPopover() {
        dispatch({ type: 'app/switchMenuPopver' })
      },
      logout() {
        dispatch({ type: 'app/logout' })
      },
      switchSider() {
        dispatch({ type: 'app/switchSider' })
      }
    }
    const siderProps = {
      siderFold,
      darkTheme,
      location,
      changeTheme: this.changeTheme
    }

    return (
      <div id='admingod' className={classnames('layout', { fold: isNavbar ? false : siderFold }, { withnavbar: isNavbar })}>
        {!isNavbar ? <aside className={classnames('sider', { light: !darkTheme })}>
          <Sider {...siderProps} />
        </aside> : ''}
        <div className='main'>
          <Header {...headerProps} />
          <Bread location={location} />
          <div className='container'>
            <div className='content'>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div >
    )
  }

}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
  loginButtonLoading: PropTypes.bool,
  login: PropTypes.bool,
  user: PropTypes.object,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool
}

export default App;
