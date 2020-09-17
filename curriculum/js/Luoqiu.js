/*
 * @Author: your name
 * @Date: 2020-09-17 17:04:52
 * @LastEditTime: 2020-09-17 17:27:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javascriptProject\curriculum\js\Luqiu.js
 */

(function(){
    "use strict";  //严格模式
    //命名空间
    if(!window.LuoqiuJS){window.LuoqiuJS={}};

    function $(){
        alert('hello');
    }

    window.LuoqiuJS.$=$;

})()


window.LuoqiuJS.$();

// window 全局

// 作用域：在作用域外部是无法访问作用域内部的一些方法和比变量

// 自动执行函数，第一：防止变量和方法，不会对全局环境造成污染