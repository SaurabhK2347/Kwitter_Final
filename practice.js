
var firebaseConfig = {
    apiKey: "AIzaSyDPKocWu7zlTxsl3S3eZa-2aX_VZmykJe0",
    authDomain: "kwitter-ede8c.firebaseapp.com",
    databaseURL: "https://kwitter-ede8c-default-rtdb.firebaseio.com",
    projectId: "kwitter-ede8c",
    storageBucket: "kwitter-ede8c.appspot.com",
    messagingSenderId: "781451423349",
    appId: "1:781451423349:web:581ca4d21035d6f75f523c",
    measurementId: "G-VKV2TRDGNH"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
  function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}