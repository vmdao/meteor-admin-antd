
import { FilesCollection } from 'meteor/ostrio:files';
import Mover from 'mv';
const ImageFiles = new FilesCollection({
  collectionName: 'Images',
  storagePath: 'uploads/images',
  //downloadRoute: './public/',
  //public: true,
  onBeforeUpload: file => {
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  },
  onAfterUpload: file => {
    console.log(Assets)
    const pathFileOld = `${Meteor.rootPath}/${file.path}`;
    const pathFileOldNew = `${Meteor.absolutePath}/public/${file.path}`;
    Mover(pathFileOld, pathFileOldNew, { mkdirp: true }, (err, res) => {
      //console.log(err, res)
    });
  }
});
if (Meteor.isServer) {
  ImageFiles.allowClient();
}

export default ImageFiles;