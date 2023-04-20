//新闻板块内容
let zuiNews = `
<a href="#">
    <p>【须弥冒险笔记·苍漠囿土篇】3.6版本新区域展示页上线！</p>
    <p>2023/04/07</p>
</a>
<a href="#">
    <p>「喵？喵。」</p>
    <p>2023/04/07</p>
</a>
<a href="#">
    <p>「喵，喵。」</p>
    <p>2023/04/07</p>
</a>
<a href="#">
    <p>「喵喵喵，喵喵，喵喵！」</p>
    <p>2023/04/07</p>
</a>
<a href="#">
    <p>「...喵。喵喵喵。」</p>
    <p>2023/04/07</p>
</a>
<a class="more">查看全部资讯</a>
`;
let news = `
<a href="#">
    <p>《原神》3.6版本「七圣召唤」全新卡牌说明</p>
    <p>2023/01/01</p>
</a>
<a href="#">
    <p>迪希雅生日快乐｜你说我今天的妆容很好看？哈哈，谢谢！</p>
    <p>2023/01/01</p>
</a>
<a href="#">
    <p>【须弥冒险笔记·苍漠囿土篇】3.6版本新区域展示页上线！</p>
    <p>2023/01/01</p>
</a>
<a href="#">
    <p>「喵？喵。」</p>
    <p>2023/01/01</p>
</a>
<a href="#">
    <p>「喵。喵。」</p>
    <p>2023/01/01</p>
</a>
<a class="more">查看全部资讯</a>
`;
let notice = `
   <a href="#">
       <p>《原神》祈愿概率公示</p>
   </a>
   <a href="#">
       <p>《原神》3.5版本「风花的呼吸」更新说明</p>
       <p>2023/4/7</p>
   </a>
   <a href="#">
       <p>《原神》「风花的呼吸」3.5版本更新维护预告</p>
       <p>2023/4/7</p>
   </a>
   <a href="#">
       <p>《原神》预下载已开启</p>
       <p>2023/4/7</p>
   </a>
   <a href="#">
       <p>《原神》3.4版本「磬弦奏华夜」更新维护预告</p>
       <p>2023/4/7</p>
   </a>
   <a class="more">查看全部资讯</a>
   `;
let active = `
   <a href="#">
       <p>《原神》「神工天巧」活动即将开启</p>
       <p>2022/02/28</p>
   </a>
   <a href="#">
       <p>《原神》月夕祝颂-万份空月祝福相赠</p>
       <p>2020/10/01</p>
   </a>
   <a href="#">
       <p>“在尘世的相逢”抖音《原神》公测主播招募</p>
       <p>2020/09/07</p>
   </a>
   <a href="#">
       <p>“在尘世的相逢”快手直播《原神》主播招募活动开启</p>
       <p>2020/04/07</p>
   </a>
   <a href="#">
       <p>“在尘世的相逢”快手直播《原神》主播招募活动开启</p>
       <p>2020/04/07</p>
   </a>
   <a class="more">查看全部资讯</a>
   `;

//新闻模块数据
let news_title = {
    "retcode": 0,
    "message": "操作成功",
    "data": {
        "total": 1817,
        "list": [
            {
                "contentId": "27065",
                "channelId": [
                    "11",
                    "259"
                ],
                "title": "《原神》寻味之旅——「璃月食集」第四期",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "璃月食集第四期-logo版封面720-320安全区.jpg",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/17/713ce731982de10765dc2291a031a138_8643763300939030674.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-17 12:05:01",
                "id": "27065"
            },
            {
                "contentId": "27064",
                "channelId": [
                    "11",
                    "259"
                ],
                "title": "魈生日快乐｜等吃完这盘杏仁豆腐，要一起下去巡视吗？",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "720x320-魈贺图.png",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/17/83b35d026ff8555384d9aebe452909fa_806799103213445706.png"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-17 11:55:53",
                "id": "27064"
            },
            {
                "contentId": "27014",
                "channelId": [
                    "11",
                    "259"
                ],
                "title": "《原神》EP - 四时旋舞之熙",
                "author": "",
                "type": "",
                "tag": "",
                "intro": "",
                "url": "",
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "妮露封面logo版720-320安全区.jpg",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/12/ef0077dcb59488b2079ec6c0d8672401_8601968172375572985.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-12 12:00:00",
                "id": "27014"
            }
        ]
    }
};
let newsList = {
    "retcode": 0,
    "message": "操作成功",
    "data": {
        "total": 2034,
        "list": [
            {
                "contentId": "27065",
                "channelId": [
                    "11",
                    "259"
                ],
                "title": "《原神》寻味之旅——「璃月食集」第四期",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "璃月食集第四期-logo版封面720-320安全区.jpg",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/17/713ce731982de10765dc2291a031a138_8643763300939030674.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-17 12:05:01",
                "id": "27065"
            },
            {
                "contentId": "27064",
                "channelId": [
                    "11",
                    "259"
                ],
                "title": "魈生日快乐｜等吃完这盘杏仁豆腐，要一起下去巡视吗？",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "720x320-魈贺图.png",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/17/83b35d026ff8555384d9aebe452909fa_806799103213445706.png"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-17 11:55:53",
                "id": "27064"
            },
            {
                "contentId": "27014",
                "channelId": [
                    "11",
                    "259"
                ],
                "title": "《原神》EP - 四时旋舞之熙",
                "author": "",
                "type": "",
                "tag": "",
                "intro": "",
                "url": "",
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "妮露封面logo版720-320安全区.jpg",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/12/ef0077dcb59488b2079ec6c0d8672401_8601968172375572985.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-12 12:00:00",
                "id": "27014"
            },
            {
                "contentId": "27013",
                "channelId": [
                    "11"
                ],
                "title": "全新强敌——「阿佩普的绿洲守望者」",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "720x320.jpg",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/12/9d9a5998bdb7a946d80a225560001e9d_8504377665873917386.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-12 12:00:00",
                "id": "27013"
            },
            {
                "contentId": "26993",
                "channelId": [
                    "11"
                ],
                "title": "《原神》「月草的赐慧」活动祈愿现已开启",
                "author": "",
                "type": "",
                "tag": "",
                "intro": "",
                "url": "",
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "草神卡池720-320安全区.jpg",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/10/0fac2332de6bc9d6c0193670f9b01db8_8538440033854319863.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-12 10:02:33",
                "id": "26993"
            },
            {
                "contentId": "27011",
                "channelId": [
                    "11"
                ],
                "title": "《原神》3.6版本「盛典与慧业」更新说明",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "企业微信截图_16812118541935.png",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/11/d34080ef5a85774ac1064e8696d5624d_8537848944877034806.png"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-12 07:00:00",
                "id": "27011"
            },
           
            {
                "contentId": "26993",
                "channelId": [
                    "11"
                ],
                "title": "《原神》「月草的赐慧」活动祈愿现已开启",
                "author": "",
                "type": "",
                "tag": "",
                "intro": "",
                "url": "",
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "草神卡池720-320安全区.jpg",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/10/0fac2332de6bc9d6c0193670f9b01db8_8538440033854319863.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-12 10:02:33",
                "id": "26993"
            },
            {
                "contentId": "27011",
                "channelId": [
                    "11"
                ],
                "title": "《原神》3.6版本「盛典与慧业」更新说明",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "企业微信截图_16812118541935.png",
                                "url": "https://webstatic.mihoyo.com/upload/contentweb/2023/04/11/d34080ef5a85774ac1064e8696d5624d_8537848944877034806.png"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-12 07:00:00",
                "id": "27011"
            },
            {
                "contentId": "27009",
                "channelId": [
                    "11"
                ],
                "title": "小红书《原神》3.6版本笔记征集活动即将开启",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "企业微信截图_16812118541935.png",
                                "url": "https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-11 12:00:00",
                "id": "27009"
            },
            {
                "contentId": "27008",
                "channelId": [
                    "11"
                ],
                "title": "快手《原神》3.6版本视频征集&直播招募活动即将开启",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "企业微信截图_16812118541935.png",
                                "url": "https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-11 12:00:00",
                "id": "27008"
            },
            {
                "contentId": "27007",
                "channelId": [
                    "11"
                ],
                "title": "虎牙直播《原神》3.6版本直播季活动即将开启",
                "author": null,
                "type": null,
                "tag": null,
                "intro": null,
                "url": null,
                "ext": [
                    {
                        "arrtName": "title-j简写",
                        "keyId": 1560152545989,
                        "value": ""
                    },
                    {
                        "arrtName": "banner",
                        "keyId": 1591668058800,
                        "value": [
                            {
                                "name": "企业微信截图_16812118541935.png",
                                "url": "https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg"
                            }
                        ]
                    }
                ],
                "start_time": "2023-04-11 12:00:00",
                "id": "27007"
            }
        ]
    }
}