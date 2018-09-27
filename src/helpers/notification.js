export const displayNotification = async msg => {
  if (Notification.permission !== 'granted') return;
  const reg = await navigator.serviceWorker.getRegistration();
  reg.showNotification(msg);
};