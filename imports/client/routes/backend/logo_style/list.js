import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { compose } from 'react-komposer';

import Page from '../../../components/2pages/backend_logo_style/list';
import LogoStyles from '../../../../api/LogoStyles'


function getTrackerLoader(reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if (typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
}

function reactiveMapper(props, onData) {
  if (Meteor.subscribe('logoStyles').ready()) {
    const data = LogoStyles.find().fetch();
    onData(null, { list: data });
  };
}
export default compose(getTrackerLoader(reactiveMapper))(Page);



