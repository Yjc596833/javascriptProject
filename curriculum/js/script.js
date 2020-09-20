/*
 * @Author: ye jiancong
 * @Date: 2020-09-16 13:59:01
 * @LastEditTime: 2020-09-18 17:29:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javascriptProject\curriculum\js\script.js
 */

"use strict";  //严格模式

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

window.LuoqiuJS.addEvent(faceViewList,'click',function(e){   //事件监听
  const ev=e || window.event;
  //阻止事件冒泡
  if(ev.stopPropagation){
    ev.stopPropagation();
  }else{
    ev.cancelBubble=true;   //IE
  }

  //ev.stopPropagation && ( ev.stopPropagation() || (ev.cancelBubble = true) );

  //获取标签
  let nodeName=e.target.nodeName.toLowerCase();
  //创建img对象    
  const createImg=window.LuoqiuJS.createEl('img'); 
  //获取img对象
  const getImg=window.LuoqiuJS.getTagName(faceView,'img');
  //点击获取src
  let getSrc=``;
  //清除头像高光
  if(faceSave){faceSave.classList.remove("active");} //清除上一次对象的样式  if(faceSave) 判断是否存在

  //更新src
  if(nodeName=='li'){
    const img=window.LuoqiuJS.getChildren(e.target)[0];
    getSrc=img.src;
    //存储头像 li 标签 
    faceSave=ev.target;
  }
  if(nodeName=='img'){
    getSrc=e.target.src;
    faceSave=ev.target.parentNode;
  }

  faceSave.classList.add("active");

  //无论是添加还是删除，都只是对img对象进行操作
  //更新头像
  //faceUpdate(getImg,createImg,getSrc,"add");
  //es5
  faceUpdate({
    src:getSrc,
    gImg:getImg,
    cImg:createImg,
    type:"add"
  });

  //es6
  // faceUpdate({  // 对象的 key 和 value 是相同的情况下，用一个参数就可以
  //   type:"add",
  //   getImg,
  //   createImg,
  //   getSrc
  // })
})

window.LuoqiuJS.addEvent(faceDelButton,'click',function(e){
    const ev= e || window.event;
    //获取img对象
    const getImg=window.LuoqiuJS.getTagName(faceView,'img')[0];   
    //删除某个父级下面的对象
    //faceUpdate(getImg,"","","del");
    faceUpdate({
      gImg:getImg,
      type:"del"
    });
    //阻止事件冒泡
    if(ev.stopPropagation){
      ev.stopPropagation();
    }else{
      ev.cancelBubble=true;   //IE
    }
})






inputUserName.onblur=function(){   //谁绑定方法，this就指向谁
    //this
    let value=this.value;
    if(!value)
    {
     // alert("姓名不能为空");
    }
    console.log(this.value);
    window.luoqiuMsg.$message( {
      id:'alert-ui',
      message:'test',
      type:'success'
    });
   // console.log(inputUserName.value);
}
