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
    
     firebase.initializeApp(firebaseConfig);

function addRoom() 
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}