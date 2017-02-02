import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Analytics =  new  Mongo.Collection('visits');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('analytics', () => {
    return Analytics.find();
  });
}