/*
 * @Author: ye jiancong
 * @Date: 2020-09-16 13:59:01
 * @LastEditTime: 2020-09-18 17:29:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javascriptProject\curriculum\js\script.js
 */

"use strict";  //严格模式
//获取DIV
const divDom=window.LuoqiuJS.$('table-data-wrap');  //获取元素

//创建DOM元素
const tableDom=window.LuoqiuJS.createEl('table')  //document.createElement('table');  //创建DOM元素

//tableDom.setAttribute('width','100%');  //设置属性  或者使用 tableDom.width='100%';
window.LuoqiuJS.setAttrs(tableDom,{
  'border':'0',
  'width':'100%',
  'cellpadding':'0',
  'cellspacing':'0',
  'id':'table-data-wrap'
});
let test=tableDom.getAttribute('id')  //获取属性

/**
 * 表头数据
 */
let theadHtml=`<thead><tr>`;
//es6 foreach
theadHtml+=`${createTHeadData()}</tr></thead>`
/**
 * 列表数据
 */
let tbodyHtml=`<tbody>`
//生成table的内容
tbodyHtml+=`${createTbodyData()}</tbody>`;
//生成table
tableDom.innerHTML=theadHtml+tbodyHtml;

divDom.appendChild(tableDom);



/**
 * **************************************************************
 */

const addInfoButtonDOM= window.LuoqiuJS.getClassName('add-info-button')[0];
// console.log(addInfoButtonDOM);
// addInfoButtonDOM.onclick=function(){
//   alert(11);
// }
//addInfoButtonDOM,addEventListener('click',function(){},false)
const infoDialog=window.LuoqiuJS.$('info-dialog');
const closeDialog=document.querySelector('.close-dialog');


console.log(closeDialog);
window.LuoqiuJS.addEvent(addInfoButtonDOM,'click',function(){
  infoDialog.classList.add('dialog-show');
})

window.LuoqiuJS.addEvent(closeDialog,'click',function(){
  infoDialog.classList.remove('dialog-show');
})