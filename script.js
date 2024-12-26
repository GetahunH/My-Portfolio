document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
      var userData = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
      document.getElementById('userData').innerHTML = userData;
    } else {
      alert('Please fill out all fields in the form.');
    }
  });
  // function clearForm(){
  //   document.getElementById('myForm').requestFullscreen();
  //   document.getElementById('userData').innerHTML="";
  // }
  