var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/users.html',
		controller:'userCtrl'
	})	
	.otherwise('/',{
		redirectTo:'/',		
	});
})

app.controller('userCtrl', function ($scope, $http) {	
    $http.get('http://jsonplaceholder.typicode.com/posts')
	.then(function (response){
		$scope.users = response.data;
		console.log($scope.users);
   		},function (error){
   			alert('Something is wrong! Contact admin');
   		}
   	); 
   	
    $scope.sort = {
        column: '',
        descending: false
    };

    $scope.sortData = function (column) {
        var sort = $scope.sort;
        $scope.sortBy = column;

        if (sort.column == column) {
            sort.descending = !sort.descending;
            $scope.orderBy = 'descending';
        } else {
            sort.column = column;
            sort.descending = false;
            $scope.orderBy = 'ascending';
        }
    };
})