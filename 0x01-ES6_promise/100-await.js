import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let set = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    set = { photo, user };
  } catch (err) {
    set = { photo: null, user: null };
  }
  return set;
}
