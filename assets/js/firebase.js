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

  $('#btnSignUp').click(function(){
    var user = $("#txtSignupUser")
    var mail = $("#txtSignupEmail").val();
    var pass = $("#txtSignupPassword").val();
    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(mail, pass);
    promise.catch(e => console.log(e.message));

});

  /*
  *Para desloguearse
  */
  $('#btnLogout').click(function(){
    firebase.auth().signOut();
});

var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
/*
// agrega listener en tiempo real
  firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
  $('#txtEstado').val("Estas logueado");
  }else {
  $('#txtEstado').val("NO Estas logueado");
  }
  });
*/



