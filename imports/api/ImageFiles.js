
import { FilesCollection } from 'meteor/ostrio:files';
let ImageFiles = new FilesCollection({
  collectionName: 'Images',
  onBeforeUpload: function (file) {
    console.log(file);
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
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