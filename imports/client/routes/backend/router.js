import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import ModelApp from '../../models/app';
import ModelUser from '../../models/users';

import AuthRouter from './auth/router';
import TagRouter from './logo_tag/router';
import TypeRouter from './logo_type/router';
import StyleRouter from './logo_style/router';
import CategoryRouter from './logo_category/router';
import SuggestOrderRouter from './logo_suggestorder/router';

const dataUser = ModelUser.state;
const dataApp = ModelApp.state;
const {login, loading, loginButtonLoading} = dataApp;
const loginProps = { loading, loginButtonLoading }

// FlowRouter.notFound = {
//     subscriptions: function () {
//     },
//     action: function () {
//         console.log("404 Not found")
//     }
// };

let routes = FlowRouter.group({
    prefix: '/brandgod/upload',
    name: 'Logo Tag',
});

routes.route('/images', {
    name: 'Logo Tag List',
    action: function (params, queryParams) {
        console.log('params', params, queryParams)
    }
});

new AuthRouter({ prefixParent: 'brandgod', prefix: '', dataLayout: dataApp, dataContent: loginProps });
new TagRouter({ prefixParent: 'brandgod/app', prefix: 'logo_tag', dataLayout: dataApp, dataContent: dataUser });
new TypeRouter({ prefixParent: 'brandgod/app', prefix: 'logo_type', dataLayout: dataApp, dataContent: dataUser });
new StyleRouter({ prefixParent: 'brandgod/app', prefix: 'logo_style', dataLayout: dataApp, dataContent: dataUser });
new CategoryRouter({ prefixParent: 'brandgod/app', prefix: 'logo_category', dataLayout: dataApp, dataContent: dataUser });
new SuggestOrderRouter({ prefixParent: 'brandgod/app', prefix: 'logo_suggestorder', dataLayout: dataApp, dataContent: dataUser });

