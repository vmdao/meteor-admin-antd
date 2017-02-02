import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

const LogoTags = new Mongo.Collection('logoTags');

Meteor.methods({
  'logoTags.remove'(_id) {
    return LogoTags.remove({ _id });
  },
  'logoTags.create'(code, active, name, keyword) {
    check(active, String);
    check(code, String);
    check(name, String);
    check(keyword, String);

    if (code.length <= 0) {
      throw new Meteor.Error(403, `'logoTags' should not be empty!`);
      return;
    }

    return LogoTags.insert({ code, active, name, keyword });
  },

  'logoTags.update'(_id, active, name, keyword) {
    check(active, String);
    check(name, String);
    check(keyword, String);
    return LogoTags.update({ _id }, { $set: { active, name, keyword } });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('logoTags', () => {
    return LogoTags.find();
  });

  Meteor.publish('logoTag', (_id) => {
    return LogoTags.find({ _id });
  });
}
export default LogoTags;