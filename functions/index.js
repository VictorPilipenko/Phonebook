const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

 const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});
 exports.recordCreated = functions.firestore
  .document('records/{recordId}')
  .onCreate(doc => {
     const record = doc.data();
    const notification = {
      content: ' added a new record: ' + `${record.firstName} ${record.lastName}`,
      user: `${record.authorFirstName} ${record.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
     return createNotification(notification);
 });
 exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
         const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };
         return createNotification(notification);
       });
});