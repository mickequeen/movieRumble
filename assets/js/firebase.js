  /*
  * Inicializando Firebase
  */
(function(){ //Función de firebase
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
  *Función observador, permite que podamos ver el estado
  *en que se encuentra el usuario (logueado o deslogueado)
  */

  function observador (){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        console.log('Logueado ok');
      } else {
        console.log('NO estás logueado');
      }
    });
  }


  /*
  *Loguear usuario
  */
  $('#btnLogin').click(function(){
    var mail = $("#txtEmail").val();
    var pass = $("#txtPassword").val();
    var auth = firebase.auth();
    alert('¡Welcome!');

    var promise= auth.signInWithEmailAndPassword(mail, pass);
    promise.catch(e=>alert(e.message));

});
  /*
  *Registrar usuario
  */
  $('#btnSignUp').click(function(){
    var user = $("#txtSignupUser")
    var mail = $("#txtSignupEmail").val();
    var pass = $("#txtSignupPassword").val();
    var auth = firebase.auth();
    alert('An email has been send to your email account');
    var promise = auth.createUserWithEmailAndPassword(mail, pass);
    promise.catch(e => alert(e.message));
    

});

  /*
  *Para desloguearse
  */
  $('#btnLogout').click (function () {
    alert ('¡See you soon!');
    firebase.auth ().signOut ().then (function () {
      location.reload ();
    }) .catch (function (error){

    });
  });



/*
*Función para enviar correo de verificación al usuario registrado
*/
function verify () {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    alert ('Sendin verification email...');
  }).catch(function(error) {
    // An error happened.
  });
};







/*
https://movierumble-c0999.firebaseapp.com/__/auth/action
*/

/*
*La consola muestra un error, esto se debe a que por defecto
*Firebase nos pide que mostremos la información por medio de la consola
*y no por un alert, pero nosotros necesitamos mostrarle al usuario
*si tiene algún error, por ende, fue cambiado este dato
*/
}());