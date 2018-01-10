  (function(){
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
  *Autentificación con email y password
  */
  const auth = firebase.auth();

  auth.signInWithEmailAndPassword (email, pass);

  auth.createUserWithEmailAndPassword (email, pass);

  auth.onAuthStateChanged (firebaseUser =>{});

  const txtEmail = document.getElementById('#txtEmail');
  const txtPassword = document.getElementById('#txtPassword');
  const btnLogin = document.getElementById('#btnLogin');
  const btnSignUp = document.getElementById('#btnSignUp');
  const btnLogout = document.getElementById('#btnLogout');


  btnLogin.addEventListener('click' , e => {
  
  /*
  *Obtener email y pass
  */
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  
  /*
  *Sign in
  */
  const promise = auth.signInWithEmailAndPassword (email, pass);
  promise.catch(e => console.log(e.message));
  });


  btnSignUp.addEventListener('click' , e => {
  
  /*
  *Obtener email y pass
  */
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  
  /*
  *Sign up
  */
  const promise = auth.createUserWithEmailAndPassword (email, pass);
  promise.catch(e => console.log(e.message));
  });

  } ());