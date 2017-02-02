import React from 'react';
import { mount } from 'react-mounter';

import LayoutDefault from '../../../components/0layouts/layout_default';
import Login from './login';

export default function LogoCategoryRouter(data) {
    const {prefixParent, prefix, dataLayout, dataContent} = data;

    let routes = FlowRouter.group({
        prefix: `/${prefixParent}`,
        name: 'Login',
    });

    routes.route('/login', {
        name: 'Login',
        action: function () {
            mount(LayoutDefault, {
                content: <Login {...dataContent} />,
                data: dataContent
            });
        }
    });

}
