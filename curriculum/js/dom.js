
"use strict"; //严格模式
//获取DIV
const divDom=window.LuoqiuJS.$('table-data-wrap');  //获取元素
//添加信息按钮
const addInfoButtonDOM= window.LuoqiuJS.getClassName('add-info-button')[0];     
//创建DOM元素
const tableDom=window.LuoqiuJS.createEl('table')  //document.createElement('table');  
//通过ID获取弹窗
const infoDialog=window.LuoqiuJS.$('info-dialog'); 
//通过类名获取关闭弹窗的类  
const closeDialog=document.querySelector('.close-dialog'); 
//获取头像区域
const faceView=window.LuoqiuJS.getClassName('face-view')[0]; //document.querySelector('.face-view');  //window.LuoqiuJS.getClassName('face-view')[0];
//头像列表区域
const faceViewList=document.querySelector('.face-view-list');
//获取删除头像按钮
const faceDelButton=window.LuoqiuJS.getTagName(faceView,'a')[0]; //注意是标签名 ！！！ 