import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import LogoCategories from './LogoCategories';
import LogoStyles from './LogoStyles';
import LogoTypes from './LogoTypes';
const LogoSuggestOrders = new Mongo.Collection('logoSuggestOrders');

Meteor.methods({
  'logoSuggestOrders.remove'(_id) {
    LogoSuggestOrders.remove({ _id });
  },

  'logoSuggestOrders.createCategory'(data) {
    let category = LogoCategories.find({ _id: data.category }).fetch()[0];
    let styles = LogoStyles.find().fetch();
    let types = LogoTypes.find().fetch();
    styles.forEach(style => {
      types.forEach(type => {
        LogoSuggestOrders.insert({ category: category, style: style, type: type, count: 0, protiry: 0, active: 1 });
      })
    })
    return true;
  },

  'logoSuggestOrders.createStyle'(data) {
    let style = LogoStyles.find({ _id: data.style }).fetch()[0];
    let categoryies = LogoCategories.find().fetch();
    let types = LogoTypes.find().fetch();
    categoryies.forEach(category => {
      types.forEach(type => {
        LogoSuggestOrders.insert({ category: category, style: style, type: type, count: 0, protiry: 0, active: 1 });
      })
    })
    return true;
  },

  'logoSuggestOrders.createType'(data) {
    let type = LogoTypes.find({ _id: data.type }).fetch()[0];
    let categoryies = LogoCategories.find().fetch();
    let styles = LogoStyles.find().fetch();
    categoryies.forEach(category => {
      styles.forEach(style => {
        LogoSuggestOrders.insert({ category: category, style: style, type: type, count: 0, protiry: 0, active: 1 });
      })
    })
    return true;
  },

  'logoSuggestOrders.updateCount'(data) {
    return LogoSuggestOrders.update(data, { $inc: { count: 1 } });
  },

  'logoSuggestOrders.update'(_id, data) {
    let { active } = data;
    let { prority } = data
    return LogoSuggestOrders.update({ _id }, { $set: { active: active, prority: prority } });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('logoSuggestOrders', () => {
    return LogoSuggestOrders.find();
  });
}
export default LogoSuggestOrders;