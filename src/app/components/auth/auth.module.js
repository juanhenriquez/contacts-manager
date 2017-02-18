angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider){
    var config = {
      apiKey: "AIzaSyDW1kDUOCG5psHe8UuaKKEsw-TrDqA74Qg",
      authDomain: "contacts-manager-8847d.firebaseapp.com",
      databaseURL: "https://contacts-manager-8847d.firebaseio.com",
      storageBucket: "contacts-manager-8847d.appspot.com",
      messagingSenderId: "892102538580"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });

    firebase.initializeApp(config);
  });
