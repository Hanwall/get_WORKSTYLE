/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5dba9f8dc3a5fdc494c8d8628b1ce7af"
  },
  {
    "url": "assets/css/0.styles.2cc03edf.css",
    "revision": "fe2a7bd4a3c84ec47741d3fd83486478"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a3339415.js",
    "revision": "f39fa405235fd0cbd6ebd7748b3efd9f"
  },
  {
    "url": "assets/js/11.79219974.js",
    "revision": "9b5bae4b5be9de195e9dca644a8f8940"
  },
  {
    "url": "assets/js/12.99b2ac04.js",
    "revision": "0f7e75db964bca74fbddc23d1e269fa3"
  },
  {
    "url": "assets/js/13.e204aae3.js",
    "revision": "bf74e21acb68223fe5c720cdf8bd6599"
  },
  {
    "url": "assets/js/14.3c9bded7.js",
    "revision": "c32eb05cd01fdcfadfed049c37f04eaf"
  },
  {
    "url": "assets/js/15.0c2fced5.js",
    "revision": "bb9e392bbd3fd4e933778d27d2df2074"
  },
  {
    "url": "assets/js/16.3a3c0654.js",
    "revision": "457b3d2d41ccaf469bddf7762fab5ea4"
  },
  {
    "url": "assets/js/17.40d76a76.js",
    "revision": "b9b1de360cc6eb4d841a609cdc3b5217"
  },
  {
    "url": "assets/js/18.38796fd2.js",
    "revision": "53e6a17df373b27745090d47f380fece"
  },
  {
    "url": "assets/js/19.2cd839a5.js",
    "revision": "a3e91d6f8d3c52b64824a228bded19ec"
  },
  {
    "url": "assets/js/2.03213e7e.js",
    "revision": "85e06fa1c0eb4e016d4c7e75a8753dac"
  },
  {
    "url": "assets/js/20.b5fcddf6.js",
    "revision": "dff4daa696424ebdc32d4efed9972c56"
  },
  {
    "url": "assets/js/21.80e5eb1d.js",
    "revision": "c34e6e7a29976c63fff475d935fd0d1f"
  },
  {
    "url": "assets/js/22.2fe46aa8.js",
    "revision": "d7fc6c76e471e600887b2369713a85b6"
  },
  {
    "url": "assets/js/23.7528d187.js",
    "revision": "5fd1458cd83c2c2e27241e5ebd3e02c5"
  },
  {
    "url": "assets/js/24.9ac7b620.js",
    "revision": "430d284558ddd544ac5d385907c80491"
  },
  {
    "url": "assets/js/25.eeefd2d6.js",
    "revision": "76cb3d1dd4891a2dbe9d88a3f72db530"
  },
  {
    "url": "assets/js/26.bab2c4c3.js",
    "revision": "ee76883a62e059a1a49bbc3477ef8f7d"
  },
  {
    "url": "assets/js/27.1c688890.js",
    "revision": "f6f76935dac45c1ec73cf4281c0bfbc4"
  },
  {
    "url": "assets/js/28.0d5a2046.js",
    "revision": "b98a1d35de973d58ffbaf9084232b42c"
  },
  {
    "url": "assets/js/29.dad5c591.js",
    "revision": "558ef99c0d8940707c1b800f71ea126f"
  },
  {
    "url": "assets/js/3.e26cc02d.js",
    "revision": "866e9aa8ae82dbf73e4e708346b5c9d4"
  },
  {
    "url": "assets/js/30.99ffe01f.js",
    "revision": "2383a805a704a4e68959040d2369a91c"
  },
  {
    "url": "assets/js/31.628d39f2.js",
    "revision": "2aadd90988a2413707bb83b1c2f8d31a"
  },
  {
    "url": "assets/js/32.b6ae3b73.js",
    "revision": "df23c6e1adf6605a221dfd2607d75c0f"
  },
  {
    "url": "assets/js/33.af07802f.js",
    "revision": "1baa6c9981db7858d3bf47a052121739"
  },
  {
    "url": "assets/js/34.4478642b.js",
    "revision": "da27682ea6251e839ea5c38c6c14c958"
  },
  {
    "url": "assets/js/35.8be11264.js",
    "revision": "7f07a4be935cb9c5e5e2cda6c3e1770d"
  },
  {
    "url": "assets/js/36.8a384376.js",
    "revision": "b788f889651aba8f21374d8a33cee9c6"
  },
  {
    "url": "assets/js/37.a6f99499.js",
    "revision": "18050e77746d10fd73183d9045518f22"
  },
  {
    "url": "assets/js/38.29e0d8b9.js",
    "revision": "d08c03efab34fbecbd26c4b53f1b0118"
  },
  {
    "url": "assets/js/39.94b6ff11.js",
    "revision": "960b84ebf01fb72ccb951eaa3c8ee990"
  },
  {
    "url": "assets/js/4.207c7a8e.js",
    "revision": "b873f4354bb0bc3fca44c97e9c13c4d8"
  },
  {
    "url": "assets/js/40.116b7b46.js",
    "revision": "b45cfeb877785c95b45b95eeb99794e8"
  },
  {
    "url": "assets/js/41.afe55c5e.js",
    "revision": "49744ae0c1217b7cb510725b92bf1208"
  },
  {
    "url": "assets/js/42.56cf1c56.js",
    "revision": "dce3824c80ebd160beb7342083d4d89f"
  },
  {
    "url": "assets/js/43.f95a90ff.js",
    "revision": "61b86f13d9f287b2bc5bcd7a5636cc18"
  },
  {
    "url": "assets/js/44.15d937f3.js",
    "revision": "261948e9372ce41ccc97bbda0d881efa"
  },
  {
    "url": "assets/js/45.17f5754a.js",
    "revision": "bb098fea4b1ec48afe8ccc9a0a4039a8"
  },
  {
    "url": "assets/js/46.f269b67b.js",
    "revision": "f9880d33c4f90fc777b8a6a1c4370866"
  },
  {
    "url": "assets/js/47.57ebbf1d.js",
    "revision": "8af20334de647771de1a476f6aa38c76"
  },
  {
    "url": "assets/js/48.e55afc37.js",
    "revision": "458d551a37fdc989484847402725a12f"
  },
  {
    "url": "assets/js/49.e9704c41.js",
    "revision": "f9d63fcbb39f77cda1132c56d7f15382"
  },
  {
    "url": "assets/js/5.e5360d7c.js",
    "revision": "fe7e457b0f2924eaa907b6636405cf16"
  },
  {
    "url": "assets/js/6.fe0d683a.js",
    "revision": "356f28fd4e9d65acbddb96f0048c94ad"
  },
  {
    "url": "assets/js/7.5dae894e.js",
    "revision": "3c73c139df518a42be131178bde4c504"
  },
  {
    "url": "assets/js/8.0268ab9a.js",
    "revision": "0a7db8eca8e8f5a0c3226025f2ba2af3"
  },
  {
    "url": "assets/js/9.8caac77f.js",
    "revision": "581175a23896162d2ce766a00ce92e77"
  },
  {
    "url": "assets/js/app.21582635.js",
    "revision": "d604e8555c897b03e51cebdde3f27a63"
  },
  {
    "url": "index.html",
    "revision": "c6c1b63a089688a646638b15b6f52d1a"
  },
  {
    "url": "initwithmarkdown/ryt/index.html",
    "revision": "645f8851c03952373a386cf659bbb380"
  },
  {
    "url": "initwithmarkdown/ypsx/about/企业文化与规章制度.html",
    "revision": "a395977100ce14d8065ad2536a47d37f"
  },
  {
    "url": "initwithmarkdown/ypsx/about/公司杭州地区人员架构.html",
    "revision": "db47253f8bfb300ef0f49be2165da1bf"
  },
  {
    "url": "initwithmarkdown/ypsx/about/关于.html",
    "revision": "90ea2db64874df16fa2588f3a2477b21"
  },
  {
    "url": "initwithmarkdown/ypsx/about/谊品生鲜发展历程.html",
    "revision": "1c4565e06d832920b666d9a49c188b87"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它物品物料检索.html",
    "revision": "b45997b53a08fb5c55af04c1742cabcf"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它货物接货流程.html",
    "revision": "f7233cd02e22efb50c2285204cdac05e"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班工作时间工资和工作流程.html",
    "revision": "843b2ef3d6aafadfd1c7913641b1e2c7"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-参考.html",
    "revision": "cb74f5666f4876594573b9285ce46d19"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-新版.html",
    "revision": "adc16453e1ff117888c6ef60b2d6ac2c"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-旧版.html",
    "revision": "53faeb014c25657666b01bccaa716a38"
  },
  {
    "url": "initwithmarkdown/ypsx/common/工作中常见软件推荐.html",
    "revision": "c62c3f5dbc6ee667cbf4720e065aed0f"
  },
  {
    "url": "initwithmarkdown/ypsx/common/收银工作流程.html",
    "revision": "efb97c498328f125f4f9b8fb13b766b5"
  },
  {
    "url": "initwithmarkdown/ypsx/common/水产其它注意事项.html",
    "revision": "ae0187a2e67d46f232edffede237316c"
  },
  {
    "url": "initwithmarkdown/ypsx/common/肉加工其它注意事项.html",
    "revision": "d7e3df5482903c13410c8351d30b67e1"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜保鲜手册.html",
    "revision": "405d141dc37b347f2bf9f1baac0db875"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜其它注意事项.html",
    "revision": "69f44ea591c288308c0672a4e9735e4d"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/光猫路由器使用.html",
    "revision": "58f0c71076617aa3ea174087418242ff"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/其它设备检索.html",
    "revision": "abb43edd1b7de9b6fe90ee58a3f98d88"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/制冰机使用.html",
    "revision": "480f0afe7b8edafde461f228e1bc19a6"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/卧式冷冻柜使用.html",
    "revision": "437f611fa7212aa28bfe5cc31ee8a36f"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/外机清洗.html",
    "revision": "fcefc6a06d7d9eee8ca7b46b77f15639"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/打氧机使用.html",
    "revision": "31511a446c641f8e2c0d81578c090ae7"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/收银机使用教程.html",
    "revision": "af96bcdefc5e0a0b8a478a009f462416"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温冻品展示柜使用.html",
    "revision": "9ed82a14bc8d3c5bdd368dff13b513b8"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温牛奶展示柜使用.html",
    "revision": "17ba3f13b023453a03b826c475e22a3d"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌肉加工展示柜使用.html",
    "revision": "cd67bd1ba64bd2d296635e7362290122"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/条码电子秤使用.html",
    "revision": "a4ee9498194e7a8eaa54fd5e932ef114"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电子台秤使用.html",
    "revision": "f3b61c29af416342fd3695e02ee20156"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电闸柜使用.html",
    "revision": "4cdba993a0ff28b4aec06ae845a3084a"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/监控使用.html",
    "revision": "1012cb1560ea69d885a4bab210aabf76"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/空调机使用.html",
    "revision": "8b455cbff2846399cc639ab8c3efb096"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/肉加工立式冰柜使用.html",
    "revision": "1f59d4c1ea239c8936b61f08f7608df2"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/谊品生鲜冷柜使用注意事项.html",
    "revision": "71a5636f11098ce53a808e807a968ad1"
  },
  {
    "url": "initwithmarkdown/ypsx/index.html",
    "revision": "59d227867d19619b5ef360650e5e4b6b"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4allfiles.html",
    "revision": "9693f2326b551db42ae3c8e6e4b700e8"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4common.html",
    "revision": "0bf5fe6003d9f90249cefe4c475faebe"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4equipment.html",
    "revision": "657ab17354cb612d6adff07237fbe895"
  },
  {
    "url": "initwithmarkdown/zhsm/index.html",
    "revision": "00d0e39cc148c5c2dc89213a1c4c15cd"
  },
  {
    "url": "logo/index.jpg",
    "revision": "07a481cf6281f8b181c353e44e97c565"
  },
  {
    "url": "logo/loading.gif",
    "revision": "c502cd01c910b4f53d86603d6bd078ff"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/index.html",
    "revision": "d5123f084f045566da9e3bcab6fb585b"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/企业文化规章制度人员架构/公司杭州地区组织架构图.png",
    "revision": "8d942b2115c5197dae36d13e1fb1f5ea"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-新版(仅供参考).png",
    "revision": "7399f2111c5a05cb687c88f88bf17eda"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-旧版.png",
    "revision": "1d4395e246ac6e18c17b0771ec6242ea"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/干货鸡蛋收货单.jpeg",
    "revision": "ad2981d9f4c365d3589c0cca1846d995"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/快消牛奶收货单.jpeg",
    "revision": "b66d667a098ceeef2631bb8fd9e06597"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/快消馒头收货单.jpeg",
    "revision": "d40f494c925eb62adbc04fe4249d47bf"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/西瓜到货.jpeg",
    "revision": "1d6bb65629185139379544b626218d02"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/西瓜到货群内通知.jpeg",
    "revision": "6d2ecf25b29c033d954ecbbed08be098"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/鸡蛋到货.jpeg",
    "revision": "fb3f53fbb8f3a78d67fc8edb38537f57"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银机.jpeg",
    "revision": "5c6c925e62488abaad4036a66c5b0fd2"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银机登录界面.jpeg",
    "revision": "be4f5477b6711653f99223dae024ecf8"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/新的接货流程.jpeg",
    "revision": "dd42f04965019d2c7ff789db5cf63976"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/新的水产池.jpeg",
    "revision": "e3b0808e5d1d3f6e6f9eec12aa12d399"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/新的盐度计.jpeg",
    "revision": "fc145dfde1aa02e9f9647fadbd1a3923"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/旧水产海鲜池.jpeg",
    "revision": "b2a55528ac2850545fe6f130641e6e71"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/旧的盐度计.jpeg",
    "revision": "93400374a9b75ed40d8e96995833d2e0"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产养殖温度盐度表.jpeg",
    "revision": "a95c9d39a2d03cbed453779923217ef6"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产收货单.jpeg",
    "revision": "920119ed3b8fb73ce7f9ab5d361fc039"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产收货单最新形式.jpeg",
    "revision": "b20b87b3678c2ac4c45f44e92987498d"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产收货单最新形式2.jpeg",
    "revision": "6c7dd8da19b144377101686893c81ba5"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产运输温度盐度表.jpeg",
    "revision": "c307f8f16cb09c41e7b45bb405b57fa8"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水长.jpeg",
    "revision": "a95c9d39a2d03cbed453779923217ef6"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/温度计.jpeg",
    "revision": "ee3a4cd2e97597794044ac01a791ab6c"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-肉豆文件/肉品品质检验合格证.jpeg",
    "revision": "3e5eaad89ed52a86712d9e8ea5eed176"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-肉豆文件/肉豆制品收货单.jpeg",
    "revision": "9148d2927875b38a64d19059123c6018"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-肉豆文件/豆制品展示.jpeg",
    "revision": "c3cf21dd234bb5023f1a080b0c6b1430"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/保鲜手册1.jpeg",
    "revision": "9cbef074f18e7f5cbc9090f4721d1c6d"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/保鲜手册2.jpeg",
    "revision": "33038e84f5e06d8c385d573ac53b7ed1"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/保鲜手册3.jpeg",
    "revision": "c753eb70cfdf65a0e9bbed121ca98ba9"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/保鲜手册4.jpeg",
    "revision": "af3cd81033d5bf2e3424e95ffa3f40bb"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/保鲜手册5.jpeg",
    "revision": "6e1f9d1c23f42cef394dc5374ee1777a"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/保鲜手册6.jpeg",
    "revision": "4b183d55cf87152fb45cf2acb612c078"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜打包及陈列图片.jpeg",
    "revision": "ae1190403bf28da863c6b838d326c2a7"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜收货单.jpeg",
    "revision": "87f8c2d76f25bc1ec7998912b86aede3"
  },
  {
    "url": "ypsx/files/define/initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜收货单标记.jpeg",
    "revision": "b624952fea4de87f434c48ad4640af76"
  },
  {
    "url": "ypsx/pic/about/公司杭州地区组织架构图.png",
    "revision": "4065fb5612643d6a0ae18ad096bc47ad"
  },
  {
    "url": "ypsx/pic/about/未来1.png",
    "revision": "392c505f0d3cb5f2ade5886b08f004e0"
  },
  {
    "url": "ypsx/pic/about/未来2.png",
    "revision": "0ec70192ad3acc56888b80fa3cf38dd0"
  },
  {
    "url": "ypsx/pic/about/谊品全国门店图1.jpeg",
    "revision": "e03a6bb08ac30050f593f260399a978c"
  },
  {
    "url": "ypsx/pic/about/谊品全国门店图2.jpeg",
    "revision": "aa4fd88e0fa2593da940c6ccf9b925cb"
  },
  {
    "url": "ypsx/pic/about/谊品发展历程1.png",
    "revision": "395eb51c1a24d411c2e0596a7c913491"
  },
  {
    "url": "ypsx/pic/about/谊品发展历程2.png",
    "revision": "c28f460af867912d41ebd341077d79ed"
  },
  {
    "url": "ypsx/pic/about/谊品发展历程3.jpg",
    "revision": "fdaa205ce8e2348b2e87115e924ea865"
  },
  {
    "url": "ypsx/pic/about/门头1代.jpeg",
    "revision": "f8052ec6fdfb0ab99eda464fcb7e18f1"
  },
  {
    "url": "ypsx/pic/about/门头2代.jpeg",
    "revision": "de4ea02055c770262d714026888c9eaf"
  },
  {
    "url": "ypsx/pic/about/门头3代.jpeg",
    "revision": "a0480213978d294deda5cf38c30c70cd"
  },
  {
    "url": "ypsx/pic/about/门头4代.jpeg",
    "revision": "15dda33fb1d8777e7f571a63d4009dec"
  },
  {
    "url": "ypsx/pic/about/门店1.jpeg",
    "revision": "fe750bb0fbfdeece65d81d800a49053a"
  },
  {
    "url": "ypsx/pic/about/门店2.jpeg",
    "revision": "4f21887fc2989ec0f8fab0cf63fe44d0"
  },
  {
    "url": "ypsx/pic/about/门店3.jpeg",
    "revision": "221c7373e9e84b2d6665cc1269f138a0"
  },
  {
    "url": "ypsx/pic/about/门店4.jpeg",
    "revision": "fbc943a0347a3c38e97e2da66c5ac632"
  },
  {
    "url": "ypsx/pic/about/问题.jpg",
    "revision": "a612a07318056897370978d37cd4dd52"
  },
  {
    "url": "ypsx/pic/common/保鲜手册1.jpeg",
    "revision": "9cbef074f18e7f5cbc9090f4721d1c6d"
  },
  {
    "url": "ypsx/pic/common/保鲜手册2.jpeg",
    "revision": "33038e84f5e06d8c385d573ac53b7ed1"
  },
  {
    "url": "ypsx/pic/common/保鲜手册3.jpeg",
    "revision": "c753eb70cfdf65a0e9bbed121ca98ba9"
  },
  {
    "url": "ypsx/pic/common/保鲜手册4.jpeg",
    "revision": "af3cd81033d5bf2e3424e95ffa3f40bb"
  },
  {
    "url": "ypsx/pic/common/保鲜手册5.jpeg",
    "revision": "6e1f9d1c23f42cef394dc5374ee1777a"
  },
  {
    "url": "ypsx/pic/common/保鲜手册6.jpeg",
    "revision": "4b183d55cf87152fb45cf2acb612c078"
  },
  {
    "url": "ypsx/pic/common/其他家人上班时间.jpeg",
    "revision": "28cbaab8b56ef3e55e477c4d25df0fed"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-参考_01.png",
    "revision": "a9461100a8d51f8778917fcf0ad7fe0d"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-参考_02.png",
    "revision": "25fb3f340c4d59491360609bb4a5e192"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-参考_03.png",
    "revision": "ad9edf60c9fac870e212a145b7ff9884"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-参考_04.png",
    "revision": "38de26f876b58c595f01426484486837"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-参考_05.png",
    "revision": "aa4c7d9d593ea92fc71dba07258452f4"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-新版_01.png",
    "revision": "f2cdd6a91f1c3f8fb1ebcff1a71924b1"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-新版_02.png",
    "revision": "3a5997f16dd5548a3b78fa0302b52916"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-新版_03.png",
    "revision": "aecde742cca9e4c6390575594572afef"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-新版_04.png",
    "revision": "2eda5b5f3bd2c6b523284c305f47c5b8"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-旧版_01.png",
    "revision": "85535674b84e99737c745e86748ba1e4"
  },
  {
    "url": "ypsx/pic/common/夜班店长工作流程-旧版_02.png",
    "revision": "a1bad3dfd082915644f93937fbe80ad5"
  },
  {
    "url": "ypsx/pic/common/收银打印机.jpeg",
    "revision": "8f0df657f9f992e3652a61e393380f7a"
  },
  {
    "url": "ypsx/pic/common/收银支付错误1.jpeg",
    "revision": "74e6aa9cf500a30ae7741a09174846a1"
  },
  {
    "url": "ypsx/pic/common/收银支付错误2.jpeg",
    "revision": "1ff247ff983605d0ad8da70e086b86c0"
  },
  {
    "url": "ypsx/pic/common/收银机展示.jpeg",
    "revision": "5534e798b63b61880dda44b8c3f4e001"
  },
  {
    "url": "ypsx/pic/common/收银机授权.jpeg",
    "revision": "6b9802db980da5104def96055b7e5170"
  },
  {
    "url": "ypsx/pic/common/收银机支付失败1.jpeg",
    "revision": "aaa2ee7a28b66ab3afe4be4992627e61"
  },
  {
    "url": "ypsx/pic/common/收银机支付失败2.jpeg",
    "revision": "54fd55c390c8b32d978630816871b2cd"
  },
  {
    "url": "ypsx/pic/common/收银机登录.jpeg",
    "revision": "be4f5477b6711653f99223dae024ecf8"
  },
  {
    "url": "ypsx/pic/common/收银机缴款.jpeg",
    "revision": "5c6c925e62488abaad4036a66c5b0fd2"
  },
  {
    "url": "ypsx/pic/common/收银机解卦.jpeg",
    "revision": "a3fdfee8d6780dddb5cd97fff9078e24"
  },
  {
    "url": "ypsx/pic/common/收银机超时锁屏.jpeg",
    "revision": "0f58de31cab00fc3d7f8d7a73fd1ffc4"
  },
  {
    "url": "ypsx/pic/common/收银机重打小票.jpeg",
    "revision": "16af80ac0c9b72b8fee3ffbb80150235"
  },
  {
    "url": "ypsx/pic/common/收银机首页.jpeg",
    "revision": "6819ffcba9f85aa1bc0a99131a826fa9"
  },
  {
    "url": "ypsx/pic/common/收银记账.jpeg",
    "revision": "412d515bd90754c79891bf4fb9ab2bf7"
  },
  {
    "url": "ypsx/pic/common/教程回收交接单.jpeg",
    "revision": "fd29c289fa9277a9d9ca781c0eb1e652"
  },
  {
    "url": "ypsx/pic/common/教程干货鸡蛋到货.jpeg",
    "revision": "fb3f53fbb8f3a78d67fc8edb38537f57"
  },
  {
    "url": "ypsx/pic/common/教程干货鸡蛋收货单.jpeg",
    "revision": "ad2981d9f4c365d3589c0cca1846d995"
  },
  {
    "url": "ypsx/pic/common/教程快消牛奶收货单.jpeg",
    "revision": "13fd90f9b34e592701949a061cbb1aed"
  },
  {
    "url": "ypsx/pic/common/教程快消牛奶收货单1.jpeg",
    "revision": "b66d667a098ceeef2631bb8fd9e06597"
  },
  {
    "url": "ypsx/pic/common/教程快消馒头收货单.jpeg",
    "revision": "d40f494c925eb62adbc04fe4249d47bf"
  },
  {
    "url": "ypsx/pic/common/教程牛奶柜.jpeg",
    "revision": "d426c4498da574b20f948f69c5afdf3a"
  },
  {
    "url": "ypsx/pic/common/教程西瓜到货.jpeg",
    "revision": "1d6bb65629185139379544b626218d02"
  },
  {
    "url": "ypsx/pic/common/教程西瓜到货群内通知.jpeg",
    "revision": "6d2ecf25b29c033d954ecbbed08be098"
  },
  {
    "url": "ypsx/pic/common/示例新的接货流程.jpeg",
    "revision": "dd42f04965019d2c7ff789db5cf63976"
  },
  {
    "url": "ypsx/pic/common/示例新的水产池.jpeg",
    "revision": "e3b0808e5d1d3f6e6f9eec12aa12d399"
  },
  {
    "url": "ypsx/pic/common/示例新的盐度计.jpeg",
    "revision": "fc145dfde1aa02e9f9647fadbd1a3923"
  },
  {
    "url": "ypsx/pic/common/示例旧水产海鲜池.jpeg",
    "revision": "b2a55528ac2850545fe6f130641e6e71"
  },
  {
    "url": "ypsx/pic/common/示例旧的盐度计.jpeg",
    "revision": "93400374a9b75ed40d8e96995833d2e0"
  },
  {
    "url": "ypsx/pic/common/示例水产养殖温度盐度表.jpeg",
    "revision": "a95c9d39a2d03cbed453779923217ef6"
  },
  {
    "url": "ypsx/pic/common/示例水产报损.jpeg",
    "revision": "7b8d96e7c4bdcc73460273ab21a243d9"
  },
  {
    "url": "ypsx/pic/common/示例水产收货单1.jpeg",
    "revision": "299844e117a94cad91fbff176a748e67"
  },
  {
    "url": "ypsx/pic/common/示例水产收货单2.jpeg",
    "revision": "920119ed3b8fb73ce7f9ab5d361fc039"
  },
  {
    "url": "ypsx/pic/common/示例水产收货单最新形式1.jpeg",
    "revision": "b20b87b3678c2ac4c45f44e92987498d"
  },
  {
    "url": "ypsx/pic/common/示例水产收货单最新形式2.jpeg",
    "revision": "6c7dd8da19b144377101686893c81ba5"
  },
  {
    "url": "ypsx/pic/common/示例水产运输温度盐度表.jpeg",
    "revision": "c307f8f16cb09c41e7b45bb405b57fa8"
  },
  {
    "url": "ypsx/pic/common/示例温度计.jpeg",
    "revision": "ee3a4cd2e97597794044ac01a791ab6c"
  },
  {
    "url": "ypsx/pic/common/示例温度计1.jpeg",
    "revision": "2600a38d23a965f9df4b5c625dc9fd86"
  },
  {
    "url": "ypsx/pic/common/示例猪肉品质检验合格证.jpeg",
    "revision": "3e5eaad89ed52a86712d9e8ea5eed176"
  },
  {
    "url": "ypsx/pic/common/示例肉加工报损.jpeg",
    "revision": "b8eecb7cf541b6f6da9387fae321ef2e"
  },
  {
    "url": "ypsx/pic/common/示例肉豆制品收货单.jpeg",
    "revision": "9148d2927875b38a64d19059123c6018"
  },
  {
    "url": "ypsx/pic/common/示例蔬菜打包及陈列图片.jpeg",
    "revision": "ae1190403bf28da863c6b838d326c2a7"
  },
  {
    "url": "ypsx/pic/common/示例蔬菜报损.jpeg",
    "revision": "63040300ce83ea8f7ed038fdac3428c8"
  },
  {
    "url": "ypsx/pic/common/示例蔬菜收货单.jpeg",
    "revision": "87f8c2d76f25bc1ec7998912b86aede3"
  },
  {
    "url": "ypsx/pic/common/示例蔬菜收货单标记.jpeg",
    "revision": "2cf1dad95530ec84722f414c9860346e"
  },
  {
    "url": "ypsx/pic/common/示例蔬菜收货单标记带数量.jpeg",
    "revision": "02734929674ed44fcf611ca2e56d7888"
  },
  {
    "url": "ypsx/pic/common/示例蔬菜收货单标记带重量.jpeg",
    "revision": "b624952fea4de87f434c48ad4640af76"
  },
  {
    "url": "ypsx/pic/common/示例蔬菜称重.jpeg",
    "revision": "37dda7834e57625d97e1306d395a5754"
  },
  {
    "url": "ypsx/pic/common/示例豆制品展示.jpeg",
    "revision": "c3cf21dd234bb5023f1a080b0c6b1430"
  },
  {
    "url": "ypsx/pic/common/纸壳水果框收据.jpeg",
    "revision": "629da01d9baa5d3e7d322750d7691804"
  },
  {
    "url": "ypsx/pic/common/蔬菜异常单.jpeg",
    "revision": "8716c77a4057429d5c2ccd15bc5cabeb"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_00.png",
    "revision": "354a257c631d3bf9f4e840c1c4c38d85"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_01.png",
    "revision": "0cd6e30b131521ddc4c1b9e9cfe947aa"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_02.png",
    "revision": "db18f479e4b50c1f8d822bcdbeee1665"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_03.png",
    "revision": "42b32fde8be3721263ce0353e21250f7"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_04.png",
    "revision": "91391e981cb45eef6899f2cc7570c445"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_05.png",
    "revision": "e2b0a5833b6eb29542907c2e1ae5c753"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_06.png",
    "revision": "c0b19f6f68e6ba9ee83a3770dd4953e5"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_07.png",
    "revision": "24a26194e83cb27d96a9e60244791b91"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_08.png",
    "revision": "88c158979c8b08216114dd9057e29c4e"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_09.png",
    "revision": "b845cf12b5a5db41478215b273a026c3"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_10.png",
    "revision": "5f16a0cc872d3cfeb4c3280c30576b6e"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_11.png",
    "revision": "a640a3fbda4e3e4c10328d8d26b5c38d"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_12.png",
    "revision": "e7b2d4357e542cb4fb61b712d9373bd9"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_13.png",
    "revision": "4f4b7b1d313fcf0de2c8aca462272154"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_14.png",
    "revision": "9425ab392e1ce46306ed4b65425cc201"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_15.png",
    "revision": "da093de648f6a644690dc9f1c6b93072"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_16.png",
    "revision": "023e074ec96e5b1ab6dae6dc49f126cd"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_17.png",
    "revision": "d5b541deca6f9c8b6dae61f1378e55a1"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_18.png",
    "revision": "bc1454abfc1ba32b06ff5b8ba61f0734"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_19.png",
    "revision": "1ba7cde1511f064073710df99e35fcfe"
  },
  {
    "url": "ypsx/pic/common/谊品生鲜冷柜使用注意事项_20.png",
    "revision": "5a064a5976ba431194a3b4736f61bc6b"
  },
  {
    "url": "ypsx/pic/common/软件反馈今日相机.jpeg",
    "revision": "41968235097ebf2efcdb1688b5aadc04"
  },
  {
    "url": "ypsx/pic/common/软件反馈水印时间打卡拍照.jpeg",
    "revision": "33d30f0508805323f295eaa8eb8b0884"
  },
  {
    "url": "ypsx/pic/common/软件反馈马克相机.jpeg",
    "revision": "ce32f5cd4c272af220e8601529c973fe"
  },
  {
    "url": "ypsx/pic/common/软件计数.jpeg",
    "revision": "7457eaedc26324874c5f1fbf9e1e0023"
  },
  {
    "url": "ypsx/pic/common/软件计数莴笋杆.jpeg",
    "revision": "4dfe4054943fde0d6adef7545121251a"
  },
  {
    "url": "ypsx/pic/equipment/价格牌.jpeg",
    "revision": "f1df3b33e71353a0518118c862cc9cf8"
  },
  {
    "url": "ypsx/pic/equipment/低温牛奶展示柜1.jpeg",
    "revision": "d426c4498da574b20f948f69c5afdf3a"
  },
  {
    "url": "ypsx/pic/equipment/低温牛奶展示柜2.jpeg",
    "revision": "19ba44476f988064c581a9815703f3fb"
  },
  {
    "url": "ypsx/pic/equipment/低温牛奶展示柜3.jpeg",
    "revision": "e9c535a6a9f87bde719a091e4ccccd9c"
  },
  {
    "url": "ypsx/pic/equipment/冻品展示柜.jpeg",
    "revision": "809b2c960334337925aafe3e6a7ccb75"
  },
  {
    "url": "ypsx/pic/equipment/冻品展示柜reset.jpeg",
    "revision": "824358e729b171d117123d4356ed76d6"
  },
  {
    "url": "ypsx/pic/equipment/冻品展示柜型号.jpeg",
    "revision": "62e931027ce4096d1b0908611f5df257"
  },
  {
    "url": "ypsx/pic/equipment/冻品展示柜挡板.jpeg",
    "revision": "3b0542581645464d91a06778833c9fa4"
  },
  {
    "url": "ypsx/pic/equipment/制冰机状态灯.jpeg",
    "revision": "b9e49c79f1888290c7d11a6a86f0b355"
  },
  {
    "url": "ypsx/pic/equipment/制冰机电箱.jpeg",
    "revision": "32f86da1d29023af907cb1b681cb7af6"
  },
  {
    "url": "ypsx/pic/equipment/制冰机设备.jpeg",
    "revision": "70624ad481444159dfb80317df30ed53"
  },
  {
    "url": "ypsx/pic/equipment/制冰机设备细节.jpeg",
    "revision": "7ee69f5216add8dfb6aa57f918fe37d7"
  },
  {
    "url": "ypsx/pic/equipment/制冰机过载内部plc状态1.jpeg",
    "revision": "1637b8c4582c74d4e03f7d5c2e730ff3"
  },
  {
    "url": "ypsx/pic/equipment/制冰机过载内部plc状态2.jpeg",
    "revision": "8e6a074d8d00eb980f84ea04e1e9c93c"
  },
  {
    "url": "ypsx/pic/equipment/制冰机过载状态码.jpeg",
    "revision": "ef8e3345c6ad129ad1a02a506c33425e"
  },
  {
    "url": "ypsx/pic/equipment/卧式冷冻柜1.jpeg",
    "revision": "cdbab2771061dc0dd1d586d672025d73"
  },
  {
    "url": "ypsx/pic/equipment/卧式冷冻柜2.jpeg",
    "revision": "644211afa5421d0bcaa8454a96afee1d"
  },
  {
    "url": "ypsx/pic/equipment/外机星星牌肉加工展示柜1.jpeg",
    "revision": "fbea36f1a97f8e9553bd5dd40f2343bf"
  },
  {
    "url": "ypsx/pic/equipment/外机星星牌肉加工展示柜2.jpeg",
    "revision": "3e5d92b99b8ba3efcc1ab24812c38706"
  },
  {
    "url": "ypsx/pic/equipment/外机星星牌肉加工展示柜拆了百叶.jpeg",
    "revision": "6b6243d5924493d26815d3881627f23b"
  },
  {
    "url": "ypsx/pic/equipment/外机海鲜池.jpeg",
    "revision": "76626c9248a09640a5fca2032009bb37"
  },
  {
    "url": "ypsx/pic/equipment/外机空调.jpeg",
    "revision": "5aa906fcc2cbce8c2fc27a4f1a418ea8"
  },
  {
    "url": "ypsx/pic/equipment/拍照反馈相机1.jpeg",
    "revision": "cf28201396e9700e1236519c3a1ae543"
  },
  {
    "url": "ypsx/pic/equipment/拍照反馈相机2.jpeg",
    "revision": "cdc52c178d4915f04173a145344aac1f"
  },
  {
    "url": "ypsx/pic/equipment/拍照反馈相机3.jpeg",
    "revision": "43fbf73a73939ee88d3986ab7642920d"
  },
  {
    "url": "ypsx/pic/equipment/教程外机设备清洗.jpeg",
    "revision": "392de5b115a7885359519407919c4c7f"
  },
  {
    "url": "ypsx/pic/equipment/星星牌肉加工展示柜.jpeg",
    "revision": "12cd4df5236ecf9b04d1e2fd824e49ed"
  },
  {
    "url": "ypsx/pic/equipment/条形码电子秤去皮.jpeg",
    "revision": "269ed32e2337bb994766521c666a4549"
  },
  {
    "url": "ypsx/pic/equipment/条形码电子秤按钮.jpeg",
    "revision": "d82f8069b69a7745e0c4ef60a3975ce8"
  },
  {
    "url": "ypsx/pic/equipment/电子台秤.jpeg",
    "revision": "ef163f63398ef195af9258c4ad65ca8d"
  },
  {
    "url": "ypsx/pic/equipment/电子台秤dc充电器.jpeg",
    "revision": "b99bfe1cfab7558d0aec57b6feba41bd"
  },
  {
    "url": "ypsx/pic/equipment/电子台秤充电.jpeg",
    "revision": "ab94d75f7eb419632a573322d5e26705"
  },
  {
    "url": "ypsx/pic/equipment/电子台秤电量查看.jpeg",
    "revision": "14fc299ac4d72cadf0ebaea385a901e5"
  },
  {
    "url": "ypsx/pic/equipment/电脑做单.jpeg",
    "revision": "6ba167fbe860be701a64a1eab90cedbd"
  },
  {
    "url": "ypsx/pic/equipment/电闸柜.jpeg",
    "revision": "3044adb4d4395d63a2ef96644fecf614"
  },
  {
    "url": "ypsx/pic/equipment/电闸柜短路.jpeg",
    "revision": "12a81fbe6d421383b2b581437921fda1"
  },
  {
    "url": "ypsx/pic/equipment/监控登录.jpeg",
    "revision": "969279b8820d8fae47f8730b556c5097"
  },
  {
    "url": "ypsx/pic/equipment/监控菜单栏右.jpeg",
    "revision": "93166cb46ecb8af81f7f7be511a7535f"
  },
  {
    "url": "ypsx/pic/equipment/肉加工立式冰柜.jpeg",
    "revision": "2a1f2bd624ba49ba626ee415bcc155fd"
  },
  {
    "url": "ypsx/pic/equipment/路由器h3c无线.jpeg",
    "revision": "95497b537554ca9bbc8c8a6ba6dc9ccb"
  },
  {
    "url": "ypsx/pic/equipment/路由器h3c路由.jpeg",
    "revision": "f7cceab8befbde24abc809ac87964ea8"
  },
  {
    "url": "ypsx/pic/equipment/路由器光猫密码.jpeg",
    "revision": "66b5dcc29c4f010212c2f4656b7ccfbc"
  },
  {
    "url": "ypsx/pic/equipment/路由器光猫状态指示灯.jpeg",
    "revision": "94fb47f7da730d9e69d1ec9b5e6795de"
  },
  {
    "url": "ypsx/pic/equipment/路由器光猫账号.jpeg",
    "revision": "ae1aaddc2a4c128b6f6565005d979476"
  },
  {
    "url": "ypsx/pic/logo/404_1.jpeg",
    "revision": "c1a2f6c613d5489750b40934dbe006fd"
  },
  {
    "url": "ypsx/pic/logo/404_2.jpeg",
    "revision": "af1255ffc57603e7dde90a62ea4d7f52"
  },
  {
    "url": "ypsx/pic/logo/404_3.jpeg",
    "revision": "8ea11df416f4413d41cc1befd030b663"
  },
  {
    "url": "ypsx/pic/logo/coverpage.jpg",
    "revision": "7f7232f1bb23f492972e6e0c9ac0cab1"
  },
  {
    "url": "ypsx/pic/logo/loading.gif",
    "revision": "c502cd01c910b4f53d86603d6bd078ff"
  },
  {
    "url": "ypsx/pic/logo/logo-github.png",
    "revision": "106dc7ae59d63956a274ef63cec79123"
  },
  {
    "url": "ypsx/pic/logo/logo.png",
    "revision": "1fbbd1175ec2f3d13678dfce571d5c47"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo1.png",
    "revision": "28c62b9b0b8bc913bc2b091bff52e415"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo2.png",
    "revision": "4ff5b7d3ed727d330fcdda17165de906"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo3.png",
    "revision": "3177cca83f8a8b502a49d41c3eb89b2f"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo4.png",
    "revision": "561e9d0af96ca7983bf3d721fc72ed39"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo5.png",
    "revision": "6bdb8361db95808e6d8d196d37d8cbcc"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo6.png",
    "revision": "e9e2fb940b6cb3c295d235d183688c0a"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo7.png",
    "revision": "0ee8b38f23f6c9ada56ee38679a62bce"
  },
  {
    "url": "ypsx/pic/logo/upyun_logos/又拍云_logo8.svg",
    "revision": "2698685745a340122393f60ca388d655"
  },
  {
    "url": "ypsx/pic/logo/仅供参考.jpeg",
    "revision": "e8a6058345cfd26e5b69bfaf9092117e"
  },
  {
    "url": "ypsx/pic/logo/视频封面0.png",
    "revision": "f5efa44308e6a78416ac94c044727d50"
  },
  {
    "url": "ypsx/pic/logo/视频封面1.png",
    "revision": "1bc723901d11364aab080a59178486ed"
  },
  {
    "url": "ypsx/pic/logo/视频封面2.png",
    "revision": "ae5c5128b5956178ebddded61e5f3d6c"
  },
  {
    "url": "ypsx/pic/logo/视频封面3.png",
    "revision": "1fc6d4fa834ddc9ada7e8a23d2b7c53d"
  },
  {
    "url": "ypsx/pic/logo/视频封面4.png",
    "revision": "6d6dfc31df5c8cdaed7a9e5d3630e040"
  },
  {
    "url": "ypsx/pic/logo/视频封面5.png",
    "revision": "abc5007d9c423a3670d938eee8fe7dd5"
  },
  {
    "url": "ypsx/pic/logo/视频封面6.png",
    "revision": "3fbefde67cb53fdca8dfbf592626be3e"
  },
  {
    "url": "ypsx/pic/tmp/logo1.jpg",
    "revision": "0fdaa3f36ca96c01b9c9ee3182c01313"
  },
  {
    "url": "ypsx/pic/tmp/logo2.png",
    "revision": "a1242da5f962a4d9e71f910049779c40"
  },
  {
    "url": "ypsx/pic/tmp/工具存放.jpeg",
    "revision": "a6fcf25cf7dd6cac31b89f5523aa4b8d"
  },
  {
    "url": "ypsx/pic/tmp/开会.jpeg",
    "revision": "b6c5abbb3c1cee049a536ce7f3cdb4c8"
  },
  {
    "url": "ypsx/pic/tmp/打印机.jpeg",
    "revision": "119c4340c00b26b426e4f327b05b0685"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
