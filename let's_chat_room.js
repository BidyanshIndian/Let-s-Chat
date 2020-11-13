user_name = localStorage.getItem("user_name");

document.getElementById("user").innerHTML = "Hi " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("Room").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

}

var firebaseConfig = {
    apiKey: "AIzaSyBwUB9kmn3ToRnmjuPMK3TDF5SHGrdhih8",
    authDomain: "let-s-chat-56156.firebaseapp.com",
    databaseURL: "https://let-s-chat-56156.firebaseio.com",
    projectId: "let-s-chat-56156",
    storageBucket: "let-s-chat-56156.appspot.com",
    messagingSenderId: "373454616591",
    appId: "1:373454616591:web:17f590cf9a113fe11a0b7a",
    measurementId: "G-8VGHTYRZBY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}u.k,i
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }