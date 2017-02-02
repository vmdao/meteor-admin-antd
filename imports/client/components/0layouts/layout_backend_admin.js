import React, { Component, PropTypes } from 'react';

import Header from '../1partials/header';
import Bread from '../1partials/bread';
import Footer from '../1partials/footer';
import Sider from '../1partials/sider';
import { Spin } from 'antd'
import { classnames } from '../../utils'

class LayoutBackendAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = props.data;
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
                            {this.props.content}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div >
        )
    }

}

LayoutBackendAdmin.propTypes = {
    location: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.bool,
    loginButtonLoading: PropTypes.bool,
    login: PropTypes.bool,
    user: PropTypes.object,
    siderFold: PropTypes.bool,
    darkTheme: PropTypes.bool
}

export default LayoutBackendAdmin;
