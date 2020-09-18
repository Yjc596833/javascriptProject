/**
 * 头像
 * @param {*} data 
 */
function createFace(data){
    let html=` <td>
    <div class="face">
        <span class="gender icon-${data.gender}"></span>
        <img src="${data.img}" alt="">
    </div>
    </td>`;
    return html;
}
/**
 * 姓名
 * @param {*} data 
 */
function createName(data){
  let html=` <td>
  <div class="people-name">
      <h4 class="name">${data.trueName}</h4>
      <span class="nickname option-05 fs-12">昵称：${data.nickName}</span>
  </div>`;
  return html;  
}

/**
 * 年龄
 */
function creatAge(data){
  let html=` <td>
        <div class="age text-center">
        <p>${data.number}</p>
        <span class="option-05 fs-12">（单身狗）</span>
        </div>
      </td>`;
  return html;
}
/**
 * 手机号
 * @param {} data 
 */
function createPhone(data){
  let html=` <td>
      <div class="phone">
      ${data.code}<span class="option-05">（中国）</span><br />
      ${data.number}
      </div></td>`;
      return html;
}
/**
 * 国籍
 * @param {} data 
 */
function createCounty(data){
  let html=`<td>
        <div>
        <img src="${data.National_flag}" alt="${data.name}">
        <p class="country-name" style="color: red;">${data.name}</p>
        </div>
        </td>`;
      return html;
}
/**
 * 爱好
 * @param {} data 
 */
function createHobby(data){
   let likeHtml=``;
    //爱好
    data.forEach(item=>{
      likeHtml+= `<span style="background-color: ${item.color};">${item.tag}</span>`
    })
     let html=`<td>
      <div class="likes">${likeHtml}</div>
    </td>`
    return html;
}

/**
 * 头衔
 */
function createRank(data){
    const NUMBER=16.66666;  //常量不可改
    let html=`<td>
          <div class="grade">
          <span class="role-name">${data.name}</span>
          <div class="grade-wrap icon-grade">
              <div class="grade-high icon-grade" style="width: ${data.level * NUMBER}%;"></div>
          </div>
        </div>
      </td>`;
      return html;
}
/**
 * 操作
 * @param {} data 
 */
function createOperation(data){
  return `<td>
      <div class="operation">
          <a href="javascript: void(0);" class="operation-btn">设置</a>
          <ul class="links">
              <a href="javascript: void(0);">编辑</a>
              <a href="javascript: void(0);">删除</a>
              <a href="javascript: void(0);">锁定</a>
              <a href="javascript: void(0);">收起</a>
          </ul>
      </div>
    </td>`;

}

/**
 * 主体数据
 */
function createTbodyData(){
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
      trHtml+=createFace(data.face);
      //姓名
      trHtml+=createName(data.name);
      //年龄
      trHtml+=creatAge(data.age);
      //手机号
      trHtml+=createPhone(data.phone);
      //国籍
      trHtml+=createCounty(data.country);
      //爱好
      trHtml+=createHobby(data.like);
      //头衔
      trHtml+=createRank(data.rank);
      //操作
      trHtml+=createOperation();
      //结束
      trHtml+=`</tr>`;
  
    }
        return trHtml;
  }

/**
 * 创建table 头部
 */
function createTHeadData(){
    let html='';
    tableTheadData.forEach((item,index,arr)=>{
      let width=item.width?`width="${item.width}"`:'';   //检测是否有width , 判断这个key是否存在
      let id=item.id?`id="${item.id}"`:'';                //检测是否有id , 判断这个key是否存在
      html+= `<th ${width} ${id}>${item.label}</th>`;  //字符串拼接
    });
    return html;
  }