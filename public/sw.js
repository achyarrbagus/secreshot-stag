if (!self.define) {
  let s,
    e = {};
  const i = (i, a) => (
    (i = new URL(i + ".js", a).href),
    e[i] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          (s.src = i), (s.onload = e), document.head.appendChild(s);
        } else (s = i), importScripts(i), e();
      }).then(() => {
        let s = e[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (a, t) => {
    const c =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[c]) return;
    let r = {};
    const n = (s) => i(s, c),
      o = { module: { uri: c }, exports: r, require: n };
    e[c] = Promise.all(a.map((s) => o[s] || n(s))).then((s) => (t(...s), r));
  };
}
define(["./workbox-07a7b4f2"], function (s) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "e87d582c9b57b486a24938fdc525f322",
        },
        {
          url: "/_next/static/VKX3utuvMcu1mvRUDSUe2/_buildManifest.js",
          revision: "2b54d7db375d2b4c0e6af318090bebea",
        },
        {
          url: "/_next/static/VKX3utuvMcu1mvRUDSUe2/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/2071-332a8707810c932b.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/2170a4aa-4902f93f32b68649.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/3405-4901950537770b20.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/41ade5dc-7f141cde70350aa5.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/4662-816d86b830bdc149.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/4772-1feb6e0a549f5c9e.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/5378-a951b38cc1ae83a5.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/5525-036a72aaf855d086.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/5615.9aaffb761602b1ed.js",
          revision: "9aaffb761602b1ed",
        },
        {
          url: "/_next/static/chunks/6181-a97eba44daa7b568.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/7032-dbd3adb1df8a6d80.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/771-bf0d24e29cf81be8.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/7908-7d6a188ec2fde212.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/8012d7e2.d151d5993f72d1d5.js",
          revision: "d151d5993f72d1d5",
        },
        {
          url: "/_next/static/chunks/8016-8da343c9bf5cd076.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/8069-b0ae3b023f62fb34.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/8620-ee66e3e2aeb85688.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/8792-e7b9d23572ea645b.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/8831-3a0a614feef694ae.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/9081a741-c66c722e1eb1fc13.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/9190-e0a8bb2dc56140c4.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/93854f56-6de9f816aac87263.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/9542-0417c08cee596c16.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/_not-found-947d22a1a32272a0.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/admin/create-article/page-647dc00d2ffbcda7.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/admin/dashboard/page-340f6684d85a29a3.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/admin/kur-bni/page-c51e6e3789f09602.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/admin/page-5ddfa2248f61f320.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/admin/update-article/page-f34477004b199c45.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/alternative-telemedicine/page-2c35469ff50c49d0.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/article/%5BarticleId%5D/page-b18769c7280e992a.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/article/page-272640db2808e610.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/cms/dashboard/article/page-175d685f3e707c80.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/cms/dashboard/page-ecad845ccaa1f2a3.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/cms/page-9373ac00c174fd7e.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/doctor-home-visit/page-de70430fd9b9a94a.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/form-perklin-bni-sby/page-6627f70e99db578d.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/holistic-alternative/page-d0a52984594f3cb5.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/home-nursing/page-629631e2c9d80cce.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/inhome-therapy/page-0b97553830ee1cab.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/layout-d4e33c72d905d595.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/page-47d1731726a91232.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/perklin-bni-sby/page-e90926c35b650081.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/remote-telemedicine/page-a54ec9ae92a15449.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/success-register/page-b86c2d6b205a9b5b.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/app/test/page-6d85b2470f0f3728.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/fd9d1056-ffcfcd8280bc0f40.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/framework-08aa667e5202eed8.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/main-9ddc074b85790811.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/main-app-3f6900246174b817.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/pages/_app-57bdff7978360b1c.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/pages/_error-29037c284dd0eec6.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-9cc49da9870092c5.js",
          revision: "VKX3utuvMcu1mvRUDSUe2",
        },
        {
          url: "/_next/static/css/3cbd70ff48da2307.css",
          revision: "3cbd70ff48da2307",
        },
        {
          url: "/_next/static/css/698889fc4fd504e9.css",
          revision: "698889fc4fd504e9",
        },
        {
          url: "/_next/static/css/8b54669db085020c.css",
          revision: "8b54669db085020c",
        },
        {
          url: "/_next/static/css/d3df112486f97f47.css",
          revision: "d3df112486f97f47",
        },
        {
          url: "/_next/static/css/d5a506483a1dc9fe.css",
          revision: "d5a506483a1dc9fe",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/assets/article/article.txt",
          revision: "2b193b19f7f3c58c4237f0f8da62b872",
        },
        {
          url: "/assets/article/json/article-id.json",
          revision: "f7bb454b54ec828f695d574c6ffc8fb6",
        },
        {
          url: "/assets/article/json/article.json",
          revision: "7d72917758f324ae5371ad119531826e",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.css",
          revision: "ab8f47968d622da73afaabb52b3c6b6e",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.css.map",
          revision: "c5b5f425bd72d50d20f870403ecf7037",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.min.css",
          revision: "aa43ec988014f5c6c59e18d741aa6600",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.min.css.map",
          revision: "d52d1f17b8c7303159937e117b8bc52d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.css",
          revision: "a6b55ea8109697e9dc78eeb2ed7ea273",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.css.map",
          revision: "3adaa5cceabf342c082659cc7bd51e3d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.min.css",
          revision: "17a2fbfb37fa7a292d662c369becd7aa",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.min.css.map",
          revision: "47ba6ca5f767d9f2ea2ff0c797f8865e",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.css",
          revision: "14eb1a16ad3dc5dd875b6d5c7b18b2b1",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.css.map",
          revision: "f097dbf94cdea9f11046dd97c526d046",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.min.css",
          revision: "09ed247acaf7254cde969c471f0f95b6",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.min.css.map",
          revision: "744a50c642ffe974d676fd1f8e6778db",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.css",
          revision: "6de406f373aa2b2e8019ae6e5ea2719d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.css.map",
          revision: "0d0d9349c401b84de52518ecf90a3f38",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.min.css",
          revision: "26fba6517783c109918ff2c3567b2ca5",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.min.css.map",
          revision: "e4af45c30a4f554483bf8f8b2cd33e23",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.css",
          revision: "327a634d258f8848d46e6da5f343ac7f",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.css.map",
          revision: "b9f6ae291c6c74b35125f93af7654ac6",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.min.css",
          revision: "0c6eaff7f5980d2a56c4356b60b7cfdc",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.min.css.map",
          revision: "65a9dc9548d16005fb0a3586c1993ed6",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.css",
          revision: "223baca50fb9f913f2654598f63afb88",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.css.map",
          revision: "4e8645072236476209121a2c6df77699",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.min.css",
          revision: "c62a0be7a7c4f1e62b68649abcf55546",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.min.css.map",
          revision: "177c34e8ca484d535442b7d07cbaf801",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.css",
          revision: "8d8243cf3175d6e38d8dcd06afe2de9f",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.css.map",
          revision: "8acd3942419907b180f8d5d0f0ffaff8",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.min.css",
          revision: "0fc647a071a2616fe24e9b126a52af24",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.min.css.map",
          revision: "ef5ca9e28f780a079318afab2334d8eb",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.css",
          revision: "417082535d9ac88e5937d6275d4b7d6a",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.css.map",
          revision: "00da418dd98039130be1f0148b50a30d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.min.css",
          revision: "b1b655c6ceec6d64625671c56a28f0c2",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.min.css.map",
          revision: "addea6c2235928ee7215033e7c7a5440",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.js",
          revision: "5b478094892f64b4d2c0875f0eb996aa",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.js.map",
          revision: "6a793680ea3dc88658686387afc6a249",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.min.js",
          revision: "2b5f300c724ea5eecaef0743949cb919",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.min.js.map",
          revision: "54c3c3bec763f429a29e55cce6a44015",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.js",
          revision: "5426f0437bb4db545a2f95d9f17a5343",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.js.map",
          revision: "6ef70296bc788bad2a046bc96f7edb2b",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.min.js",
          revision: "32cf2efd732b786024634791d9a9f5ea",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.min.js.map",
          revision: "057d30f1efe3798640409789ce2a107e",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.js",
          revision: "c666eb096a9244a1035a8cf45192ece5",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.js.map",
          revision: "97a94460d954a7410b6f037837ceef3b",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.min.js",
          revision: "642ef8e3330df328db0a05566fb9936a",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.min.js.map",
          revision: "dead0533cdd433f4ed715822efdce474",
        },
        {
          url: "/assets/css/pbs/style.css",
          revision: "6528758d341526e764683242d7c8d305",
        },
        {
          url: "/assets/css/style.css",
          revision: "002b5f428b17af5e6df562fd02ea8fd0",
        },
        {
          url: "/assets/css/swiper-bundle.min.css",
          revision: "674939aeed14287598d9d17a0e4dbd22",
        },
        {
          url: "/assets/fontello/config.json",
          revision: "8b937c96f52ee2e342d5839ba09207eb",
        },
        {
          url: "/assets/fontello/css/animation.css",
          revision: "e7da1c1d837b0be2240c2c23bf0c4475",
        },
        {
          url: "/assets/fontello/css/csehat-codes.css",
          revision: "5baada3c3596a5ac546db2ad806ff242",
        },
        {
          url: "/assets/fontello/css/csehat-embedded.css",
          revision: "15fe06cb9c577bc61f7c5d592f1089fd",
        },
        {
          url: "/assets/fontello/css/csehat-ie7-codes.css",
          revision: "baf0df8fa56893b4a79ef3eea4dc84db",
        },
        {
          url: "/assets/fontello/css/csehat-ie7.css",
          revision: "24c42024ec85306da769999e295fe8ef",
        },
        {
          url: "/assets/fontello/css/csehat.css",
          revision: "9ef6c9cf6cdea01ee773f0690d2930ae",
        },
        {
          url: "/assets/fontello/font/csehat.eot",
          revision: "11a09c561b22f621e25418b7f8cd688f",
        },
        {
          url: "/assets/fontello/font/csehat.svg",
          revision: "4b71a78ed07791837eed522f2bc312d4",
        },
        {
          url: "/assets/fontello/font/csehat.ttf",
          revision: "5f90e8ac8dd0764c74018e01b0b057f9",
        },
        {
          url: "/assets/fontello/font/csehat.woff",
          revision: "34531bc3eba84a951cf99d35b6fd61ca",
        },
        {
          url: "/assets/fontello/font/csehat.woff2",
          revision: "b72e423b8fe5a9e14c1d471837e867ca",
        },
        {
          url: "/assets/img/Diploma.png",
          revision: "afbc84d42cfb21590e0bcd74ae8a6d02",
        },
        {
          url: "/assets/img/Globe Network.png",
          revision: "039e7b56ceb5125841c635654df077a4",
        },
        {
          url: "/assets/img/IDI CAB BEKASI.png",
          revision: "7c625427b6258950f128988dfe3c46f9",
        },
        {
          url: "/assets/img/IDI CAB JAKTIM.png",
          revision: "0bd4eddbe51b8ec7b9d30bf6632f112b",
        },
        {
          url: "/assets/img/IDI_1-removebg-new.png",
          revision: "024e4a2b679a729121beea3500100bd3",
        },
        {
          url: "/assets/img/IDI_BEKASI.png",
          revision: "53a22ad70370b3088dd2c234baff1d82",
        },
        {
          url: "/assets/img/IDI_JAKTIM.png",
          revision: "aafd487a6ac01581d793cf74c7c69079",
        },
        {
          url: "/assets/img/Kemenkes.png",
          revision: "f5c035137056ad5f6b91bbb9f07444cb",
        },
        {
          url: "/assets/img/Last 24 Hours.png",
          revision: "ada8d504bf3719e9028d860e2de9c7bb",
        },
        {
          url: "/assets/img/Logo_Atensi-removebg-preview.png",
          revision: "dddc4abc61a1750da85888ff27f8a917",
        },
        {
          url: "/assets/img/Protect.png",
          revision: "e0d916c65f3c18e96f43509ba681843b",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative01.png",
          revision: "d9e63d21d05bd9809490980ed41f44d3",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative02.png",
          revision: "dda2063c4278907d263886b1d9c1e8da",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative03.png",
          revision: "6b7d498202c8f87e8ebe0023d9dc402b",
        },
        {
          url: "/assets/img/article/apa-itu-stroke.jpg",
          revision: "e29db08f5fccff4dce70330dee143e28",
        },
        {
          url: "/assets/img/article/article01.jpg",
          revision: "607e7cf33b645dc509ae2016be1b73a1",
        },
        {
          url: "/assets/img/article/article02.jpg",
          revision: "6666ce7bf7fb1ec2407b3d694e4540f8",
        },
        {
          url: "/assets/img/article/article02New.jpg",
          revision: "7ed70851dd3468f97f7fa046e875a1a4",
        },
        {
          url: "/assets/img/article/article03-new.jpg",
          revision: "38907600f1cb25755689059f61ff6948",
        },
        {
          url: "/assets/img/article/article03.jpg",
          revision: "c6dc40b10fb515b1e609fd6e817bc1a6",
        },
        {
          url: "/assets/img/article/article04-new.jpg",
          revision: "4034035fe2b455e7ed43f1afec81d255",
        },
        {
          url: "/assets/img/article/article04.jpg",
          revision: "a5752e76ac1fddf0ad9d0665c0cf35db",
        },
        {
          url: "/assets/img/article/article05.jpg",
          revision: "f50aceb66e4a32304e01958dd17e5a37",
        },
        {
          url: "/assets/img/article/article06.jpg",
          revision: "50e7a42f6f1dcbf5b0372777d6ba9a1a",
        },
        {
          url: "/assets/img/article/dampak-buruk-hp-pada-anak-1.jpg",
          revision: "f05a1a2d6577fcda73dd375daad5fb7c",
        },
        {
          url: "/assets/img/banner-homepage.png",
          revision: "c2715a30b782dbdf7ce7f44a57d9c1b4",
        },
        {
          url: "/assets/img/bg-article.png",
          revision: "bbeb53728368560a57c0712977c71de2",
        },
        {
          url: "/assets/img/bg-home-diagnostic.png",
          revision: "03fab7977d54b04703c1d7cacfcc3509",
        },
        {
          url: "/assets/img/bg-home-nursing.png",
          revision: "46b22a113c8e21b8eea580e4de579c15",
        },
        {
          url: "/assets/img/bg-home-visit.png",
          revision: "7c67d75ff3526cb8ffea7c1d2cd09ef1",
        },
        {
          url: "/assets/img/bg-homeiv.png",
          revision: "40c4d6d3925f4d005a902fb2f7c1346f",
        },
        {
          url: "/assets/img/bg-remote.png",
          revision: "27c6aa19c078d5c015dfbf727a06ebbb",
        },
        {
          url: "/assets/img/bg-therapies.png",
          revision: "fac91fd4bfd0a57c82c418ebd783b19e",
        },
        {
          url: "/assets/img/bg-why-mobile.png",
          revision: "47f19d0e2bbf6835acef659f11951141",
        },
        {
          url: "/assets/img/bg-why.png",
          revision: "69f32388228cf4748c7a9cdfcf165724",
        },
        {
          url: "/assets/img/check-icon.svg",
          revision: "ed84b4035d3636600286cdca2d38b66c",
        },
        {
          url: "/assets/img/doctor/dr-ayu-a.png",
          revision: "8f07b2c89aad7f02783fc8aed416c28c",
        },
        {
          url: "/assets/img/doctor/dr-dewi-f.png",
          revision: "8cd83c199e975c7e830923cbdd45e5bc",
        },
        {
          url: "/assets/img/doctor/dr-dwi-s.png",
          revision: "76ccd927ac32e6367d7f447f1f09f2b7",
        },
        {
          url: "/assets/img/doctor/dr-ernita-r.png",
          revision: "7c83754ac348c0c698b2e6f460982c6e",
        },
        {
          url: "/assets/img/doctor/dr-irvan-r.png",
          revision: "969fdbd8ff5a335f0b9726930f6c9ae4",
        },
        {
          url: "/assets/img/doctor/dr-melchisedek-a.png",
          revision: "2399930346c3f55e1dad5056c96f5094",
        },
        {
          url: "/assets/img/doctor/nurse-andi.png",
          revision: "0f49ff8bd292034a9af04248cdde83d3",
        },
        {
          url: "/assets/img/doctor/nurse-dimas.png",
          revision: "d7b6d966bfa52aa8cb2f5f8332d688f5",
        },
        {
          url: "/assets/img/doctor/nurse-inyoman.png",
          revision: "7a2eaa664486a145c9eacd7e61dc1146",
        },
        {
          url: "/assets/img/doctor/nurse-irfan.png",
          revision: "ebc3c1eea393580d786b96d756d48128",
        },
        {
          url: "/assets/img/doctor/nurse-komang.png",
          revision: "533f826f7e761e96ee7bd2114a6cc38b",
        },
        {
          url: "/assets/img/doctor/nurse-loisa.png",
          revision: "250cbc2f0c0354c83cee0c56207985c0",
        },
        {
          url: "/assets/img/doctor/nurse-marsiani.png",
          revision: "77c9feea271b338921804e36b7ab83b8",
        },
        {
          url: "/assets/img/doctor/nurse-siti.png",
          revision: "76cc8a4a5a3a54acc0eaf19696744485",
        },
        {
          url: "/assets/img/doctor/nurse-syarah.png",
          revision: "3809b91ec3556c60610ac43fa82908f4",
        },
        {
          url: "/assets/img/expand-arrow.png",
          revision: "849ae4d6766057e3b88676f7eaf2665d",
        },
        {
          url: "/assets/img/favicon.svg",
          revision: "e4426142f1ba3092a244d279eb84e52f",
        },
        {
          url: "/assets/img/flag/EN Flag_new.png",
          revision: "2b327d8813c5880ddbd0882441284f86",
        },
        {
          url: "/assets/img/flag/ID Flag_new.png",
          revision: "d8f06804ddca4eecbe7b01077d837745",
        },
        {
          url: "/assets/img/holistic/6.png",
          revision: "977851be23439ea8435d5a73be64cda3",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic01.png",
          revision: "063bdcdbd0ff00911fd767270456b99e",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic02.png",
          revision: "f22a6254b0c62b23a938a0839c98befd",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic03.png",
          revision: "5f35a5a3beec633496b8a56b9211bf25",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic04.png",
          revision: "c68d050d2163a111205168fcd61b5651",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic05.png",
          revision: "99559a68afd77753387502c5031e40a0",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic06-.png",
          revision: "977851be23439ea8435d5a73be64cda3",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic06.png",
          revision: "2b1faf951340220982421cbccd9bb506",
        },
        {
          url: "/assets/img/home-nursing/img-home-nursing-sub01.png",
          revision: "39473a7d131e2e417d80ab8bd031246a",
        },
        {
          url: "/assets/img/home-nursing/img-home-nursing-sub02.png",
          revision: "6926056d00596ef6cfaa521a0dd9b72b",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv01.png",
          revision: "292ec1f78efa462dc89670c8822da271",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv02.png",
          revision: "281c25cff399da44c034117273c69e74",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv03.png",
          revision: "038e23f7e042fe3a40004faed8f25b8d",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv04.png",
          revision: "c8e797471ac826ab2b11e4e3f42fb347",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv05.png",
          revision: "c5e47e56106c4304107bdd9d8f2c00e4",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv06.png",
          revision: "85b440eabe7222e3b850ebd9faeccabb",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv07.png",
          revision: "9deedf7754eb9a66569fab4cd7fba063",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv08.png",
          revision: "b0bfab1480c05d0564140b41d7277eb6",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv09.png",
          revision: "85b43e21484dd0834a4e06ba0902df7a",
        },
        {
          url: "/assets/img/homevisit/1.png",
          revision: "f0da4aebfb5bd9691721e208ce4f110a",
        },
        {
          url: "/assets/img/homevisit/2.png",
          revision: "e02ffc57e0c127d54c9f9181b331dd47",
        },
        {
          url: "/assets/img/homevisit/4.png",
          revision: "76f7c0fc7c955cf03c6fcf02c32cc9c9",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit01-.png",
          revision: "f0da4aebfb5bd9691721e208ce4f110a",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit01.png",
          revision: "155f77a3f6e6eb2fd4b93016fb9d736d",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit02-.png",
          revision: "e02ffc57e0c127d54c9f9181b331dd47",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit02.png",
          revision: "cdc97b116b81e7aa8a33074218b9b910",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit03.png",
          revision: "a3dc36c2f9784f71940b7fb59b9c1346",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit04-.png",
          revision: "76f7c0fc7c955cf03c6fcf02c32cc9c9",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit04.png",
          revision: "5c971b8930fefa4df75217d60c67139e",
        },
        {
          url: "/assets/img/idi-removebg-preview.png",
          revision: "fa0a3d5e672b9c753dc94abb78d64484",
        },
        {
          url: "/assets/img/idi-removebg-preview_1.png",
          revision: "9ace21726fbd63523320481d79a2efcc",
        },
        {
          url: "/assets/img/img-Nursing.png",
          revision: "1410e756b7d2ecaf3df75ae380bf34a3",
        },
        {
          url: "/assets/img/img-article01.png",
          revision: "766adf7e5056bf477c0db425389fdcd2",
        },
        {
          url: "/assets/img/img-article02.png",
          revision: "f4aad748a0eb2195a7a5f74075df33e4",
        },
        {
          url: "/assets/img/img-diagnosticPage.png",
          revision: "47b17ec2f6a48f67085ef7c4495971e1",
        },
        {
          url: "/assets/img/img-homeVisit.png",
          revision: "73f60a915502b99f2440c2a56a0326ff",
        },
        {
          url: "/assets/img/img-homeiv.png",
          revision: "5da90cbb21e538f15a1daa51c868158d",
        },
        {
          url: "/assets/img/img-question.png",
          revision: "d24a515596311ad72dfeb6bc41c4d84a",
        },
        {
          url: "/assets/img/img-telemedicine.png",
          revision: "9f0afc469661bde718e95f6290b400fa",
        },
        {
          url: "/assets/img/img-therapis.png",
          revision: "32abdb44137a3a47e590f809364dd7bf",
        },
        {
          url: "/assets/img/img-why.png",
          revision: "5cea09c992a5dd336e6a4ed9f4473f70",
        },
        {
          url: "/assets/img/logo-atensi.png",
          revision: "9f6683fdfe884281bfa257a7d51bdbf8",
        },
        {
          url: "/assets/img/logo-atensi_new.png",
          revision: "6e51b239d11a4b342a0cc268d16ca70f",
        },
        {
          url: "/assets/img/logo-default-idi3.png",
          revision: "c33c8734d35d11555503666c79c77f60",
        },
        {
          url: "/assets/img/logo-white.png",
          revision: "87477f832d9386a10fac0ebf9d270dd0",
        },
        {
          url: "/assets/img/logo.png",
          revision: "dc048e51453c489c51a2d0cc7bc9db3d",
        },
        {
          url: "/assets/img/perklin-bni-sby/bg-home.png",
          revision: "467b12ef0b38756ed47d6ffdbf689683",
        },
        {
          url: "/assets/img/perklin-bni-sby/bg-thanks.png",
          revision: "81f2b33ffda466d396afcb73fc0d7e47",
        },
        {
          url: "/assets/img/perklin-bni-sby/icon-check.svg",
          revision: "6e20328a0d3d9e35b45d2989ebfe8fc7",
        },
        {
          url: "/assets/img/perklin-bni-sby/icon-regis.svg",
          revision: "eac86a546f01fbe52dcda80c13f1d6a7",
        },
        {
          url: "/assets/img/perklin-bni-sby/logo.png",
          revision: "cfaee5f89a16d2a440560eb013d263d6",
        },
        {
          url: "/assets/img/plus-vector.svg",
          revision: "7bb72b8bee1a8e5d01773482174c81df",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine01.png",
          revision: "b430c26fa0ac0bf4ccf2383481b83412",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine02.png",
          revision: "2d030d83c4c038ca8aaa72e7e8ef6632",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine03.png",
          revision: "97011e4665c92ed166731eff6a9b8345",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine04.png",
          revision: "771de6dfbf5eacdbdc5da1c34598bb61",
        },
        {
          url: "/assets/js/index.js",
          revision: "275c850b34f692410d58ab988c12efd4",
        },
        {
          url: "/assets/js/swiper-bundle.min.js",
          revision: "ff526da5a08def3cd118c56691d8ddff",
        },
        {
          url: "/assets/js/theme.js",
          revision: "2069607f2628887e4bb6b1d8ce0160ba",
        },
        {
          url: "/assets/scss/_breakpoints.scss",
          revision: "58fb0369d3b75c7ad17d5402433222fb",
        },
        {
          url: "/assets/scss/_buttons.scss",
          revision: "8d7d7f64b835237d9dfb65738a8c661d",
        },
        {
          url: "/assets/scss/_form.scss",
          revision: "2efa50ea514d6c6be3921e792cf0ffd3",
        },
        {
          url: "/assets/scss/_global.scss",
          revision: "8f179a7e28897a7cf921593ea8ad47b6",
        },
        {
          url: "/assets/scss/_mixins.scss",
          revision: "812c9f53077f30398285fb58b701ddd0",
        },
        {
          url: "/assets/scss/_variables.scss",
          revision: "23c940d70f1195e1d2dfb20593618e88",
        },
        {
          url: "/assets/scss/style.scss",
          revision: "43a8e465a7a49584259fcb914fd10919",
        },
        { url: "/favicon.svg", revision: "e4426142f1ba3092a244d279eb84e52f" },
        {
          url: "/locales/en/common.json",
          revision: "da2d48fe90cc793c0453124e1e972902",
        },
        {
          url: "/locales/id/common.json",
          revision: "08583e55319f2bda6546317153480e9d",
        },
        {
          url: "/locales/in/common.json",
          revision: "ae6fa7a795dc2a5e2a5eb7d55fe740a6",
        },
        {
          url: "/locales/kh/common.json",
          revision: "53a5484b8460f46a7f5484276273ff90",
        },
        {
          url: "/locales/my/common.json",
          revision: "aba8c54e424f64b606b1f4442b955fdf",
        },
        {
          url: "/locales/ph/common.json",
          revision: "3b95437890b262d4e536db142d447aa2",
        },
        {
          url: "/locales/pk/common.json",
          revision: "d6611d3ca71b5f6ab20f2da96d703d55",
        },
        {
          url: "/locales/pt_BR/common.json",
          revision: "4297917c6557b447f792719af3e4d232",
        },
        {
          url: "/locales/th/common.json",
          revision: "e39d6807dd4d0b0b91ef04a1d1d0dc67",
        },
        {
          url: "/locales/vn/common.json",
          revision: "2c718915a654ca7d10447877c7889014",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      "/",
      new s.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: s,
              response: e,
              event: i,
              state: a,
            }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\.(?:mp4)$/i,
      new s.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        const e = s.pathname;
        return !e.startsWith("/api/auth/") && !!e.startsWith("/api/");
      },
      new s.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        return !s.pathname.startsWith("/api/");
      },
      new s.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    s.registerRoute(
      ({ url: s }) => !(self.origin === s.origin),
      new s.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
