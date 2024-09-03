if (!self.define) {
  let e,
    s = {};
  const i = (i, a) => (
    (i = new URL(i + ".js", a).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let r = {};
    const n = (e) => i(e, t),
      o = { module: { uri: t }, exports: r, require: n };
    s[t] = Promise.all(a.map((e) => o[e] || n(e))).then((e) => (c(...e), r));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "7466a948960905058951ad5fabd73aee",
        },
        {
          url: "/_next/static/chunks/1208-e25c41561623a4e3.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/1474-9f5df92b94fbce2d.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/18050da9-65c3b0bf9a6aad13.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/1991-68df4adde29b5f82.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/21-33a27826c5a78fb7.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/2170a4aa-09b380695b9c3b9b.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/25386026-3f767ff4f7770b02.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/267c2b52-1d235c0d37caaa1b.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/3107-496af79891b84073.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/4034-ca00f4d3528a718a.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/41ade5dc-bf0af6f2f5901796.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/5615.cf44e10dbe340615.js",
          revision: "cf44e10dbe340615",
        },
        {
          url: "/_next/static/chunks/6059-02d97cfdb418cfb3.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/628-1fd1e53ef60613e1.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/66ec4792-135df1c7ce5641af.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/6751-6ceb49cc75471eca.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/7032-db225bef5399498c.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/7195-de655fdc98536b0c.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/8069-e6f151ae05715977.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/8650-8b617f174ace7832.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-de49d9718261a15a.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/9771-bd4ad66ac95470a1.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/acne/page-a305153076041aec.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/anti-aging/page-1b9e45490f3d59f1.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/arthritis/page-b5498d4e1b4f58de.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/auto-immune/page-d1795035a281b74e.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/covid-19/page-993d8f9cf6bfd205.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/hair-loss/page-fc54a15f5f7667b5.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-6797a74061f955ce.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/page-918f87bcfbc7ecbc.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/scars/page-72a3c6ecb91d2e0f.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/stroke/page-6c8848041d00c00e.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/viewer-pdf/page-788e1a30547475ee.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/_not-found-894fa15af2b190bf.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/booking-list/page-d12e7d0cedc353d9.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/create-article-v2/page-0966ec12be23b33e.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/create-article/page-99cc5474faafd5ba.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/create-cs/page-87a4fd3023e7a385.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/customer-service/page-c1ddb0784c4aa543.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/dashboard-v2/page-62cf0bbbaa232fb8.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/dashboard/page-31cba3591739b36c.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/kur-bni/page-8e9ba930bebb3264.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/layout-84e3107f77f8fc98.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/page-e9664e3fb3895ac0.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/update-article-v2/page-5dfe4d324fc7fc13.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/update-article/page-0b1097bdedc8340c.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/admin/update-cs/page-80574bfbaef3f92a.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/alternative-telemedicine/page-534fac92227fb8e5.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/doctor-home-visit/page-2646103c435ddb2b.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/holistic-alternative/page-1bbcece150633ffd.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/home-nursing/page-ddac194f3e3508e3.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/inhome-therapy/page-2edcb713a5e15d31.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/layout-c98fecb724421db0.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/page-40112b1829f90cd0.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/app/remote-telemedicine/page-b0a8fbf35d42417e.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/cff4c5fa.207450e88d223b4d.js",
          revision: "207450e88d223b4d",
        },
        {
          url: "/_next/static/chunks/d7101eed-2c0322b6c4ba7e5c.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/fd9d1056-d272134e7e5f67de.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/framework-6230a0257f824fa3.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/main-app-abc3cb0ae9604b5f.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/main-f43e315ec0657d2a.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/pages/_app-57bdff7978360b1c.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/pages/_error-29037c284dd0eec6.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-8cfaafb6e53e15b9.js",
          revision: "xus-1KjRgFr3K_Gt1cGyt",
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
          url: "/_next/static/css/9de3ee1a96be16af.css",
          revision: "9de3ee1a96be16af",
        },
        {
          url: "/_next/static/css/a8536fbc58516dfc.css",
          revision: "a8536fbc58516dfc",
        },
        {
          url: "/_next/static/css/a8efedbee7983662.css",
          revision: "a8efedbee7983662",
        },
        {
          url: "/_next/static/media/banner-homepage.ab95b50c.png",
          revision: "ab95b50c",
        },
        {
          url: "/_next/static/media/banner-homepage1.099fe96a.png",
          revision: "099fe96a",
        },
        {
          url: "/_next/static/media/banner-homepage2.aee335d9.png",
          revision: "aee335d9",
        },
        {
          url: "/_next/static/media/bg-article.f868ecf6.png",
          revision: "f868ecf6",
        },
        {
          url: "/_next/static/media/bg-desc.4f00345d.png",
          revision: "4f00345d",
        },
        {
          url: "/_next/static/media/bg-why.0a1ce97a.png",
          revision: "0a1ce97a",
        },
        {
          url: "/_next/static/media/csehat.165e5a61.ttf",
          revision: "165e5a61",
        },
        {
          url: "/_next/static/media/csehat.29954d30.svg",
          revision: "29954d30",
        },
        {
          url: "/_next/static/media/csehat.7ade15b5.eot",
          revision: "7ade15b5",
        },
        {
          url: "/_next/static/media/csehat.a4db6d57.woff",
          revision: "a4db6d57",
        },
        {
          url: "/_next/static/media/csehat.dcc2f571.woff2",
          revision: "dcc2f571",
        },
        {
          url: "/_next/static/media/expand-arrow.c8109a29.png",
          revision: "c8109a29",
        },
        {
          url: "/_next/static/xus-1KjRgFr3K_Gt1cGyt/_buildManifest.js",
          revision: "2b54d7db375d2b4c0e6af318090bebea",
        },
        {
          url: "/_next/static/xus-1KjRgFr3K_Gt1cGyt/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/assets/article/article.txt",
          revision: "2b193b19f7f3c58c4237f0f8da62b872",
        },
        {
          url: "/assets/article/json/article-id.json",
          revision: "24ad4639c79a24f86626c575fb9891d9",
        },
        {
          url: "/assets/article/json/article.json",
          revision: "ca5b6f91d42b62a8de99507b423d957e",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.css",
          revision: "6b9246367b6d512f64fa351849dd41fd",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.css.map",
          revision: "c5b5f425bd72d50d20f870403ecf7037",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.min.css",
          revision: "7ebb9aeb64140f3b3c64e7f19d5f6b99",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.min.css.map",
          revision: "d52d1f17b8c7303159937e117b8bc52d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.css",
          revision: "df175e22287e91ef07ca84746a593e7e",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.css.map",
          revision: "3adaa5cceabf342c082659cc7bd51e3d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.min.css",
          revision: "1b671aedac450a9de2cb1f8e2c5b730b",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-grid.rtl.min.css.map",
          revision: "47ba6ca5f767d9f2ea2ff0c797f8865e",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.css",
          revision: "f01c96b92158f1c3ce5ce695efea7581",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.css.map",
          revision: "f097dbf94cdea9f11046dd97c526d046",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.min.css",
          revision: "e974443abba6ecb83e460237b24a7a0a",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.min.css.map",
          revision: "744a50c642ffe974d676fd1f8e6778db",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.css",
          revision: "e434ff0a2ebecdca107f53c7e17aa816",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.css.map",
          revision: "0d0d9349c401b84de52518ecf90a3f38",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.min.css",
          revision: "ccdf61c3b9e7f07c7dc5b7eb48285135",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-reboot.rtl.min.css.map",
          revision: "e4af45c30a4f554483bf8f8b2cd33e23",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.css",
          revision: "0dc5863ec215b2dd38098e9f5dcbc907",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.css.map",
          revision: "b9f6ae291c6c74b35125f93af7654ac6",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.min.css",
          revision: "a915c2f11eeda7eaab1105e2968a0a27",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.min.css.map",
          revision: "65a9dc9548d16005fb0a3586c1993ed6",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.css",
          revision: "577b6fe0faf61264a4d535da5ef11d1d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.css.map",
          revision: "4e8645072236476209121a2c6df77699",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.min.css",
          revision: "b5e838027c39f78285fd1731192672e8",
        },
        {
          url: "/assets/bootstrap/css/bootstrap-utilities.rtl.min.css.map",
          revision: "177c34e8ca484d535442b7d07cbaf801",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.css",
          revision: "ed5cd1977782c880779cb3700fa1cd64",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.css.map",
          revision: "8acd3942419907b180f8d5d0f0ffaff8",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.min.css",
          revision: "d0432560a130de613c6cea68cfcfa670",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.min.css.map",
          revision: "ef5ca9e28f780a079318afab2334d8eb",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.css",
          revision: "3cfa31a32b0138feee6d14ad7f79698d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.css.map",
          revision: "00da418dd98039130be1f0148b50a30d",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.min.css",
          revision: "97689de9a1da9e8a561762c405f9aaa6",
        },
        {
          url: "/assets/bootstrap/css/bootstrap.rtl.min.css.map",
          revision: "addea6c2235928ee7215033e7c7a5440",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.js",
          revision: "2604740897f5138cf592cd4ccf3986e2",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.js.map",
          revision: "6a793680ea3dc88658686387afc6a249",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.min.js",
          revision: "0bf53c8efe87f7f9ec757865b1203a9b",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.bundle.min.js.map",
          revision: "54c3c3bec763f429a29e55cce6a44015",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.js",
          revision: "f3fcdd7f9d2467cea52f79a52de1bc92",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.js.map",
          revision: "6ef70296bc788bad2a046bc96f7edb2b",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.min.js",
          revision: "56f58c11344ecf08ba63dbb6ec663f7c",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.esm.min.js.map",
          revision: "057d30f1efe3798640409789ce2a107e",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.js",
          revision: "e8ab47b088e5497bc6a0c062518c4c7c",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.js.map",
          revision: "97a94460d954a7410b6f037837ceef3b",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.min.js",
          revision: "20f792e0c532e8bd340987db044dae3f",
        },
        {
          url: "/assets/bootstrap/js/bootstrap.min.js.map",
          revision: "dead0533cdd433f4ed715822efdce474",
        },
        {
          url: "/assets/css/style.css",
          revision: "a3ed20f7c766e5cb94eb1109708ba88e",
        },
        {
          url: "/assets/css/swiper-bundle.min.css",
          revision: "d967cfac22e495154a3f689f41147924",
        },
        {
          url: "/assets/fontello/config.json",
          revision: "c01088896986f60f8032e92a1a9fa15b",
        },
        {
          url: "/assets/fontello/css/animation.css",
          revision: "e7da1c1d837b0be2240c2c23bf0c4475",
        },
        {
          url: "/assets/fontello/css/csehat-codes.css",
          revision: "06c83645ed79af23af79a502d43a5be8",
        },
        {
          url: "/assets/fontello/css/csehat-embedded.css",
          revision: "8d2a64d52d7145edd23a5cc00dd848c4",
        },
        {
          url: "/assets/fontello/css/csehat-ie7-codes.css",
          revision: "59d526fcf20de2bf843e91d5a17004ed",
        },
        {
          url: "/assets/fontello/css/csehat-ie7.css",
          revision: "929ad518f03764b0ea1bc9375a843275",
        },
        {
          url: "/assets/fontello/css/csehat.css",
          revision: "0e2f16e18a7649aaa3f0df4e32a0a363",
        },
        {
          url: "/assets/fontello/font/csehat.eot",
          revision: "11a09c561b22f621e25418b7f8cd688f",
        },
        {
          url: "/assets/fontello/font/csehat.svg",
          revision: "593bd5f855e90858e6fc5bb95b6f38bf",
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
          url: "/assets/img/Desktop/Alternative Telemedicine_Desktop.webp",
          revision: "a0c80f5e2035ea38c84274a9f77e43d7",
        },
        {
          url: "/assets/img/Desktop/Doctor Home Visit_Desktop.webp",
          revision: "79aa852ced9b953372b1c497c42daf65",
        },
        {
          url: "/assets/img/Desktop/Holistic Alternative Therapies_Desktop.webp",
          revision: "ed9d059f19c5f0dbb0f161fd40db7155",
        },
        {
          url: "/assets/img/Desktop/Home Nursing and Woundcare_Desktop.webp",
          revision: "1ecee2b4b126c41d419769694637ae53",
        },
        {
          url: "/assets/img/Desktop/Homepage 1_Desktop.webp",
          revision: "be1e39f5a5efded0b9e4d02e771d527f",
        },
        {
          url: "/assets/img/Desktop/In-Home IV Therapy & more_Desktop.webp",
          revision: "df34594df3165bde1d6a9471a93067a8",
        },
        {
          url: "/assets/img/Desktop/Remote Telemedicine_Desktop.webp",
          revision: "82a04b75e1bc321b50dbc9ad30a13434",
        },
        {
          url: "/assets/img/Desktop/homepage 2.webp",
          revision: "43f4f856f6b5aed83f188aa753d88c75",
        },
        {
          url: "/assets/img/Diploma copy.png",
          revision: "afbc84d42cfb21590e0bcd74ae8a6d02",
        },
        {
          url: "/assets/img/Diploma.png",
          revision: "afbc84d42cfb21590e0bcd74ae8a6d02",
        },
        {
          url: "/assets/img/Globe Network copy.png",
          revision: "039e7b56ceb5125841c635654df077a4",
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
          url: "/assets/img/Last 24 Hours copy.png",
          revision: "ada8d504bf3719e9028d860e2de9c7bb",
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
          url: "/assets/img/Mobile/Alternative Telemedicine_Mobile.webp",
          revision: "aac66e26ccf7b6696c786b29646ec1fa",
        },
        {
          url: "/assets/img/Mobile/Doctor Home Visit_Mobile.webp",
          revision: "84d97c95e09c51e48d3b86eb54dbf223",
        },
        {
          url: "/assets/img/Mobile/Holistic Alternative Therapies_Mobile.webp",
          revision: "a655efe5b87b74355c1b726da31c92fe",
        },
        {
          url: "/assets/img/Mobile/Home Nursing and Woundcare_Mobile.webp",
          revision: "2891f0bdb6f19c46e84a19639b63944c",
        },
        {
          url: "/assets/img/Mobile/Homepage 1_Mobile.webp",
          revision: "09ded32dc5609d5c7855c7c78a505a80",
        },
        {
          url: "/assets/img/Mobile/In-Home IV Therapy & more_Mobile.webp",
          revision: "4806e004518aa272f4edf7f39c2b4eb3",
        },
        {
          url: "/assets/img/Mobile/Remote Telemedicine_Mobile.webp",
          revision: "f8e9c15dfa9ddbb8d0b4e9cfe8cfb822",
        },
        {
          url: "/assets/img/Mobile/homepage 2.webp",
          revision: "43f4f856f6b5aed83f188aa753d88c75",
        },
        {
          url: "/assets/img/Protect copy.png",
          revision: "e0d916c65f3c18e96f43509ba681843b",
        },
        {
          url: "/assets/img/Protect.png",
          revision: "e0d916c65f3c18e96f43509ba681843b",
        },
        {
          url: "/assets/img/Sub Image/img-home-nursing-sub01.webp",
          revision: "0e875e6b098963754841fe7a8c797122",
        },
        {
          url: "/assets/img/Sub Image/img-home-nursing-sub02.webp",
          revision: "d4c7cabdee2443a4aff52abdb281dade",
        },
        {
          url: "/assets/img/Sub Image/img-sub-alternative01.webp",
          revision: "e30d111e16b1ebd58a84d1b70e14a1ab",
        },
        {
          url: "/assets/img/Sub Image/img-sub-alternative02.webp",
          revision: "2696dec4b640054a419808c62d363226",
        },
        {
          url: "/assets/img/Sub Image/img-sub-alternative03.webp",
          revision: "72c0576dae7f8e44902f8e0421883301",
        },
        {
          url: "/assets/img/Sub Image/img-sub-holistic01.webp",
          revision: "565d5df9c8f225d68f7aa4fab02bf111",
        },
        {
          url: "/assets/img/Sub Image/img-sub-holistic02.webp",
          revision: "a38454233866ee4ed83a5e354a98bc79",
        },
        {
          url: "/assets/img/Sub Image/img-sub-holistic03.webp",
          revision: "ff5601a92aeb3a94f4a85339e08fd04e",
        },
        {
          url: "/assets/img/Sub Image/img-sub-holistic04.webp",
          revision: "30e7044f5652e5ec011144e4704882bd",
        },
        {
          url: "/assets/img/Sub Image/img-sub-holistic05.webp",
          revision: "760d3bd67620c5c101459eb5550c1b49",
        },
        {
          url: "/assets/img/Sub Image/img-sub-holistic06.webp",
          revision: "35b61586d41436d0478ac7f0abd8537d",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv01.webp",
          revision: "e99949b25b1dee2e77ce8f25a9efdf75",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv02.webp",
          revision: "6355ae5260562bfc701bba1911718f6a",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv03.webp",
          revision: "e9afdf5d4df17206d12526330dd283db",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv04.webp",
          revision: "478ba547867ace0ef14714f0aa8de753",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv05.webp",
          revision: "fdbc6b0835d221cf0c67e1150cbba315",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv06.webp",
          revision: "c374d77db84f0b454488f2e665958f8a",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv07.webp",
          revision: "b5dc20bcb7c2c1a7ba73bfb0e3d994da",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv08.webp",
          revision: "b35ef520aff94d9946d78c8f3e1fd2eb",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homeiv09.webp",
          revision: "21131c4413d3340f2f4b94a916e30175",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homevisit01.webp",
          revision: "755787c39dbea2606e344e4a013be061",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homevisit02.webp",
          revision: "3678e0378068f8caef6a2ea9610a8f0e",
        },
        {
          url: "/assets/img/Sub Image/img-sub-homevisit04.webp",
          revision: "f05449a72c1be435dff871f9c5128a35",
        },
        {
          url: "/assets/img/Sub Image/img-sub-remotetelemedicine01.webp",
          revision: "2880b579ec6ef144bfaea0c4c454b7b1",
        },
        {
          url: "/assets/img/Sub Image/img-sub-remotetelemedicine02.webp",
          revision: "b43058314a63dab2f852c4f3237daa4b",
        },
        {
          url: "/assets/img/Sub Image/img-sub-remotetelemedicine03.webp",
          revision: "5a78f72f25a8c63a3396edc2868c6fd9",
        },
        {
          url: "/assets/img/Sub Image/img-sub-remotetelemedicine04.webp",
          revision: "369da40bf2034ec35e20b22e2cbf251d",
        },
        {
          url: "/assets/img/acne/acne01.png",
          revision: "ebd13436d43c9b15d2bdbe586d0f3324",
        },
        {
          url: "/assets/img/acne/acne02.png",
          revision: "df9ae93b5cf0376537ebb2c6b9bbbf35",
        },
        {
          url: "/assets/img/acne/banner-acne.png",
          revision: "15aa61bb76e34ec6b87f60b4c12e033d",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative01.png",
          revision: "d9e63d21d05bd9809490980ed41f44d3",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative01.webp",
          revision: "467383e05f5a2c2a077c6cb8f9c94d2c",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative02.png",
          revision: "dda2063c4278907d263886b1d9c1e8da",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative02.webp",
          revision: "f60916ce839e34f30dc84b45d229d418",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative03.png",
          revision: "6b7d498202c8f87e8ebe0023d9dc402b",
        },
        {
          url: "/assets/img/alternative/img-sub-alternative03.webp",
          revision: "54b0eb8fd028423867f0384d248c5bd8",
        },
        {
          url: "/assets/img/antiaging/antiaging01.png",
          revision: "cf366a0f6a05c77372256a2b3d1afaf7",
        },
        {
          url: "/assets/img/antiaging/antiaging02.png",
          revision: "c1a4170dbe2cce992da564ed90da24b6",
        },
        {
          url: "/assets/img/antiaging/banner-antiaging.png",
          revision: "3c69311a816d6f45be5f7ba572bcd3e9",
        },
        {
          url: "/assets/img/arthritis/arthritis01.png",
          revision: "138201ddbfdeb800488f28d4edcc5fa7",
        },
        {
          url: "/assets/img/arthritis/arthritis02.png",
          revision: "5444a618d07a42074c6f183165b2c5bb",
        },
        {
          url: "/assets/img/arthritis/banner-arthritis.png",
          revision: "aee7525c4b34540bb040f9430d6cd498",
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
          url: "/assets/img/autoimmune/autoimmune01.png",
          revision: "59acb6ebdca4c38b988db620b2eb1910",
        },
        {
          url: "/assets/img/autoimmune/autoimmune02.png",
          revision: "cb47e0b2b04fb2faed918f3abbf10ab1",
        },
        {
          url: "/assets/img/autoimmune/banner-autoimmune.png",
          revision: "413fcacbe3cca922459630de476c0b5e",
        },
        {
          url: "/assets/img/banner-homepage-1.png",
          revision: "c2715a30b782dbdf7ce7f44a57d9c1b4",
        },
        {
          url: "/assets/img/banner-homepage.png",
          revision: "8052a0a8c5e34471d7aafccd98c6fc36",
        },
        {
          url: "/assets/img/banner-homepage.webp",
          revision: "be1e39f5a5efded0b9e4d02e771d527f",
        },
        {
          url: "/assets/img/banner-homepage1.png",
          revision: "cd72f88164cbeb1bad46f5024dc6a279",
        },
        {
          url: "/assets/img/banner-homepage2.png",
          revision: "344649cb393833896122234a87e2aa17",
        },
        {
          url: "/assets/img/bg-article copy.png",
          revision: "bbeb53728368560a57c0712977c71de2",
        },
        {
          url: "/assets/img/bg-article.png",
          revision: "bbeb53728368560a57c0712977c71de2",
        },
        {
          url: "/assets/img/bg-desc.png",
          revision: "444a12c4297ff45cf209cac29dd5e74d",
        },
        {
          url: "/assets/img/bg-home-diagnostic copy.png",
          revision: "03fab7977d54b04703c1d7cacfcc3509",
        },
        {
          url: "/assets/img/bg-home-diagnostic.png",
          revision: "03fab7977d54b04703c1d7cacfcc3509",
        },
        {
          url: "/assets/img/bg-home-nursing copy.png",
          revision: "46b22a113c8e21b8eea580e4de579c15",
        },
        {
          url: "/assets/img/bg-home-nursing.png",
          revision: "46b22a113c8e21b8eea580e4de579c15",
        },
        {
          url: "/assets/img/bg-home-visit copy.png",
          revision: "7c67d75ff3526cb8ffea7c1d2cd09ef1",
        },
        {
          url: "/assets/img/bg-home-visit.png",
          revision: "7c67d75ff3526cb8ffea7c1d2cd09ef1",
        },
        {
          url: "/assets/img/bg-homeiv copy.png",
          revision: "40c4d6d3925f4d005a902fb2f7c1346f",
        },
        {
          url: "/assets/img/bg-homeiv.png",
          revision: "40c4d6d3925f4d005a902fb2f7c1346f",
        },
        {
          url: "/assets/img/bg-remote copy.png",
          revision: "27c6aa19c078d5c015dfbf727a06ebbb",
        },
        {
          url: "/assets/img/bg-remote.png",
          revision: "27c6aa19c078d5c015dfbf727a06ebbb",
        },
        {
          url: "/assets/img/bg-therapies copy.png",
          revision: "fac91fd4bfd0a57c82c418ebd783b19e",
        },
        {
          url: "/assets/img/bg-therapies.png",
          revision: "fac91fd4bfd0a57c82c418ebd783b19e",
        },
        {
          url: "/assets/img/bg-why-1.png",
          revision: "69f32388228cf4748c7a9cdfcf165724",
        },
        {
          url: "/assets/img/bg-why-mobile-1.png",
          revision: "47f19d0e2bbf6835acef659f11951141",
        },
        {
          url: "/assets/img/bg-why-mobile.png",
          revision: "47f19d0e2bbf6835acef659f11951141",
        },
        {
          url: "/assets/img/bg-why-mobile.webp",
          revision: "43f4f856f6b5aed83f188aa753d88c75",
        },
        {
          url: "/assets/img/bg-why.png",
          revision: "69f32388228cf4748c7a9cdfcf165724",
        },
        {
          url: "/assets/img/bg-why.webp",
          revision: "43f4f856f6b5aed83f188aa753d88c75",
        },
        {
          url: "/assets/img/check-icon copy.svg",
          revision: "ed84b4035d3636600286cdca2d38b66c",
        },
        {
          url: "/assets/img/check-icon.svg",
          revision: "b4a2ed71590a072bcd970e8281022a62",
        },
        {
          url: "/assets/img/circle-play.png",
          revision: "89c4fd576f5b1dd25cdca3cbed51a544",
        },
        {
          url: "/assets/img/covid/banner-covid.png",
          revision: "bac8e1ca9b56b09618b44b8977e9fb5e",
        },
        {
          url: "/assets/img/covid/covid01.png",
          revision: "75e075178d458640f17d8339f420437d",
        },
        {
          url: "/assets/img/covid/covid02.png",
          revision: "099c0d5818cd0e1d66d05210516daebc",
        },
        {
          url: "/assets/img/doctor/dr-ayu-a.png",
          revision: "8f07b2c89aad7f02783fc8aed416c28c",
        },
        {
          url: "/assets/img/doctor/dr-cut.png",
          revision: "9e3649bbf868fe92026e272cbc2e3e58",
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
          url: "/assets/img/doctor/dr-yahya.png",
          revision: "9c7d477db4db7e186b3eb7ce1efc733a",
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
          url: "/assets/img/doctor/nurse-musdalifa.webp",
          revision: "e582a746229ed2f0924ace6273df864e",
        },
        {
          url: "/assets/img/doctor/nurse-rina.webp",
          revision: "a2c801c22aaab60a374de58113a6244d",
        },
        {
          url: "/assets/img/doctor/nurse-selamat.png",
          revision: "248d0a93d680cef4ede47d9354c92e4c",
        },
        {
          url: "/assets/img/doctor/nurse-siti.png",
          revision: "76cc8a4a5a3a54acc0eaf19696744485",
        },
        {
          url: "/assets/img/doctor/nurse-sumarna.webp",
          revision: "960fdcc8312e02c16c509694575ae326",
        },
        {
          url: "/assets/img/doctor/nurse-syarah.png",
          revision: "3809b91ec3556c60610ac43fa82908f4",
        },
        {
          url: "/assets/img/expand-arrow copy.png",
          revision: "849ae4d6766057e3b88676f7eaf2665d",
        },
        {
          url: "/assets/img/expand-arrow.png",
          revision: "849ae4d6766057e3b88676f7eaf2665d",
        },
        {
          url: "/assets/img/favicon copy.svg",
          revision: "e4426142f1ba3092a244d279eb84e52f",
        },
        {
          url: "/assets/img/favicon.svg",
          revision: "fb9159533bf3fcd1ad16586467ecab64",
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
          url: "/assets/img/hairloss/banner-hairloss.png",
          revision: "a43a285e67c5d585e634609c7fa5438b",
        },
        {
          url: "/assets/img/hairloss/hairloss01.png",
          revision: "255b9c1f01f18a6ed4dcca636185d36b",
        },
        {
          url: "/assets/img/hairloss/hairloss02.png",
          revision: "d6575ac64893cd96011806a6ec8e00a6",
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
          url: "/assets/img/holistic/img-sub-holistic01.webp",
          revision: "4b9845a75172f56d20a5c3ef97336fb4",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic02.png",
          revision: "f22a6254b0c62b23a938a0839c98befd",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic02.webp",
          revision: "214d4d03af29bc042c8ace92b92b3a0f",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic03.png",
          revision: "5f35a5a3beec633496b8a56b9211bf25",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic03.webo",
          revision: "38ad2ef3305e763b16a64a9bb8c16631",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic03.webp",
          revision: "38ad2ef3305e763b16a64a9bb8c16631",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic04.png",
          revision: "c68d050d2163a111205168fcd61b5651",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic04.webp",
          revision: "575fd2e33459316052369625d5a75f39",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic05.png",
          revision: "99559a68afd77753387502c5031e40a0",
        },
        {
          url: "/assets/img/holistic/img-sub-holistic05.webp",
          revision: "b41e5078af5e5c7502d9754cfd7f621d",
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
          url: "/assets/img/home-nursing/img-home-nursing-sub01.webp",
          revision: "5f2ee0a7de0571e4d87f14b87cb29539",
        },
        {
          url: "/assets/img/home-nursing/img-home-nursing-sub02.png",
          revision: "6926056d00596ef6cfaa521a0dd9b72b",
        },
        {
          url: "/assets/img/home-nursing/img-home-nursing-sub02.webp",
          revision: "0542845c3c9f06f86415a307a7f8bd2c",
        },
        {
          url: "/assets/img/home-nursing/img-home-nursing-sub03.png",
          revision: "2800fe7ced038e8c797e0b010787265a",
        },
        {
          url: "/assets/img/home-nursing/img-home-nursing-sub03.webp",
          revision: "bf183a2e90bb4f51bc126899697d2f7f",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv01.png",
          revision: "292ec1f78efa462dc89670c8822da271",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv01.webp",
          revision: "53cf614b189a654fa0f30952b9f53ace",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv02.png",
          revision: "281c25cff399da44c034117273c69e74",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv02.webp",
          revision: "a7a79937977613cbd4cffca80d934c1a",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv03.png",
          revision: "038e23f7e042fe3a40004faed8f25b8d",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv03.webp",
          revision: "8518a0bd903ac6a710edb63dd9e28dc8",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv04.png",
          revision: "c8e797471ac826ab2b11e4e3f42fb347",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv04.webp",
          revision: "b097b1166d001c4f3f371c3fcac7a6b3",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv05.png",
          revision: "c5e47e56106c4304107bdd9d8f2c00e4",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv05.webp",
          revision: "8fc44f23f199b400af00e73114b3c76e",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv06.png",
          revision: "85b440eabe7222e3b850ebd9faeccabb",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv06.webp",
          revision: "b1d18eadd2dae5d5e32536f5fcd557d5",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv07.png",
          revision: "9deedf7754eb9a66569fab4cd7fba063",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv07.webp",
          revision: "7513034d8128fc37edd9118093f0e1d2",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv08.png",
          revision: "b0bfab1480c05d0564140b41d7277eb6",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv08.webp",
          revision: "26c7679c43e54e1d62d6e5388dede702",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv09.png",
          revision: "85b43e21484dd0834a4e06ba0902df7a",
        },
        {
          url: "/assets/img/homeiv/img-sub-homeiv09.webp",
          revision: "423f0e56001a1ac476b8b4e6b4c8a05b",
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
          url: "/assets/img/homevisit/img-sub-homevisit05.webp",
          revision: "08c5efa20c9f591f8707ff0ce941ea5c",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit06-1.png",
          revision: "093132d299ea01128b4c4ffe5bf321c5",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit06.png",
          revision: "8b399ca167c45c20551dedc580d8a68b",
        },
        {
          url: "/assets/img/homevisit/img-sub-homevisit07.webp",
          revision: "bf183a2e90bb4f51bc126899697d2f7f",
        },
        {
          url: "/assets/img/icon/icon-acne.svg",
          revision: "7ab8e9c2480188f40bc35743a5fb35d2",
        },
        {
          url: "/assets/img/icon/icon-antiaging.svg",
          revision: "c9578d7e406f3778c77a34bcafb09ae7",
        },
        {
          url: "/assets/img/icon/icon-arthritis.svg",
          revision: "5fd12c72ee26efb14a428e55d671e3be",
        },
        {
          url: "/assets/img/icon/icon-autoimmune.svg",
          revision: "2b63e9f438313750b9e721143f6e5913",
        },
        {
          url: "/assets/img/icon/icon-covid.svg",
          revision: "e44391e3e66aced79162eb56f57c5b26",
        },
        {
          url: "/assets/img/icon/icon-hairloss.svg",
          revision: "fbe61b847dc8ee1081150e758456f63b",
        },
        {
          url: "/assets/img/icon/icon-scars.svg",
          revision: "af5972c2e0397587e887405a6e86208d",
        },
        {
          url: "/assets/img/icon/icon-stroke.svg",
          revision: "03475482d06fd6e586784db512357221",
        },
        {
          url: "/assets/img/icon_lamp.svg",
          revision: "df58b3ea2b413520df4fa693e95741cf",
        },
        {
          url: "/assets/img/icon_pdf.svg",
          revision: "365566511664053b97a60932697aa5bc",
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
          url: "/assets/img/img-Nursing copy.png",
          revision: "1410e756b7d2ecaf3df75ae380bf34a3",
        },
        {
          url: "/assets/img/img-Nursing.png",
          revision: "1410e756b7d2ecaf3df75ae380bf34a3",
        },
        {
          url: "/assets/img/img-article01 copy.png",
          revision: "766adf7e5056bf477c0db425389fdcd2",
        },
        {
          url: "/assets/img/img-article01.png",
          revision: "766adf7e5056bf477c0db425389fdcd2",
        },
        {
          url: "/assets/img/img-article02 copy.png",
          revision: "f4aad748a0eb2195a7a5f74075df33e4",
        },
        {
          url: "/assets/img/img-article02.png",
          revision: "f4aad748a0eb2195a7a5f74075df33e4",
        },
        {
          url: "/assets/img/img-banner-consult.png",
          revision: "2e5350b399b04c8d9095c78a15c63b96",
        },
        {
          url: "/assets/img/img-banner-home.png",
          revision: "faddcf59f9bd4a345744c4804d644120",
        },
        {
          url: "/assets/img/img-diagnosticPage copy.png",
          revision: "47b17ec2f6a48f67085ef7c4495971e1",
        },
        {
          url: "/assets/img/img-diagnosticPage.png",
          revision: "47b17ec2f6a48f67085ef7c4495971e1",
        },
        {
          url: "/assets/img/img-homeVisit copy.png",
          revision: "73f60a915502b99f2440c2a56a0326ff",
        },
        {
          url: "/assets/img/img-homeVisit.png",
          revision: "73f60a915502b99f2440c2a56a0326ff",
        },
        {
          url: "/assets/img/img-homeiv copy.png",
          revision: "5da90cbb21e538f15a1daa51c868158d",
        },
        {
          url: "/assets/img/img-homeiv.png",
          revision: "5da90cbb21e538f15a1daa51c868158d",
        },
        {
          url: "/assets/img/img-potential.png",
          revision: "ac16a417395841064452b983787f7001",
        },
        {
          url: "/assets/img/img-question copy.png",
          revision: "d24a515596311ad72dfeb6bc41c4d84a",
        },
        {
          url: "/assets/img/img-question.png",
          revision: "d24a515596311ad72dfeb6bc41c4d84a",
        },
        {
          url: "/assets/img/img-telemedicine copy.png",
          revision: "9f0afc469661bde718e95f6290b400fa",
        },
        {
          url: "/assets/img/img-telemedicine.png",
          revision: "9f0afc469661bde718e95f6290b400fa",
        },
        {
          url: "/assets/img/img-therapis copy.png",
          revision: "32abdb44137a3a47e590f809364dd7bf",
        },
        {
          url: "/assets/img/img-therapis.png",
          revision: "32abdb44137a3a47e590f809364dd7bf",
        },
        {
          url: "/assets/img/img-video01.png",
          revision: "4dba2b6547da3e7612d2febe79b31b1b",
        },
        {
          url: "/assets/img/img-video02.png",
          revision: "b4decb389090c127f8921354d821c9d0",
        },
        {
          url: "/assets/img/img-video03.png",
          revision: "f2354b9d685b11141ff986828b61a495",
        },
        {
          url: "/assets/img/img-video04.png",
          revision: "7c2d967381fee4c4cb59f58cca7daa2e",
        },
        {
          url: "/assets/img/img-why copy.png",
          revision: "5cea09c992a5dd336e6a4ed9f4473f70",
        },
        {
          url: "/assets/img/img-why.png",
          revision: "5cea09c992a5dd336e6a4ed9f4473f70",
        },
        {
          url: "/assets/img/logo copy.png",
          revision: "dc048e51453c489c51a2d0cc7bc9db3d",
        },
        {
          url: "/assets/img/logo-atensi copy.png",
          revision: "9f6683fdfe884281bfa257a7d51bdbf8",
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
          url: "/assets/img/logo-white copy.png",
          revision: "87477f832d9386a10fac0ebf9d270dd0",
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
          url: "/assets/img/maps.png",
          revision: "a7615d875af63393a3bd83402ca4a64d",
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
          url: "/assets/img/plus-vector copy.svg",
          revision: "7bb72b8bee1a8e5d01773482174c81df",
        },
        {
          url: "/assets/img/plus-vector.svg",
          revision: "e69fcc575914c867503d5a4c7c01cfde",
        },
        {
          url: "/assets/img/polygon.svg",
          revision: "01e476593ed71e0aae606628570a98d3",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine01.png",
          revision: "b430c26fa0ac0bf4ccf2383481b83412",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine01.webp",
          revision: "bb8afdf3f611c2a8af55d7e85168e24e",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine02.png",
          revision: "2d030d83c4c038ca8aaa72e7e8ef6632",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine02.webp",
          revision: "249e1d95af51b30874ada7ce420c2f98",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine03.png",
          revision: "97011e4665c92ed166731eff6a9b8345",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine03.webp",
          revision: "f751c8847b4e9ffc1f35ff1daf0c2d03",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine04.png",
          revision: "771de6dfbf5eacdbdc5da1c34598bb61",
        },
        {
          url: "/assets/img/remote-telemedicine/img-sub-remotetelemedicine04.webp",
          revision: "6a3a4b9899f915e04dc9d23ef9691a04",
        },
        {
          url: "/assets/img/scars/banner-scars.png",
          revision: "8a2426bf8216f44db92bbbcfbed5052e",
        },
        {
          url: "/assets/img/scars/scars01.png",
          revision: "fe50a12208397b4688ff94788369adb2",
        },
        {
          url: "/assets/img/scars/scars02.png",
          revision: "9f9b58ec40653225915d978669c9980d",
        },
        {
          url: "/assets/img/stroke/banner-stroke.png",
          revision: "b2a5dcadbe9b6c836f0c6fe955e7f6e1",
        },
        {
          url: "/assets/img/stroke/stroke01.png",
          revision: "b39c1fe76ff5870e21d5b9a4ae6fbcd8",
        },
        {
          url: "/assets/img/stroke/stroke02.png",
          revision: "e2248b022538d221ff59fb5435eeb5b3",
        },
        {
          url: "/assets/js/index.js",
          revision: "275c850b34f692410d58ab988c12efd4",
        },
        {
          url: "/assets/js/main.js",
          revision: "cee2b6641f4996f1fbc6507f19443141",
        },
        {
          url: "/assets/js/swiper-bundle.min.js",
          revision: "b489e646c6e51c2451a55f8ddb2f6efc",
        },
        {
          url: "/assets/js/theme.js",
          revision: "86eb7457e8f91391e531d7f8d3b7f4cf",
        },
        {
          url: "/assets/pdf/acne.pdf",
          revision: "3c1bf67f110064cb49b6d83b44ffb25f",
        },
        {
          url: "/assets/pdf/anti-aging.pdf",
          revision: "b9e1f9ef04da2030f4c5f6c410be12c5",
        },
        {
          url: "/assets/pdf/arthritis.pdf",
          revision: "e29e4e337a55dfb50928ec3fc678d4a6",
        },
        {
          url: "/assets/pdf/auto-imun.pdf",
          revision: "edcc3348f97bba5610911de7d29d3fa3",
        },
        {
          url: "/assets/pdf/covid-19.pdf",
          revision: "21e8c12ea77ac465ac3ab7464f506aff",
        },
        {
          url: "/assets/pdf/hair-loss.pdf",
          revision: "ce2a63c8c4004b29d6de8c7bfdf250c9",
        },
        {
          url: "/assets/pdf/scars.pdf",
          revision: "bbce00100824cabe7f107e15b6eb60c8",
        },
        {
          url: "/assets/pdf/stemcell-for-hair-loss.pdf",
          revision: "ce2a63c8c4004b29d6de8c7bfdf250c9",
        },
        {
          url: "/assets/pdf/stroke.pdf",
          revision: "12418a42bf0b4c198ebd8a7e589a7985",
        },
        {
          url: "/assets/scss/_breakpoints.scss",
          revision: "aed319be3f28d177c7249bb36ee8f2a6",
        },
        {
          url: "/assets/scss/_buttons.scss",
          revision: "2beff5b555b1f541e27db97bb52a4ce5",
        },
        {
          url: "/assets/scss/_form.scss",
          revision: "e8c7f1f5f069bf408c088b205ddc147a",
        },
        {
          url: "/assets/scss/_global.scss",
          revision: "b8cf1d9bb8e77d1f78e04ee1c34ce268",
        },
        {
          url: "/assets/scss/_mixins.scss",
          revision: "b7752f591fc9f3d1780bb8f099245783",
        },
        {
          url: "/assets/scss/_variables.scss",
          revision: "5da6e44d44fe9c4741746565475e46a7",
        },
        {
          url: "/assets/scss/style.scss",
          revision: "00de164b53f78e0324225b9f6f49a427",
        },
        { url: "/favicon.svg", revision: "bd05f2b38ed6735d34e33a669c207e91" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
