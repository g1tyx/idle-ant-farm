if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, o) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[r]) return;
    let c = {};
    const t = (e) => n(e, r),
      l = { module: { uri: r }, exports: c, require: t };
    s[r] = Promise.all(i.map((e) => l[e] || t(e))).then((e) => (o(...e), c));
  };
}
define(["./workbox-b833909e"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-BEeSC-Ky.css", revision: null },
        { url: "assets/index-D3oExhvv.js", revision: null },
        { url: "assets/workbox-window.prod.es5-B9K5rw8f.js", revision: null },
        { url: "index.html", revision: "bcfdac7b224e73081c3d5154d83396b7" },
        {
          url: "apple-touch-icon.png",
          revision: "26a8ca21bb819327ec00f0a4e81d537a",
        },
        { url: "favicon.ico", revision: "2322f94c309851c8b331ad9347a0e731" },
        {
          url: "masked-icon.svg",
          revision: "70bdd1ca80b4c84fa5398ca4c81cda99",
        },
        {
          url: "pwa-192x192.png",
          revision: "c824672d0198b650b341146e88daac8b",
        },
        {
          url: "pwa-512x512.png",
          revision: "1ec4d0f0a3b1375e486f7d505c0695c5",
        },
        {
          url: "manifest.webmanifest",
          revision: "a0493116bf6328b2898eb74ffd063e7f",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    ),
    e.registerRoute(
      /^https:\/\/fonts\.googleapis\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 31536e3 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      "GET"
    );
});
