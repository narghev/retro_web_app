import moment from 'moment';
import { database } from 'config/firebase';

export const saveRetro = async retroData => {
  if (!retroData) return;

  console.log(retroData)

  // const actionItemData = {...itemData, date: moment().toString()};

  // const { description, assignees, ownerUid, date } = actionItemData;
  // if (!description || !assignees.length || !date || !ownerUid) return;

  // const snapshot = await database.ref(`action_items/${ownerUid}`).once('value');
  // const data = snapshot.val() || [];
  // data.push(actionItemData);

  // await database.ref(`action_items/${ownerUid}`).set(data);
}