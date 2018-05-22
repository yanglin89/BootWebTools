/**
 * 自定义指令
 */

actionApp.directive('datePicker',function(){ //定义一个指令名为datePicker
    return {
        restrict: 'AC', //限制为属性指令和样式指令  总共有元素、属性、样式、注释四类指令
        link:function(scope,elem,attrs){ //使用link方法来定义指令，在link方法内可以使用当前scope,当前元素,元素属性
           // scope.treeObj = $.fn.zTree.init(elem, scope.settings);
            
        	//初始化jqueryui的datepicker，初始化后可以使用日期选择器（jquery的写法是$('#id').datePicker() ）
            elem.datepicker();
        }
    };
});


