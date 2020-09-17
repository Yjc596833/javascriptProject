/*
 * @Author: ye jiancong
 * @Date: 2020-09-16 13:59:01
 * @LastEditTime: 2020-09-17 11:06:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javascriptProject\curriculum\js\script.js
 */

"use strict";  //严格模式
//函数表达式，先定义后使用，没有函数提升
// const $=function(i){
//     return document.getElementById(id);
//     //其中一点，谁调用了方法，值就返回给谁。这里不包含闭包概念。
// }
//获取DIV
const divDom=$('table-data-wrap');  //获取元素
//创建DOM元素
const tableDom=createEl('table')  //document.createElement('table');  //创建DOM元素

/**
 * @获取ID的DOM元素: 
 * @id {string}  
 */
function $(id){
  return  document.getElementById(id);
};    

/**
 * @创建元素: 
 * @node {string}  
 */
function createEl(node){
  return document.createElement(node);
}


/**
 * @设置节点属性: 
 * @param {type} 
 * @return {type} 
 */
function setAttr(node,style,value){
  node.setAttribute(style,value);
}


/**
 * 获取节点属性
 * @param {*} node 
 * @param {*} styles 
 */
function getAttr(node,attr){
  return node.getAttribute(attr);
}



function setAttrs(node,styles){
  console.log(styles);
  for(let key in styles)
  {
    // console.log(key);
    // console.log(styles[key]);
    node.setAttribute(key,styles[key]);
    //每次只能设置一个属性
  }
}


setAttr(tableDom,'width','100%');
//tableDom.setAttribute('width','100%');  //设置属性  或者使用 tableDom.width='100%';
setAttrs(tableDom,{
  'border':'0',
  'cellpadding':'0',
  'cellspacing':'0',
  'id':'table-data-wrap'
});
let test=tableDom.getAttribute('id')  //获取属性
console.log(test);

tableDom.innerHTML=`<thead>
                        <tr>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>国籍</th>
                            <th width="200">爱好</th>
                            <th>头衔</th>
                            <th>操作</th>
                        </tr>
                    </thead>`


divDom.appendChild(tableDom);


//整合学习内容