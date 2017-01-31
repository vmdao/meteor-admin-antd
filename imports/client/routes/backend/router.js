import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import React from 'react';

import LayoutDefault from '../../components/0layouts/layout_default';
import LayoutBackendAdmin from '../../components/0layouts/layout_backend_admin';
import ModelApp from '../../models/app';
import ModelUser from '../../models/users';

import Login from '../../routes/login';
import UserCreate from './users/create';
import UserList from './users/list';

import LogoCategoryCreate from './logo_category/create';
import LogoCategoryList from './logo_category/list';

const {login, loading, loginButtonLoading} = ModelApp.state;
const dataApp = ModelApp.state;
const loginProps = {
    loading,
    loginButtonLoading,
    children: Login,
}

const dataUser = ModelUser.state;

var adminRoutes = FlowRouter.group({
    prefix: '/brandgod',
    name: 'admin',
    triggersEnter: [function (context, redirect) {
        console.log('running group triggers');
    }]
});

adminRoutes.route('/login', {
    name: 'login',
    action: function () {
        mount(LayoutDefault, { content: <Login {...loginProps} /> });
    }
});

adminRoutes.route('/users/create', {
    name: 'User Create',
    action: function () {
        mount(LayoutBackendAdmin, {
            content: <UserCreate {...dataApp} />,
            data: dataApp
        });
    }
});

adminRoutes.route('/users', {
    name: 'Users List',
    action: function () {
        mount(LayoutBackendAdmin, {
            content: <UserList {...dataUser} />,
            data: dataApp
        });
    }
});

adminRoutes.route('/logo_category/create', {
    name: 'Logo Category Create',
    action: function () {
        mount(LayoutBackendAdmin, {
            content: <LogoCategoryCreate {...dataApp} />,
            data: dataApp
        });
    }
});

adminRoutes.route('/logo_category', {
    name: 'Logo Category List',
    action: function () {
        mount(LayoutBackendAdmin, {
            content: <LogoCategoryList {...dataUser} />,
            data: dataApp
        });
    }
});





