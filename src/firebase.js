import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBDeXZCOJZifas3IGGbBlbM52OFcDPOYRY',
  authDomain: 'e-election-fd22b.firebaseapp.com',
  databaseURL: 'https://e-election-fd22b.firebaseio.com',
  projectId: 'e-election-fd22b',
  storageBucket: 'e-election-fd22b.appspot.com',
  messagingSenderId: '207994186615'
}

var firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.database()
