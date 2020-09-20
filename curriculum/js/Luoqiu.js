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
     * 获取节点属性
     * @param {*} node 
     * @param {*} styles 
     */
    function getAttr(node,attr){
       return node.getAttribute(attr);
    }
    window.LuoqiuJS.getAttr=getAttr;

    /**
     * 获取 className 对象
     * @param {string} className 
     */
    function getClassName(className){
    return  document.getElementsByClassName(className)    //  'className'
    //return document.querySelector(className)  eg  '.classNAME'  拿的是单个对象 
    //return document.querySelectorAll()   拿的是数据 
    }
    window.LuoqiuJS.getClassName=getClassName;

    /**
     * 获取标签对象(当前节点下所有层级中的targets)
     * @param {}} node 
     */
    function getTagName(parentNode,target){
        return parentNode.getElementsByTagName(target);
    }
    window.LuoqiuJS.getTagName=getTagName;

    /**
     * 获取标签对象（第一层targets）
     * @param {} node 
     */
    function getChildren(parentNode){
        return parentNode.children;
    }
    window.LuoqiuJS.getChildren=getChildren;

    /**
     * @创建元素: 
     * @node {string}  
     */
    function createEl(node,attr){
        const dom=document.createElement(node);
        if(attr){
            LuoqiuJS.setAttrs(dom,attr);
        }
        return dom;
    }
    window.LuoqiuJS.createEl=createEl;

    /**
     * 添加子节点到父级末尾创建对象
     * @param {} node 
     */
    function addChild(parentNode,node)
    {
        parentNode.appendChild(node);
    }
    window.LuoqiuJS.addChild=addChild;


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
     * 设置属性
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

      /**
       * addEventListener 方法
       */
      function addEvent(domNode,evnetType,handlerFunction){
            if(window.addEventListener){
                    domNode.addEventListener(evnetType,handlerFunction);
            }
            else
            domNode.attachEvent(`on${evnetType}`,handlerFunction);
      }
      window.LuoqiuJS.addEvent=addEvent;
})()


// window 全局

// 作用域：在作用域外部是无法访问作用域内部的一些方法和比变量

// 自动执行函数，第一：防止变量和方法，不会对全局环境造成污染