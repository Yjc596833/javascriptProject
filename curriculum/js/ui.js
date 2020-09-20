(function(){
    "use strict";  //严格模式

    /**
     * 理解整体过程
     * 创建对象后设置属性，插入页面
     * 间隔事件添加样式，通过css3过滤产生动画
     * 多少秒后去除样式
     * 隐藏后，删除dom元素
     */


    //命名空间
    if(!window.luoqiuMsg){window.luoqiuMsg={}};

    /**
     * message
     */
    function $message(params){
       const body=document.getElementsByTagName('body')[0];
       //const messageDom= window.LuoqiuJS.createEl('div',params);
       const messageDom= window.LuoqiuJS.createEl('div',{
           id:'alert-ui'
       });
       messageDom.innerHTML=params.message;
       //主题
       luoqiuMsg.theme(params.type,messageDom)
       //添加至页面
       body.appendChild(messageDom);
       //执行show
       luoqiuMsg.show(messageDom);
    }
    window.luoqiuMsg.$message=$message;

    /**
     * 处理主题
     */
    function theme(type,node){
        if(!type){return false;}
        node.classList.add(`message-theme-${type}`);
    }
    window.luoqiuMsg.theme=theme;
    

    /**
     * setTimeout clearTimeout    ->指定间隔只指向执行一次
     * setInterval clearInterval    ->间隔时间段不断执行
     */

     function show(node){
        node.timerShow=setTimeout(function(){
            node.classList.add("show");
            clearTimeout(node.timerShow);
        },1000);
        //隐藏对象
        luoqiuMsg.hide(node);
     }
    window.luoqiuMsg.show=show;


     /**
      * hide 对象
      */
     function hide(node){
         node.timerHide=setTimeout(function(){
             node.classList.remove("show");
             clearTimeout(node.timerHide);
         },2000)

        luoqiuMsg.remove(node);
     }
     window.luoqiuMsg.hide=hide;


     /**
      * remove 对象
      */
     function remove(node){
        const body=document.getElementsByTagName('body')[0];
        node.timerRemove=setTimeout(function(){
            clearTimeout(node.timerRemove);
            body.removeChild(node);
        },4000)

     }
     window.luoqiuMsg.remove=remove;

})()