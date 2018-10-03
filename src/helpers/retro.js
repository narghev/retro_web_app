import moment from 'moment';
import { database } from 'config/firebase';

const retroRef = database.ref('retros');

export const saveRetro = async retroData => {
  if (!retroData) return;
  if (!retroData.date || !retroData.ownerUid) return;

  const snapshot = await retroRef.once('value');
  const retros = snapshot.val() || [];
  retros.push({...retroData, index: retros.length});
  await retroRef.set(retros);
};