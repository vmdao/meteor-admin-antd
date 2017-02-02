import { mount } from 'react-mounter';
import LogoCategoryCreate from './create';
import LogoCategoryEdit from './edit';
import LogoCategoryList from './list';
export default function LogoCategoryRouter(data) {
    const {dataApp, dataUser} = data;
    const prefixParent = '/brandgod';
    var routes = FlowRouter.group({
        prefix: prefixParent + '/logo_category02',
        name: 'Logo Category',
        triggersEnter: [function (context, redirect) {
            console.log('running group triggers');
        }]
    });


    routes.route('/create', {
        name: 'Logo Category Create',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <LogoCategoryCreate {...dataApp} />,
                data: dataApp
            });
        }
    });

    routes.route('/', {
        name: 'Logo Category List',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <LogoCategoryList {...dataUser} />,
                data: dataApp
            });
        }
    });

    routes.route('/:logoCategoryId', {
        name: 'Logo Category Edit',
        action: function () {
            mount(LayoutBackendAdmin, {
                content: <LogoCategoryEdit {...dataApp} />,
                data: dataApp
            });
        }
    });



}
