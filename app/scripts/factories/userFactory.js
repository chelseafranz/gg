// create a User factory with a getFullName() method
app.factory("UserFactory", function($firebaseObject) {
  return $firebaseObject.$extend({
      getFullName: function() {
        // concatenate first and last name
        return this.first_name + " " + this.last_name;
      }
   });
});

// create a User object from our Factory
app.factory("User", function(UserFactory) {
  var ref = new Firebase(URL+"/users/");
  return function(userid) {
    return new UserFactory(ref.child(userid));
  }
});
