let activationCheck = null;
self.__requestWorkerActivation = () => {
  if (activationCheck) {
    return activationCheck;
  }
  activationCheck = (async () => {
    const scope = self.registration.scope;
    const base = new URL(scope).pathname;
    const clients = (
      await self.clients.matchAll({
        includeUncontrolled: true,
        type: "window",
      })
    )
      .filter((client) => client.url.startsWith(scope))
      .filter(
        (client) =>
          !/^[a-z0-9]{6}\/[a-z0-9]+\/[a-z0-9]+\//.test(
            new URL(client.url).pathname.slice(base.length),
          ),
      );
    const ready = await Promise.all(
      clients.map(
        (client) =>
          new Promise((resolve) => {
            const channel = new MessageChannel();
            const finish = (value) => {
              clearTimeout(timer);
              channel.port1.close();
              resolve(value);
            };
            const timer = setTimeout(() => finish(false), 500);
            channel.port1.onmessage = (event) => finish(event.data === true);
            try {
              client.postMessage(
                {
                  type: "runtime-handover-ready",
                },
                [channel.port2],
              );
            } catch {
              finish(false);
            }
          }),
      ),
    );
    if (ready.every(Boolean)) {
      await self.skipWaiting();
    }
  })().finally(() => {
    activationCheck = null;
  });
  return activationCheck;
};
importScripts("j0n96/bd8ciw.js");
self.addEventListener("install", (event) =>
  event.waitUntil(self.__requestWorkerActivation()),
);
self.addEventListener("message", (event) => {
  if (event.data?.type === "runtime-activate-compatible") {
    event.waitUntil(self.__requestWorkerActivation());
  }
});
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);
function skipProxy(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname;
    if (
      parsed.origin !== self.location.origin &&
      (host === "cdn.jsdelivr.net" ||
        host.endsWith(".jsdelivr.net") ||
        host === "luminsdk.com" ||
        host.endsWith(".luminsdk.com"))
    ) {
      return true;
    }
    return /^\/(?:stores|covers|cdn)\//.test(parsed.pathname);
  } catch {
    return false;
  }
}
self.addEventListener("fetch", (event) => {
  if (skipProxy(event.request.url)) {
    return;
  }
  if (_eqvdt8h.shouldRoute(event)) {
    event.respondWith(_eqvdt8h.route(event));
  }
});
(() => {
  var config = {
    target: "svg",
    keys: [
      "BNBpAqHsLKmf0hnMpBi2ZbKuMc3VdYD7B9f5Tl+s0ZK5mZd31OUfz6L+6w0rBp0z+cTsY6IynsKifQLzoZP8Z+Q=",
    ],
    seq: 1794321571,
    message: "_cmtdouam3c",
    manifestFile: "0fec41b45cf4.json",
    signatureFile: "82d4cd983bf1.sig",
    discovery: [
      "https://cdn.jsdelivr.net/gh/logarchive/logsvg@main/",
      "https://cdn.jsdelivr.net/gh/logarchive/logsvg@main/",
      "https://cdn.jsdelivr.net/gh/logarchive/logsvg@main/",
      "https://cdn.jsdelivr.net/gh/logarchive/logsvg@main/",
      "https://cdn.jsdelivr.net/gh/logarchive/logsvg@main/",
      "https://cdn.jsdelivr.net/gh/logarchive/logsvg@main/",
      "https://raw.githubusercontent.com/logarchive/logsvg/main/",
    ],
    refreshMs: 600000,
  };
  function T(health, now) {
    let n = new Map(Object.entries(health ?? {}));
    let l = (f) =>
      n.get(f) ?? {
        failures: 0,
        until: 0,
      };
    return {
      down: (f) => l(f).until > now(),
      ok: (f) => void n.delete(f),
      fail(f) {
        let failures = l(f).failures + 1;
        n.set(f, {
          failures,
          until: now() + Math.min(15000 * 2 ** (failures - 1), 1800000),
        });
      },
      snapshot: () =>
        Object.fromEntries([...n].filter(([, f]) => f.until > now())),
    };
  }
  function C(t, e) {
    return t + e.split("/").map(encodeURIComponent).join("/");
  }
  function W(t, e, hedgeMs) {
    if (t.length === 0) {
      return Promise.resolve(null);
    }
    return new Promise((resolve) => {
      let f = [];
      let d = [];
      let set = new Set();
      let p = 0;
      let S = false;
      let A = (a) => {
        if (!S) {
          S = true;
          d.forEach(clearTimeout);
          f.forEach((s) => s.abort());
          resolve(a);
        }
      };
      let h = (a) => {
        if (S || a < 0 || a >= t.length || set.has(a)) {
          return;
        }
        set.add(a);
        let abortController = new AbortController();
        f.push(abortController);
        e(t[a], abortController.signal)
          .catch(() => null)
          .then((u) => {
            if (u) {
              return A(u);
            }
            p += 1;
            if (p === t.length) {
              return A(null);
            }
            h(t.findIndex((o, r) => !set.has(r)));
          });
      };
      h(0);
      for (let a = 1; a < t.length; a++) {
        d.push(setTimeout(() => h(a), a * hedgeMs));
      }
    });
  }
  function I({ fetchImpl, health, origin, hedgeMs = 250, timeoutMs = 8000 }) {
    async function d(h, a, s, u, cache) {
      let bytes;
      try {
        let c = await fetchImpl(C(h, a), {
          mode: "cors",
          credentials: "omit",
          cache,
          signal: AbortSignal.any([u, AbortSignal.timeout(timeoutMs)]),
        });
        if (c.status === 404) {
          return null;
        }
        if (!c.ok) {
          throw new Error("bad status");
        }
        bytes = new Uint8Array(await c.arrayBuffer());
      } catch {
        if (!u.aborted) {
          health.fail(h);
        }
        return null;
      }
      if (await s(bytes)) {
        return (
          health.ok(h),
          {
            bytes,
            base: h,
          }
        );
      }
      return (health.fail(h), null);
    }
    async function fetchVerified(h, a, s, u = "default") {
      let o = [...new Set(s)].filter((b) => b !== origin);
      let r = o.filter((b) => !health.down(b));
      let c = r.length > 0 ? r : o;
      let v = await W(c, (b, q) => d(b, h, a, q, u), hedgeMs);
      if (v || !origin) {
        return v;
      }
      return d(origin, h, a, new AbortController().signal, u);
    }
    async function p(h, a, s) {
      let u = async () => true;
      let signal = new AbortController().signal;
      let [r, c] = await Promise.all([
        d(h, a.manifestFile, u, signal, "no-store"),
        d(h, a.signatureFile, u, signal, "no-store"),
      ]);
      if (!r || !c) {
        return null;
      }
      let signature = new TextDecoder().decode(c.bytes);
      let b = await s(r.bytes, signature);
      if (b) {
        return {
          manifest: b,
          bytes: r.bytes,
          signature,
          base: h,
        };
      }
      return (health.fail(h), null);
    }
    async function discover(h, a, s) {
      let u = [...new Set(h)].filter((c) => c !== origin);
      let o = u.filter((c) => !health.down(c));
      return (
        await Promise.all((o.length > 0 ? o : u).map((c) => p(c, a, s)))
      ).filter(Boolean);
    }
    async function discoverOrigin(h, a) {
      if (!origin) {
        return [];
      }
      let s = await p(origin, h, a);
      if (s) {
        return [s];
      }
      return [];
    }
    return {
      fetchVerified,
      discover,
      discoverOrigin,
    };
  }
  var textDecoder = new TextDecoder();
  var V = /^[0-9a-f]{64}$/;
  var X = /^[A-Za-z0-9_-]{1,120}$/;
  var map = new Map();
  function D(t) {
    let e = atob(t.trim().replace(/-/g, "+").replace(/_/g, "/"));
    let n = new Uint8Array(e.length);
    for (let l = 0; l < e.length; l++) {
      n[l] = e.charCodeAt(l);
    }
    return n;
  }
  async function B(t) {
    let e = new Uint8Array(await crypto.subtle.digest("SHA-256", t));
    return Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
  }
  function J(t) {
    if (!map.has(t)) {
      map.set(
        t,
        crypto.subtle.importKey(
          "raw",
          D(t),
          {
            name: "ECDSA",
            namedCurve: "P-256",
          },
          false,
          ["verify"],
        ),
      );
    }
    return map.get(t);
  }
  async function N(keys, e, n) {
    let l;
    try {
      l = D(n);
    } catch {
      return null;
    }
    if (l.length !== 64) {
      return null;
    }
    for (let f of keys) {
      try {
        if (
          await crypto.subtle.verify(
            {
              name: "ECDSA",
              hash: "SHA-256",
            },
            await J(f),
            l,
            e,
          )
        ) {
          return f;
        }
      } catch {}
    }
    return null;
  }
  function Q(path) {
    if (
      typeof path !== "string" ||
      path.length === 0 ||
      path.length > 300 ||
      path.startsWith("/") ||
      /[\\?#\u0000-\u001f]/.test(path)
    ) {
      return false;
    }
    return path.split("/").every((e) => e !== "" && e !== "." && e !== "..");
  }
  function tt(t) {
    try {
      return new URL(t).protocol === "https:" && t.endsWith("/");
    } catch {
      return false;
    }
  }
  function R(t, target) {
    let n;
    try {
      n = JSON.parse(textDecoder.decode(t));
    } catch {
      return null;
    }
    if (
      !n ||
      n.v !== 1 ||
      n.target !== target ||
      !Number.isSafeInteger(n.seq) ||
      n.seq < 1 ||
      !X.test(n.id ?? "") ||
      !Array.isArray(n.files) ||
      n.files.length === 0 ||
      n.files.length > 4000
    ) {
      return null;
    }
    let files = new Map();
    for (let p of n.files) {
      if (
        !p ||
        !Q(p.path) ||
        files.has(p.path) ||
        !V.test(p.sha256) ||
        !Number.isSafeInteger(p.size) ||
        p.size < 0
      ) {
        return null;
      }
      files.set(p.path, {
        sha256: p.sha256,
        size: p.size,
      });
    }
    let f = Array.isArray(n.documents) ? n.documents : [];
    let aliases = n.aliases && typeof n.aliases === "object" ? n.aliases : {};
    if (
      !files.has(n.entry) ||
      !f.every((p) => files.has(p)) ||
      !Object.values(aliases).every((p) => files.has(p))
    ) {
      return null;
    }
    let y = Array.isArray(n.mirrors) ? n.mirrors.filter(tt) : [];
    return {
      seq: n.seq,
      id: n.id,
      entry: n.entry,
      documents: new Set(f),
      aliases,
      mirrors: y,
      files,
    };
  }
  var et = 60000;
  var nt = /^\d+$/;
  function P({ caches, scope, prefix, target, now }) {
    let d = `${prefix}-meta`;
    let y = `${scope}?state`;
    let p = `${scope}?m`;
    let S = `${scope}?s`;
    let map = new Map();
    let h = null;
    let a = null;
    let s = Promise.resolve();
    let u = (i) => `${prefix}-${i}`;
    let o = (i) => C(scope, i);
    function load() {
      h ??= (async () => {
        let i = {};
        try {
          let m = await (await caches.open(d)).match(y);
          if (m) {
            i = await m.json();
          }
        } catch {}
        a = {
          current: i.current ?? null,
          previous: i.previous ?? null,
          floor: i.floor ?? 0,
          pins: i.pins ?? {},
          health: i.health ?? {},
        };
        return a;
      })();
      return h;
    }
    function save() {
      s = s
        .then(async () => {
          await (
            await caches.open(d)
          ).put(
            y,
            new Response(JSON.stringify(a), {
              headers: {
                "content-type": "application/json",
              },
            }),
          );
        })
        .catch(() => {});
      return s;
    }
    async function putFile(i, m, w, _) {
      await (
        await caches.open(u(i))
      ).put(
        o(m),
        new Response(w, {
          headers: {
            "content-type": _,
          },
        }),
      );
    }
    async function getFile(i, m) {
      return (await (await caches.open(u(i))).match(o(m))) ?? null;
    }
    async function saveManifest(i, m, w) {
      let _ = await caches.open(u(i));
      await _.put(p, new Response(m));
      await _.put(S, new Response(w));
    }
    async function manifestFor(i) {
      if (map.has(i)) {
        return map.get(i);
      }
      let m = await (await caches.open(u(i))).match(p);
      let w = m ? R(new Uint8Array(await m.arrayBuffer()), target) : null;
      if (w) {
        map.set(i, w);
      }
      return w;
    }
    async function drop(i) {
      map.delete(i);
      await caches.delete(u(i));
    }
    async function buildSeqs() {
      let i = `${prefix}-`;
      return (await caches.keys())
        .filter((m) => m.startsWith(i) && nt.test(m.slice(i.length)))
        .map((m) => Number(m.slice(i.length)));
    }
    async function pin(i, seq) {
      if (!(!i || !a)) {
        a.pins[i] = {
          seq,
          at: now(),
        };
        await save();
      }
    }
    async function promote(i, id) {
      let current = (await load()).current;
      if (current && current.seq !== i) {
        a.previous = current;
      }
      a.current = {
        seq: i,
        id,
      };
      a.floor = Math.max(a.floor, i);
      await save();
    }
    async function collect(i) {
      await load();
      for (let [w, _] of Object.entries(a.pins)) {
        if (!i.has(w) && now() - _.at > et) {
          delete a.pins[w];
        }
      }
      let m = new Set([
        a.current?.seq,
        a.previous?.seq,
        ...Object.values(a.pins).map((w) => w.seq),
      ]);
      for (let w of await buildSeqs()) {
        if (!m.has(w)) {
          await drop(w);
        }
      }
      await save();
    }
    return {
      load,
      save,
      putFile,
      getFile,
      saveManifest,
      manifestFor,
      drop,
      buildSeqs,
      pin,
      promote,
      collect,
    };
  }
  var rt = {
    html: "text/html; charset=utf-8",
    svg: "image/svg+xml",
    js: "text/javascript; charset=utf-8",
    mjs: "text/javascript; charset=utf-8",
    css: "text/css; charset=utf-8",
    json: "application/json",
    wasm: "application/wasm",
    txt: "text/plain; charset=utf-8",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    avif: "image/avif",
    ico: "image/x-icon",
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    otf: "font/otf",
    mp3: "audio/mpeg",
    ogg: "audio/ogg",
    mp4: "video/mp4",
    webm: "video/webm",
  };
  function $(t) {
    return (
      rt[t.slice(t.lastIndexOf(".") + 1).toLowerCase()] ??
      "application/octet-stream"
    );
  }
  function k(t) {
    try {
      return decodeURIComponent(t);
    } catch {
      return null;
    }
  }
  function K(url, scope, n) {
    let l;
    try {
      l = new URL(url);
    } catch {
      return null;
    }
    let f = new URL(scope);
    if (l.origin === f.origin) {
      if (l.pathname.startsWith(f.pathname)) {
        return k(l.pathname.slice(f.pathname.length));
      }
      return null;
    }
    if (n) {
      return null;
    }
    let y = (
      l.hostname === "cdn.jsdelivr.net"
        ? /^\/gh\/[^/@]+\/[^/@]+@[^/]+\/(.+)$/
        : l.hostname === "raw.githubusercontent.com"
          ? /^\/[^/]+\/[^/]+\/[^/]+\/(.+)$/
          : null
    )?.exec(l.pathname);
    if (y) {
      return k(y[1]);
    }
    return null;
  }
  function z(t, e, n) {
    if (e === "") {
      if (n) {
        return t.entry;
      }
      return null;
    }
    if (Object.hasOwn(t.aliases, e)) {
      return t.aliases[e];
    }
    if (t.files.has(e)) {
      if (n && !t.documents.has(e)) {
        return null;
      }
      return e;
    }
    return null;
  }
  var length = 4;
  function H({ config, store, mirrors, health, clients, now }) {
    let y = {
      manifestFile: config.manifestFile,
      signatureFile: config.signatureFile,
    };
    let p = null;
    let S = 0;
    let accept = async (o, r) => {
      if (await N(config.keys, o, r)) {
        return R(o, config.target);
      }
      return null;
    };
    async function h(o) {
      let r = Math.max(o.floor, config.seq);
      let c = (b) =>
        b.filter(
          (q) => q.manifest.seq >= r && q.manifest.seq > (o.current?.seq ?? 0),
        );
      let v = c(await mirrors.discover(config.discovery, y, accept));
      if (v.length === 0) {
        v = c(await mirrors.discoverOrigin(y, accept));
      }
      return v.sort((b, q) => q.manifest.seq - b.manifest.seq)[0] ?? null;
    }
    async function install(o) {
      let { manifest } = o;
      let c = await store.load();
      let v = [];
      for (let g of [c.current, c.previous]) {
        let j = g ? await store.manifestFor(g.seq) : null;
        if (j) {
          v.push({
            seq: g.seq,
            manifest: j,
          });
        }
      }
      let b = [...manifest.mirrors, ...config.discovery];
      let q = [...manifest.files];
      let x = false;
      await store.drop(manifest.seq);
      async function M(g, j) {
        for (let i of v) {
          if (i.manifest.files.get(g)?.sha256 !== j.sha256) {
            continue;
          }
          let m = await store.getFile(i.seq, g);
          if (m) {
            await store.putFile(
              manifest.seq,
              g,
              new Uint8Array(await m.arrayBuffer()),
              $(g),
            );
            return true;
          }
        }
        return false;
      }
      async function E([g, j]) {
        if (await M(g, j)) {
          return true;
        }
        let i = async (w) => w.length === j.size && (await B(w)) === j.sha256;
        let m = await mirrors.fetchVerified(g, i, b);
        if (m) {
          return (await store.putFile(manifest.seq, g, m.bytes, $(g)), true);
        }
        return false;
      }
      async function O() {
        for (let g = q.shift(); g && !x; g = q.shift()) {
          if (!(await E(g).catch(() => false))) {
            x = true;
          }
        }
      }
      await Promise.all(
        Array.from(
          {
            length,
          },
          O,
        ),
      );
      if (x) {
        return (await store.drop(manifest.seq), false);
      }
      return (
        await store.saveManifest(manifest.seq, o.bytes, o.signature),
        await store.promote(manifest.seq, manifest.id),
        true
      );
    }
    async function s() {
      let o = await store.load();
      let r = await h(o);
      if (r) {
        await install(r);
      }
      o.health = health.snapshot();
      let c = new Set(
        (
          await clients.matchAll({
            includeUncontrolled: true,
          })
        ).map((v) => v.id),
      );
      await store.collect(c);
      return !!r;
    }
    function refresh({ force = false } = {}) {
      return (
        p ||
        (!force && now() - S < config.refreshMs
          ? Promise.resolve(false)
          : ((p = s()
              .catch(() => false)
              .finally(() => {
                S = now();
                p = null;
              })),
            p))
      );
    }
    return {
      refresh,
      install,
      accept,
    };
  }
  async function st(scope, config) {
    return `b${(await B(new TextEncoder().encode(`${scope}|${config.keys[0]}`))).slice(0, 10)}`;
  }
  function Y({ config, scope, caches, fetchImpl, clients, now = Date.now }) {
    let ready = (async () => {
      let store = P({
        caches,
        scope,
        prefix: await st(scope, config),
        target: config.target,
        now,
      });
      let u = await store.load();
      let health = T(u.health, now);
      let r = I({
        fetchImpl,
        health,
        origin: scope,
      });
      let releases = H({
        config,
        store,
        mirrors: r,
        health,
        clients,
        now,
      });
      return {
        store,
        releases,
      };
    })();
    async function p(store, u, o, r) {
      let c = await store.load();
      let v = r ? undefined : c.pins[u.clientId]?.seq;
      let b = Object.values(c.pins).map((x) => x.seq);
      let q = [v, c.current?.seq, c.previous?.seq, ...b].filter(
        (x) => x !== undefined,
      );
      for (let x of new Set(q)) {
        let M = await store.manifestFor(x);
        let E = M ? z(M, o, r) : null;
        let response = E ? await store.getFile(x, E) : null;
        if (response) {
          return {
            seq: x,
            response,
          };
        }
      }
      return null;
    }
    async function S(s, u, o) {
      try {
        let { store } = await ready;
        let c = await p(store, s, u, o);
        if (c) {
          if (o) {
            store.pin(s.resultingClientId, c.seq).catch(() => {});
          }
          return c.response;
        }
      } catch {}
      return fetchImpl(s.request);
    }
    function handleFetch(s) {
      let { request } = s;
      if (request.method !== "GET" || request.headers.has("range")) {
        return;
      }
      let o = request.mode === "navigate";
      let r = K(request.url, scope, o);
      if (r !== null) {
        if (o) {
          s.waitUntil(
            ready.then(({ releases }) => releases.refresh()).catch(() => {}),
          );
        }
        s.respondWith(S(s, r, o));
      }
    }
    function handleMessage(s) {
      if (s.data?.type === config.message) {
        s.waitUntil(
          ready
            .then(({ releases }) =>
              releases.refresh({
                force: true,
              }),
            )
            .catch(() => {}),
        );
      }
    }
    function start() {
      return ready.then(({ releases }) => releases.refresh()).catch(() => {});
    }
    return {
      handleFetch,
      handleMessage,
      start,
      ready,
    };
  }
  var L = Y({
    config,
    scope: self.registration.scope,
    caches: self.caches,
    fetchImpl: (...t) => self.fetch(...t),
    clients: self.clients,
  });
  self.addEventListener("fetch", L.handleFetch);
  self.addEventListener("message", L.handleMessage);
  self.addEventListener("activate", () => void L.start());
})();
