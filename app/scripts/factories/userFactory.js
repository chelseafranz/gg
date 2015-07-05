// create a User factory with a getFullName() method
app.factory("UserFactory", function($firebaseObject) {
  

  var login = function(){
  console.log('hello!');
    };













        return{
          login : login
        }






  });

// create a User object from our Factory



      // Google authentication
            // ref.authWithOAuthPopup("google", function(error, authData) {
            //   if (error) {
            //     console.log("Login Failed!", error);
            //   } else {
            //     console.log("Authenticated successfully");
            //     // payload = authData
            //   }
            // });
      // Facebook authentication
        // ref.authWithOAuthPopup("facebook", function(error, authData) {
        //   if (error) {
        //     console.log("Login Failed!", error);
        //   } else {
        //     console.log("Authenticated successfully with payload:", authData);
        // }
        // });






