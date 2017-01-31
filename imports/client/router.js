import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import App from './routes/app';
import Login from './routes/login';
import Dashboard from './routes/users';
import Category from './routes/dashboard';
import ModelApp from './models/app';
import ModelDashboard from './models/dashboard';
import React, { Component } from 'react';
const {login, loading, loginButtonLoading} = ModelApp.state;

const loginProps = {
    loading,
    loginButtonLoading,
    onOk(data) {
        console.log('data ok: ', data);
    }
}

const data = Object.assign({ children: <Dashboard /> }, ModelDashboard.state);

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
        mount(Login, loginProps);
    }
});

adminRoutes.route('/category', {
    name: 'login',
    action: function () {
        mount(Login, loginProps);
    }
});

adminRoutes.route('/category/create', {
    name: 'login',
    action: function () {
        mount(Login, loginProps);
    }
});

adminRoutes.route('/', {
    name: 'dashboard',
    action: function () {
        mount(App, data)
    }
});



