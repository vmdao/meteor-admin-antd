if (Meteor.isServer) {
  var imageStore = new FS.Store.S3("images", {
    /* REQUIRED */
    accessKeyId: Meteor.settings.aws.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.aws.AWSSecretAccessKey,
    bucket: Meteor.settings.aws.AWSBucket
  });

  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });
}

// On the client just create a generic FS Store as don't have
// access (or want access) to S3 settings on client
if (Meteor.isClient) {
  var imageStore = new FS.Store.S3("images");
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      },
      onInvalid: function (message) {
        toastr.error(message);
      }
    }
  });
}

// Allow rules
Images.allow({
  insert: function () { return true; },
  update: function () { return true; },
  download: function () { return true; }
});

console.log(1212121, Images.find().fetch())
export default Images;