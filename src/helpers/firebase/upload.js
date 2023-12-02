import { storage } from "./connection";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import uniqid from "uniqid";

async function upload(file) {
  const fileParts = file.name.split(".");
  const fileExtension = `.${fileParts[fileParts.length - 1]}`;
  const fileName = fileParts.slice(0, -1).join(".");
  const uniqueId = uniqid();
  const reference = `capa/${fileName}-${uniqueId}${fileExtension}`;
  const storageRef = ref(storage, reference);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return { url, reference };
}

async function deleteFile(refer) {
  const desertRef = ref(storage, refer);

  deleteObject(desertRef)
    .then(() => {
      return "success";
    })
    .catch((error) => {
      return error.message;
    });
}

export { upload, deleteFile };
