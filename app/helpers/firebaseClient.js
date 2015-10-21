import firebase from 'firebase/lib/firebase-web';

export default new firebase('https://kyper-coach.firebaseIO.com/');

// class firebaseClient {
//   constructor() {
//     const firebaseRef = new firebase('https://kyper-coach.firebaseIO.com/');
//     this.coachesRef = firebaseRef.child('coaches');
//   }
//
//   getStudents(classId) {
//     return new Promise((resolve, reject) => {
//       this.coachesRef.child(classId).child('students').once('value', (snap) => {
//         resolve(snap.val());
//       });
//     });
//   }
//
//   getLesson(key) {
//     return new Promise((resolve, reject) => {
//       this.lessonRef.child(key).once('value', (snap) => {
//         resolve(snap.val());
//       });
//     });
//   }
// }

// export default firebaseClient;
