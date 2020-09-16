"use strict";  //严格模式
//获取DIV
const divDom=$('table-data-wrap');  //获取元素
console.log(divDom);
//固定语法
const tableDom=document.createElement('table');  //创建DOM元素
console.log(tableDom);

//jquery $('#aaaaa)
//封装自己的工具库，必备
function $(id){
  return  document.getElementById(id);
};    





tableDom.setAttribute('width','100%');  //设置属性  或者使用 tableDom.width='100%';
tableDom.setAttribute('border','0');
tableDom.setAttribute('cellpadding', '0');
tableDom.setAttribute('cellspacing','0');
tableDom.setAttribute('id','table-data-wrap');
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