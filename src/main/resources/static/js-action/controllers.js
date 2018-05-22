/**
 * controller 路由控制器定义，app.js中引用了
 */

//定义控制器View1Controller，并注入$rootScope、$scope、$http
actionApp.controller('View1Controller', ['$rootScope', '$scope', '$http', function($rootScope, $scope,$http) {
    //使用$scope.$on监听$viewContentLoaded事件，可在页面内容加载完成后进行一些操作
	$scope.$on('$viewContentLoaded', function() {
    	console.log('页面加载完成');
    });
    
    $scope.search = function(){ //在scope内定义一个方法search，在页面上通过ng.click（view1中定义）调用
      personName = $scope.personName; //通过$scope.personName获取页面定义的ng-model="personName"的值
      $http.get('search',{ //通过$http.get向服务端地址search发送get请求
    	  params:{personName:personName} //使用params增加请求参数
      }).success(function(data){ //使用success方法作用请求成功后的回调
    	 $scope.person=data; //将服务端返回的数据data通过$scope.person赋值给模型person，页面可以通过{{person.name}}来调用，且person值改变后，视图自动更新
      });;
     
    };
}]);

actionApp.controller('View2Controller', ['$rootScope', '$scope',  function($rootScope, $scope) {
    $scope.$on('$viewContentLoaded', function() {
    	console.log('页面加载完成');
    });
}]);


