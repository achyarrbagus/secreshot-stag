if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const n=e=>i(e,c),o={module:{uri:c},exports:r,require:n};s[c]=Promise.all(a.map((e=>o[e]||n(e)))).then((e=>(t(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5a8750c4b28aeec3ad1e4b8ef10e6910"},{url:"/_next/static/99T6mfrLet6WWw5zpXhec/_buildManifest.js",revision:"a409ff3e2b346b814ab305a463cd5844"},{url:"/_next/static/99T6mfrLet6WWw5zpXhec/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1088-35847ea7bb0edf35.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/1252-7fcf6191ee95021d.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/1396-fb3a07fe6616e273.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/163-bf91e9a86c991304.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/1690-b9395b6c0e0f1281.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/2170a4aa-de11913c1510b074.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/2173-4560d73b20822048.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/2853-3786acd9f7273edf.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/3026-55fe6fbe0fe3c013.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/3046-b65ab103eff783a7.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/41ade5dc-ff4016487bfc7fed.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/4532-bbacaf6f53e3a3ce.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/5691-f1e0bfcb34a5a14f.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/596-017a11288977286e.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/6230-7b96d26d099dbd91.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/6233.096cbf7bf575574a.js",revision:"096cbf7bf575574a"},{url:"/_next/static/chunks/6543-15361c9639ab312b.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/66ec4792-04291abc5ecfa4da.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/6769-7e231adc220dc63d.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/7558-2d150056fa3b6e60.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/7834-ee3f623a583fd20c.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/8012d7e2.1781894935929594.js",revision:"1781894935929594"},{url:"/_next/static/chunks/829-630c20329a1f291f.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/8508-ccb67c34e4bf3ad5.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/8e1d74a4-1958d5bad3b238dd.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/904-fead65dbed603aa0.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/9730-e12e5e420851d2d1.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/alternative-telemedicine/page-3449bfcc25576cce.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/article/%5BarticleId%5D/page-d8d1b1ec608dd43a.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/article/page-8a46f4cd2177be9b.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/doctor-home-visit/page-8e4cc09653427505.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/holistic-alternative/page-c589779b51ba062f.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/home-nursing/page-0b475eeb118cde98.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/inhome-therapy/page-8e977a4f363c486d.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-026da0ea36a414fa.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-9ab15fe97809e74b.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/%5Blocale%5D/remote-telemedicine/page-8a3cdc192b51af6e.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/booking-list/page-ddcc54c91274c11b.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/create-article-v2/page-a96fbe332acf7e45.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/create-article/page-9d1175caa1931352.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/create-cs/page-a87865310d5716b6.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/customer-service/page-db9dbaf447c9bc6b.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/dashboard-v2/page-0bf66a8655b8e45f.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/dashboard/page-b687ef0367bede45.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/kur-bni/page-d1858b6bf8537705.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/page-2daee52691549f2a.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/update-article-v2/page-a3047ef75cc8d2e7.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/update-article/page-116a5310fd9288b2.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/admin/update-cs/page-3e814856286c8552.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/cms/dashboard/article/page-d19d1d14ee277db9.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/cms/dashboard/page-20021df95bdd644c.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/cms/page-56e1e97b57fce3b0.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/form-perklin-bni-sby/layout-ed7e33f62bab872b.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/form-perklin-bni-sby/page-b2cb99afa25332f4.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/layout-241325db488cfe3e.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/page-d8ed0ef15d260a93.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/perklin-bni-sby/layout-bb0a1f45b3c65851.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/perklin-bni-sby/page-233e391df57dfb1b.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/success-register/page-32e5f9d5e697e827.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/app/test/page-c626df07d895f458.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/fd9d1056-6a7363e13f5a97e6.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/main-523b842a245a1f57.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/main-app-59b27b465110c7aa.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/pages/_app-8af45f6c5c3cbc8e.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/pages/_error-6aec2ce618e2a362.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-6e0351d537423db0.js",revision:"99T6mfrLet6WWw5zpXhec"},{url:"/_next/static/css/26f3781bb7a40d4c.css",revision:"26f3781bb7a40d4c"},{url:"/_next/static/css/328bac8628d693ea.css",revision:"328bac8628d693ea"},{url:"/_next/static/css/698889fc4fd504e9.css",revision:"698889fc4fd504e9"},{url:"/_next/static/css/8b54669db085020c.css",revision:"8b54669db085020c"},{url:"/_next/static/media/banner-homepage.cda63902.webp",revision:"cda63902"},{url:"/_next/static/media/bg-article.f868ecf6.png",revision:"f868ecf6"},{url:"/_next/static/media/bg-why-mobile.f9a03b98.webp",revision:"f9a03b98"},{url:"/_next/static/media/bg-why.f9a03b98.webp",revision:"f9a03b98"},{url:"/_next/static/media/csehat.165e5a61.ttf",revision:"165e5a61"},{url:"/_next/static/media/csehat.25f41797.svg",revision:"25f41797"},{url:"/_next/static/media/csehat.7ade15b5.eot",revision:"7ade15b5"},{url:"/_next/static/media/csehat.a4db6d57.woff",revision:"a4db6d57"},{url:"/_next/static/media/csehat.dcc2f571.woff2",revision:"dcc2f571"},{url:"/_next/static/media/expand-arrow.c8109a29.png",revision:"c8109a29"},{url:"/assets/article/article.txt",revision:"2b193b19f7f3c58c4237f0f8da62b872"},{url:"/assets/article/json/article-id.json",revision:"f7bb454b54ec828f695d574c6ffc8fb6"},{url:"/assets/article/json/article.json",revision:"7d72917758f324ae5371ad119531826e"},{url:"/assets/bootstrap/css/bootstrap-grid.css",revision:"ab8f47968d622da73afaabb52b3c6b6e"},{url:"/assets/bootstrap/css/bootstrap-grid.css.map",revision:"c5b5f425bd72d50d20f870403ecf7037"},{url:"/assets/bootstrap/css/bootstrap-grid.min.css",revision:"aa43ec988014f5c6c59e18d741aa6600"},{url:"/assets/bootstrap/css/bootstrap-grid.min.css.map",revision:"d52d1f17b8c7303159937e117b8bc52d"},{url:"/assets/bootstrap/css/bootstrap-grid.rtl.css",revision:"a6b55ea8109697e9dc78eeb2ed7ea273"},{url:"/assets/bootstrap/css/bootstrap-grid.rtl.css.map",revision:"3adaa5cceabf342c082659cc7bd51e3d"},{url:"/assets/bootstrap/css/bootstrap-grid.rtl.min.css",revision:"17a2fbfb37fa7a292d662c369becd7aa"},{url:"/assets/bootstrap/css/bootstrap-grid.rtl.min.css.map",revision:"47ba6ca5f767d9f2ea2ff0c797f8865e"},{url:"/assets/bootstrap/css/bootstrap-reboot.css",revision:"14eb1a16ad3dc5dd875b6d5c7b18b2b1"},{url:"/assets/bootstrap/css/bootstrap-reboot.css.map",revision:"f097dbf94cdea9f11046dd97c526d046"},{url:"/assets/bootstrap/css/bootstrap-reboot.min.css",revision:"09ed247acaf7254cde969c471f0f95b6"},{url:"/assets/bootstrap/css/bootstrap-reboot.min.css.map",revision:"744a50c642ffe974d676fd1f8e6778db"},{url:"/assets/bootstrap/css/bootstrap-reboot.rtl.css",revision:"6de406f373aa2b2e8019ae6e5ea2719d"},{url:"/assets/bootstrap/css/bootstrap-reboot.rtl.css.map",revision:"0d0d9349c401b84de52518ecf90a3f38"},{url:"/assets/bootstrap/css/bootstrap-reboot.rtl.min.css",revision:"26fba6517783c109918ff2c3567b2ca5"},{url:"/assets/bootstrap/css/bootstrap-reboot.rtl.min.css.map",revision:"e4af45c30a4f554483bf8f8b2cd33e23"},{url:"/assets/bootstrap/css/bootstrap-utilities.css",revision:"327a634d258f8848d46e6da5f343ac7f"},{url:"/assets/bootstrap/css/bootstrap-utilities.css.map",revision:"b9f6ae291c6c74b35125f93af7654ac6"},{url:"/assets/bootstrap/css/bootstrap-utilities.min.css",revision:"0c6eaff7f5980d2a56c4356b60b7cfdc"},{url:"/assets/bootstrap/css/bootstrap-utilities.min.css.map",revision:"65a9dc9548d16005fb0a3586c1993ed6"},{url:"/assets/bootstrap/css/bootstrap-utilities.rtl.css",revision:"223baca50fb9f913f2654598f63afb88"},{url:"/assets/bootstrap/css/bootstrap-utilities.rtl.css.map",revision:"4e8645072236476209121a2c6df77699"},{url:"/assets/bootstrap/css/bootstrap-utilities.rtl.min.css",revision:"c62a0be7a7c4f1e62b68649abcf55546"},{url:"/assets/bootstrap/css/bootstrap-utilities.rtl.min.css.map",revision:"177c34e8ca484d535442b7d07cbaf801"},{url:"/assets/bootstrap/css/bootstrap.css",revision:"8d8243cf3175d6e38d8dcd06afe2de9f"},{url:"/assets/bootstrap/css/bootstrap.css.map",revision:"8acd3942419907b180f8d5d0f0ffaff8"},{url:"/assets/bootstrap/css/bootstrap.min.css",revision:"27e2fabfbd0d4e3ad1cf18e56a9a24c8"},{url:"/assets/bootstrap/css/bootstrap.min.css.map",revision:"ef5ca9e28f780a079318afab2334d8eb"},{url:"/assets/bootstrap/css/bootstrap.rtl.css",revision:"417082535d9ac88e5937d6275d4b7d6a"},{url:"/assets/bootstrap/css/bootstrap.rtl.css.map",revision:"00da418dd98039130be1f0148b50a30d"},{url:"/assets/bootstrap/css/bootstrap.rtl.min.css",revision:"b1b655c6ceec6d64625671c56a28f0c2"},{url:"/assets/bootstrap/css/bootstrap.rtl.min.css.map",revision:"addea6c2235928ee7215033e7c7a5440"},{url:"/assets/bootstrap/js/bootstrap.bundle.js",revision:"5b478094892f64b4d2c0875f0eb996aa"},{url:"/assets/bootstrap/js/bootstrap.bundle.js.map",revision:"6a793680ea3dc88658686387afc6a249"},{url:"/assets/bootstrap/js/bootstrap.bundle.min.js",revision:"2b5f300c724ea5eecaef0743949cb919"},{url:"/assets/bootstrap/js/bootstrap.bundle.min.js.map",revision:"54c3c3bec763f429a29e55cce6a44015"},{url:"/assets/bootstrap/js/bootstrap.esm.js",revision:"5426f0437bb4db545a2f95d9f17a5343"},{url:"/assets/bootstrap/js/bootstrap.esm.js.map",revision:"6ef70296bc788bad2a046bc96f7edb2b"},{url:"/assets/bootstrap/js/bootstrap.esm.min.js",revision:"32cf2efd732b786024634791d9a9f5ea"},{url:"/assets/bootstrap/js/bootstrap.esm.min.js.map",revision:"057d30f1efe3798640409789ce2a107e"},{url:"/assets/bootstrap/js/bootstrap.js",revision:"c666eb096a9244a1035a8cf45192ece5"},{url:"/assets/bootstrap/js/bootstrap.js.map",revision:"97a94460d954a7410b6f037837ceef3b"},{url:"/assets/bootstrap/js/bootstrap.min.js",revision:"642ef8e3330df328db0a05566fb9936a"},{url:"/assets/bootstrap/js/bootstrap.min.js.map",revision:"dead0533cdd433f4ed715822efdce474"},{url:"/assets/css/pbs/style.css",revision:"df581e4f220e08d340092be439e3a592"},{url:"/assets/css/style.css",revision:"b89cd25bc860078b4b3921e419c18ea8"},{url:"/assets/css/swiper-bundle.min.css",revision:"674939aeed14287598d9d17a0e4dbd22"},{url:"/assets/fontello/config.json",revision:"8b937c96f52ee2e342d5839ba09207eb"},{url:"/assets/fontello/css/animation.css",revision:"e7da1c1d837b0be2240c2c23bf0c4475"},{url:"/assets/fontello/css/csehat-codes.css",revision:"5baada3c3596a5ac546db2ad806ff242"},{url:"/assets/fontello/css/csehat-embedded.css",revision:"15fe06cb9c577bc61f7c5d592f1089fd"},{url:"/assets/fontello/css/csehat-ie7-codes.css",revision:"baf0df8fa56893b4a79ef3eea4dc84db"},{url:"/assets/fontello/css/csehat-ie7.css",revision:"24c42024ec85306da769999e295fe8ef"},{url:"/assets/fontello/css/csehat.css",revision:"9ef6c9cf6cdea01ee773f0690d2930ae"},{url:"/assets/fontello/font/csehat.eot",revision:"11a09c561b22f621e25418b7f8cd688f"},{url:"/assets/fontello/font/csehat.svg",revision:"4b71a78ed07791837eed522f2bc312d4"},{url:"/assets/fontello/font/csehat.ttf",revision:"5f90e8ac8dd0764c74018e01b0b057f9"},{url:"/assets/fontello/font/csehat.woff",revision:"34531bc3eba84a951cf99d35b6fd61ca"},{url:"/assets/fontello/font/csehat.woff2",revision:"b72e423b8fe5a9e14c1d471837e867ca"},{url:"/assets/img/Desktop/Alternative Telemedicine_Desktop.webp",revision:"a0c80f5e2035ea38c84274a9f77e43d7"},{url:"/assets/img/Desktop/Doctor Home Visit_Desktop.webp",revision:"79aa852ced9b953372b1c497c42daf65"},{url:"/assets/img/Desktop/Holistic Alternative Therapies_Desktop.webp",revision:"ed9d059f19c5f0dbb0f161fd40db7155"},{url:"/assets/img/Desktop/Home Nursing and Woundcare_Desktop.webp",revision:"1ecee2b4b126c41d419769694637ae53"},{url:"/assets/img/Desktop/Homepage 1_Desktop.webp",revision:"be1e39f5a5efded0b9e4d02e771d527f"},{url:"/assets/img/Desktop/In-Home IV Therapy & more_Desktop.webp",revision:"df34594df3165bde1d6a9471a93067a8"},{url:"/assets/img/Desktop/Remote Telemedicine_Desktop.webp",revision:"82a04b75e1bc321b50dbc9ad30a13434"},{url:"/assets/img/Desktop/homepage 2.webp",revision:"43f4f856f6b5aed83f188aa753d88c75"},{url:"/assets/img/Diploma.png",revision:"afbc84d42cfb21590e0bcd74ae8a6d02"},{url:"/assets/img/Globe Network.png",revision:"039e7b56ceb5125841c635654df077a4"},{url:"/assets/img/IDI CAB BEKASI.png",revision:"7c625427b6258950f128988dfe3c46f9"},{url:"/assets/img/IDI CAB JAKTIM.png",revision:"0bd4eddbe51b8ec7b9d30bf6632f112b"},{url:"/assets/img/IDI_1-removebg-new.png",revision:"024e4a2b679a729121beea3500100bd3"},{url:"/assets/img/IDI_BEKASI.png",revision:"53a22ad70370b3088dd2c234baff1d82"},{url:"/assets/img/IDI_JAKTIM.png",revision:"aafd487a6ac01581d793cf74c7c69079"},{url:"/assets/img/Kemenkes.png",revision:"f5c035137056ad5f6b91bbb9f07444cb"},{url:"/assets/img/Last 24 Hours.png",revision:"ada8d504bf3719e9028d860e2de9c7bb"},{url:"/assets/img/Logo_Atensi-removebg-preview.png",revision:"dddc4abc61a1750da85888ff27f8a917"},{url:"/assets/img/Mobile/Alternative Telemedicine_Mobile.webp",revision:"aac66e26ccf7b6696c786b29646ec1fa"},{url:"/assets/img/Mobile/Doctor Home Visit_Mobile.webp",revision:"84d97c95e09c51e48d3b86eb54dbf223"},{url:"/assets/img/Mobile/Holistic Alternative Therapies_Mobile.webp",revision:"a655efe5b87b74355c1b726da31c92fe"},{url:"/assets/img/Mobile/Home Nursing and Woundcare_Mobile.webp",revision:"2891f0bdb6f19c46e84a19639b63944c"},{url:"/assets/img/Mobile/Homepage 1_Mobile.webp",revision:"09ded32dc5609d5c7855c7c78a505a80"},{url:"/assets/img/Mobile/In-Home IV Therapy & more_Mobile.webp",revision:"4806e004518aa272f4edf7f39c2b4eb3"},{url:"/assets/img/Mobile/Remote Telemedicine_Mobile.webp",revision:"f8e9c15dfa9ddbb8d0b4e9cfe8cfb822"},{url:"/assets/img/Mobile/homepage 2.webp",revision:"43f4f856f6b5aed83f188aa753d88c75"},{url:"/assets/img/Protect.png",revision:"e0d916c65f3c18e96f43509ba681843b"},{url:"/assets/img/Sub Image/img-home-nursing-sub01.webp",revision:"0e875e6b098963754841fe7a8c797122"},{url:"/assets/img/Sub Image/img-home-nursing-sub02.webp",revision:"d4c7cabdee2443a4aff52abdb281dade"},{url:"/assets/img/Sub Image/img-sub-alternative01.webp",revision:"e30d111e16b1ebd58a84d1b70e14a1ab"},{url:"/assets/img/Sub Image/img-sub-alternative02.webp",revision:"2696dec4b640054a419808c62d363226"},{url:"/assets/img/Sub Image/img-sub-alternative03.webp",revision:"72c0576dae7f8e44902f8e0421883301"},{url:"/assets/img/Sub Image/img-sub-holistic01.webp",revision:"565d5df9c8f225d68f7aa4fab02bf111"},{url:"/assets/img/Sub Image/img-sub-holistic02.webp",revision:"a38454233866ee4ed83a5e354a98bc79"},{url:"/assets/img/Sub Image/img-sub-holistic03.webp",revision:"ff5601a92aeb3a94f4a85339e08fd04e"},{url:"/assets/img/Sub Image/img-sub-holistic04.webp",revision:"30e7044f5652e5ec011144e4704882bd"},{url:"/assets/img/Sub Image/img-sub-holistic05.webp",revision:"760d3bd67620c5c101459eb5550c1b49"},{url:"/assets/img/Sub Image/img-sub-holistic06.webp",revision:"35b61586d41436d0478ac7f0abd8537d"},{url:"/assets/img/Sub Image/img-sub-homeiv01.webp",revision:"e99949b25b1dee2e77ce8f25a9efdf75"},{url:"/assets/img/Sub Image/img-sub-homeiv02.webp",revision:"6355ae5260562bfc701bba1911718f6a"},{url:"/assets/img/Sub Image/img-sub-homeiv03.webp",revision:"e9afdf5d4df17206d12526330dd283db"},{url:"/assets/img/Sub Image/img-sub-homeiv04.webp",revision:"478ba547867ace0ef14714f0aa8de753"},{url:"/assets/img/Sub Image/img-sub-homeiv05.webp",revision:"fdbc6b0835d221cf0c67e1150cbba315"},{url:"/assets/img/Sub Image/img-sub-homeiv06.webp",revision:"c374d77db84f0b454488f2e665958f8a"},{url:"/assets/img/Sub Image/img-sub-homeiv07.webp",revision:"b5dc20bcb7c2c1a7ba73bfb0e3d994da"},{url:"/assets/img/Sub Image/img-sub-homeiv08.webp",revision:"b35ef520aff94d9946d78c8f3e1fd2eb"},{url:"/assets/img/Sub Image/img-sub-homeiv09.webp",revision:"21131c4413d3340f2f4b94a916e30175"},{url:"/assets/img/Sub Image/img-sub-homevisit01.webp",revision:"755787c39dbea2606e344e4a013be061"},{url:"/assets/img/Sub Image/img-sub-homevisit02.webp",revision:"3678e0378068f8caef6a2ea9610a8f0e"},{url:"/assets/img/Sub Image/img-sub-homevisit04.webp",revision:"f05449a72c1be435dff871f9c5128a35"},{url:"/assets/img/Sub Image/img-sub-remotetelemedicine01.webp",revision:"2880b579ec6ef144bfaea0c4c454b7b1"},{url:"/assets/img/Sub Image/img-sub-remotetelemedicine02.webp",revision:"b43058314a63dab2f852c4f3237daa4b"},{url:"/assets/img/Sub Image/img-sub-remotetelemedicine03.webp",revision:"5a78f72f25a8c63a3396edc2868c6fd9"},{url:"/assets/img/Sub Image/img-sub-remotetelemedicine04.webp",revision:"369da40bf2034ec35e20b22e2cbf251d"},{url:"/assets/img/alternative/img-sub-alternative01.png",revision:"d9e63d21d05bd9809490980ed41f44d3"},{url:"/assets/img/alternative/img-sub-alternative02.png",revision:"dda2063c4278907d263886b1d9c1e8da"},{url:"/assets/img/alternative/img-sub-alternative03.png",revision:"6b7d498202c8f87e8ebe0023d9dc402b"},{url:"/assets/img/article/apa-itu-stroke.jpg",revision:"e29db08f5fccff4dce70330dee143e28"},{url:"/assets/img/article/article01.jpg",revision:"607e7cf33b645dc509ae2016be1b73a1"},{url:"/assets/img/article/article02.jpg",revision:"6666ce7bf7fb1ec2407b3d694e4540f8"},{url:"/assets/img/article/article02New.jpg",revision:"7ed70851dd3468f97f7fa046e875a1a4"},{url:"/assets/img/article/article03-new.jpg",revision:"38907600f1cb25755689059f61ff6948"},{url:"/assets/img/article/article03.jpg",revision:"c6dc40b10fb515b1e609fd6e817bc1a6"},{url:"/assets/img/article/article04-new.jpg",revision:"4034035fe2b455e7ed43f1afec81d255"},{url:"/assets/img/article/article04.jpg",revision:"a5752e76ac1fddf0ad9d0665c0cf35db"},{url:"/assets/img/article/article05.jpg",revision:"f50aceb66e4a32304e01958dd17e5a37"},{url:"/assets/img/article/article06.jpg",revision:"50e7a42f6f1dcbf5b0372777d6ba9a1a"},{url:"/assets/img/article/dampak-buruk-hp-pada-anak-1.jpg",revision:"f05a1a2d6577fcda73dd375daad5fb7c"},{url:"/assets/img/banner-homepage-1.png",revision:"c2715a30b782dbdf7ce7f44a57d9c1b4"},{url:"/assets/img/banner-homepage.webp",revision:"be1e39f5a5efded0b9e4d02e771d527f"},{url:"/assets/img/bg-article.png",revision:"bbeb53728368560a57c0712977c71de2"},{url:"/assets/img/bg-home-diagnostic.png",revision:"03fab7977d54b04703c1d7cacfcc3509"},{url:"/assets/img/bg-home-nursing.png",revision:"46b22a113c8e21b8eea580e4de579c15"},{url:"/assets/img/bg-home-visit.png",revision:"7c67d75ff3526cb8ffea7c1d2cd09ef1"},{url:"/assets/img/bg-homeiv.png",revision:"40c4d6d3925f4d005a902fb2f7c1346f"},{url:"/assets/img/bg-remote.png",revision:"27c6aa19c078d5c015dfbf727a06ebbb"},{url:"/assets/img/bg-therapies.png",revision:"fac91fd4bfd0a57c82c418ebd783b19e"},{url:"/assets/img/bg-why-1.png",revision:"69f32388228cf4748c7a9cdfcf165724"},{url:"/assets/img/bg-why-mobile-1.png",revision:"47f19d0e2bbf6835acef659f11951141"},{url:"/assets/img/bg-why-mobile.webp",revision:"43f4f856f6b5aed83f188aa753d88c75"},{url:"/assets/img/bg-why.webp",revision:"43f4f856f6b5aed83f188aa753d88c75"},{url:"/assets/img/check-icon.svg",revision:"b4a2ed71590a072bcd970e8281022a62"},{url:"/assets/img/doctor/dr-ayu-a.png",revision:"8f07b2c89aad7f02783fc8aed416c28c"},{url:"/assets/img/doctor/dr-dewi-f.png",revision:"8cd83c199e975c7e830923cbdd45e5bc"},{url:"/assets/img/doctor/dr-dwi-s.png",revision:"76ccd927ac32e6367d7f447f1f09f2b7"},{url:"/assets/img/doctor/dr-ernita-r.png",revision:"7c83754ac348c0c698b2e6f460982c6e"},{url:"/assets/img/doctor/dr-irvan-r.png",revision:"969fdbd8ff5a335f0b9726930f6c9ae4"},{url:"/assets/img/doctor/dr-melchisedek-a.png",revision:"2399930346c3f55e1dad5056c96f5094"},{url:"/assets/img/doctor/nurse-andi.png",revision:"0f49ff8bd292034a9af04248cdde83d3"},{url:"/assets/img/doctor/nurse-dimas.png",revision:"d7b6d966bfa52aa8cb2f5f8332d688f5"},{url:"/assets/img/doctor/nurse-inyoman.png",revision:"7a2eaa664486a145c9eacd7e61dc1146"},{url:"/assets/img/doctor/nurse-irfan.png",revision:"ebc3c1eea393580d786b96d756d48128"},{url:"/assets/img/doctor/nurse-komang.png",revision:"533f826f7e761e96ee7bd2114a6cc38b"},{url:"/assets/img/doctor/nurse-loisa.png",revision:"250cbc2f0c0354c83cee0c56207985c0"},{url:"/assets/img/doctor/nurse-marsiani.png",revision:"77c9feea271b338921804e36b7ab83b8"},{url:"/assets/img/doctor/nurse-siti.png",revision:"76cc8a4a5a3a54acc0eaf19696744485"},{url:"/assets/img/doctor/nurse-syarah.png",revision:"3809b91ec3556c60610ac43fa82908f4"},{url:"/assets/img/expand-arrow.png",revision:"849ae4d6766057e3b88676f7eaf2665d"},{url:"/assets/img/favicon.svg",revision:"fb9159533bf3fcd1ad16586467ecab64"},{url:"/assets/img/flag/EN Flag_new.png",revision:"2b327d8813c5880ddbd0882441284f86"},{url:"/assets/img/flag/ID Flag_new.png",revision:"d8f06804ddca4eecbe7b01077d837745"},{url:"/assets/img/holistic/6.png",revision:"977851be23439ea8435d5a73be64cda3"},{url:"/assets/img/holistic/img-sub-holistic01.png",revision:"063bdcdbd0ff00911fd767270456b99e"},{url:"/assets/img/holistic/img-sub-holistic02.png",revision:"f22a6254b0c62b23a938a0839c98befd"},{url:"/assets/img/holistic/img-sub-holistic03.png",revision:"5f35a5a3beec633496b8a56b9211bf25"},{url:"/assets/img/holistic/img-sub-holistic04.png",revision:"c68d050d2163a111205168fcd61b5651"},{url:"/assets/img/holistic/img-sub-holistic05.png",revision:"99559a68afd77753387502c5031e40a0"},{url:"/assets/img/holistic/img-sub-holistic06-.png",revision:"977851be23439ea8435d5a73be64cda3"},{url:"/assets/img/holistic/img-sub-holistic06.png",revision:"2b1faf951340220982421cbccd9bb506"},{url:"/assets/img/home-nursing/img-home-nursing-sub01.png",revision:"39473a7d131e2e417d80ab8bd031246a"},{url:"/assets/img/home-nursing/img-home-nursing-sub02.png",revision:"6926056d00596ef6cfaa521a0dd9b72b"},{url:"/assets/img/homeiv/img-sub-homeiv01.png",revision:"292ec1f78efa462dc89670c8822da271"},{url:"/assets/img/homeiv/img-sub-homeiv02.png",revision:"281c25cff399da44c034117273c69e74"},{url:"/assets/img/homeiv/img-sub-homeiv03.png",revision:"038e23f7e042fe3a40004faed8f25b8d"},{url:"/assets/img/homeiv/img-sub-homeiv04.png",revision:"c8e797471ac826ab2b11e4e3f42fb347"},{url:"/assets/img/homeiv/img-sub-homeiv05.png",revision:"c5e47e56106c4304107bdd9d8f2c00e4"},{url:"/assets/img/homeiv/img-sub-homeiv06.png",revision:"85b440eabe7222e3b850ebd9faeccabb"},{url:"/assets/img/homeiv/img-sub-homeiv07.png",revision:"9deedf7754eb9a66569fab4cd7fba063"},{url:"/assets/img/homeiv/img-sub-homeiv08.png",revision:"b0bfab1480c05d0564140b41d7277eb6"},{url:"/assets/img/homeiv/img-sub-homeiv09.png",revision:"85b43e21484dd0834a4e06ba0902df7a"},{url:"/assets/img/homevisit/1.png",revision:"f0da4aebfb5bd9691721e208ce4f110a"},{url:"/assets/img/homevisit/2.png",revision:"e02ffc57e0c127d54c9f9181b331dd47"},{url:"/assets/img/homevisit/4.png",revision:"76f7c0fc7c955cf03c6fcf02c32cc9c9"},{url:"/assets/img/homevisit/img-sub-homevisit01-.png",revision:"f0da4aebfb5bd9691721e208ce4f110a"},{url:"/assets/img/homevisit/img-sub-homevisit01.png",revision:"155f77a3f6e6eb2fd4b93016fb9d736d"},{url:"/assets/img/homevisit/img-sub-homevisit02-.png",revision:"e02ffc57e0c127d54c9f9181b331dd47"},{url:"/assets/img/homevisit/img-sub-homevisit02.png",revision:"cdc97b116b81e7aa8a33074218b9b910"},{url:"/assets/img/homevisit/img-sub-homevisit03.png",revision:"a3dc36c2f9784f71940b7fb59b9c1346"},{url:"/assets/img/homevisit/img-sub-homevisit04-.png",revision:"76f7c0fc7c955cf03c6fcf02c32cc9c9"},{url:"/assets/img/homevisit/img-sub-homevisit04.png",revision:"5c971b8930fefa4df75217d60c67139e"},{url:"/assets/img/idi-removebg-preview.png",revision:"fa0a3d5e672b9c753dc94abb78d64484"},{url:"/assets/img/idi-removebg-preview_1.png",revision:"9ace21726fbd63523320481d79a2efcc"},{url:"/assets/img/img-Nursing.png",revision:"1410e756b7d2ecaf3df75ae380bf34a3"},{url:"/assets/img/img-article01.png",revision:"766adf7e5056bf477c0db425389fdcd2"},{url:"/assets/img/img-article02.png",revision:"f4aad748a0eb2195a7a5f74075df33e4"},{url:"/assets/img/img-diagnosticPage.png",revision:"47b17ec2f6a48f67085ef7c4495971e1"},{url:"/assets/img/img-homeVisit.png",revision:"73f60a915502b99f2440c2a56a0326ff"},{url:"/assets/img/img-homeiv.png",revision:"5da90cbb21e538f15a1daa51c868158d"},{url:"/assets/img/img-question.png",revision:"d24a515596311ad72dfeb6bc41c4d84a"},{url:"/assets/img/img-telemedicine.png",revision:"9f0afc469661bde718e95f6290b400fa"},{url:"/assets/img/img-therapis.png",revision:"32abdb44137a3a47e590f809364dd7bf"},{url:"/assets/img/img-why.png",revision:"5cea09c992a5dd336e6a4ed9f4473f70"},{url:"/assets/img/logo-atensi.png",revision:"9f6683fdfe884281bfa257a7d51bdbf8"},{url:"/assets/img/logo-atensi_new.png",revision:"6e51b239d11a4b342a0cc268d16ca70f"},{url:"/assets/img/logo-default-idi3.png",revision:"c33c8734d35d11555503666c79c77f60"},{url:"/assets/img/logo-white.png",revision:"87477f832d9386a10fac0ebf9d270dd0"},{url:"/assets/img/logo.png",revision:"dc048e51453c489c51a2d0cc7bc9db3d"},{url:"/assets/img/perklin-bni-sby/bg-home.png",revision:"467b12ef0b38756ed47d6ffdbf689683"},{url:"/assets/img/perklin-bni-sby/bg-thanks.png",revision:"81f2b33ffda466d396afcb73fc0d7e47"},{url:"/assets/img/perklin-bni-sby/icon-check.svg",revision:"6e20328a0d3d9e35b45d2989ebfe8fc7"},{url:"/assets/img/perklin-bni-sby/icon-regis.svg",revision:"eac86a546f01fbe52dcda80c13f1d6a7"},{url:"/assets/img/perklin-bni-sby/logo.png",revision:"cfaee5f89a16d2a440560eb013d263d6"},{url:"/assets/img/plus-vector.svg",revision:"e69fcc575914c867503d5a4c7c01cfde"},{url:"/assets/img/remote-telemedicine/img-sub-remotetelemedicine01.png",revision:"b430c26fa0ac0bf4ccf2383481b83412"},{url:"/assets/img/remote-telemedicine/img-sub-remotetelemedicine02.png",revision:"2d030d83c4c038ca8aaa72e7e8ef6632"},{url:"/assets/img/remote-telemedicine/img-sub-remotetelemedicine03.png",revision:"97011e4665c92ed166731eff6a9b8345"},{url:"/assets/img/remote-telemedicine/img-sub-remotetelemedicine04.png",revision:"771de6dfbf5eacdbdc5da1c34598bb61"},{url:"/assets/js/index.js",revision:"275c850b34f692410d58ab988c12efd4"},{url:"/assets/js/swiper-bundle.min.js",revision:"ff526da5a08def3cd118c56691d8ddff"},{url:"/assets/js/theme.js",revision:"4e80f7033e03fad40e97a1a0fa51fab7"},{url:"/assets/scss/_breakpoints.scss",revision:"71776ccdcd7b51a132e914a22a62ffe0"},{url:"/assets/scss/_buttons.scss",revision:"8d7d7f64b835237d9dfb65738a8c661d"},{url:"/assets/scss/_form.scss",revision:"2efa50ea514d6c6be3921e792cf0ffd3"},{url:"/assets/scss/_global.scss",revision:"8f179a7e28897a7cf921593ea8ad47b6"},{url:"/assets/scss/_mixins.scss",revision:"80e1959734066ea7562f1dea02356adb"},{url:"/assets/scss/_variables.scss",revision:"23c940d70f1195e1d2dfb20593618e88"},{url:"/assets/scss/style.scss",revision:"43a8e465a7a49584259fcb914fd10919"},{url:"/favicon.svg",revision:"fb9159533bf3fcd1ad16586467ecab64"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
