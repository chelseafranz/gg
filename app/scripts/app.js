var app = angular.module("MyApp", []);
var ref = new Firebase("https://girl-gang.firebaseio.com");

var myDataRef = new Firebase('https://girl-gang.firebaseio.com');


      $('#passwordInput').keypress(function (e) {
              if (e.keyCode == 13) {
                var email = $('#emailInput').val();
                var password = $('#passwordInput').val();
                ref.createUser({
                        email    : email,
                        password : password
                      }, function(error, userData) {
                        if (error) {
                          console.log("Error creating user:", error);
                        } else {
                          console.log("Successfully created user account with uid:", userData.uid);
                          $('#messageInput').val('');
                      };
                      });

              }
            });


            // ref.authWithOAuthPopup("google", function(error, authData) {
            //   if (error) {
            //     console.log("Login Failed!", error);
            //   } else {
            //     console.log("Authenticated successfully");
            //     // payload = authData
            //   }
            // });

        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
        }
        });
