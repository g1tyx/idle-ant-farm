if (!self.define) {
    let e, s = {};
    const i = (i, n) => (i = new URL(i + ".js",n).href,
    s[i] || new Promise((s => {
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = i,
            e.onload = s,
            document.head.appendChild(e)
        } else
            e = i,
            importScripts(i),
            s()
    }
    )).then(( () => {
        let e = s[i];
        if (!e)
            throw new Error(`Module ${i} didn’t register its module`);
        return e
    }
    )));
    self.define = (n, o) => {
        const r = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (s[r])
            return;
        let t = {};
        const c = e => i(e, r)
          , a = {
            module: {
                uri: r
            },
            exports: t,
            require: c
        };
        s[r] = Promise.all(n.map((e => a[e] || c(e)))).then((e => (o(...e),
        t)))
    }
}
define(["./workbox-b833909e"], (function(e) {
    "use strict";
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute([{
        url: "assets/index-a8COJtpE.js",
        revision: null
    }, {
        url: "assets/index-B_qBzfib.css",
        revision: null
    }, {
        url: "assets/workbox-window.prod.es5-B9K5rw8f.js",
        revision: null
    }, {
        url: "index.html",
        revision: "5ea8e1103e0b0899a4b4c058f022eb92"
    }, {
        url: "apple-touch-icon.png",
        revision: "26a8ca21bb819327ec00f0a4e81d537a"
    }, {
        url: "favicon.ico",
        revision: "2322f94c309851c8b331ad9347a0e731"
    }, {
        url: "masked-icon.svg",
        revision: "70bdd1ca80b4c84fa5398ca4c81cda99"
    }, {
        url: "pwa-192x192.png",
        revision: "c824672d0198b650b341146e88daac8b"
    }, {
        url: "pwa-512x512.png",
        revision: "1ec4d0f0a3b1375e486f7d505c0695c5"
    }, {
        url: "manifest.webmanifest",
        revision: "a0493116bf6328b2898eb74ffd063e7f"
    }], {}),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),
    e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-cache",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 10,
            maxAgeSeconds: 31536e3
        }), new e.CacheableResponsePlugin({
            statuses: [0, 200]
        })]
    }), "GET")
}
));
