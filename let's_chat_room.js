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
    apiKey: "AIzaSyA3iA9mWdXCGd-w1jvtPxTXM2c4WKNHL0w",
    authDomain: "kwitter-9c2fc.firebaseapp.com",
    databaseURL: "https://kwitter-9c2fc-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c2fc",
    storageBucket: "kwitter-9c2fc.appspot.com",
    messagingSenderId: "87191761882",
    appId: "1:87191761882:web:1329d0c3bbe361d13986e3" 
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
