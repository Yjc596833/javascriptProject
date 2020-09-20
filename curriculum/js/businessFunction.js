"use strict";



/**
 * 更新头像函数
 */
function faceUpdate(params){
    //console.log(params);
    if(params.type==="add"){
        //头像存在，则修改头像的src
        if(params.gImg.length!==0){
            params.gImg[0].src=params.src;
        }else{
            //img 写入 src
            //createImg.src=getSrc
            window.LuoqiuJS.setAttrs(params.cImg,{'src':params.src});
            window.LuoqiuJS.addChild(faceView,params.cImg);
        }
    }
    if(params.type==="del" && params.gImg){   //&&  params.gImg  表示存在的情况下
        //删除某个父级下面的子对象（DOM元素）
        faceView.removeChild(params.gImg);
    }
}