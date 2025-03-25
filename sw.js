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
    let t = {};
    const c = (e) => n(e, r),
      d = { module: { uri: r }, exports: t, require: c };
    s[r] = Promise.all(i.map((e) => d[e] || c(e))).then((e) => (o(...e), t));
  };
}
define(["./workbox-b833909e"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-8TJfAmoS.css", revision: null },
        { url: "assets/index-Bah43YHr.js", revision: null },
        { url: "assets/workbox-window.prod.es5-B9K5rw8f.js", revision: null },
        { url: "index.html", revision: "b8d2c9238e274f1d6ed563225aaf3f5d" },
        {
          url: "apple-touch-icon.png",
          revision: "ffda61046e4c9eee9131761a6e586066",
        },
        { url: "favicon.ico", revision: "1ba2ae710d927f13d483fd5d1e548c9b" },
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
