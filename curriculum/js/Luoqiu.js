/*
 * @Author: your name
 * @Date: 2020-09-17 17:04:52
 * @LastEditTime: 2020-09-18 09:25:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javascriptProject\curriculum\js\Luqiu.js
 */

(function(){
    "use strict";  //严格模式
    //命名空间
    if(!window.LuoqiuJS){window.LuoqiuJS={}};
    /**
     * @获取ID的DOM元素: 
     * @id {string}  
     */
    function $(id){
        if(typeof id !='string')
        {
        throw new Error('参数ID必须是一个字符串');
        }
    //debugger;  
    const dom=document.getElementById(id);
        if(!dom){throw new Error('取不到ID对应的DOM');}
        return dom;
    };    
    window.LuoqiuJS.$=$;
    /**
     * @创建元素: 
     * @node {string}  
     */
    function createEl(node){
        return document.createElement(node);
    }
    window.LuoqiuJS.createEl=createEl;
    /**
     * @设置节点属性: 
     * @param {type} 
     * @return {type} 
     */
    function setAttri(node,style,value){
        node.setAttribute(style,value);
    }
    window.LuoqiuJS.setAtrri=setAttri;
    /**
     * 获取节点属性
     * @param {*} node 
     * @param {*} styles 
     */
    function getAttr(node,attr){
       return node.getAttribute(attr);
    }
    window.LuoqiuJS.getAttr=getAttr;


    /**
     * 
     * @param {*} node 
     * @param {*} styles 
     */
    function setAttrs(node,styles){
        for(let key in styles)
        {
          // console.log(key);
          // console.log(styles[key]);
          node.setAttribute(key,styles[key]);
          //每次只能设置一个属性
        }
      }
      window.LuoqiuJS.setAttrs=setAttrs;
})()


// window 全局

// 作用域：在作用域外部是无法访问作用域内部的一些方法和比变量

// 自动执行函数，第一：防止变量和方法，不会对全局环境造成污染