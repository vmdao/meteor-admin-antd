import React from 'react';
import { mount } from 'react-mounter';

import LayoutBackendAdmin from '../../../components/0layouts/layout_backend_admin';
import LogoCategoryCreate from './create';
import LogoCategoryEdit from './edit';
import LogoCategoryList from './list';

export default function LogoCategoryRouter(data) {
    const {prefixParent, prefix, dataLayout, dataContent} = data;

    let routes = FlowRouter.group({
        prefix: `/${prefixParent}/${prefix}`,
        name: 'Logo Category',
    });

    routes.route('/', {
        name: 'Logo Category List',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <LogoCategoryList {...dataContent} />,
                data: dataLayout
            });
        }
    });

    routes.route('/create', {
        name: 'Logo Category Create',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <LogoCategoryCreate {...dataLayout} />,
                data: dataLayout
            });
        }
    });

    routes.route('/edit/:id', {
        name: 'Logo Category Edit',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <LogoCategoryEdit {...dataLayout} />,
                data: dataLayout
            });
        }
    });
}
