import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { compose } from 'react-komposer';

import Page from '../../../components/2pages/backend_logo_category/list';
import LogoCategories from '../../../../api/LogoCategories'


function getTrackerLoader(reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if (typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
}

// usage
function reactiveMapper(props, onData) {
  if (Meteor.subscribe('logoCategories').ready()) {
    const categories = LogoCategories.find().fetch();
    onData(null, { list: categories });
  };
}
export default compose(getTrackerLoader(reactiveMapper))(Page);



