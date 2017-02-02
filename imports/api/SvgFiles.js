
import { FS } from 'meteor/cfs:base-package';
export const SvgFiles = new FS.Collection('svgs', {
  stores: [new FS.Store.FileSystem('svgs', { path: '~/uploads' })]
});

SvgFiles.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update': function () {
    // add custom authentication code here
    return true;
  },
  'remove': function () {
    // add custom authentication code here
    return true;
  },
  download: function (userId, fileObj) {
    return true
  }
});
