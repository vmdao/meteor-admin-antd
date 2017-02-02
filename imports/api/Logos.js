import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Logos = new Mongo.Collection('logos');

Meteor.methods({
  'logos.remove'(_id) {
  return  Logos.remove({ _id });
  },
  'logos.create'(data) {
   let {code} = data;

    if (code.length <= 0) {
      throw new Meteor.Error(403, `'logos' should not be empty!`);
      return;
    }
    
   return Logos.insert(data);
  },

  'logos.update'(_id, data) {
    
   return  Logos.update({ _id }, { $set: data });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('logos', () => {
    return Logos.find();
  });

  Meteor.publish('logo', (_id) => {
    return Logos.find({ _id });
  });
}
