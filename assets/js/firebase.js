  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAkx_-jelOE2xPjZRE9dbsi6QxrVvnnsE",
    authDomain: "movierumble-c0999.firebaseapp.com",
    databaseURL: "https://movierumble-c0999.firebaseio.com",
    projectId: "movierumble-c0999",
    storageBucket: "movierumble-c0999.appspot.com",
    messagingSenderId: "919196728572"
  };
  firebase.initializeApp(config);


  /*
  *Evento de click al loguearse
  */
  $('#btnLogin').click(function(){
  var mail = $("#txtEmail").val();
  var pass = $("#txtPassword").val();
  var auth = firebase.auth();

  var promise= auth.signInWithEmailAndPassword(mail, pass);
  promise.catch(e=>console.log(e.message));

});




