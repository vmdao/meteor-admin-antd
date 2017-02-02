import React from 'react';
import { mount } from 'react-mounter';

import LayoutBackendAdmin from '../../../components/0layouts/layout_backend_admin';
import CreateContainer from './create';
import EditContainer from './edit';
import ListContainer from './list';

export default function LogoTypeRouter(data) {
    const {prefixParent, prefix, dataLayout, dataContent} = data;

    let routes = FlowRouter.group({
        prefix: `/${prefixParent}/${prefix}`,
        name: 'Logo Type',
    });

    routes.route('/', {
        name: 'Logo Type List',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <ListContainer {...dataContent} />,
                data: dataLayout
            });
        }
    });

    routes.route('/create', {
        name: 'Logo Type Create',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <CreateContainer {...dataLayout} />,
                data: dataLayout
            });
        }
    });

    routes.route('/edit/:id', {
        name: 'Logo Type Edit',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <EditContainer {...dataLayout} />,
                data: dataLayout
            });
        }
    });
}
