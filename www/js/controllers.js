angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
	$scope.login_fb = function() {
		console.log('Connecting via Facebook ...');
		Parse.FacebookUtils.logIn("user_likes,email", {
		  success: function(user) {
		    if (!user.existed()) {
		      alert("User signed up and logged in through Facebook!");
		    } else {
		      alert("User logged in through Facebook!");
		    }
		  },
		  error: function(user, error) {
		    alert("User cancelled the Facebook login or did not fully authorize.");
		  }
		});

	}
	$scope.fb_user_info = function() {
		var currentUser = Parse.User.current();
		if (currentUser) {
		    // do stuff with the user
		    console.log('got the user');
		} else {
		    // show the signup or login page
		    console.log('there is no user');
		}
	}
});
