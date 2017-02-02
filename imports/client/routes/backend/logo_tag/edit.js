import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { compose } from 'react-komposer';

import Page from '../../../components/2pages/backend_logo_tag/edit';
import LogoTags from '../../../../api/LogoTags'

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
  const location = FlowRouter.current();
  const _id = location.params.id;
  if (Meteor.subscribe('logoTags').ready()) {
    const data = LogoTags.find({ _id }).fetch()[0];
    onData(null, { list: data });
  };
}
export default compose(getTrackerLoader(reactiveMapper))(Page);



