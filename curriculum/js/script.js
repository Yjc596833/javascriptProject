/*
 * @Author: ye jiancong
 * @Date: 2020-09-16 13:59:01
 * @LastEditTime: 2020-09-18 14:44:37
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

//  const jsonObj={  //键key. 值value
//     name:"张三",
//     age:18
//  }

 //delete jsonObj.name;

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
console.log(test);

/**
 * 表头数据
 */
let theadHtml=`<thead><tr>`;
//es6 foreach
tableTheadData.forEach((item,index,arr)=>{
    let width=item.width?`width="${item.width}"`:'';   //检测是否有width , 判断这个key是否存在
    let id=item.id?`id="${item.id}"`:'';                //检测是否有id , 判断这个key是否存在
    theadHtml+= `<th ${width} ${id}>${item.label}</th>`;  //字符串拼接
 })
theadHtml+=`</tr></thead>`

/**
 * 表内容
 */
let tbodyHtml=`<tbody>`
let trHtml=``;
//es5 for
for(let i=0;i<tableBodyData.length;i++)  
{
  //continue  跳过
  //break 中止
  //块级作用域,子级作用域可以访问父级的变量
  const data=tableBodyData[i];
  //开始
  trHtml+=`<tr>`
  //头像
  trHtml+=` <td>
              <div class="face">
                  <span class="gender icon-${data.face.gender}"></span>
                  <img src="${data.face.img}" alt="">
              </div>
            </td>`
  //姓名
  trHtml+=` <td>
            <div class="people-name">
                <h4 class="name">${data.name.trueName}</h4>
                <span class="nickname option-05 fs-12">昵称：${data.name.nickName}</span>
            </div>
  </td>`
  //年龄
  trHtml+=` <td>
            <div class="age text-center">
            <p>${data.age.number}</p>
            <span class="option-05 fs-12">（单身狗）</span>
            </div>
  </td>`;
  //手机号
  trHtml+=` <td>
            <div class="phone">
            ${data.phone.code}<span class="option-05">（中国）</span><br />
            ${data.phone.number}
          </div>
  </td>`;
  //国籍
  trHtml+=`<td>
            <div>
            <img src="${data.country.National_flag}" alt="${data.country.name}">
            <p class="country-name" style="color: red;">${data.country.name}</p>
            </div>
  </td>`
  let likeHtml=``;
  //爱好
  data.like.forEach(item=>{
    likeHtml+= `<span style="background-color: ${item.color};">${item.tag}</span>`
  })
  trHtml+=`<td>
              <div class="likes">${likeHtml}</div>
           </td>`

  //头衔
  trHtml+=`<td>
          <div class="grade">
          <span class="role-name">${data.rank.name}</span>
          <div class="grade-wrap icon-grade">
              <div class="grade-high icon-grade" style="width: ${data.rank.level*16.66666}%;"></div>
          </div>
        </div>
  </td>`

  //操作
  trHtml+=`<td>
        <div class="operation">
            <a href="javascript: void(0);" class="operation-btn">设置</a>
            <ul class="links">
                <a href="javascript: void(0);">编辑</a>
                <a href="javascript: void(0);">删除</a>
                <a href="javascript: void(0);">锁定</a>
                <a href="javascript: void(0);">收起</a>
            </ul>
        </div>
  </td>`

  //结束
  trHtml+=`</tr>`;

}
console.log(tableBodyData);
//生成table的内容
tbodyHtml+=`${trHtml}</tbody>`;

//生成table
tableDom.innerHTML=theadHtml+tbodyHtml;

divDom.appendChild(tableDom);

