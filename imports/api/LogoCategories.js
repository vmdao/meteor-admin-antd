import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

const LogoCategories = new Mongo.Collection('logoCategories');

Meteor.methods({
  'logoCategories.remove'(_id) {
    return LogoCategories.remove({ _id });
  },
  'logoCategories.create'(data) {
    const {active, code, name, keyword} = data;
    check(active, Boolean);
    check(code, String);
    check(name, String);
    check(keyword, String);

    if (code.length <= 0) {
      throw new Meteor.Error(403, `'logoCategories' should not be empty!`);
      return;
    }
    return LogoCategories.insert(data);
  },

  'logoCategories.update'(data) {
    let {_id, active, name, keyword} = data;
    check(active, Boolean);
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
}

export default LogoCategories;