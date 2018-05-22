/**
 * 定义AngularJS的模块和路由
 * 当在某一个路由条件下，调用哪个controller（路由控制器），转向哪个templateUrl（视图真正地址）
 */

var actionApp = angular.module('actionApp',['ngRoute']); //定义模块actionApp，并依赖于路由模块ngRoute


actionApp.config(['$routeProvider' , function($routeProvider) { //配置路由，并注入$routeProvider来配置
	
	$routeProvider.when('/oper', { 
		controller: 'View1Controller', 
		templateUrl: 'views/view1.html', 
	}).when('/directive', {
		controller: 'View2Controller',
		templateUrl: 'views/view2.html',
	});

}]);
