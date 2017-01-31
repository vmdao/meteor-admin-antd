import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const LogoCategories = new Mongo.Collection('logoCategories');

Meteor.methods({
  'logoCategories.remove'(_id) {
  return  LogoCategories.remove({ _id });
  },
  'logoCategories.create'(code, active, name, keyword) {
    check(active, String);
    check(code, String);
    check(name, String);
    check(keyword, String);

    if (code.length <= 0) {
      throw new Meteor.Error(403, `'logoCategories' should not be empty!`);
      return;
    }

    return LogoCategories.insert({ code, active, name, keyword });
  },

  'logoCategories.update'(_id, active, name, keyword) {
    check(active, String);
    check(name, String);
    check(keyword, String);
    return LogoCategories.update({ _id }, { $set: { active, name, keyword } });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('logoCategories', () => {
    return LogoCategories.find();
  });

  Meteor.publish('logoCategory', (_id) => {
    return LogoCategories.find({ _id });
  });
}
