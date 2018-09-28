import { auth, provider } from 'config/firebase';

export const signIn = async () => {
  auth.signInWithRedirect(provider)
  const result = await auth.getRedirectResult();
  const {user} = result;
  return user;
};

export const signOut = async () => {
  await auth.signOut();
  return true;
};
