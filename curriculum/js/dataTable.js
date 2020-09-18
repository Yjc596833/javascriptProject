/*
 * @Author: your name
 * @Date: 2020-09-18 11:59:44
 * @LastEditTime: 2020-09-18 14:42:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javascriptProject\curriculum\js\dataTable.js
 */

"use strict"; //严格模式

/**
 * 表头内容
 */
const tableTheadData=[
    {label:"头像"},
    {label:"姓名"},
    {label:"年龄"},
    {label:"手机号"},
    {label:"国籍"},
    {
      label:"爱好",
      width:200,
      id:"aaa"
    },
    {label:"头衔"},
    {label:"操作"},
  ]

/**
 * 表内容列表
 */
const tableBodyData=[
    {
        face:{
            gender:'girl',
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg'
        },
        name:{
            trueName:'bueaty',
            nickName:'美女',
        },
        age:{
            number:25
        },
        phone:{
            code:'+86',
            number:1111111111
        },
        country:{
            National_flag:'http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg',
            name:'中国'
        },
        like:[
            {tag:'跑步',color:'#468d9c'},
            {tag:'看电影',color:'#469c4e'}
        ],
        rank:{
            name:'小白',
            level:2
        }
    },
    {
        face:{
            gender:'boy',
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg'
        },
        name:{
            trueName:'yejiancong',
            nickName:'江城第一帅',
        },
        age:{
            number:25
        },
        phone:{
            code:'+86',
            number:1111111111
        },
        country:{
            National_flag:'http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg',
            name:'中国'
        },
        like:[
            {tag:'跑步',color:'#468d9c'},
            {tag:'看电影',color:'#469c4e'}
        ],
        rank:{
            name:'小白',
            level:1
        }
    }
]
