import { database } from 'config/firebase';

export const saveUser = async user => {
  if (!user) return;
  const { uid, displayName, photoURL, email } = user;
  const snapshot = await database.ref(`users/${uid}`).once('value');
  if (!snapshot.val()) {
    await database.ref(`users/${uid}`).set({
      uid,
      displayName,
      photoURL,
      email
    });
  }
}

export const getUsers = async () => {
  const users = await database.ref('users/').once('value');
  return users.val();
}