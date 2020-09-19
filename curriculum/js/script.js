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
 * ********添加信息层显示/隐藏***************************************************
 */
// console.log(addInfoButtonDOM);
// addInfoButtonDOM.onclick=function(){
//   alert(11);
// }
//addInfoButtonDOM.addEventListener('click',function(){},false)

window.LuoqiuJS.addEvent(addInfoButtonDOM,'click',function(){
  infoDialog.classList.add('dialog-show');
})

window.LuoqiuJS.addEvent(closeDialog,'click',function(){
  infoDialog.classList.remove('dialog-show');
})



/**
 * *********头像事件处理**********************************************************
 */
window.LuoqiuJS.addEvent(faceView,'click',function(){
  //handlerFaceList();
})

function handlerFaceListCallback(data){
    const requestData=data.data;
    let liHtml=``;
    for(let key of requestData){
      liHtml+=`<li><img src="${key}" alt=""></li>`
    }
}

window.LuoqiuJS.addEvent(faceViewList,'click',function(e){   //事件冒泡
  //获取标签
  let nodeName=e.target.nodeName.toLowerCase();
  //创建img对象    
  const createImg=window.LuoqiuJS.createEl('img'); 
  //获取img对象
  const getImg=window.LuoqiuJS.getTagName(faceView,'img');
  //点击获取src
  let getSrc=``;
  //更新src
  if(nodeName=='li'){
    const img=window.LuoqiuJS.getChildren(e.target)[0];
    getSrc=img.src;
  }
  if(nodeName=='img'){
    getSrc=e.target.src;
  }
  //头像存在，则修改头像的src
  if(getImg.length!=0){
    getImg[0].src=getSrc;
  }else{
    //img 写入 src
    //createImg.src=getSrc
    window.LuoqiuJS.setAttrs(createImg,{'src':getSrc});
    window.LuoqiuJS.addChild(faceView,createImg);
  }
})

console.log(faceView);