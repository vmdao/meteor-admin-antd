
import { FilesCollection } from 'meteor/ostrio:files';
let ImageFiles = new FilesCollection({
  collectionName: 'Images',
  onBeforeUpload: function (file) {
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});
if (Meteor.isServer) {
  ImageFiles.allowClient();
}

export default ImageFiles;