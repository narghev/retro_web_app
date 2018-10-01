import { database } from 'config/firebase';

export const saveActionItem = async itemData => {
  if (!itemData) return;

  const { description, date, assignees, ownerUid } = itemData;
  if (!description || !date || !assignees.length || !ownerUid) return;

  const snapshot = await database.ref(`action_items/${ownerUid}`).once('value');
  const data = snapshot.val() || [];
  data.push(itemData);

  await database.ref(`action_items/${ownerUid}`).set(data);
}