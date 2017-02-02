import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

const Payments = new Mongo.Collection('payments');

Meteor.methods({
  'payments.remove'(_id) {
    return Payments.remove({ _id });
  },

  'payments.create'(code, active, name, description) {
    check(active, String);
    check(code, String);
    check(name, String);
    check(description, String);

    if (code.length <= 0) {
      throw new Meteor.Error(403, `'payments' should not be empty!`);
      return;
    }

    return Payments.insert({ code, active, name, description });
  },

  'payments.update'(_id, active, name, description) {
    check(active, String);
    check(name, String);
    check(description, String);
    return Payments.update({ _id }, { $set: { active, name, description } });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('payments', () => {
    return Payments.find();
  });

  Meteor.publish('payment', (_id) => {
    return Payments.find({ _id });
  });
}
export default Payments;
