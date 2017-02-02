import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

const LogoTypes = new Mongo.Collection('logoTypes');

Meteor.methods({
  'logoTypes.remove'(_id) {
    return LogoTypes.remove({ _id });
  },
  'logoTypes.create'(data) {
    let {code} = data;

    if (code.length <= 0) {
      throw new Meteor.Error(403, `'logoTypes' should not be empty!`);
      return;
    }

    return LogoTypes.insert(data);
  },

  'logoTypes.update'(_id, data) {

    return LogoTypes.update({ _id }, { $set: data });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('logoTypes', () => {
    return LogoTypes.find();
  });

  Meteor.publish('logoType', (_id) => {
    return LogoTypes.find({ _id });
  });
}
export default LogoTypes;