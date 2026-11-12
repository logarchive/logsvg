import { j as j_1, r as r_1, c } from "./react-BNEptbwn-1570f54e.js";
import {
  R as R_1,
  A as A_1,
  m as m_1,
  a as Fs,
  M as M_1,
} from "./motion-xqCDm5A1-1570f54e.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./config-D1IMkxRT-1570f54e.js",
      "./react-BNEptbwn-1570f54e.js",
      "./motion-xqCDm5A1-1570f54e.js",
      "./DarkVeil-DH-OOCEV-1570f54e.js",
      "./ogl-BWe_HKY6-1570f54e.js",
      "./boot-CK7DhGn3-1570f54e.js",
      "./proxy-runtime-hRo6K69j-1570f54e.js",
      "./AiPage-CzTVmBC0-1570f54e.js",
      "./fingerprint-Y5nV5FVa-1570f54e.js",
      "./markdown-BIBY1JuI-1570f54e.js",
      "./markdown-C43gFMv0-1570f54e.css",
      "./AiPage-JGgkj1ET-1570f54e.css",
      "./GamesPage-CSZVFk4Y-1570f54e.js",
      "./GamesPage--YRYDVtw-1570f54e.css",
      "./SettingsPage-3QUCS4Cs-1570f54e.js",
      "./settings-page-CH8OvB2r-1570f54e.css",
      "./AccountPage-c65yezF7-1570f54e.js",
      "./AccountPage-fg4fizGa-1570f54e.css",
      "./PlusPage-Cwept05c-1570f54e.js",
      "./PlusPage-vOvT9Zss-1570f54e.css",
    ]),
) => i.map((i) => d[i]);
const un = (e) => {
  throw TypeError(e);
};
const Ms = (e, t, n) => {
  if (t in e) {
    return Object.defineProperty(e, t, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: n,
    });
  }
  return (e[t] = n);
};
const Se = (e, t, n) => Ms(e, typeof t !== "symbol" ? `${t}` : t, n);
const Et = (e, t, n) => t.has(e) || un(`Cannot ${n}`);
const o = (e, t, n) => {
  Et(e, t, "read from private field");
  if (n) {
    return n.call(e);
  }
  return t.get(e);
};
const ie = (e, t, n) => {
  if (t.has(e)) {
    return un("Cannot add the same private member more than once");
  }
  if (t instanceof WeakSet) {
    return t.add(e);
  }
  return t.set(e, n);
};
const z = (e, t, n, r) => {
  Et(e, t, "write to private field");
  if (r) {
    r.call(e, n);
  } else {
    t.set(e, n);
  }
  return n;
};
const V = (e, t, n) => {
  Et(e, t, "access private method");
  return n;
};
(() => {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) {
    r(i);
  }
  new MutationObserver((i) => {
    for (const a of i) {
      if (a.type === "childList") {
        for (const u of a.addedNodes) {
          if (u.tagName === "LINK" && u.rel === "modulepreload") {
            r(u);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true,
  });
  function n(i) {
    const a = {};
    if (i.integrity) {
      a.integrity = i.integrity;
    }
    if (i.referrerPolicy) {
      a.referrerPolicy = i.referrerPolicy;
    }
    if (i.crossOrigin === "use-credentials") {
      a.credentials = "include";
    } else if (i.crossOrigin === "anonymous") {
      a.credentials = "omit";
    } else {
      a.credentials = "same-origin";
    }
    return a;
  }
  function r(i) {
    if (i.ep) {
      return;
    }
    i.ep = true;
    const a = n(i);
    fetch(i.href, a);
  }
})();
const dn = (() => {
  const _window = window;
  if (_window.__nh) {
    return _window.__nh;
  }
  const t = {
    ps: History.prototype.pushState,
    rs: History.prototype.replaceState,
  };
  _window.__nh = t;
  return t;
})();
function Tn() {
  const _history = history;
  try {
    Object.defineProperty(_history, "pushState", {
      value: dn.ps.bind(_history),
      configurable: true,
      writable: true,
    });
    Object.defineProperty(_history, "replaceState", {
      value: dn.rs.bind(_history),
      configurable: true,
      writable: true,
    });
  } catch {}
}
function $s(pathname, t = null) {
  history.replaceState(t, "", pathname);
}
Tn();
export const a5 = typeof document !== "undefined" ? document.baseURI : "/";
function Ne(e = "", t = a5) {
  const n = e.trim();
  if (n) {
    if (/^(https?:|data:|blob:)/i.test(n)) {
      return n;
    }
    if (n.startsWith("#")) {
      return new URL(n, t).href;
    }
    return new URL(n.replace(/^\/+/, ""), t).href;
  }
  return new URL(".", t).href;
}
export function a4(e = "", t = a5) {
  return new URL(Ne(e, t)).pathname;
}
function hn() {
  return new URL(".", a5).href;
}
const Bs = "modulepreload";
const qs = (e, t) => new URL(e, t).href;
const pn = {};
const Ee = (t, n, url) => {
  let i = Promise.resolve();
  if (n && n.length > 0) {
    let u = (g) =>
      Promise.all(
        g.map((f) =>
          Promise.resolve(f).then(
            (w) => ({
              status: "fulfilled",
              value: w,
            }),
            (reason) => ({
              status: "rejected",
              reason,
            }),
          ),
        ),
      );
    const d = document.getElementsByTagName("link");
    const m = document.querySelector("meta[property=csp-nonce]");
    const b = m?.nonce || m?.getAttribute("nonce");
    i = u(
      n.map((g) => {
        g = qs(g, url);
        if (g in pn) {
          return;
        }
        pn[g] = true;
        const f = g.endsWith(".css");
        const w = f ? '[rel="stylesheet"]' : "";
        if (url) {
          for (let C = d.length - 1; C >= 0; C--) {
            const N = d[C];
            if (N.href === g && (!f || N.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${g}"]${w}`)) {
          return;
        }
        const linkElement = document.createElement("link");
        linkElement.rel = f ? "stylesheet" : Bs;
        if (!f) {
          linkElement.as = "script";
        }
        linkElement.crossOrigin = "";
        linkElement.href = g;
        if (b) {
          linkElement.setAttribute("nonce", b);
        }
        document.head.appendChild(linkElement);
        if (f) {
          return new Promise((resolve, reject) => {
            linkElement.addEventListener("load", resolve);
            linkElement.addEventListener("error", () =>
              reject(new Error(`Unable to preload CSS for ${g}`)),
            );
          });
        }
      }),
    );
  }
  function a(u) {
    const d = new Event("vite:preloadError", {
      cancelable: true,
    });
    d.payload = u;
    window.dispatchEvent(d);
    if (!d.defaultPrevented) {
      throw u;
    }
  }
  return i.then((u) => {
    for (const d of u || []) {
      if (d.status === "rejected") {
        a(d.reason);
      }
    }
    return t().catch(a);
  });
};
const Nn = "z9k2r";
const _t = [
  "settings",
  "tabs",
  "theme",
  "bookmarks",
  "ai.model",
  "ai.threads",
  "_o1pizjb.collapsed",
  "api.base",
  "api.pinned",
  "api.custom",
  "ads.notice",
  "games.saved.v2",
];
const salt = "1570f54e0c572293";
function Ln(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) {
    t ^= e.charCodeAt(n);
    t = Math.imul(t, 16777619);
  }
  return (t >>> 0).toString(36);
}
function In(e, t) {
  return Ln(e ? `${e} ${t}` : t);
}
function bt(e) {
  return In(salt, e);
}
function dt(e) {
  try {
    return localStorage.getItem(e);
  } catch {
    return null;
  }
}
function Kt(e, t) {
  try {
    localStorage.setItem(e, t);
  } catch {}
}
function Rn(e) {
  try {
    localStorage.removeItem(e);
  } catch {}
}
function Ws() {
  const e = dt(Nn);
  if (e === null) {
    return null;
  }
  try {
    const t = JSON.parse(e);
    if (typeof t?.salt === "string" && Array.isArray(t.names)) {
      return t;
    }
  } catch {}
  return null;
}
let Te;
function Mn() {
  Kt(
    Nn,
    JSON.stringify({
      salt,
      names: [...Te],
    }),
  );
}
function Hs() {
  const e = Ws();
  const t = e ? e.salt : null;
  Te = new Set([..._t, ...(e?.names ?? [])]);
  if (t !== salt) {
    for (const n of Te) {
      const r = t === null ? Ln(n) : In(t, n);
      const i = bt(n);
      if (r === i) {
        continue;
      }
      const a = dt(r);
      if (a !== null) {
        if (dt(i) === null) {
          Kt(i, a);
        }
        Rn(r);
      }
    }
  }
  Mn();
}
function zs(e) {
  if (!Te.has(e)) {
    Te.add(e);
    Mn();
  }
}
if (typeof window !== "undefined") {
  try {
    Hs();
  } catch {
    Te = new Set(_t);
  }
} else {
  Te = new Set(_t);
}
function we(e) {
  return dt(bt(e));
}
function ve(e, t) {
  zs(e);
  Kt(bt(e), t);
}
function ke(e) {
  Rn(bt(e));
}
function gt(e, t) {
  const n = we(e);
  if (n === null) {
    return t;
  }
  try {
    return JSON.parse(n);
  } catch {
    return t;
  }
}
function He(e, t) {
  ve(e, JSON.stringify(t));
}
const On = {
  id: "tiktok",
  url: "https://www.tiktok.com/",
  label: "TikTok",
};
const Un = {
  id: "discord",
  url: "https://discord.com/_kcupku7",
  label: "Discord",
};
const Vs = [On, Un];
function Fn() {
  const e = gt("bookmarks", null);
  if (Array.isArray(e)) {
    return e
      .filter((t) => typeof t?.url === "string" && typeof t?.id === "string")
      .map((t) => {
        if (t.id === "instagram") {
          return On;
        }
        if (t.id === "spotify") {
          return Un;
        }
        return t;
      });
  }
  return Vs;
}
function Dn(e) {
  He("bookmarks", e);
}
function fn(e, label) {
  return {
    id: `bm-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000).toString(36)}`,
    url: e,
    label,
  };
}
function wt(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return null;
  }
}
function Gs(url) {
  const t = wt(url);
  if (t) {
    return [
      `https://icons.duckduckgo.com/ip3/${t}.ico`,
      `https://www.google.com/s2/favicons?domain=${t}&sz=64`,
    ];
  }
  return [];
}
const re = (size) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});
function ZiComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
function JtComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function YtComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
function XtComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}
function Qe1Component({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function PtComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function NComponent({ size = 14 }) {
  return (
    <svg {...re(size)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
function BnComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="9" y1="4" x2="9" y2="20" />
    </svg>
  );
}
function KsComponent({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      aria-hidden
    >
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="6.3" y1="6.3" x2="17.7" y2="17.7" />
      <line x1="17.7" y1="6.3" x2="6.3" y2="17.7" />
    </svg>
  );
}
function JsComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function Qn1Component({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z" />
      <path d="M18.5 14l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
    </svg>
  );
}
function WnComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <line x1="6" y1="11" x2="10" y2="11" />
      <line x1="8" y1="9" x2="8" y2="13" />
      <line x1="15" y1="12" x2="15.01" y2="12" />
      <line x1="18" y1="10" x2="18.01" y2="10" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
    </svg>
  );
}
function QiComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
function EaComponent({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect x="7" y="7" width="10" height="10" rx="2" fill="currentColor" />
    </svg>
  );
}
function TaComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
function NaComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
    </svg>
  );
}
function SaComponent({ size = 14 }) {
  return (
    <svg {...re(size)}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function RaComponent({ size = 14 }) {
  return (
    <svg {...re(size)}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  );
}
function OaComponent({ size = 14 }) {
  return (
    <svg {...re(size)}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}
function IaComponent({ size = 14 }) {
  return (
    <svg {...re(size)}>
      <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    </svg>
  );
}
function YsComponent({ size = 14, filled = false }) {
  return (
    <svg {...re(size)} fill={filled ? "currentColor" : "none"}>
      <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
    </svg>
  );
}
function AaComponent({ size = 14 }) {
  return (
    <svg {...re(size)}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function XsComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}
function CaComponent({ size = 16 }) {
  return (
    <svg {...re(size)}>
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="M15 15l6 6" />
      <path d="M4 4l5 5" />
    </svg>
  );
}
const Zs = [
  "https://themannastore.com",
  "https://21baseballacademy.com",
  "https://theavancehotel.com",
  "https://diamondstudsbaseball.com",
  "https://broughton-hotel.com",
];
const $e = Zs;
let me = "https://theavancehotel.com";
const credentials = "include";
const Qs = "pool-ok";
function zn(e) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return Promise.resolve(false);
  }
  return new Promise((resolve) => {
    const iframeElement = document.createElement("iframe");
    const r = crypto.randomUUID();
    const origin = new URL(e).origin;
    let a = 0;
    let u = false;
    const d = (b) => {
      if (!u) {
        u = true;
        window.clearTimeout(a);
        window.removeEventListener("message", m);
        iframeElement.remove();
        resolve(b);
      }
    };
    const m = (b) => {
      if (
        b.source !== iframeElement.contentWindow ||
        b.origin !== origin ||
        typeof b.data !== "object" ||
        b.data === null
      ) {
        return;
      }
      const b_data = b.data;
      if (b_data.type === Qs && b_data.nonce === r) {
        d(true);
      }
    };
    iframeElement.hidden = true;
    iframeElement.tabIndex = -1;
    iframeElement.setAttribute("aria-hidden", "true");
    iframeElement.setAttribute("sandbox", "allow-scripts allow-same-origin");
    iframeElement.onerror = () => d(false);
    iframeElement.src = new URL(
      `/api/probe?nonce=${encodeURIComponent(r)}`,
      e,
    ).href;
    window.addEventListener("message", m);
    a = window.setTimeout(() => d(false), 2500);
    document.body.appendChild(iframeElement);
  });
}
async function Zt(e) {
  try {
    const t = await fetch(`${e}/api/ping`, {
      cache: "no-store",
      mode: "cors",
      signal: AbortSignal.timeout(4000),
    });
    if (!t.ok) {
      return false;
    }
    const n = await t.json();
    return typeof n === "object" && n !== null && n.ok === true;
  } catch {
    return false;
  }
}
async function er(e) {
  return (await Zt(e)) && (await zn(e));
}
let ze = null;
let Tt = 0;
function tr(e) {
  if (e.length === 0) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    const set = new Set();
    let e_length = e.length;
    let i = false;
    for (const a of e) {
      (async () => {
        const u = await Zt(a);
        if (u) {
          set.add(a);
        }
        return u && (await zn(a));
      })().then((u) => {
        if (i) {
          return;
        }
        if (u) {
          i = true;
          resolve({
            origin: a,
            verified: true,
          });
          return;
        }
        e_length -= 1;
        if (e_length > 0) {
          return;
        }
        const d = e.find((m) => set.has(m));
        resolve(
          d
            ? {
                origin: d,
                verified: false,
              }
            : null,
        );
      });
    }
  });
}
function nr(origin, verified) {
  if (typeof window === "undefined") {
    return;
  }
  window.clearTimeout(Tt);
  const n = window.setTimeout(() => {
    if (!(Nt() || me !== origin)) {
      (verified ? er(origin) : Zt(origin)).then((r) => {
        if (!(r || Nt())) {
          ze = null;
          ke("api.base");
          Gn();
        }
      });
    }
  }, 45000);
  Tt = n;
  if (typeof n === "object" && n && "unref" in n) {
    n.unref();
  }
}
function la() {
  return [...$e];
}
function sr() {
  try {
    const e = JSON.parse(we("api.custom") || "[]");
    if (Array.isArray(e)) {
      return e.filter((t) => typeof t === "string" && t.length > 0);
    }
    return [];
  } catch {
    return [];
  }
}
function ua() {
  return (
    me ||
    (typeof location !== "undefined" && location.origin ? location.origin : "")
  );
}
function da(e) {
  try {
    return new URL(e).host;
  } catch {
    return e.replace(/^https?:\/\//i, "");
  }
}
function Vn(e) {
  const t = e.trim();
  if (!t) {
    return null;
  }
  try {
    const n = /^https?:\/\//i.test(t) ? t : `https://${t}`;
    const r = new URL(n);
    if (r.protocol !== "http:" && r.protocol !== "https:") {
      return null;
    }
    return r.origin;
  } catch {
    return null;
  }
}
function Nt() {
  return we("api.pinned") === "1";
}
function rr(e) {
  const t = Vn(e);
  if (t) {
    return (
      (me = t),
      (ze = Promise.resolve(t)),
      ve("api.base", t),
      ve("api.pinned", "1"),
      true
    );
  }
  return false;
}
function ha() {
  ke("api.pinned");
  ke("api.base");
  ze = null;
  if (typeof window !== "undefined") {
    window.clearTimeout(Tt);
  }
  me = "https://theavancehotel.com";
}
function pa(e) {
  const t = Vn(e);
  if (!t) {
    return null;
  }
  const n = sr();
  if (!n.includes(t)) {
    ve("api.custom", JSON.stringify([...n, t]));
  }
  rr(t);
  return t;
}
function Gn() {
  if (Nt()) {
    const e = we("api.base");
    if (e) {
      me = e;
      return Promise.resolve(e);
    }
  }
  if ($e.length === 0) {
    return Promise.resolve(me);
  }
  return (
    (ze ??= (async () => {
      const e = we("api.base");
      const t = $e.filter((i) => i !== e);
      const n = e && $e.includes(e) ? [e, ...t] : [...$e];
      const r = await tr(n);
      if (r) {
        return (
          (me = r.origin),
          ve("api.base", r.origin),
          nr(r.origin, r.verified),
          r.origin
        );
      }
      return (ke("api.base"), null);
    })()),
    ze
  );
}
function Ve(e) {
  return me + e;
}
export function a6(e) {
  if (me) {
    return me.replace(/^http/, "ws") + e;
  }
  return `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}${e}`;
}
function or(e) {
  const t = we(`token.${e}`);
  if (t) {
    return {
      authorization: `Bearer ${t}`,
    };
  }
  return {};
}
function jt(e, t) {
  if (!t || typeof t !== "object") {
    return;
  }
  const t_token = t.token;
  if (typeof t_token === "string" && t_token) {
    ve(`token.${e}`, t_token);
  }
}
function ir(e) {
  ke(`token.${e}`);
}
const ar = 100;
const map = new Map();
function cr(e, t) {
  if (map.size >= ar) {
    map.delete(map.keys().next().value);
  }
  map.set(e, t);
}
function lr(e) {
  return map.get(e);
}
async function ur(e, signal) {
  try {
    const n = await fetch(Ve(`/api/ac?q=${encodeURIComponent(e)}`), {
      credentials,
      signal,
    });
    if (!n.ok) {
      return [];
    }
    const r = await n.json();
    if (!Array.isArray(r)) {
      return [];
    }
    const i = r.filter((a) => typeof a === "string").slice(0, 8);
    cr(e, i);
    return i;
  } catch {
    return [];
  }
}
const nt = [
  {
    id: "google",
    name: "Google",
    template: "https://www.google.com/search?q=%s",
  },
  {
    id: "duckduckgo",
    name: "DuckDuckGo",
    template: "https://duckduckgo.com/?q=%s",
  },
  {
    id: "bing",
    name: "Bing",
    template: "https://www.bing.com/search?q=%s",
  },
  {
    id: "brave",
    name: "Brave",
    template: "https://search.brave.com/search?q=%s",
  },
  {
    id: "startpage",
    name: "Startpage",
    template: "https://www.startpage.com/do/search?q=%s",
  },
];
const ae = {
  searchEngineId: "duckduckgo",
  customSearchUrl: "",
  searchSuggestions: true,
  restoreTabs: true,
  reduceMotion: false,
  coverPreset: "none",
  coverTitle: "",
  coverFavicon: "",
  autoCoverFrame: false,
  exitKey: "`",
  exitUrl: "https://docs.google.com/document/u/0/",
  confirmLeave: false,
  backgroundMode: "full",
  accent: "#ffffff",
  adblock: true,
};
function dr(searchEngineId) {
  return searchEngineId === "custom" || nt.some((t) => t.id === searchEngineId);
}
function hr(e) {
  const t = e.trim();
  if (!t.includes("%s")) {
    return {
      error: "Use %s where the search terms go.",
    };
  }
  try {
    const n = new URL(t.replace("%s", "q"));
    if (n.protocol !== "https:" && n.protocol !== "http:") {
      return {
        error: "Use an http(s) URL.",
      };
    }
  } catch {
    return {
      error: "Enter a full URL, e.g. https://example.com/search?q=%s",
    };
  }
  return {
    value: t,
  };
}
function pr(backgroundMode) {
  return (
    backgroundMode === "full" ||
    backgroundMode === "reduced" ||
    backgroundMode === "mesh" ||
    backgroundMode === "off"
  );
}
function fr(accent) {
  return (
    typeof accent === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(accent)
  );
}
function Ie(e, t) {
  if (typeof e === "string") {
    return e;
  }
  return t;
}
function Re(e, t) {
  if (typeof e === "boolean") {
    return e;
  }
  return t;
}
export function a7() {
  const e = gt("settings", {});
  return {
    searchEngineId: dr(e.searchEngineId) ? e.searchEngineId : ae.searchEngineId,
    customSearchUrl: Ie(e.customSearchUrl, ae.customSearchUrl),
    searchSuggestions: Re(e.searchSuggestions, ae.searchSuggestions),
    restoreTabs: Re(e.restoreTabs, ae.restoreTabs),
    reduceMotion: Re(e.reduceMotion, ae.reduceMotion),
    coverPreset: Ie(e.coverPreset ?? e.cloakPreset, ae.coverPreset),
    coverTitle: Ie(e.coverTitle ?? e.cloakTitle, ae.coverTitle),
    coverFavicon: Ie(e.coverFavicon ?? e.cloakFavicon, ae.coverFavicon),
    autoCoverFrame: Re(e.autoCoverFrame ?? e.autoAboutBlank, ae.autoCoverFrame),
    exitKey: Ie(e.exitKey ?? e.panicKey, ae.exitKey),
    exitUrl: Ie(e.exitUrl ?? e.panicUrl, ae.exitUrl),
    confirmLeave: Re(e.confirmLeave, ae.confirmLeave),
    backgroundMode: pr(e.backgroundMode) ? e.backgroundMode : ae.backgroundMode,
    accent: fr(e.accent) ? e.accent : ae.accent,
    adblock: Re(e.adblock, ae.adblock),
  };
}
function Kn(e) {
  He("settings", e);
}
function mr(settings) {
  if (settings.searchEngineId === "custom") {
    const n = hr(settings.customSearchUrl);
    if ("value" in n) {
      return n.value;
    }
  }
  return (
    nt.find((n) => n.id === settings.searchEngineId) ??
    nt.find((n) => n.id === ae.searchEngineId) ??
    nt[0]
  ).template;
}
const JnContext = r_1.createContext(ae);
function useBr() {
  return r_1.useContext(JnContext);
}
function useGr() {
  const [e, setE] = r_1.useState(a7);
  r_1.useEffect(() => {
    Kn(e);
  }, [e]);
  const update = r_1.useCallback((r) => {
    setE((i) => ({
      ...i,
      ...r,
    }));
  }, []);
  return {
    settings: e,
    update,
  };
}
const wr = 150;
const mn = [];
function useYn(e) {
  const [t, setT] = r_1.useState(mn);
  const searchSuggestions = useBr().searchSuggestions;
  r_1.useEffect(() => {
    const i = searchSuggestions ? e.trim() : "";
    if (i.length < 2) {
      setT(mn);
      return;
    }
    const a = lr(i);
    if (a) {
      setT(a);
      return;
    }
    const abortController = new AbortController();
    const d = setTimeout(() => {
      ur(i, abortController.signal).then((m) => {
        if (!abortController.signal.aborted) {
          setT(m);
        }
      });
    }, wr);
    return () => {
      clearTimeout(d);
      abortController.abort();
    };
  }, [e, searchSuggestions]);
  return t;
}
function St(url) {
  if (!url) {
    return "";
  }
  try {
    const t = new URL(url);
    const n = t.pathname === "/" ? "" : t.pathname;
    return t.hostname + n + t.search;
  } catch {
    return url;
  }
}
function QtComponent({
  url,
  variant,
  disabled,
  bookmarked,
  autoFocus,
  onNavigate,
  onToggleBookmark,
}) {
  const [d, setD] = r_1.useState(() => St(url));
  const [b, setB] = r_1.useState(false);
  const [f, setF] = r_1.useState(-1);
  const IRef = r_1.useRef(null);
  const xRef = r_1.useRef(null);
  const C = useYn(b ? d : "");
  r_1.useEffect(() => {
    if (!b) {
      setD(St(url));
    }
  }, [url, b]);
  r_1.useEffect(() => {
    setF(-1);
  }, [C]);
  const N = () => {
    if (f >= 0 && C[f]) {
      return C[f];
    }
    return d;
  };
  const D = (R) => {
    var B;
    const Q = R.trim();
    if (Q) {
      onNavigate(Q);
      if ((B = IRef.current) != null) {
        B.blur();
      }
    }
  };
  const $ = (R) => {
    var Q;
    if (R.key === "Escape") {
      setD(St(url));
      if ((Q = IRef.current) != null) {
        Q.blur();
      }
    } else if (R.key === "Enter") {
      R.preventDefault();
      D(N());
    } else if (R.key === "ArrowDown") {
      R.preventDefault();
      setF((B) => Math.min(C.length - 1, B + 1));
    } else if (R.key === "ArrowUp") {
      R.preventDefault();
      setF((B) => Math.max(-1, B - 1));
    }
  };
  const J = (
    <input
      ref={IRef}
      value={d}
      disabled={disabled}
      autoFocus={autoFocus}
      placeholder="Search or enter URL"
      spellCheck={false}
      autoComplete="off"
      onChange={(R) => setD(R.target.value)}
      onKeyDown={$}
      onFocus={(R) => {
        if (xRef.current) {
          window.clearTimeout(xRef.current);
        }
        setB(true);
        setD(url || d);
        requestAnimationFrame(() => R.target.select());
      }}
      onBlur={() => {
        xRef.current = window.setTimeout(() => setB(false), 120);
      }}
    />
  );
  const T = b && C.length > 0 && (
    <ul className="omnibox-suggestions">
      {C.map((R, Q) => (
        <li
          key={`${R}-${Q}`}
          className={`omnibox-suggestion ${Q === f ? "selected" : ""}`}
          onMouseEnter={() => setF(Q)}
          onMouseDown={(B) => B.preventDefault()}
          onClick={() => D(R)}
        >
          <Qe1Component size={13} />
          <span>{R}</span>
        </li>
      ))}
    </ul>
  );
  switch (variant) {
    case "_ra6wq4g":
      return (
        <div className="newtab-search-wrap">
          <form
            className={`_37dmt3t ${b ? "focused" : ""}`}
            onSubmit={(R) => {
              R.preventDefault();
              D(N());
            }}
          >
            <Qe1Component size={18} />
            {J}
          </form>
          {T}
        </div>
      );
    case "_o1pizjb":
      return (
        <div className="sidebar-omnibox-wrap">
          <form
            className={`sidebar-omnibox ${b ? "focused" : ""}`}
            onSubmit={(R) => {
              R.preventDefault();
              D(N());
            }}
          >
            <Qe1Component size={13} />
            {J}
          </form>
          {T}
        </div>
      );
    default:
      return (
        <div className="omnibox-wrap">
          <form
            className={`_ooei9cl ${b ? "focused" : ""}`}
            onSubmit={(R) => {
              R.preventDefault();
              D(N());
            }}
          >
            {J}
            {url && onToggleBookmark && (
              <button
                type="button"
                className={`omnibox-star ${bookmarked ? "filled" : ""}`}
                aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
                onMouseDown={(R) => R.preventDefault()}
                onClick={onToggleBookmark}
              >
                <YsComponent size={14} filled={bookmarked} />
              </button>
            )}
          </form>
          {T}
        </div>
      );
  }
}
function XnComponent({ url, size = 24, fallback }) {
  const r = r_1.useMemo(() => Gs(url), [url]);
  const [i, setI] = r_1.useState(0);
  r_1.useEffect(() => {
    setI(0);
  }, [url]);
  if (!url || i >= r.length) {
    if (fallback) {
      return (
        <span
          className="favicon-fallback"
          style={{
            width: size,
            height: size,
          }}
        >
          {fallback}
        </span>
      );
    }
    return <img src={Ne("favicon.svg")} alt="" width={size} height={size} />;
  }
  return (
    <img
      src={r[i]}
      alt=""
      width={size}
      height={size}
      onError={() => setI((u) => u + 1)}
    />
  );
}
const vr = {
  "/a": "ai",
  "/g": "games",
  "/s": "settings",
  "/u": "account",
  "/p": "plus",
};
const yr = {
  ai: "/a",
  games: "/g",
  settings: "/s",
  account: "/u",
  plus: "/p",
};
const xr = {
  ai: "Lucidity AI",
  games: "Education",
  settings: "Settings",
  account: "Account",
  plus: "Lucide Plus",
};
function ge(e) {
  return vr[e] ?? null;
}
function kr(e) {
  return yr[e];
}
function CrComponent({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z"
      />
    </svg>
  );
}
const Er = "https://www.roblox.com/";
const jr = "Roblox";
function Sr(activeUrl) {
  try {
    const t = new URL(activeUrl).hostname.toLowerCase();
    return t === "roblox.com" || t.endsWith(".roblox.com");
  } catch {
    return false;
  }
}
function Je() {
  return "".trim() !== "";
}
function Zn(placeId) {
  const t = Ne("index.html", document.baseURI);
  if (placeId) {
    return `${t}?placeId=${encodeURIComponent(placeId)}`;
  }
  return t;
}
function Ar() {
  return Ne("launcher/index.html", document.baseURI);
}
function Qn(e) {
  const t = ge(e.activeUrl);
  const n = [
    {
      key: "ai",
      label: "AI",
      active: t === "ai",
      icon: (r) => <Qn1Component size={r} />,
      onClick: e.onOpenAi,
    },
    {
      key: "games",
      label: "Education",
      active: t === "games",
      icon: (r) => <WnComponent size={r} />,
      onClick: e.onOpenGames,
    },
    {
      key: "roblox",
      label: "Roblox",
      active: Sr(e.activeUrl),
      icon: (r) => <CrComponent size={r} />,
      onClick: e.onOpenRoblox,
    },
    {
      key: "account",
      label: "Account",
      active: t === "account",
      icon: (r) => <XsComponent size={r} />,
      onClick: e.onOpenAccount,
    },
    {
      key: "settings",
      label: "Settings",
      active: t === "settings",
      icon: (r) => <JsComponent size={r} />,
      onClick: e.onOpenSettings,
    },
  ];
  if (Je()) {
    return n;
  }
  return n.filter((r) => r.key !== "roblox");
}
function RComponent(e) {
  return (
    <nav className="sidebar-footer">
      {Qn(e).map((t) => (
        <button
          key={t.key}
          className={`_7i813ud ${t.active ? "active" : ""}`}
          type="button"
          onClick={t.onClick}
        >
          <span className="_bb2zu8d">{t.icon(15)}</span>
          <span>{t.label}</span>
        </button>
      ))}
    </nav>
  );
}
function PrComponent(e) {
  return (
    <div className="_1kdghxy">
      {Qn(e).map((t) => (
        <button
          key={t.key}
          className={`_ngkbw81 ${t.active ? "active" : ""}`}
          type="button"
          aria-label={t.label}
          title={t.label}
          onClick={t.onClick}
        >
          {t.icon(14)}
        </button>
      ))}
    </div>
  );
}
function EsComponent(url, t) {
  const n = ge(url);
  if (n === "ai") {
    return <Qn1Component size={t} />;
  }
  if (n === "games") {
    return <WnComponent size={t} />;
  }
  if (url) {
    return <XnComponent url={url} size={t + 1} />;
  }
  return <KsComponent size={t} />;
}
const initial = {
  opacity: 0,
};
const animate = {
  opacity: 1,
};
const exit = {
  opacity: 0,
  scale: 0.9,
  transition: {
    duration: 0.55,
    ease: [0.16, 1, 0.3, 1],
  },
};
const transition = {
  type: "spring",
  stiffness: 700,
  damping: 38,
  mass: 0.6,
};
const dragTransition = {
  bounceStiffness: 700,
  bounceDamping: 38,
};
const whileDrag = {
  scale: 1.03,
};
const Or = r_1.memo(function ({
  tab,
  active,
  closable,
  onSelect,
  onClose,
  ref,
}) {
  const d =
    (tab.title && tab.title !== tab.url ? tab.title : wt(tab.url)) ||
    tab.title ||
    "New tab";
  return (
    <R_1
      ref={ref}
      value={tab}
      as="li"
      className={`tab-item ${active ? "active" : ""}`}
      onClick={() => onSelect(tab.id)}
      title={d}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      dragTransition={dragTransition}
      whileDrag={whileDrag}
    >
      <span className="_bb2zu8d">{EsComponent(tab.url, 15)}</span>
      <span className="tab-title">{d}</span>
      {closable && (
        <button
          className="tab-close"
          type="button"
          aria-label="Close tab"
          onPointerDown={(m) => m.stopPropagation()}
          onClick={(m) => {
            m.stopPropagation();
            onClose(tab.id);
          }}
        >
          <NComponent size={13} />
        </button>
      )}
    </R_1>
  );
});
function UrComponent(e) {
  return (
    <aside className={`_o1pizjb ${e.collapsed ? "_pmnm49w" : ""}`}>
      {e.collapsed ? <DrComponent {...e} /> : <FrComponent {...e} />}
    </aside>
  );
}
function FrComponent({
  tabs,
  activeId,
  activeUrl,
  bookmarks,
  disabled,
  onSelect,
  onNew,
  onClose,
  onReorder,
  onNavigate,
  onOpenBookmark,
  onAddBookmark,
  onRemoveBookmark,
  onToggleCollapse,
  onOpenAi,
  onOpenGames,
  onOpenRoblox,
  onOpenSettings,
  onOpenAccount,
  onBack,
  onForward,
  onReload,
}) {
  const Q = !!activeUrl;
  const values = tabs.filter((q) => !ge(q.url));
  const ne = tabs.filter((q) => ge(q.url));
  return (
    <div className="_1sh334d">
      <div className="sidebar-header">
        <div className="header-left">
          <button
            className="_ngkbw81"
            type="button"
            aria-label="Back"
            disabled={disabled || !Q}
            onClick={onBack}
          >
            <JtComponent />
          </button>
          <button
            className="_ngkbw81"
            type="button"
            aria-label="Forward"
            disabled={disabled || !Q}
            onClick={onForward}
          >
            <YtComponent />
          </button>
          <button
            className="_ngkbw81"
            type="button"
            aria-label="Reload"
            disabled={disabled || !Q}
            onClick={onReload}
          >
            <XtComponent />
          </button>
        </div>
        <div className="header-right">
          <button
            className="_ngkbw81"
            type="button"
            aria-label="Collapse _o1pizjb"
            onClick={onToggleCollapse}
          >
            <BnComponent />
          </button>
        </div>
      </div>
      <QtComponent
        url={ge(activeUrl) ? "" : activeUrl}
        variant="_o1pizjb"
        disabled={disabled}
        onNavigate={onNavigate}
      />
      <div className="bookmarks-grid">
        {bookmarks.map((q) => {
          const E = q.label ?? wt(q.url);
          return (
            <button
              key={q.id}
              className="bookmark-tile"
              type="button"
              title={E ?? q.url}
              onClick={() => onOpenBookmark(q.url)}
              onContextMenu={(M) => {
                M.preventDefault();
                onRemoveBookmark(q.id);
              }}
            >
              <XnComponent
                url={q.url}
                size={22}
                fallback={(E ?? "?").slice(0, 1).toUpperCase()}
              />
            </button>
          );
        })}
        <button
          className="bookmark-tile bookmark-add"
          type="button"
          aria-label="Add bookmark"
          onClick={onAddBookmark}
        >
          <PtComponent size={16} />
        </button>
      </div>
      <div className="sidebar-tabs">
        <button className="new-tab" type="button" onClick={onNew}>
          <span className="_bb2zu8d">
            <PtComponent size={15} />
          </span>
          <span>New tab</span>
        </button>
        <Fs
          as="ul"
          axis="y"
          values={values}
          onReorder={(q) => onReorder([...q, ...ne])}
          className="tab-list"
        >
          <A_1 mode="popLayout" initial={false}>
            {values.map((tab) => (
              <Or
                key={tab.id}
                tab={tab}
                active={tab.id === activeId}
                closable={values.length > 1}
                onSelect={onSelect}
                onClose={onClose}
              />
            ))}
          </A_1>
        </Fs>
      </div>
      <RComponent
        activeUrl={activeUrl}
        onOpenAi={onOpenAi}
        onOpenGames={onOpenGames}
        onOpenRoblox={onOpenRoblox}
        onOpenSettings={onOpenSettings}
        onOpenAccount={onOpenAccount}
      />
    </div>
  );
}
function DrComponent({
  tabs,
  activeId,
  activeUrl,
  disabled,
  onSelect,
  onNew,
  onToggleCollapse,
  onOpenAi,
  onOpenGames,
  onOpenRoblox,
  onOpenSettings,
  onOpenAccount,
  onBack,
  onForward,
  onReload,
}) {
  const C = !!activeUrl;
  const N = tabs.filter((D) => !ge(D.url));
  return (
    <div className="_1sh334d _pmnm49w">
      <div className="_xc5bj7x">
        <button
          className="_ngkbw81"
          type="button"
          aria-label="Expand _o1pizjb"
          title="Expand _o1pizjb"
          onClick={onToggleCollapse}
        >
          <BnComponent />
        </button>
      </div>
      <div className="_grfe76b">
        <button
          className="_ngkbw81"
          type="button"
          aria-label="Back"
          title="Back"
          disabled={disabled || !C}
          onClick={onBack}
        >
          <JtComponent size={15} />
        </button>
        <button
          className="_ngkbw81"
          type="button"
          aria-label="Forward"
          title="Forward"
          disabled={disabled || !C}
          onClick={onForward}
        >
          <YtComponent size={15} />
        </button>
        <button
          className="_ngkbw81"
          type="button"
          aria-label="Reload"
          title="Reload"
          disabled={disabled || !C}
          onClick={onReload}
        >
          <XtComponent size={15} />
        </button>
      </div>
      <button
        className="_hic6td0 compact-add"
        type="button"
        aria-label="New tab"
        title="New tab"
        onClick={onNew}
      >
        <PtComponent size={16} />
      </button>
      <ul className="_d2mxnpx">
        <A_1 mode="popLayout" initial={false}>
          {N.map((D) => (
            <m_1.li
              key={D.id}
              layout
              className={`_hic6td0 ${D.id === activeId ? "active" : ""}`}
              onClick={() => onSelect(D.id)}
              title={D.title || wt(D.url) || "New tab"}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: {
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              transition={{
                duration: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              {EsComponent(D.url, 17)}
            </m_1.li>
          ))}
        </A_1>
      </ul>
      <PrComponent
        activeUrl={activeUrl}
        onOpenAi={onOpenAi}
        onOpenGames={onOpenGames}
        onOpenRoblox={onOpenRoblox}
        onOpenSettings={onOpenSettings}
        onOpenAccount={onOpenAccount}
      />
    </div>
  );
}
const $r = r_1.memo(function ({
  url,
  disabled,
  collapsed,
  internal,
  bookmarked,
  onNavigate,
  onBack,
  onForward,
  onReload,
  onToggleBookmark,
}) {
  return (
    <div className="_87nrubx">
      {collapsed && !internal && (
        <div className="nav-group">
          <button
            className="_ngkbw81"
            type="button"
            aria-label="Back"
            disabled={disabled || !url}
            onClick={onBack}
          >
            <JtComponent />
          </button>
          <button
            className="_ngkbw81"
            type="button"
            aria-label="Forward"
            disabled={disabled || !url}
            onClick={onForward}
          >
            <YtComponent />
          </button>
          <button
            className="_ngkbw81"
            type="button"
            aria-label="Reload"
            disabled={disabled || !url}
            onClick={onReload}
          >
            <XtComponent />
          </button>
        </div>
      )}
      <QtComponent
        url={url}
        variant="_87nrubx"
        disabled={disabled}
        bookmarked={internal ? false : bookmarked}
        onNavigate={onNavigate}
        onToggleBookmark={internal ? undefined : onToggleBookmark}
      />
    </div>
  );
});
function BrComponent() {
  return (
    <div className="app-footer">
      <a
        className="discord-link"
        href="https://discord.gg/chromebook"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our Discord server (opens in a new tab)"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.32 4.37a19.79 19.79 0 0 0-4.89-1.52c-.21.38-.45.89-.62 1.3a18.43 18.43 0 0 0-5.62 0c-.17-.41-.42-.92-.63-1.3a19.74 19.74 0 0 0-4.89 1.53C.58 8.97-.26 13.45.16 17.87a19.9 19.9 0 0 0 6 3.03c.49-.66.92-1.36 1.29-2.1-.71-.26-1.38-.59-2.02-.98.17-.12.34-.25.5-.38 3.88 1.81 8.08 1.81 11.92 0 .16.13.33.26.5.38-.64.39-1.32.72-2.02.99.37.73.8 1.43 1.29 2.09a19.82 19.82 0 0 0 6-3.03c.5-5.13-.85-9.57-3.3-13.5ZM8.02 15.15c-1.17 0-2.13-1.07-2.13-2.39s.94-2.39 2.13-2.39c1.19 0 2.15 1.08 2.13 2.39 0 1.32-.94 2.39-2.13 2.39Zm7.96 0c-1.17 0-2.13-1.07-2.13-2.39s.94-2.39 2.13-2.39c1.19 0 2.15 1.08 2.13 2.39 0 1.32-.94 2.39-2.13 2.39Z" />
        </svg>
        Join Discord
      </a>
      <span
        className="build-id"
        title="3018343cb908dd440e16f6f4688d9f91528035c3"
      >
        {"3018343cb908dd440e16f6f4688d9f91528035c3".slice(0, 7)}
      </span>
    </div>
  );
}
const en = [
  "accelerometer",
  "autoplay",
  "clipboard-read",
  "clipboard-write",
  "encrypted-media",
  "fullscreen",
  "gamepad",
  "gyroscope",
  "keyboard-lock",
  "keyboard-map",
  "pointer-lock",
  "screen-wake-lock",
  "xr-spatial-tracking",
];
const qr = en;
const allow = en.map((e) => `${e} *`).join("; ");
en.map((e) => `${e}=*`).join(", ");
function Wr(e) {
  return e.split(/[\s=]/)[0] ?? "";
}
function ns(e) {
  const t = (e.getAttribute("allow") ?? "")
    .split(";")
    .map((i) => i.trim())
    .filter(Boolean);
  const n = new Set(t.map(Wr).filter(Boolean));
  for (const i of qr) {
    if (!n.has(i)) {
      t.push(`${i} *`);
    }
  }
  const r = t.join("; ");
  if (e.getAttribute("allow") !== r) {
    e.setAttribute("allow", r);
  }
  e.allowFullscreen = true;
}
function Hr(e) {
  const t = e.getElementsByTagName("iframe");
  const n = () => {
    for (let i = 0; i < t.length; i += 1) {
      ns(t[i]);
    }
  };
  n();
  const r = new MutationObserver(n);
  r.observe(e.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["allow"],
  });
  return r;
}
const zr = {
  "sign-in": `To play Roblox in Lucide, sign into roblox.com inside the proxy first.

Choose the email one-time code option to Lucide in. Other login methods won't work through the proxy.

Once you're signed in, press Play on any game and it opens in a new window.`,
  "popup-blocked": "Allow popups for this site and press Play again.",
  "not-playing": "Your friend isn't in a joinable experience.",
  unreachable: "Couldn't reach Roblox to find your friend.",
  unsupported: "This kind of Roblox launch isn't supported here.",
};
function Ce(e) {
  window.alert(zr[e]);
}
const Vr =
  /^(?:(?:play|www)\.)?roblox\.com$|^play\.sitetest[1-3]\.robloxlabs\.com$/i;
const ss = /^[1-9]\d{0,18}$/;
const Gr = /^[A-Za-z0-9-]{1,64}$/;
const rs = /^(roblox-player|roblox-client|roblox)(?:-sitetest([1-3]))?:/i;
const Kr =
  /^roblox:\/\/(?:experiences\/start\??|navigation\/game_details\??|)(.*)$/i;
const Jr = /(^|\.)(roblox\.com|robloxlabs\.com)$/i;
const Yr = /\/game\/placelauncher\.ashx$/i;
function fe(e, t) {
  const n = t.toLowerCase();
  for (const [r, i] of e) {
    if (r.toLowerCase() === n) {
      return i;
    }
  }
}
function ht(e, serverId) {
  if (e === undefined || !ss.test(e)) {
    return null;
  }
  if (serverId && Gr.test(serverId)) {
    return {
      placeId: e,
      serverId,
    };
  }
  return {
    placeId: e,
  };
}
function os(e) {
  const t = rs.exec(e);
  if (!t) {
    return null;
  }
  const domain = t[2] ? `sitetest${t[2]}.robloxlabs.com` : "roblox.com";
  const fields = new Map();
  for (const u of e.slice(t[0].length).split("+")) {
    const d = u.indexOf(":");
    if (d > 0) {
      fields.set(u.slice(0, d).toLowerCase(), u.slice(d + 1));
    }
  }
  if ((fields.get("launchmode") ?? "play").toLowerCase() !== "play") {
    return null;
  }
  const i = fields.get("placelauncherurl");
  if (!i) {
    return null;
  }
  let launcher;
  try {
    launcher = new URL(decodeURIComponent(i));
  } catch {
    return null;
  }
  if (
    (launcher.protocol !== "https:" && launcher.protocol !== "http:") ||
    !Jr.test(launcher.hostname) ||
    !Yr.test(launcher.pathname)
  ) {
    return null;
  }
  return {
    domain,
    fields,
    launcher,
  };
}
function Xr(e) {
  const t = Kr.exec(e);
  if (!t) {
    return null;
  }
  const n = new URLSearchParams(t[1]);
  return ht(fe(n, "placeId"), fe(n, "gameInstanceId") ?? fe(n, "gameId"));
}
function is(e) {
  return rs.test(e);
}
function Lt(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  if (
    (t.protocol !== "https:" && t.protocol !== "http:") ||
    !Vr.test(t.hostname) ||
    t.port !== "" ||
    t.username !== "" ||
    t.password !== "" ||
    t.pathname.replace(/\/+$/, "").toLowerCase() !== "/games/start"
  ) {
    return null;
  }
  return ht(
    fe(t.searchParams, "placeId"),
    fe(t.searchParams, "gameInstanceId"),
  );
}
function Zr(e) {
  if (/^roblox:\/\//i.test(e)) {
    return Xr(e);
  }
  const t = os(e);
  if (!t) {
    return null;
  }
  const n = fe(t.launcher.searchParams, "request");
  if (n !== "RequestGame" && n !== "RequestGameJob") {
    return null;
  }
  const r = fe(t.launcher.searchParams, "placeId");
  if (n === "RequestGame") {
    return ht(r, undefined);
  }
  const i =
    fe(t.launcher.searchParams, "gameId") ??
    fe(t.launcher.searchParams, "jobId");
  if (i) {
    return ht(r, i);
  }
  return null;
}
function Qr(e) {
  const t = os(e);
  if (!t || fe(t.launcher.searchParams, "request") !== "RequestFollowUser") {
    return null;
  }
  const userId = fe(t.launcher.searchParams, "userId");
  if (userId !== undefined && ss.test(userId)) {
    return {
      userId,
      domain: t.domain,
    };
  }
  return null;
}
const eo = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const to = 2;
class Ae extends Error {
  constructor(t) {
    super(t);
    this.reason = t;
  }
}
async function bn(e, t, n, r) {
  const headers = {
    "content-type": "application/json",
  };
  if (r) {
    headers["x-csrf-token"] = r;
  }
  return e(t, {
    method: "POST",
    credentials: "include",
    headers,
    body: n,
  });
}
async function no(e, t) {
  const n = `https://presence.${t.domain}/v1/presence/users`;
  const r = JSON.stringify({
    userIds: [Number(t.userId)],
  });
  let i;
  try {
    i = await bn(e, n, r);
    const m = i.status === 403 ? i.headers.get("x-csrf-token") : null;
    if (m) {
      i = await bn(e, n, r, m);
    }
  } catch {
    throw new Ae("unreachable");
  }
  if (!i.ok) {
    throw new Ae("unreachable");
  }
  let a;
  try {
    a = (await i.json()).userPresences?.[0];
  } catch {
    throw new Ae("unreachable");
  }
  if (!a || a.userPresenceType !== to || a.placeId == null) {
    throw new Ae("not-playing");
  }
  const u = String(a.placeId);
  if (!/^[1-9]\d{0,18}$/.test(u)) {
    throw new Ae("not-playing");
  }
  if (a.gameId && eo.test(a.gameId)) {
    return {
      placeId: u,
      serverId: a.gameId,
    };
  }
  return {
    placeId: u,
  };
}
const gn = "webblox.transport";
const as = "cobalt-cookies";
const wn = "launcher_join";
const cs = "webblox.manual";
const tn = "webblox-game";
const so = "lucideblox:sign-in";
const n_1 = ".ROBLOSECURITY";
const ro = ["roblox.com", "rbxcdn.com", "robloxlabs.com"];
function oo(domain) {
  if (typeof domain !== "string") {
    return false;
  }
  const t = domain.replace(/^\./, "").toLowerCase();
  return t === "roblox.com" || t.endsWith(".roblox.com");
}
function io(e) {
  if (!e || typeof e !== "object" || Array.isArray(e)) {
    return null;
  }
  for (const t of Object.values(e)) {
    if (
      !(!t || typeof t !== "object") &&
      !(t.name !== n_1 || typeof t.value !== "string" || t.value === "") &&
      oo(t.domain)
    ) {
      return t.value;
    }
  }
  return null;
}
function ls(e) {
  try {
    const t = JSON.parse(e.getItem(as) || "[]");
    if (Array.isArray(t)) {
      return t;
    }
    return [];
  } catch {
    return [];
  }
}
function us(e) {
  const t = ls(e).find(
    (n) => n?.n === n_1 && typeof n.v === "string" && n.v !== "",
  );
  if (t) {
    return t.v;
  }
  return null;
}
function ao(localStorage) {
  try {
    return localStorage.getItem(cs) === "1" && us(localStorage) !== null;
  } catch {
    return false;
  }
}
function co(localStorage, v, n = false) {
  try {
    const r = ls(localStorage).filter((a) => a?.n !== n_1);
    const i = ro.map((d) => ({
      n: n_1,
      v,
      d,
      h: false,
      p: "/",
      s: true,
      o: true,
      e: 0,
      ss: "none",
    }));
    localStorage.setItem(as, JSON.stringify([...r, ...i]));
    localStorage.setItem(cs, n ? "1" : "0");
    return true;
  } catch {
    return false;
  }
}
function lo(localStorage, t) {
  try {
    if (/^wss?:\/\//i.test(t)) {
      return (
        localStorage.getItem(gn) !== t && localStorage.setItem(gn, t), true
      );
    }
    return false;
  } catch {
    return false;
  }
}
function uo(serverId, placeId) {
  if (serverId) {
    return `${wn}=${placeId}:g:${serverId}; Path=/; Max-Age=120; SameSite=Strict`;
  }
  return `${wn}=; Path=/; Max-Age=0; SameSite=Strict`;
}
let st = null;
let ft = null;
function ds(e) {
  st = e;
  if (!ft) {
    Ee(
      () => import("./config-D1IMkxRT-1570f54e.js"),
      __vite__mapDeps([0, 1, 2]),
      import.meta.url,
    )
      .then((t) => {
        ft = t.resolve_n4rUrl;
      })
      .catch(() => {});
  }
}
function ho() {
  try {
    return io(JSON.parse(st == null ? undefined : st.cookieJar.dump()));
  } catch {
    return null;
  }
}
function nn() {
  const e = Math.round(window.screen.availWidth * 0.9);
  const t = Math.round(window.screen.availHeight * 0.9);
  const n = Math.round((window.screen.availWidth - e) / 2);
  const r = Math.round((window.screen.availHeight - t) / 2);
  return `popup=yes,width=${e},height=${t},left=${n},top=${r}`;
}
function hs() {
  const e = ho();
  if (e && !ao(localStorage)) {
    return co(localStorage, e);
  }
  return us(localStorage) !== null;
}
function sn(e) {
  if (!hs()) {
    return false;
  }
  try {
    if (ft) {
      lo(localStorage, ft());
    }
  } catch {}
  if (e) {
    document.cookie = uo(e.serverId, e.placeId);
  }
  return true;
}
function po(e) {
  try {
    return e.location.href === "about:blank";
  } catch {
    return false;
  }
}
function fo(controller) {
  if (!Je() || (controller && ds(controller), !sn())) {
    return false;
  }
  const t = window.open("", tn, nn());
  if (t) {
    return (po(t) && t.location.replace(Ar()), t.focus(), true);
  }
  return (Ce("popup-blocked"), true);
}
function mt(e) {
  if (!Je()) {
    return false;
  }
  if (!sn(e)) {
    Ce("sign-in");
    return false;
  }
  const t = window.open(Zn(e.placeId), tn, nn());
  if (t) {
    return (t.focus(), true);
  }
  return (Ce("popup-blocked"), false);
}
async function mo(e, t) {
  if (!Je()) {
    return;
  }
  if (!hs()) {
    Ce("sign-in");
    return;
  }
  const n = window.open("", tn, nn());
  if (!n) {
    Ce("popup-blocked");
    return;
  }
  try {
    const r = await no(e, t);
    if (!sn(r)) {
      throw new Ae("unreachable");
    }
    n.location.replace(Zn(r.placeId));
    n.focus();
  } catch (error) {
    n.close();
    Ce(error instanceof Ae ? error.reason : "unreachable");
  }
}
const bo = ["_self", "_parent", "_top", "_unfencedtop"];
const go =
  '<!doctype html><meta charset="utf-8"><title>Launching</title><body style="margin:0;display:grid;place-items:center;height:100vh;font:15px system-ui;background:Canvas;color:CanvasText">Launching in a new window...';
let vn = null;
function Ze(window, t) {
  if (typeof t !== "string" || !is(t)) {
    return false;
  }
  const n = Zr(t);
  if (n) {
    mt(n);
    return true;
  }
  const r = Qr(t);
  if (r) {
    return (mo(window.fetch.bind(window), r), true);
  }
  return (Ce("unsupported"), true);
}
function At(client, t) {
  let n;
  try {
    n = new URL(t, client.meta.base.href).href;
  } catch {
    return null;
  }
  const r = Lt(n);
  if (r) {
    return r;
  }
  try {
    const i = client.unrewriteUrl(n);
    if (i === n) {
      return null;
    }
    return Lt(i);
  } catch {
    return null;
  }
}
function wo({ client, window }) {
  client.Proxy("window.open", {
    apply(r) {
      const i = r.args[1] == null ? "_blank" : String(r.args[1]).toLowerCase();
      if (bo.includes(i) && r.args[0] == null) {
        return;
      }
      const a = r.args[0] == null ? "" : String(r.args[0]);
      if (Ze(window, a)) {
        r.return(null);
        return;
      }
      const u = a ? At(client, a) : null;
      if (u) {
        r.return(null);
        mt(u);
      }
    },
  });
  const n = (r) => {
    if (r.defaultPrevented || (r.button !== 0 && r.button !== 1)) {
      return;
    }
    const i = r
      .composedPath()
      .find(
        (d) => d instanceof window.Element && d.matches("a[href], area[href]"),
      );
    if (!i) {
      return;
    }
    const a = i.getAttribute("href") ?? "";
    if (Ze(window, a)) {
      r.preventDefault();
      return;
    }
    const u = At(client, a) ?? At(client, i.href);
    if (u) {
      r.preventDefault();
      mt(u);
    }
  };
  window.addEventListener("click", n);
  window.addEventListener("auxclick", n);
  client.RawTrap(window.HTMLIFrameElement.prototype, "src", {
    set(r, i) {
      if (!Ze(window, i)) {
        r.set(i);
      }
    },
  });
  client.Proxy("Element.prototype.setAttribute", {
    apply(r) {
      const [i, a] = r.args;
      if (
        !(
          typeof i !== "string" ||
          i.toLowerCase() !== "src" ||
          typeof a !== "string" ||
          !is(a)
        )
      ) {
        if (r.this instanceof window.HTMLIFrameElement && Ze(window, a)) {
          r.return(undefined);
        }
      }
    },
  });
}
function vo(e, t) {
  const { parsed } = e;
  if (
    parsed.isIframe ||
    (parsed.destination !== "document" && parsed.destination !== "iframe")
  ) {
    return;
  }
  const r = Lt(parsed.url.href);
  if (!r) {
    return;
  }
  const constructor = e.request.initialHeaders.constructor;
  t.response = {
    body: go,
    headers: constructor.fromRawHeaders([
      ["content-type", "text/html; charset=utf-8"],
      ["cache-control", "no-store"],
    ]),
    status: 200,
    statusText: "OK",
  };
  mt(r);
}
function yo() {
  const _eqvdt8h_ManagedPlugin = _eqvdt8h.ManagedPlugin;
  class t extends _eqvdt8h_ManagedPlugin {
    constructor() {
      super("launch-hook", []);
    }
    install(r) {
      super.install(r);
      this.tap(r.hooks.init.post, wo);
      this.tap(r.hooks.fetch.intercept, vo);
    }
  }
  return new t();
}
function xo(e) {
  if (Je()) {
    ds(e);
    try {
      vn ??= yo();
    } catch {
      return;
    }
    return {
      plugins: [vn],
    };
  }
}
function ko() {
  return {
    frames: new Map(),
    titleObservers: new Map(),
    allowObservers: new Map(),
    retryTimers: new Map(),
  };
}
function Co(e, t) {
  const n = e.retryTimers.get(t);
  if (n) {
    clearTimeout(n);
  }
  e.retryTimers.delete(t);
  e.titleObservers.get(t)?.disconnect();
  e.titleObservers.delete(t);
  e.allowObservers.get(t)?.disconnect();
  e.allowObservers.delete(t);
  const r = e.frames.get(t);
  if (r) {
    const u = r.controller.frames.indexOf(r);
    if (u >= 0) {
      r.controller.frames.splice(u, 1);
    }
  }
  e.frames.delete(t);
}
function yn(e, t, n, onTitle) {
  const i = n.retryTimers.get(t);
  if (i) {
    clearTimeout(i);
  }
  n.retryTimers.delete(t);
  n.titleObservers.get(t)?.disconnect();
  n.allowObservers.get(t)?.disconnect();
  ns(e);
  let a = 0;
  const u = () => {
    let b = null;
    try {
      b = e.contentDocument;
    } catch {
      b = null;
    }
    if (!b) {
      if (++a < 30) {
        const C = setTimeout(() => {
          n.retryTimers.delete(t);
          u();
        }, 200);
        n.retryTimers.set(t, C);
      }
      return;
    }
    n.retryTimers.delete(t);
    let g = "";
    let f = null;
    const w = new MutationObserver(() => I());
    const I = () => {
      const titleElement = b.querySelector("title");
      if (titleElement !== f) {
        f = titleElement;
        if (titleElement) {
          w.observe(titleElement, {
            subtree: true,
            childList: true,
            characterData: true,
          });
        }
      }
      const N = b.title?.trim();
      if (N && N !== g) {
        g = N;
        onTitle(N);
      }
    };
    I();
    const x = b.head ?? b.documentElement;
    if (x) {
      w.observe(x, {
        childList: true,
      });
    }
    n.titleObservers.set(t, w);
    n.allowObservers.set(t, Hr(b));
  };
  u();
}
function Eo(e, t, n, r, i) {
  const a = new window._dw1pars.Plugin(`_vkz12tr${n}`);
  a.tap(e.hooks.init.post, (u) => {
    const d = u;
    if (d.isTopLevel) {
      i.onUrl(d.client.url.href);
      yn(t, n, r, i.onTitle);
      a.tap(d.client.hooks.lifecycle.navigate, (m, b) => {
        const b_url = b.url;
        let f = b_url;
        try {
          f = new URL(b_url, d.client.url.href).href;
        } catch {}
        i.onUrl(f);
        yn(t, n, r, i.onTitle);
      });
    }
  });
}
function jo(e, t, n, r, i) {
  const a = r.frames.get(t);
  if (a) {
    return a;
  }
  const u = e.createFrame(n, xo(e));
  Eo(u, n, t, r, i);
  r.frames.set(t, u);
  return u;
}
function So() {
  return (
    navigator.hardwareConcurrency <= 4 || (navigator.deviceMemory ?? 8) <= 4
  );
}
const Ao = r_1.forwardRef(function (
  { controller, tabs, activeId, onUrl, onTitle },
  u,
) {
  const dRef = r_1.useRef(new Map());
  const mRef = r_1.useRef(ko());
  const bRef = r_1.useRef(new Map());
  const gRef = r_1.useRef(new Map());
  const current = r_1.useRef(So()).current;
  const [, wDispatch] = r_1.useReducer((x) => x + 1, 0);
  const I = r_1.useCallback(() => {
    if (controller) {
      for (const x of tabs) {
        const C = bRef.current.get(x.id);
        if (!C || gRef.current.get(x.id) === C) {
          continue;
        }
        const N = dRef.current.get(x.id);
        if (!N) {
          continue;
        }
        const D = jo(controller, x.id, N, mRef.current, {
          onUrl: ($) => onUrl(x.id, $),
          onTitle: ($) => onTitle(x.id, $),
        });
        gRef.current.set(x.id, C);
        D.go(C);
      }
    }
  }, [controller, tabs, onUrl, onTitle]);
  r_1.useEffect(() => {
    I();
  }, [I]);
  r_1.useEffect(() => {
    const x = tabs.find((C) => C.id === activeId);
    if (x && x.url && !ge(x.url)) {
      if (!bRef.current.has(x.id)) {
        bRef.current.set(x.id, x.url);
      }
      I();
    }
  }, [activeId, tabs, I]);
  r_1.useEffect(() => {
    const x = new Set(tabs.map((N) => N.id));
    const C = current ? new Set([activeId]) : x;
    for (const N of mRef.current.frames.keys()) {
      if (!C.has(N)) {
        Co(mRef.current, N);
        gRef.current.delete(N);
      }
    }
    for (const N of bRef.current.keys()) {
      if (!x.has(N)) {
        bRef.current.delete(N);
        gRef.current.delete(N);
      }
    }
  }, [activeId, tabs, current]);
  r_1.useImperativeHandle(
    u,
    () => ({
      goTo(x, C) {
        bRef.current.set(x, C);
        wDispatch();
      },
      back() {
        try {
          dRef.current.get(activeId)?.contentWindow?.history.back();
        } catch {}
      },
      forward() {
        try {
          dRef.current.get(activeId)?.contentWindow?.history.forward();
        } catch {}
      },
      reload() {
        const x = bRef.current.get(activeId);
        const C = mRef.current.frames.get(activeId);
        if (C && x) {
          C.go(x);
        }
      },
      getIframe(x) {
        return dRef.current.get(x);
      },
    }),
    [activeId],
  );
  return (
    <div className="_ml3dokr">
      {controller &&
        tabs
          .filter((x) => !ge(x.url) && (!current || x.id === activeId))
          .map((x) => (
            <iframe
              key={x.id}
              title={x.title}
              ref={(C) => {
                if (C) {
                  dRef.current.set(x.id, C);
                } else {
                  dRef.current.delete(x.id);
                }
              }}
              className="_9vtpg5x"
              data-visible={x.id === activeId && !!x.url}
              allow={allow}
              allowFullScreen
              onPointerDown={(C) => C.currentTarget.focus()}
            />
          ))}
    </div>
  );
});
const _o = r_1.memo(function ({ disabled, onNavigate }) {
  return (
    <div className="_ra6wq4g">
      <div className="_6bitb1w">
        <div className="_w2arrbg">
          <h1 className="_r3e2b1t" aria-label="Home" />
          <div className="newtab-underline" />
        </div>
        <QtComponent
          variant="_ra6wq4g"
          url=""
          disabled={disabled}
          autoFocus
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
});
const timeout = 2500;
const To = 200;
function ps(e) {
  const _window = window;
  let n = false;
  let r = 0;
  let i = 0;
  let a = 0;
  let u = 0;
  const d = () => {
    if (!n) {
      e();
    }
  };
  const m = () => {
    if (_window.requestIdleCallback) {
      a = _window.requestIdleCallback(d, {
        timeout,
      });
      return;
    }
    u = window.setTimeout(d, To);
  };
  const b = () => {
    r = window.requestAnimationFrame(() => {
      i = window.requestAnimationFrame(m);
    });
  };
  if (document.readyState === "complete") {
    b();
  } else {
    window.addEventListener("load", b, {
      once: true,
    });
  }
  return () => {
    n = true;
    window.removeEventListener("load", b);
    window.cancelAnimationFrame(r);
    window.cancelAnimationFrame(i);
    if (a && _window.cancelIdleCallback) {
      _window.cancelIdleCallback(a);
    }
    window.clearTimeout(u);
  };
}
const No = r_1.lazy(() =>
  Ee(
    () => import("./DarkVeil-DH-OOCEV-1570f54e.js"),
    __vite__mapDeps([3, 1, 4, 2]),
    import.meta.url,
  ),
);
function LoComponent(e) {
  const [t, setT] = r_1.useState(false);
  r_1.useEffect(() => ps(() => setT(true)), []);
  if (t) {
    return (
      <r_1.Suspense fallback={null}>
        <No {...e} />
      </r_1.Suspense>
    );
  }
  return null;
}
function IoComponent({ mode, hueShift, paused }) {
  const r = mode === "full" || mode === "reduced";
  const i = mode === "reduced";
  return (
    <div className={mode === "mesh" ? "_gnozgsx mesh" : "_gnozgsx"} aria-hidden>
      {r && (
        <LoComponent
          hueShift={hueShift}
          speed={i ? 1.2 : 2.1}
          warpAmount={1.1}
          scanlineFrequency={0.5}
          resolutionScale={i ? 0.45 : 1}
          paused={paused}
        />
      )}
    </div>
  );
}
function RoComponent({ open, onClose, onSubmit }) {
  const [r, setR] = r_1.useState("");
  const aRef = r_1.useRef(null);
  r_1.useEffect(() => {
    if (!open) {
      return;
    }
    setR("");
    requestAnimationFrame(() => aRef.current?.focus());
    const d = (m) => {
      if (m.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", d);
    return () => document.removeEventListener("keydown", d);
  }, [open, onClose]);
  if (!open) {
    return null;
  }
  const onSubmit_1 = (d) => {
    d.preventDefault();
    const m = r.trim();
    if (m) {
      onSubmit(m);
      onClose();
    }
  };
  return (
    <div className="_vrprf3u" onClick={onClose}>
      <div className="modal" onClick={(d) => d.stopPropagation()}>
        <div className="modal-title">Add bookmark</div>
        <form onSubmit={onSubmit_1}>
          <div className="modal-field">
            <input
              ref={aRef}
              value={r}
              onChange={(d) => setR(d.target.value)}
              placeholder="https://example.com"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="modal-btn ghost" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="modal-btn primary"
              disabled={!r.trim()}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
function MoComponent({ open, onAccept, onUpgrade }) {
  const rRef = r_1.useRef(null);
  r_1.useEffect(() => {
    if (!open) {
      return;
    }
    requestAnimationFrame(() => rRef.current?.focus());
    const i = (a) => {
      if (a.key === "Enter") {
        onAccept();
      }
    };
    document.addEventListener("keydown", i);
    return () => document.removeEventListener("keydown", i);
  }, [open, onAccept]);
  return (
    <A_1>
      {open && (
        <m_1.div
          className="_vrprf3u _74eeno4"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <m_1.div
            className="modal _cbk5ekl"
            role="dialog"
            aria-labelledby="ads-notice-title"
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.97,
            }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="modal-title" id="ads-notice-title">
              A quick note about ads
            </div>
            <p className="ads-notice-body">
              Ads help keep Lucide free to run. You may see a few while using
              the site.
            </p>
            <p className="ads-notice-body">
              Ignore any ad that asks you to download something, install an
              extension, or enable notifications — those are not from us.
            </p>
            <p className="ads-notice-plus">
              Prefer no ads?{" "}
              <button
                type="button"
                className="ads-notice-plus-link"
                onClick={onUpgrade}
              >
                Upgrade to Plus
              </button>
            </p>
            <div className="modal-actions">
              <button
                ref={rRef}
                type="button"
                className="modal-btn primary"
                onClick={onAccept}
              >
                Okay
              </button>
            </div>
          </m_1.div>
        </m_1.div>
      )}
    </A_1>
  );
}
function OoComponent({ open, onClose, onUpgrade }) {
  r_1.useEffect(() => {
    if (!open) {
      return;
    }
    const r = window.setTimeout(onClose, 6000);
    return () => window.clearTimeout(r);
  }, [open, onClose]);
  return (
    <A_1>
      {open && (
        <m_1.aside
          className="plus-perks-toast"
          role="status"
          aria-live="polite"
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 10,
            scale: 0.98,
          }}
          transition={{
            duration: 0.28,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <button
            type="button"
            className="plus-perks-toast-x"
            onClick={onClose}
            aria-label="Dismiss"
          >
            <NComponent size={14} />
          </button>
          <div className="plus-perks-toast-title">Lucide Plus</div>
          <p className="plus-perks-toast-body">
            Go ad-free, unlock 1,500 AI messages/day, and get exclusive links.
          </p>
          <button
            type="button"
            className="plus-perks-toast-cta"
            onClick={onUpgrade}
          >
            Learn more
          </button>
        </m_1.aside>
      )}
    </A_1>
  );
}
function UoComponent({ open, onClose, onSubmit }) {
  const [r, setR] = r_1.useState("");
  const [a, setA] = r_1.useState(0);
  const dRef = r_1.useRef(null);
  const m = useYn(open ? r : "");
  r_1.useEffect(() => {
    if (open) {
      setR("");
      setA(0);
      requestAnimationFrame(() => dRef.current?.focus());
    }
  }, [open]);
  r_1.useEffect(() => {
    setA(0);
  }, [m]);
  const b = (f) => {
    const w = f.trim();
    if (w) {
      onSubmit(w);
      onClose();
    }
  };
  const g = (f) => {
    if (f.key === "Enter") {
      f.preventDefault();
      b(m[a] ?? r);
    } else if (f.key === "ArrowDown") {
      f.preventDefault();
      setA((w) => Math.min(m.length - 1, w + 1));
    } else if (f.key === "ArrowUp") {
      f.preventDefault();
      setA((w) => Math.max(0, w - 1));
    }
  };
  return (
    <A_1>
      {open && (
        <m_1.div
          className="spotlight-backdrop"
          onClick={onClose}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.16,
            ease: "easeOut",
          }}
        >
          <m_1.div
            className="spotlight"
            onClick={(f) => f.stopPropagation()}
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="spotlight-input">
              <Qe1Component size={18} />
              <input
                ref={dRef}
                value={r}
                placeholder="Search or enter URL"
                spellCheck={false}
                autoComplete="off"
                onChange={(f) => setR(f.target.value)}
                onKeyDown={g}
              />
            </div>
            {m.length > 0 && (
              <ul className="spotlight-list">
                {m.map((f, w) => (
                  <li
                    key={`${f}-${w}`}
                    className={`spotlight-item ${w === a ? "selected" : ""}`}
                    onMouseEnter={() => setA(w)}
                    onMouseDown={(I) => I.preventDefault()}
                    onClick={() => b(f)}
                  >
                    <Qe1Component size={14} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </m_1.div>
        </m_1.div>
      )}
    </A_1>
  );
}
function Fs1Component() {
  return (
    <p className="plus-blocked-note">
      Checkout opens a secure Stripe page, which may be blocked on your network.
      If it doesn't load, join{" "}
      <a href="https://discord.gg/chromebook" target="_blank" rel="noreferrer">
        discord.gg/chromebook
      </a>{" "}
      to purchase there.
    </p>
  );
}
function FoComponent({ open, onClose, account, heading, blurb, onSignUp }) {
  if (!open) {
    return null;
  }
  const u = account.status === "signed-in";
  const onClick = () => {
    if (u) {
      account.checkout(account.user?.email ?? undefined);
    } else if (onSignUp != null) {
      onSignUp();
    }
  };
  const m = heading ?? "Lucide Plus";
  const b =
    blurb ??
    "Unlock 1,500 AI messages/day, exclusive links, and an ad-free experience.";
  return (
    <div className="_vrprf3u upgrade-backdrop" onClick={onClose}>
      <div className="modal" onClick={(g) => g.stopPropagation()}>
        <div className="modal-title">{m}</div>
        <p
          style={{
            margin: "0 0 0.9rem",
            fontSize: 13,
            color: "var(--muted)",
          }}
        >
          {b}
        </p>
        {u && <Fs1Component />}
        <div className="modal-actions">
          <button type="button" className="modal-btn ghost" onClick={onClose}>
            Not now
          </button>
          <button type="button" className="modal-btn primary" onClick={onClick}>
            {u ? "Upgrade to Plus" : "Sign up to upgrade"}
          </button>
        </div>
      </div>
    </div>
  );
}
function rt() {
  return {
    id: `tab-${Date.now().toString(36)}-${Math.floor(Math.random() * 1000000).toString(36)}`,
    title: "New Tab",
    url: "",
  };
}
const Do = 400;
function $o(e) {
  const t = e;
  return (
    !!t &&
    typeof t.id === "string" &&
    typeof t.title === "string" &&
    typeof t.url === "string"
  );
}
function Bo() {
  if (!a7().restoreTabs) {
    return It();
  }
  const e = gt("tabs", {});
  const t = Array.isArray(e.tabs) ? e.tabs.filter($o) : [];
  if (t.length > 0) {
    const activeId = t.some((r) => r.id === e.activeId) ? e.activeId : t[0].id;
    return {
      tabs: t,
      activeId,
    };
  }
  return It();
}
function It() {
  const e = rt();
  return {
    tabs: [e],
    activeId: e.id,
  };
}
function qo(e, t) {
  switch (t.type) {
    case "open": {
      const n = rt();
      return {
        tabs: [...e.tabs, n],
        activeId: n.id,
      };
    }
    case "openInternal": {
      const n = e.tabs.find((i) => i.url === t.url);
      if (n) {
        return {
          ...e,
          activeId: n.id,
        };
      }
      const r = {
        ...rt(),
        url: t.url,
        title: t.title,
      };
      return {
        tabs: [...e.tabs, r],
        activeId: r.id,
      };
    }
    case "openUrl": {
      const n = {
        ...rt(),
        url: t.url,
        title: t.title,
      };
      return {
        tabs: [...e.tabs, n],
        activeId: n.id,
      };
    }
    case "close": {
      const n = e.tabs.findIndex((a) => a.id === t.id);
      if (n === -1) {
        return e;
      }
      const r = e.tabs.filter((a) => a.id !== t.id);
      if (r.length === 0) {
        return It();
      }
      let activeId = e.activeId;
      if (activeId === t.id) {
        activeId = r[Math.min(n, r.length - 1)].id;
      }
      return {
        tabs: r,
        activeId,
      };
    }
    case "activate":
      if (e.activeId === t.id) {
        return e;
      }
      return {
        ...e,
        activeId: t.id,
      };
    case "patch": {
      const n = e.tabs.find((i) => i.id === t.id);
      if (!n || Object.keys(t.patch).every((i) => n[i] === t.patch[i])) {
        return e;
      }
      return {
        ...e,
        tabs: e.tabs.map((i) => {
          if (i.id === t.id) {
            return {
              ...i,
              ...t.patch,
            };
          }
          return i;
        }),
      };
    }
    case "reorder":
      return {
        ...e,
        tabs: t.tabs,
      };
    default:
      return e;
  }
}
function useWo() {
  const [eState, tDispatch] = r_1.useReducer(qo, undefined, Bo);
  const nRef = r_1.useRef(eState);
  nRef.current = eState;
  r_1.useEffect(() => {
    const f = setTimeout(() => He("tabs", eState), Do);
    return () => clearTimeout(f);
  }, [eState]);
  r_1.useEffect(() => {
    const f = () => He("tabs", nRef.current);
    const w = () => {
      if (document.visibilityState === "hidden") {
        f();
      }
    };
    window.addEventListener("pagehide", f);
    document.addEventListener("visibilitychange", w);
    return () => {
      window.removeEventListener("pagehide", f);
      document.removeEventListener("visibilitychange", w);
    };
  }, []);
  const r = r_1.useCallback(
    () =>
      tDispatch({
        type: "open",
      }),
    [],
  );
  const openInternal = r_1.useCallback(
    (f, w) =>
      tDispatch({
        type: "openInternal",
        url: f,
        title: w,
      }),
    [],
  );
  const openUrl = r_1.useCallback(
    (f, w) =>
      tDispatch({
        type: "openUrl",
        url: f,
        title: w,
      }),
    [],
  );
  const close = r_1.useCallback(
    (f) =>
      tDispatch({
        type: "close",
        id: f,
      }),
    [],
  );
  const activate = r_1.useCallback(
    (f) =>
      tDispatch({
        type: "activate",
        id: f,
      }),
    [],
  );
  const m = r_1.useCallback(
    (f, w) =>
      tDispatch({
        type: "patch",
        id: f,
        patch: w,
      }),
    [],
  );
  const reorder = r_1.useCallback(
    (tabs) =>
      tDispatch({
        type: "reorder",
        tabs,
      }),
    [],
  );
  const activeTab = r_1.useMemo(
    () => eState.tabs.find((f) => f.id === eState.activeId) ?? eState.tabs[0],
    [eState.tabs, eState.activeId],
  );
  return {
    tabs: eState.tabs,
    activeId: eState.activeId,
    activeTab,
    open: r,
    openInternal,
    openUrl,
    close,
    activate,
    patch: m,
    reorder,
  };
}
function useHo() {
  const [e, setE] = r_1.useState(() => Fn());
  r_1.useEffect(() => {
    Dn(e);
  }, [e]);
  const add = r_1.useCallback((u) => {
    const d = u.trim();
    if (!d) {
      return;
    }
    const m = /^https?:\/\//.test(d) ? d : `https://${d}`;
    setE((b) => [...b, fn(m)]);
  }, []);
  const remove = r_1.useCallback((u) => {
    setE((d) => d.filter((m) => m.id !== u));
  }, []);
  const toggleForUrl = r_1.useCallback((u, d) => {
    if (u) {
      setE((m) => {
        const b = m.findIndex((g) => g.url === u);
        if (b >= 0) {
          return m.filter((g, f) => f !== b);
        }
        return [...m, fn(u, d)];
      });
    }
  }, []);
  const has = r_1.useCallback((u) => !!u && e.some((d) => d.url === u), [e]);
  return {
    bookmarks: e,
    add,
    remove,
    toggleForUrl,
    has,
  };
}
const Rt = [
  {
    id: "dark",
    name: "Dark",
    mode: "dark",
  },
  {
    id: "light",
    name: "Light",
    mode: "light",
  },
  {
    id: "halloween",
    name: "Halloween",
    mode: "dark",
    accent: "#ff7a1a",
    veilHue: 215,
  },
];
const zo = "dark";
function Ge(e) {
  return Rt.find((t) => t.id === e) ?? Rt[0];
}
function rn() {
  const e = we("theme");
  if (e && Rt.some((t) => t.id === e)) {
    return e;
  }
  if (e && e.includes("light")) {
    return "light";
  }
  return zo;
}
function on(e) {
  const t = Ge(e);
  const document_documentElement = document.documentElement;
  document_documentElement.dataset.theme = t.mode;
  document_documentElement.dataset.skin = t.id;
  document_documentElement.style.removeProperty("--wallpaper");
  ve("theme", t.id);
}
function useVo() {
  const [e, setE] = r_1.useState(rn);
  const nRef = r_1.useRef(false);
  r_1.useEffect(() => {
    if (!nRef.current) {
      nRef.current = true;
      return;
    }
    const document_documentElement = document.documentElement;
    document_documentElement.classList.add("theme-anim");
    on(e);
    const u = window.setTimeout(
      () => document_documentElement.classList.remove("theme-anim"),
      320,
    );
    return () => window.clearTimeout(u);
  }, [e]);
  const set = r_1.useCallback((a) => setE(a), []);
  const toggle = r_1.useCallback(() => {
    setE((a) => {
      if (Ge(a).mode === "dark") {
        return "light";
      }
      return "dark";
    });
  }, []);
  return {
    id: e,
    mode: Ge(e).mode,
    set,
    toggle,
  };
}
const xn = [
  {
    id: "none",
    label: "None",
    title: "",
    favicon: "",
  },
  {
    id: "google-classroom",
    label: "Google Classroom",
    title: "Home - Classroom",
    favicon: "https://ssl.gstatic.com/classroom/favicon.png",
  },
  {
    id: "google-forms",
    label: "Google Forms",
    title: "Untitled form - Google Forms",
    favicon:
      "https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico",
  },
  {
    id: "google-drive",
    label: "Google Drive",
    title: "My Drive - Google Drive",
    favicon:
      "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png",
  },
  {
    id: "google-docs",
    label: "Google Docs",
    title: "Untitled document - Google Docs",
    favicon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico",
  },
  {
    id: "kahoot",
    label: "Kahoot!",
    title: "Kahoot!",
    favicon: "https://kahoot.com/favicon.ico",
  },
  {
    id: "quizlet",
    label: "Quizlet",
    title: "Quizlet",
    favicon: "https://quizlet.com/favicon.ico",
  },
  {
    id: "custom",
    label: "Custom",
    title: "",
    favicon: "",
  },
];
const ms = "Home";
const Go = Ne("pr3gb/mark-834cc7f9f1eda4fb.png");
const Ko = "about:blank";
let bs = false;
function ma(e) {
  bs = e;
}
function Jo() {
  return bs;
}
export function a0(e) {
  return xn.find((t) => t.id === e) ?? xn[0];
}
function Yo() {
  let e = document.querySelector('link[rel~="icon"]');
  if (!e) {
    e = document.createElement("link");
    e.rel = "icon";
    document.head.appendChild(e);
  }
  return e;
}
function Xo(coverTitle, coverFavicon) {
  const n = coverTitle.trim();
  const r = coverFavicon.trim();
  document.title = n || ms;
  Yo().href = r || Go;
}
function ga(e) {
  const t = e.trim();
  if (!t) {
    return {
      valid: false,
      error: "URL is required",
    };
  }
  const n = /^https?:\/\//i.test(t) ? t : `https://${t}`;
  let r;
  try {
    r = new URL(n);
  } catch {
    return {
      valid: false,
      error: "Invalid URL format",
    };
  }
  if (r.protocol !== "http:" && r.protocol !== "https:") {
    return {
      valid: false,
      error: "URL must start with http:// or https://",
    };
  }
  return {
    valid: true,
    value: r.toString(),
  };
}
function Zo({ document }, t, n, r) {
  document.open();
  document.close();
  const document_documentElement = document.documentElement;
  let document_head = document.head;
  let document_body = document.body;
  if (!document_head) {
    document_head = document.createElement("head");
    document_documentElement.appendChild(document_head);
  }
  if (!document_body) {
    document_body = document.createElement("body");
    document_documentElement.appendChild(document_body);
  }
  const metaElement = document.createElement("meta");
  metaElement.setAttribute("charset", "utf-8");
  document_head.appendChild(metaElement);
  const metaElement_1 = document.createElement("meta");
  metaElement_1.name = "_ml3dokr";
  metaElement_1.content = "width=device-width,initial-scale=1";
  document_head.appendChild(metaElement_1);
  document.title = n.trim() || ms;
  if (r.trim()) {
    const w = document.createElement("link");
    w.rel = "icon";
    w.href = r.trim();
    document_head.appendChild(w);
  }
  const styleElement = document.createElement("style");
  styleElement.textContent =
    "html,body{margin:0;height:100%;background:#000}iframe{display:block;width:100%;height:100%;border:0}";
  document_head.appendChild(styleElement);
  const iframeElement = document.createElement("iframe");
  iframeElement.src = t;
  iframeElement.referrerPolicy = "no-referrer";
  iframeElement.allow = allow;
  iframeElement.allowFullscreen = true;
  document_body.appendChild(iframeElement);
}
function Qo(e, t, n) {
  let r = window;
  try {
    if (window.top && window.top !== window.self) {
      r = window.top;
    }
  } catch {}
  const i = r.open(Ko, "_blank");
  if (!i) {
    return {
      ok: false,
      error: "Popup blocked — allow popups for this site, then try again.",
    };
  }
  const a = location.href.startsWith("about:") ? Ne() : location.href;
  try {
    Zo(i, a, t, n);
  } catch {
    return {
      ok: false,
      error: "Couldn't write to the new window.",
    };
  }
  window.setTimeout(() => {
    try {
      r.location.replace(e);
    } catch {
      window.location.replace(e);
    }
  }, 40);
  return {
    ok: true,
  };
}
let document_body = document.body;
function ei(e) {
  document_body = e;
}
function ti() {
  return document_body;
}
function ni() {
  return document_body;
}
function kn(e) {
  if (e === " ") {
    return "space";
  }
  return e.trim().toLowerCase();
}
function si(target) {
  const t = target;
  return (
    !!t &&
    (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
  );
}
function useRi(settings) {
  r_1.useEffect(() => {
    Xo(settings.coverTitle, settings.coverFavicon);
  }, [settings.coverTitle, settings.coverFavicon]);
  r_1.useEffect(() => {
    const n = kn(settings.exitKey);
    const e_exitUrl = settings.exitUrl;
    if (!n || !e_exitUrl) {
      return;
    }
    const i = (d) => {
      if (!(d.repeat || Jo() || si(d.target)) && kn(d.key) === n) {
        d.preventDefault();
        try {
          if (window.top && window.top !== window.self) {
            window.top.location.assign(e_exitUrl);
            return;
          }
        } catch {}
        window.location.assign(e_exitUrl);
      }
    };
    const a = ti();
    const u = i;
    a.addEventListener("keydown", u, true);
    return () => a.removeEventListener("keydown", u, true);
  }, [settings.exitKey, settings.exitUrl]);
  r_1.useEffect(() => {
    if (!settings.confirmLeave) {
      return;
    }
    const n = (r) => {
      r.preventDefault();
      r.returnValue = "";
    };
    window.addEventListener("beforeunload", n);
    return () => window.removeEventListener("beforeunload", n);
  }, [settings.confirmLeave]);
  const tRef = r_1.useRef(false);
  r_1.useEffect(() => {
    if (
      !settings.autoCoverFrame ||
      tRef.current ||
      window.self !== window.top
    ) {
      return;
    }
    const n = () => {
      if (!tRef.current) {
        tRef.current = true;
        r();
        Qo(settings.exitUrl, settings.coverTitle, settings.coverFavicon);
      }
    };
    const r = () => {
      window.removeEventListener("pointerdown", n);
      window.removeEventListener("keydown", n);
    };
    window.addEventListener("pointerdown", n);
    window.addEventListener("keydown", n);
    return r;
  }, [
    settings.autoCoverFrame,
    settings.exitUrl,
    settings.coverTitle,
    settings.coverFavicon,
  ]);
}
const oi = "https://llvpn.com/tag.min.js";
const ii = "12183473";
const ai = "https://dd133.com/vignette.min.js";
const ci = "12190947";
const map_1 = new Map();
let Oe = false;
let Mt = false;
let Ot = false;
let _e = null;
function li(search) {
  return new URLSearchParams(search).has("skip");
}
function gs() {
  if (!Ot) {
    Ot = true;
    window.location.reload();
  }
}
function Cn(e, href, n) {
  if (map_1.has(e)) {
    return;
  }
  const scriptElement = document.createElement("script");
  map_1.set(e, scriptElement);
  scriptElement.dataset.cfasync = "false";
  if (n) {
    scriptElement.dataset.zone = n;
  }
  scriptElement.src = href;
  scriptElement.dataset.ext = href;
  scriptElement.async = true;
  scriptElement.type = "text/javascript";
  scriptElement.addEventListener(
    "load",
    () => {
      if (map_1.get(e) !== scriptElement) {
        gs();
        return;
      }
      Mt = true;
      if (!Oe || !We()) {
        ws();
        return;
      }
    },
    {
      once: true,
    },
  );
  scriptElement.addEventListener(
    "error",
    () => {
      scriptElement.remove();
      if (map_1.get(e) === scriptElement) {
        map_1.delete(e);
      }
    },
    {
      once: true,
    },
  );
  (document.head ?? document.documentElement).appendChild(scriptElement);
}
function ws() {
  _e?.();
  _e = null;
  Oe = false;
  for (const t of map_1.values()) {
    t.remove();
  }
  map_1.clear();
  const e = Mt;
  Mt = false;
  if (e) {
    gs();
  }
}
function We() {
  return window.location.hostname !== "localhost";
}
function ui() {
  const e = window.location.hostname !== "lucideon.top";
  if (!(!We() || _e || (Oe && map_1.size === (e ? 2 : 1)))) {
    if (!Oe) {
      Ot = false;
    }
    Oe = true;
    _e = ps(() => {
      _e = null;
      if (Oe) {
        Cn("pop", new URL(oi, document.baseURI).href, ii);
        if (e) {
          Cn("social", new URL(ai, document.baseURI).href, ci);
        }
      }
    });
  }
}
function useDi(e, t) {
  const nRef = r_1.useRef(false);
  const rRef = r_1.useRef(false);
  const [i] = r_1.useState(() => li(window.location.search));
  const [a, setA] = r_1.useState(
    () => We() && !i && we("ads.notice") !== "seen",
  );
  const [d, setD] = r_1.useState(null);
  const [plusToastOpen, setPlusToastOpen] = r_1.useState(false);
  r_1.useEffect(() => {
    if (!(!i || !We())) {
      ve("ads.notice", "seen");
    }
  }, [i]);
  r_1.useEffect(() => {
    if (e.isPlus) {
      setA(false);
      setD(null);
      setPlusToastOpen(false);
    }
  }, [e.isPlus]);
  r_1.useEffect(() => {
    if (!(e.status === "loading" || e.isPlus || a || d || rRef.current)) {
      rRef.current = true;
      setPlusToastOpen(true);
    }
  }, [e.status, e.isPlus, a, d]);
  r_1.useEffect(() => {
    if (!(e.status === "loading" || !e.entitlementReady)) {
      if (e.isPlus || !We()) {
        ws();
        nRef.current = false;
        return;
      }
      if (!(nRef.current || a)) {
        if (we("ads.notice") === "seen") {
          nRef.current = true;
          ui();
        }
      }
    }
  }, [e.status, e.entitlementReady, e.isPlus, a, t]);
  const acceptAdsNotice = r_1.useCallback(() => {
    ve("ads.notice", "seen");
    setA(false);
  }, []);
  return {
    adsNoticeOpen: a,
    acceptAdsNotice,
    plusPromo: d,
    setPlusPromo: setD,
    plusToastOpen,
    setPlusToastOpen,
  };
}
export function a3() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    navigator.hardwareConcurrency <= 4 ||
    (navigator.deviceMemory ?? 8) <= 4
  );
}
function usePi(backgroundMode) {
  return r_1.useMemo(
    () => backgroundMode === "full" || backgroundMode === "reduced" || a3(),
    [backgroundMode],
  );
}
function useFi(e) {
  const tRef = r_1.useRef(e);
  tRef.current = e;
  r_1.useEffect(() => {
    const n = (r) => {
      if (!(r.ctrlKey || r.metaKey) || r.altKey) {
        return;
      }
      const i = r.key.toLowerCase();
      switch (i) {
        case "t":
          r.preventDefault();
          tRef.current.onNewTab();
          break;
        case "w":
          r.preventDefault();
          tRef.current.onCloseTab();
          break;
        case "k":
          r.preventDefault();
          tRef.current.onSpotlight();
          break;
        default:
          if (i >= "1" && i <= "9") {
            r.preventDefault();
            tRef.current.onJumpToTab(Number(i));
          }
      }
    };
    window.addEventListener("keydown", n, true);
    return () => window.removeEventListener("keydown", n, true);
  }, []);
}
function useMi(adblock) {
  const [controller, setController] = r_1.useState(null);
  const [r, setR] = r_1.useState(null);
  r_1.useEffect(() => {
    let a = true;
    let u = 0;
    const window_requestIdleCallback = window.requestIdleCallback;
    const m = (g) => {
      if (window_requestIdleCallback) {
        return window_requestIdleCallback(g, {
          timeout: 2500,
        });
      }
      return window.setTimeout(g, 200);
    };
    const b = () => {
      Ee(
        async () => {
          const { rebootController } =
            await import("./boot-CK7DhGn3-1570f54e.js");
          return {
            rebootController,
          };
        },
        __vite__mapDeps([5, 6, 0, 1, 2]),
        import.meta.url,
      ).then(({ rebootController }) =>
        rebootController().then(
          (f) => {
            Tn();
            if (a) {
              setController(f);
            }
          },
          (f) => {
            if (a) {
              u += 1;
              if (u < 30) {
                window.setTimeout(b, Math.min(1000 * u, 5000));
              } else {
                setR(f instanceof Error ? f : new Error(String(f)));
              }
            }
          },
        ),
      );
    };
    m(b);
    return () => {
      a = false;
    };
  }, [adblock]);
  return {
    controller,
    error: r,
  };
}
let Pe = null;
let Qe = null;
let ot = null;
let it = false;
const weakSet = new WeakSet();
function vs() {
  if (!Pe || ot === null) {
    return;
  }
  const e = ot;
  ot = null;
  it = true;
  try {
    Pe.cookieJar.clear();
    Pe.cookieJar.load(e);
    Pe.persistCookies().finally(() => {
      it = false;
    });
  } catch {
    it = false;
  }
}
function bi(controller, scheduleSync) {
  Qe = scheduleSync;
  if (controller) {
    Pe = controller;
    if (!weakSet.has(controller)) {
      const n = controller.persistCookies.bind(controller);
      controller.persistCookies = async () => {
        await n();
        if (!(it || Qe == null)) {
          Qe();
        }
      };
      weakSet.add(controller);
    }
    vs();
  }
}
function gi() {
  if (!Pe) {
    return null;
  }
  try {
    return Pe.cookieJar.dump();
  } catch {
    return null;
  }
}
function wi(proxyCookies) {
  ot = proxyCookies;
  vs();
}
const vi = "https://www.google.com/search?q=%s";
function yi(e) {
  if (/\s/.test(e)) {
    return false;
  }
  if (/^https?:\/\//.test(e) || e.startsWith("localhost")) {
    return true;
  }
  return /^[^\s.]+\.[^\s.]{2,}/.test(e);
}
function jn(e, t = vi) {
  const n = e.trim();
  if (n) {
    if (/^https?:\/\//.test(n)) {
      return n;
    }
    if (yi(n)) {
      return `https://${n}`;
    }
    return t.replace("%s", encodeURIComponent(n));
  }
  return "";
}
function useXi(e) {
  r_1.useEffect(() => {
    const t = (n) => {
      if (n.origin === window.location.origin && n.data?.type === so) {
        e();
      }
    };
    window.addEventListener("message", t);
    return () => window.removeEventListener("message", t);
  }, [e]);
}
class Ut extends Error {
  constructor(n, r, i = null) {
    super(r);
    Se(this, "status");
    Se(this, "code");
    this.status = n;
    this.code = i;
  }
}
const ue = "/api/account";
async function ki(e) {
  const t = await e.text();
  try {
    const n = JSON.parse(t);
    return {
      message: n.error ?? t,
      code: n.code ?? null,
    };
  } catch {
    return {
      message: t || e.statusText,
      code: null,
    };
  }
}
function Ci() {
  async function e(t, n, r) {
    const i = {
      ...r?.headers,
    };
    let a = r?.body;
    if (r?.json !== undefined) {
      i["content-type"] = "application/json";
      a = JSON.stringify(r.json);
    }
    const u = await fetch(Ve(t + n), {
      ...r,
      headers: {
        ...i,
        ...or("account"),
      },
      body: a,
      credentials,
    });
    if (!u.ok) {
      const { message, code } = await ki(u);
      throw new Ut(u.status, message, code);
    }
    if (u.status !== 204) {
      return await u.json();
    }
  }
  return {
    me: () => e(ue, "/me"),
    login: (t, n, r) =>
      e(ue, "/auth/login", {
        method: "POST",
        json: {
          email: t,
          password: n,
          captcha: r,
        },
      }).then((i) => {
        jt("account", i);
        return i;
      }),
    requestSetPassword: (t, n) =>
      e(ue, "/auth/set-password/request", {
        method: "POST",
        json: {
          email: t,
          captcha: n,
        },
      }),
    setPassword: (t, n, r) =>
      e(ue, "/auth/set-password", {
        method: "POST",
        json: {
          email: t,
          code: n,
          password: r,
        },
      }).then((i) => {
        jt("account", i);
        return i;
      }),
    requestReset: (t, n) =>
      e(ue, "/auth/reset/request", {
        method: "POST",
        json: {
          email: t,
          captcha: n,
        },
      }),
    reset: (t, n, r) =>
      e(ue, "/auth/reset", {
        method: "POST",
        json: {
          email: t,
          code: n,
          password: r,
        },
      }).then((i) => {
        jt("account", i);
        return i;
      }),
    logout: () => {
      ir("account");
      return e(ue, "/logout", {
        method: "POST",
      });
    },
    getSync: () => e(ue, "/me/sync"),
    putSync: (data) =>
      e(ue, "/me/sync", {
        method: "PUT",
        json: {
          data,
        },
      }),
    billingStatus: () => e(ue, "/billing/status"),
    checkout: (t, n) =>
      e(ue, "/billing/checkout", {
        method: "POST",
        json: {
          email: t,
          origin: n,
        },
      }),
    billingPortal: (t) =>
      e(ue, "/billing/portal", {
        method: "POST",
        json: {
          origin: t,
        },
      }),
    verifyCheckout: (t) =>
      e(ue, `/billing/verify?session_id=${encodeURIComponent(t)}`),
    setDiscord: (discordHandle) =>
      e(ue, "/me/discord", {
        method: "POST",
        json: {
          discordHandle,
        },
      }),
  };
}
function Sn() {
  const e = {
    bookmarks: Fn(),
    settings: a7(),
    themeId: rn(),
  };
  const t = gi();
  if (t !== null) {
    e.proxyCookies = t;
  }
  return e;
}
function Ei(data) {
  if (typeof data !== "object" || data === null) {
    return;
  }
  const { bookmarks, settings, themeId, proxyCookies } = data;
  if (Array.isArray(bookmarks)) {
    Dn(bookmarks);
  }
  if (settings && typeof settings === "object") {
    Kn({
      ...a7(),
      ...settings,
    });
  }
  if (typeof themeId === "string") {
    on(themeId);
  }
  if (typeof proxyCookies === "string") {
    wi(proxyCookies);
  }
}
const et = {
  exports: {},
};
let An;
function ji() {
  if (!An) {
    An = 1;
    (function (e, t) {
      (() => {
        var B;
        var ne;
        var q;
        var E;
        var M;
        var Y;
        var Z;
        var de;
        var he;
        var P;
        var F;
        var h;
        var se;
        var X;
        var le;
        var ye;
        var pe;
        var S;
        var Me;
        var Ft;
        var Dt;
        var at;
        var $t;
        var Bt;
        var qt;
        var ys;
        var Wt;
        var xs;
        var ks;
        var Ht;
        var ct;
        var zt;
        var Cs;
        var lt;
        var W;
        var Es;
        var ut;
        const n =
          "vibrate" in navigator &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (typeof window === "undefined") {
          return;
        }
        const r = [
          "#f5c2e7",
          "#cba6f7",
          "#f38ba8",
          "#fab387",
          "#f9e2af",
          "#a6e3a1",
          "#94e2d5",
          "#89dceb",
          "#b4befe",
        ];
        const i = (H, A, l) => {
          const p = A === 0 ? "9999px" : "0";
          const v = A === l - 1 ? "9999px" : "0";
          return `color:#1e1e2e;background:${((y) => {
            if (y === "cap") {
              return "#89b4fa";
            }
            let k = 0;
            for (let j = 0; j < y.length; j++) {
              k = y.charCodeAt(j) + ((k << 5) - k);
            }
            return r[Math.abs(k) % r.length];
          })(
            H,
          )};margin-left:${A ? "-6px" : 0};padding:0 6px;border-radius:${p} ${v} ${v} ${p};font-weight:600`;
        };
        const a = {};
        for (const H of ["debug", "info", "warn", "error"]) {
          a[H] = (A, ...l) => {
            if (window.CAP_SILENT || (H === "debug" && !window.CAP_DEBUG)) {
              return;
            }
            const p = A.map((y) => `%c${y}`).join(" ");
            const v = A.map((y, k) => i(y, k, A.length));
          };
        }
        const u = (H) => {
          if (H) {
            return ["cap", H];
          }
          return ["cap"];
        };
        const d = (H) => `${Math.round(performance.now() - H)}ms`;
        const m = (H, A) =>
          Object.assign(new Error(A), {
            code: H,
          });
        const b = (H, A = {}) => {
          if (window != null && window.CAP_CUSTOM_FETCH) {
            return window.CAP_CUSTOM_FETCH(H, A);
          }
          return fetch(H, A);
        };
        const g = (H, A) => {
          if (A) {
            if (A.aborted) {
              return Promise.reject(m("aborted", "aborted"));
            }
            return Promise.race([
              H,
              new Promise((resolve, reject) =>
                A.addEventListener(
                  "abort",
                  () => reject(m("aborted", "aborted")),
                  {
                    once: true,
                  },
                ),
              ),
            ]);
          }
          return H;
        };
        const f =
          "initial-state,verifying-label,solved-label,error-label,required-label,troubleshooting-label,group-aria-label,verify-aria-label,verifying-aria-label,verified-aria-label,error-aria-label".split(
            ",",
          );
        const w = {
          "zh-cn":
            "确认你是真人/正在验证.../你是真人/出错了。请重试。/请确认你是真人/故障排除/Cap 验证/点击以确认你是真人/正在验证你是真人，请稍候/我们已确认你是真人，你可以继续了/发生错误，请重试",
          es: "Verifica que eres humano/Verificando.../Eres humano/Error. Inténtalo de nuevo./Verifica que eres humano/Solucionar problemas/Verificación de Cap/Haz clic para verificar que eres humano/Verificando que eres humano, espera/Hemos verificado que eres humano, ya puedes continuar/Se produjo un error, inténtalo de nuevo",
          hi: "पुष्टि करें कि आप मानव हैं/सत्यापित हो रहा है.../आप मानव हैं/त्रुटि। पुनः प्रयास करें।/कृपया पुष्टि करें कि आप मानव हैं/समस्या निवारण/Cap सत्यापन/पुष्टि करने के लिए क्लिक करें कि आप मानव हैं/सत्यापित किया जा रहा है कि आप मानव हैं, प्रतीक्षा करें/हमने पुष्टि कर दी है कि आप मानव हैं, अब आप जारी रख सकते हैं/एक त्रुटि हुई, पुनः प्रयास करें",
          ar: "تحقق من أنك إنسان/جارٍ التحقق.../أنت إنسان/خطأ. حاول مرة أخرى./يرجى التحقق من أنك إنسان/استكشاف الأخطاء وإصلاحها/تحقق Cap/انقر للتحقق من أنك إنسان/جارٍ التحقق من أنك إنسان، يرجى الانتظار/لقد تحققنا من أنك إنسان، يمكنك المتابعة الآن/حدث خطأ، يرجى المحاولة مرة أخرى",
          pt: "Sou humano/Verificando.../Você é humano/Erro. Tente novamente./Verifique que você é humano/Solução de problemas/Verificação Cap/Clique para verificar que você é humano/Verificando que você é humano, aguarde/Verificamos que você é humano, você pode continuar/Ocorreu um erro, tente novamente",
          ru: "Я человек/Проверка.../Вы человек/Ошибка. Повторите./Подтвердите, что вы человек/Устранение неполадок/Проверка Cap/Нажмите, чтобы подтвердить, что вы человек/Проверяем, что вы человек, подождите/Мы подтвердили, что вы человек, можете продолжить/Произошла ошибка, повторите попытку",
          ja: "私は人間です/確認中.../あなたは人間です/エラー。再試行を。/あなたが人間であることを確認してください/トラブルシューティング/Cap 認証/クリックして人間であることを確認/あなたが人間であることを確認しています。お待ちください/あなたが人間であることを確認しました。続行できます/エラーが発生しました。もう一度お試しください",
          de: "Ich bin ein Mensch/Wird überprüft.../Sie sind ein Mensch/Fehler. Erneut versuchen./Bitte bestätigen Sie, dass Sie ein Mensch sind/Fehlerbehebung/Cap-Verifizierung/Klicken, um zu bestätigen, dass Sie ein Mensch sind/Überprüfung, ob Sie ein Mensch sind, bitte warten/Wir haben bestätigt, dass Sie ein Mensch sind, Sie können fortfahren/Ein Fehler ist aufgetreten, bitte erneut versuchen",
          fr: "Je suis humain/Vérification.../Vous êtes humain/Erreur. Réessayez./Veuillez vérifier que vous êtes humain/Dépannage/Vérification Cap/Cliquez pour vérifier que vous êtes humain/Vérification que vous êtes humain, veuillez patienter/Nous avons vérifié que vous êtes humain, vous pouvez continuer/Une erreur s'est produite, veuillez réessayer",
        };
        function I(H, A) {
          let l = ((y) => {
            let k = 2166136261;
            for (let j = 0; j < y.length; j++) {
              k ^= y.charCodeAt(j);
              k += (k << 1) + (k << 4) + (k << 7) + (k << 8) + (k << 24);
            }
            return k >>> 0;
          })(H);
          let p = "";
          function v() {
            l ^= l << 13;
            l ^= l >>> 17;
            l ^= l << 5;
            return l >>> 0;
          }
          while (p.length < A) {
            p += v().toString(16).padStart(8, "0");
          }
          return p.substring(0, A);
        }
        let x = null;
        async function C(H) {
          const A = ((p) => {
            const v = atob(p);
            const y = new Uint8Array(v.length);
            for (let k = 0; k < v.length; k++) {
              y[k] = v.charCodeAt(k);
            }
            return y;
          })(H);
          const l = new TextDecoder().decode(
            await (async (p) => {
              if (typeof DecompressionStream !== "undefined") {
                try {
                  const v = new DecompressionStream("deflate-raw");
                  const y = v.writable.getWriter();
                  const k = v.readable.getReader();
                  y.write(p)
                    .then(() => y.close())
                    .catch(() => {});
                  const j = [];
                  while (true) {
                    const { done, value } = await k.read();
                    if (done) {
                      break;
                    }
                    j.push(value);
                  }
                  let _ = 0;
                  for (const ee of j) {
                    _ += ee.length;
                  }
                  const O = new Uint8Array(_);
                  let L = 0;
                  for (const ee of j) {
                    O.set(ee, L);
                    L += ee.length;
                  }
                  return O;
                } catch {}
              }
              if (!x) {
                x = new Promise((resolve, reject) => {
                  const k =
                    window.CAP_PAKO_URL ||
                    "https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako_inflate.min.js";
                  a.debug(
                    u("instr"),
                    "DecompressionStream unavailable, loading pako from",
                    k,
                  );
                  const scriptElement = document.createElement("script");
                  scriptElement.src = k;
                  const _ = window.CAP_SCRIPT_NONCE || window.CAP_CSS_NONCE;
                  if (_) {
                    scriptElement.setAttribute("nonce", _);
                  }
                  scriptElement.onload = () => {
                    var O;
                    if ((O = window.pako) != null && O.inflateRaw) {
                      resolve(window.pako);
                    } else {
                      reject(
                        new Error("pako loaded but inflateRaw is missing"),
                      );
                    }
                  };
                  scriptElement.onerror = () => {
                    x = null;
                    reject(new Error(`failed to load pako fallback from ${k}`));
                  };
                  document.head.appendChild(scriptElement);
                });
              }
              return (await x).inflateRaw(p);
            })(A),
          );
          return new Promise((resolve) => {
            var v = setTimeout(() => {
              j();
              resolve({
                __timeout: true,
              });
            }, 20000);
            var iframeElement = document.createElement("iframe");
            iframeElement.setAttribute("sandbox", "allow-scripts");
            iframeElement.setAttribute("aria-hidden", "true");
            iframeElement.style.cssText =
              "position:absolute;width:1px;height:1px;top:-9999px;left:-9999px;border:none;opacity:0;pointer-events:none;";
            var k = false;
            function j() {
              if (!k) {
                k = true;
                clearTimeout(v);
                window.removeEventListener("message", _);
                if (iframeElement.parentNode) {
                  iframeElement.parentNode.removeChild(iframeElement);
                }
              }
            }
            function _(ee) {
              if (
                iframeElement.contentWindow &&
                ee.source === iframeElement.contentWindow
              ) {
                const oe = ee.data;
                if (oe && typeof oe === "object") {
                  if (oe.type === "cap:instr") {
                    j();
                    if (oe.blocked) {
                      resolve({
                        __blocked: true,
                        blockReason: oe.blockReason || "automated_browser",
                      });
                    } else if (oe.result) {
                      resolve(oe.result);
                    } else {
                      resolve({
                        __timeout: true,
                      });
                    }
                  } else if (oe.type === "cap:error") {
                    j();
                    resolve({
                      __timeout: true,
                    });
                  }
                }
              }
            }
            window.addEventListener("message", _);
            const O = window.CAP_SCRIPT_NONCE || window.CAP_CSS_NONCE;
            const L = O ? ` nonce="${String(O).replace(/"/g, "&quot;")}"` : "";
            iframeElement.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><script${L}>${l}${`
<\/script></body></html>`}`;
            document.body.appendChild(iframeElement);
          });
        }
        let N = null;
        const D = () => {
          if (N) {
            return N;
          }
          const H =
            window.CAP_CUSTOM_WASM_URL ||
            "https://cdn.jsdelivr.net/npm/@cap.js/wasm@0.0.7/browser/cap_wasm_bg.wasm";
          const A = performance.now();
          a.debug(u("wasm"), "fetching", H);
          N = fetch(H)
            .then((l) => {
              if (!l.ok) {
                throw new Error(`Failed to fetch wasm: ${l.status}`);
              }
              return l.arrayBuffer();
            })
            .then((l) => WebAssembly.compile(l))
            .then((l) => {
              a.debug(u("wasm"), `ready in ${d(A)}`);
              return l;
            })
            .catch((l) => {
              N = null;
              a.warn(u("wasm"), `load failed (${d(A)}):`, l.message || l);
              throw l;
            });
          return N;
        };
        if (
          typeof WebAssembly === "object" &&
          typeof WebAssembly.compile === "function"
        ) {
          D().catch(() => {});
        }
        let $ = null;
        function J() {
          return (
            $ ||
            (($ = URL.createObjectURL(
              new Blob(
                [
                  '(()=>{const e=(e,...t)=>{self.CAP_SILENT||console[e]("[cap worker]",...t)},t=async({salt:t,target:n})=>{let s=0;const r=new TextEncoder,o=4*n.length,a=Math.floor(o/8),l=o%8,i=n.length%2==0?n:`${n}0`,c=i.length/2,f=new Uint8Array(c);for(let e=0;e<c;e++)f[e]=parseInt(i.substring(2*e,2*e+2),16);const g=l>0?255<<8-l&255:0;for(;;)try{for(let e=0;e<5e4;e++){const e=t+s,n=r.encode(e),o=await crypto.subtle.digest("SHA-256",n),i=new Uint8Array(o);let c=!0;for(let e=0;e<a;e++)if(i[e]!==f[e]){c=!1;break}if(c&&l>0&&(i[a]&g)!==(f[a]&g)&&(c=!1),c)return void self.postMessage({nonce:s,found:!0});s++}}catch(t){return e("error","fallback solver crashed:",t.message||t),void self.postMessage({found:!1,error:t.message})}},n=e=>{const t=BigInt("0x"+e.N);let n=BigInt("0x"+e.x);const s=0|e.t,r=Math.max(64,Math.floor(s/50)),o=performance.now();for(let e=0;e<s;e+=r){const o=Math.min(s,e+r);for(let s=e;s<o;s++)n=n*n%t;o<s&&self.postMessage({progress:o/s})}self.postMessage({found:!0,y:n.toString(16),durationMs:(performance.now()-o).toFixed(2)})};if("object"!=typeof WebAssembly||"function"!=typeof WebAssembly?.instantiate)return e("warn","WebAssembly unavailable, using JS fallback solver (significantly slower)"),void(self.onmessage=async({data:e})=>"rsw"===e?.kind?n(e):t({salt:e.salt,target:e.target}));let s=null;self.onmessage=async({data:r})=>{if("rsw"===r?.kind)return n(r);const{salt:o,target:a,wasmModule:l}=r;if(l instanceof WebAssembly.Module&&null===s){const n=(t=>{try{let e,n=0,r=null;const o=()=>(null!==r&&0!==r.byteLength||(r=new Uint8Array(e.memory.buffer)),r),a=new TextEncoder,l=(e,t,s)=>{if(void 0===s){const s=a.encode(e),r=t(s.length,1)>>>0;return o().subarray(r,r+s.length).set(s),n=s.length,r}let r=e.length,l=t(r,1)>>>0;const i=o();let c=0;for(;c<r;c++){const t=e.charCodeAt(c);if(t>127)break;i[l+c]=t}if(c!==r){0!==c&&(e=e.slice(c));const t=c+3*e.length;l=s(l,r,t,1)>>>0,r=t;const n=o().subarray(l+c,l+r),{written:i}=a.encodeInto(e,n);c+=i,l=s(l,r,c,1)>>>0}return n=c,l},i={wbg:{}};i.wbg.__wbindgen_init_externref_table=()=>{const t=e.__wbindgen_export_0,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)};const c=new WebAssembly.Instance(t,i);return e=c.exports,e.__wbindgen_start&&e.__wbindgen_start(),s=(t,s)=>{const r=l(t,e.__wbindgen_malloc,e.__wbindgen_realloc),o=n,a=l(s,e.__wbindgen_malloc,e.__wbindgen_realloc),i=n;return BigInt.asUintN(64,e.solve_pow(r,o,a,i))},!0}catch(t){return e("error","wasm init failed:",t.message||t),!1}})(l);if(!n)return e("warn","wasm init failed, falling back to JS solver"),t({salt:o,target:a})}if(null===s)return e("warn","no wasm module provided, falling back to JS solver"),t({salt:o,target:a});try{const e=performance.now(),t=s(o,a),n=performance.now();self.postMessage({nonce:Number(t),found:!0,durationMs:(n-e).toFixed(2)})}catch(t){e("error","solve_pow threw:",t.message||t),self.postMessage({found:!1,error:t.message||String(t)})}},self.onerror=e=>{self.postMessage({found:!1,error:e})}})();',
                ],
                {
                  type: "application/javascript",
                },
              ),
            )),
            $)
          );
        }
        class T {
          constructor(A) {
            this._size = A;
            this._workers = [];
            this._idle = [];
            this._queue = [];
            this._wasmModule = null;
            this._spawnFailures = 0;
          }
          setWasm(A) {
            this._wasmModule = A;
          }
          _spawn() {
            const A = J();
            const l = new Worker(A);
            l._busy = false;
            this._workers.push(l);
            this._idle.push(l);
            return l;
          }
          _replaceWorker(A) {
            const l = this._workers.indexOf(A);
            if (l !== -1) {
              this._workers.splice(l, 1);
            }
            const p = this._idle.indexOf(A);
            if (p !== -1) {
              this._idle.splice(p, 1);
            }
            try {
              A.terminate();
            } catch {}
            this._spawnFailures++;
            a.warn(
              u("pool"),
              `worker died, replacing (attempt ${this._spawnFailures}/3)`,
            );
            if (this._spawnFailures > 3) {
              return (
                a.error(u("pool"), "worker spawn failed repeatedly, giving up"),
                null
              );
            }
            return this._spawn();
          }
          _ensureSize(A) {
            while (this._workers.length < A) {
              this._spawn();
            }
          }
          run(salt, target) {
            return new Promise((resolve, reject) => {
              this._queue.push({
                salt,
                target,
                resolve,
                reject,
              });
              this._dispatch();
            });
          }
          runMsg(msg, onProgress) {
            return new Promise((resolve, reject) => {
              this._queue.push({
                msg,
                onProgress,
                resolve,
                reject,
              });
              this._dispatch();
            });
          }
          _dispatch() {
            while (this._idle.length > 0 && this._queue.length > 0) {
              const A = this._idle.shift();
              const l = this._queue.shift();
              const { resolve, reject } = l;
              const y = l.msg !== undefined;
              let k = false;
              const j = ({ data }) => {
                if (!k) {
                  if (
                    !data ||
                    typeof data.progress !== "number" ||
                    data.found
                  ) {
                    k = true;
                    A.removeEventListener("message", j);
                    A.removeEventListener("error", _);
                    this._spawnFailures = 0;
                    this._idle.push(A);
                    if (data.found) {
                      resolve(y ? data : data.nonce);
                    } else {
                      reject(new Error(data.error || "worker failed"));
                    }
                    this._dispatch();
                  } else if (l.onProgress) {
                    try {
                      l.onProgress(data.progress);
                    } catch {}
                  }
                }
              };
              const _ = (O) => {
                if (k) {
                  return;
                }
                k = true;
                A.removeEventListener("message", j);
                A.removeEventListener("error", _);
                const L = this._replaceWorker(A);
                reject(O);
                if (L) {
                  this._dispatch();
                }
              };
              A.addEventListener("message", j);
              A.addEventListener("error", _);
              if (y) {
                A.postMessage(l.msg);
              } else if (this._wasmModule) {
                A.postMessage(
                  {
                    salt: l.salt,
                    target: l.target,
                    wasmModule: this._wasmModule,
                  },
                  [],
                );
              } else {
                A.postMessage({
                  salt: l.salt,
                  target: l.target,
                });
              }
            }
          }
          terminate() {
            for (const A of this._workers) {
              try {
                A.terminate();
              } catch {}
            }
            this._workers = [];
            this._idle = [];
            this._queue = [];
          }
        }
        class R extends HTMLElement {
          constructor() {
            super();
            ie(this, S);
            ie(this, B, null);
            ie(this, ne, navigator.hardwareConcurrency || 8);
            Se(this, "token", null);
            ie(this, q);
            ie(this, E);
            ie(this, M);
            ie(this, Y);
            ie(this, Z);
            ie(this, de);
            ie(this, he, false);
            ie(this, P);
            ie(this, F);
            ie(this, h, null);
            ie(this, se, null);
            ie(this, X, null);
            ie(this, le, null);
            ie(this, ye, null);
            ie(this, pe, null);
            ie(this, W, () => {
              if (o(this, E)) {
                try {
                  this.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                } catch {
                  this.scrollIntoView();
                }
                o(this, E).classList.remove("invalid");
                o(this, E).offsetWidth;
                o(this, E).classList.add("invalid");
                setTimeout(() => o(this, E)?.classList.remove("invalid"), 1500);
              }
            });
            if (o(this, P)) {
              o(this, P).forEach((l, p) => {
                this.removeEventListener(p.slice(2), l);
              });
            }
            z(this, P, new Map());
            this.boundHandleProgress = this.handleProgress.bind(this);
            this.boundHandleSolve = this.handleSolve.bind(this);
            this.boundHandleError = this.handleError.bind(this);
            this.boundHandleReset = this.handleReset.bind(this);
            try {
              z(this, F, this.attachInternals());
            } catch {}
          }
          getI18nText(l, p) {
            return (
              this.getAttribute(`data-cap-i18n-${l}`) || o(this, ye)?.[l] || p
            );
          }
          static get observedAttributes() {
            return [
              "onsolve",
              "onprogress",
              "onreset",
              "onerror",
              "data-cap-worker-count",
              "data-cap-i18n-initial-state",
              "required",
            ];
          }
          initialize() {
            J();
            z(this, pe, new AbortController());
            if (!o(this, h)) {
              z(this, h, V(this, S, Ft).call(this));
            }
            if (!o(this, X)) {
              z(this, X, new T(1));
              o(this, X)._spawn();
            }
          }
          attributeChangedCallback(l, p, v) {
            let y;
            if (l.startsWith("on")) {
              const k = l.slice(2);
              const j = o(this, P).get(l);
              if (j) {
                this.removeEventListener(k, j);
              }
              if (v) {
                const _ = (O) => {
                  const L = this.getAttribute(l);
                  if (typeof window[L] === "function") {
                    window[L].call(this, O);
                  }
                };
                o(this, P).set(l, _);
                this.addEventListener(k, _);
              }
            }
            if (l === "data-cap-worker-count") {
              this.setWorkersCount(parseInt(v, 10));
            }
            if (
              l === "data-cap-i18n-initial-state" &&
              o(this, E) &&
              (y = o(this, E)) != null &&
              y.querySelector(".label.active")
            ) {
              this.animateLabel(
                this.getI18nText("initial-state", "Verify you're human"),
              );
            }
            if (l === "required") {
              V(this, S, lt).call(this);
            }
          }
          async connectedCallback() {
            z(this, de, this);
            if (this.shadowRoot) {
              z(this, q, this.shadowRoot);
            } else {
              z(
                this,
                q,
                this.attachShadow({
                  mode: "open",
                }),
              );
            }
            if (!o(this, E)) {
              z(this, E, document.createElement("div"));
            }
            V(this, S, Cs).call(this);
            this.createUI();
            this.addEventListeners();
            this.initialize();
            o(this, M).removeAttribute("disabled");
            const l = this.getAttribute("data-cap-worker-count");
            const p = l ? parseInt(l, 10) : null;
            this.setWorkersCount(p || navigator.hardwareConcurrency || 8);
            o(this, de).innerHTML =
              `<input type="hidden" name="${o(this, S, Ht)}">`;
            a.debug(
              u(),
              `widget ready (workers=${o(this, ne)}, haptics=${o(this, S, Me)})`,
            );
            V(this, S, $t).call(this);
            V(this, S, lt).call(this);
            this.addEventListener("invalid", o(this, W));
          }
          async solve() {
            if (o(this, he)) {
              return;
            }
            V(this, S, ut).call(this);
            const l = performance.now();
            const signal = o(this, pe)?.signal;
            a.debug(u("solve"), "starting");
            try {
              z(this, he, true);
              this.updateUI(
                "verifying",
                this.getI18nText("verifying-label", "Verifying..."),
                true,
              );
              o(this, M).setAttribute(
                "aria-label",
                this.getI18nText(
                  "verifying-aria-label",
                  "Verifying you're a human, please wait",
                ),
              );
              this.dispatchEvent("progress", {
                progress: 0,
              });
              try {
                let solutions;
                let j;
                let _ = this.getAttribute("data-cap-api-endpoint");
                if (!_ && window != null && window.CAP_CUSTOM_FETCH) {
                  _ = "/";
                } else if (!_) {
                  throw m(
                    "missing_endpoint",
                    "Missing API endpoint. Either custom fetch or an API endpoint must be provided.",
                  );
                }
                if (!_.endsWith("/")) {
                  _ += "/";
                }
                if (
                  o(this, h).state === "done" &&
                  o(this, h).token &&
                  o(this, h).tokenExpires &&
                  Date.now() < o(this, h).tokenExpires
                ) {
                  return V(this, S, zt).call(this);
                }
                if (o(this, h).state === "done") {
                  solutions = o(this, h).results;
                  j = o(this, h).challengeResp;
                  this.dispatchEvent("progress", {
                    progress: 100,
                  });
                } else if (
                  o(this, h).state === "solving" ||
                  o(this, h).state === "redeeming" ||
                  o(this, h).state === "fetching" ||
                  o(this, h).state === "waiting"
                ) {
                  if (o(this, h).state === "waiting") {
                    if (o(this, se)) {
                      clearTimeout(o(this, se));
                      z(this, se, null);
                    }
                    o(this, h).state = "waiting";
                    V(this, S, Wt).call(this);
                  }
                  o(this, h).pendingPromotion = o(this, ne);
                  if (o(this, h).promoteFn) {
                    o(this, h).promoteFn(o(this, ne));
                  }
                  const G = setInterval(() => {
                    if ((signal != null && signal.aborted) || !o(this, h)) {
                      return void clearInterval(G);
                    }
                    const state = o(this, h).state;
                    if (state === "done" || state === "error") {
                      return void clearInterval(G);
                    }
                    const je = o(this, h).challenges
                      ? o(this, h).challenges.length
                      : 1;
                    const completedCount = o(this, h).completedCount;
                    const De =
                      state === "redeeming"
                        ? 99
                        : state === "fetching" || state === "waiting"
                          ? 0
                          : Math.min(
                              98,
                              Math.round((completedCount / je) * 100),
                            );
                    this.dispatchEvent("progress", {
                      progress: De,
                    });
                  }, 150);
                  await new Promise((resolve) => o(this, h).onSettled(resolve));
                  clearInterval(G);
                  if (signal?.aborted || !o(this, h)) {
                    return;
                  }
                  if (
                    o(this, h).state === "idle" &&
                    o(this, h).challengeResp?.format === 2 &&
                    Array.isArray(o(this, h).challengeResp.challenges)
                  ) {
                    j = o(this, h).challengeResp;
                    o(this, h).challengeResp = null;
                    solutions = await this.solveChallengesV2(
                      j.challenges,
                      signal,
                    );
                  } else {
                    if (o(this, h).state !== "done") {
                      throw m(
                        "solve_failed",
                        "Unable to solve challenge, self-hosted instance likely down. This is not an issue with Cap.",
                      );
                    }
                    if (
                      o(this, h).token &&
                      o(this, h).tokenExpires &&
                      Date.now() < o(this, h).tokenExpires
                    ) {
                      return V(this, S, zt).call(this);
                    }
                    solutions = o(this, h).results;
                    j = o(this, h).challengeResp;
                    this.dispatchEvent("progress", {
                      progress: 100,
                    });
                  }
                } else {
                  const G = o(this, h).challengeResp;
                  if (G?.format === 2 && Array.isArray(G.challenges)) {
                    j = G;
                    o(this, h).challengeResp = null;
                  } else {
                    const te = await b(`${_}challenge`, {
                      method: "POST",
                      signal,
                    });
                    try {
                      j = await te.json();
                    } catch {
                      throw m(
                        "challenge_parse_error",
                        "Failed to parse challenge response from server",
                      );
                    }
                    if (j.error) {
                      throw m("network_error", j.error);
                    }
                  }
                  if (j.format === 2 && Array.isArray(j.challenges)) {
                    solutions = await this.solveChallengesV2(
                      j.challenges,
                      signal,
                    );
                  } else {
                    const { challenge, token: token_1 } = j;
                    let Fe = challenge;
                    if (!Array.isArray(Fe)) {
                      let De = 0;
                      Fe = Array.from(
                        {
                          length: challenge.c,
                        },
                        () => {
                          De++;
                          return [
                            I(`${token_1}${De}`, challenge.s),
                            I(`${token_1}${De}d`, challenge.d),
                          ];
                        },
                      );
                    }
                    solutions = await this.solveChallenges(Fe, signal);
                  }
                }
                const O = j.instrumentation
                  ? C(j.instrumentation)
                  : Promise.resolve(null);
                const L = await O;
                if ((signal != null && signal.aborted) || !o(this, h)) {
                  return;
                }
                if ((L != null && L.__timeout) || (L != null && L.__blocked)) {
                  b(`${_}redeem`, {
                    method: "POST",
                    body: JSON.stringify({
                      token: j.token,
                      solutions,
                      ...(L.__blocked && {
                        instr_blocked: true,
                      }),
                      ...(L.__timeout && {
                        instr_timeout: true,
                      }),
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                    signal,
                  }).catch(() => {});
                  this.updateUIBlocked(
                    this.getI18nText("error-label", "Error"),
                    L?.__blocked,
                  );
                  o(this, M).setAttribute(
                    "aria-label",
                    this.getI18nText(
                      "error-aria-label",
                      "An error occurred, please try again",
                    ),
                  );
                  const G =
                    L != null && L.__blocked
                      ? "instr_blocked"
                      : "instr_timeout";
                  const te =
                    L != null && L.__blocked
                      ? `Instrumentation blocked (${L.blockReason || "automated_browser"})`
                      : "Instrumentation timed out";
                  this.removeEventListener("error", this.boundHandleError);
                  const je = new CustomEvent("error", {
                    bubbles: true,
                    composed: true,
                    detail: {
                      isCap: true,
                      code: G,
                      message: te,
                    },
                  });
                  super.dispatchEvent(je);
                  this.addEventListener("error", this.boundHandleError);
                  this.executeAttributeCode("onerror", je);
                  a.error(u("instr"), `[${G}] ${te}`);
                  return void z(this, he, false);
                }
                const { token } = j;
                const oe = await b(`${_}redeem`, {
                  method: "POST",
                  body: JSON.stringify({
                    token,
                    solutions,
                    ...(L && {
                      instr: L,
                    }),
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                  signal,
                });
                let U;
                try {
                  U = await oe.json();
                } catch {
                  throw m("redeem_failed", "Failed to parse server response");
                }
                if ((signal != null && signal.aborted) || !o(this, h)) {
                  return;
                }
                this.dispatchEvent("progress", {
                  progress: 100,
                });
                if (!U.success) {
                  throw m("invalid_solution", U.error || "Invalid solution");
                }
                V(this, S, ct).call(this, U.token);
                this.dispatchEvent("solve", {
                  token: U.token,
                });
                this.token = U.token;
                V(this, S, Dt).call(this);
                if (o(this, B)) {
                  clearTimeout(o(this, B));
                }
                const K = new Date(U.expires).getTime() - Date.now();
                if (K > 0 && K < 86400000) {
                  z(
                    this,
                    B,
                    setTimeout(() => this.reset(), K),
                  );
                } else {
                  this.error("Invalid expiration time", "invalid_expires");
                }
                o(this, M).setAttribute(
                  "aria-label",
                  this.getI18nText(
                    "verified-aria-label",
                    "We have verified you're a human, you may now continue",
                  ),
                );
                if (o(this, S, Me)) {
                  navigator.vibrate([10, 50, 20, 30, 40]);
                }
                a.debug(u("solve"), `verified in ${d(l)}`);
                V(this, S, qt).call(this);
                return {
                  success: true,
                  token: this.token,
                };
              } catch (error) {
                if ((signal != null && signal.aborted) || !o(this, h)) {
                  return;
                }
                o(this, M).setAttribute(
                  "aria-label",
                  this.getI18nText(
                    "error-aria-label",
                    "An error occurred, please try again",
                  ),
                );
                this.error(error.message, error.code || "solve_failed");
                throw error;
              }
            } finally {
              z(this, he, false);
            }
          }
          async solveChallengesV2(l, p) {
            const l_length = l.length;
            let y = 0;
            const k = new Array(l.length);
            for (const K of l) {
              if (
                !K ||
                typeof K !== "object" ||
                (K.protocol !== "sha256-pow" &&
                  K.protocol !== "rsw" &&
                  K.protocol !== "instrumentation")
              ) {
                throw m(
                  "challenge_unsupported",
                  `unsupported format-2 protocol '${K?.protocol}'`,
                );
              }
            }
            let j = null;
            if (
              typeof WebAssembly === "object" &&
              typeof WebAssembly.instantiate === "function"
            ) {
              try {
                j = await D();
              } catch (error) {
                a.warn(
                  u("wasm"),
                  "unavailable, falling back to JS solver:",
                  error.message || error,
                );
              }
            }
            const _ = Math.max(1, Math.min(o(this, ne), l.length));
            const O = new T(_);
            O.setWasm(j);
            O._ensureSize(_);
            const L = (U, K) =>
              Promise.race([
                U,
                new Promise((resolve, reject) =>
                  setTimeout(
                    () =>
                      reject(new Error(`[cap] ${K} timed out after 60000ms`)),
                    60000,
                  ),
                ),
              ]);
            const ee = new Array(l.length).fill(0);
            const oe = () => {
              const U = ee.reduce((acc, item) => acc + item, 0) + y;
              const K = Math.min(99, Math.round((U / l_length) * 100));
              this.dispatchEvent("progress", {
                progress: K,
              });
            };
            try {
              await g(
                Promise.all(
                  l.map((U, K) => {
                    if (U.protocol === "sha256-pow") {
                      return L(
                        O.run(U.payload.salt, U.payload.target),
                        `sha256-pow worker #${K}`,
                      ).then((G) => {
                        k[K] = {
                          nonce: Number(G),
                        };
                        ee[K] = 0;
                        y++;
                        oe();
                      });
                    }
                    if (U.protocol === "rsw") {
                      return L(
                        O.runMsg(
                          {
                            kind: "rsw",
                            N: U.payload.N,
                            x: U.payload.x,
                            t: 0 | U.payload.t,
                          },
                          (G) => {
                            ee[K] = G;
                            oe();
                          },
                        ),
                        `rsw worker #${K}`,
                      ).then((G) => {
                        k[K] = {
                          y: G.y,
                        };
                        ee[K] = 0;
                        y++;
                        oe();
                      });
                    }
                    return C(U.payload.blob).then((G) => {
                      k[K] =
                        G != null && G.__timeout
                          ? {
                              timeout: true,
                            }
                          : G != null && G.__blocked
                            ? {
                                blocked: true,
                              }
                            : {
                                instr: G,
                              };
                      ee[K] = 0;
                      y++;
                      oe();
                    });
                  }),
                ),
                p,
              );
            } finally {
              O.terminate();
            }
            return k;
          }
          async solveChallenges(l, p) {
            const l_length = l.length;
            let y = 0;
            let k = null;
            const j =
              typeof WebAssembly === "object" &&
              typeof WebAssembly.instantiate === "function";
            if (j) {
              try {
                k = await D();
              } catch (error) {
                a.warn(
                  u("wasm"),
                  "unavailable, falling back to JS solver:",
                  error.message || error,
                );
              }
            }
            if (
              !j &&
              (a.warn(
                u("wasm"),
                "WebAssembly disabled in this browser, solver will be ~10x slower",
              ),
              !o(this, q).querySelector(".warning"))
            ) {
              const L = document.createElement("div");
              L.className = "warning";
              L.style.cssText =
                "width:var(--cap-widget-width,230px);background:rgb(237,56,46);color:white;padding:4px 6px;padding-bottom:calc(var(--cap-border-radius,14px) + 5px);font-size:10px;box-sizing:border-box;font-family:system-ui;border-top-left-radius:8px;border-top-right-radius:8px;text-align:center;user-select:none;margin-bottom:-35.5px;opacity:0;transition:margin-bottom .3s,opacity .3s;";
              L.innerText = this.getI18nText(
                "wasm-disabled",
                "Enable WASM for significantly faster solving",
              );
              o(this, q).insertBefore(L, o(this, q).firstChild);
              setTimeout(() => {
                L.style.marginBottom =
                  "calc(-1 * var(--cap-border-radius, 14px))";
                L.style.opacity = 1;
              }, 10);
            }
            const _ = new T(o(this, ne));
            _.setWasm(k);
            _._ensureSize(o(this, ne));
            const O = [];
            try {
              for (let L = 0; L < l.length; L += o(this, ne)) {
                const ee = l.slice(L, Math.min(L + o(this, ne), l.length));
                const oe = await g(
                  Promise.all(
                    ee.map(([U, K]) =>
                      _.run(U, K).then((G) => {
                        y++;
                        const te = Math.min(
                          99,
                          Math.round(((0 + y) / l_length) * 100),
                        );
                        this.dispatchEvent("progress", {
                          progress: te,
                        });
                        return G;
                      }),
                    ),
                  ),
                  p,
                );
                O.push(...oe);
              }
            } finally {
              _.terminate();
            }
            return O;
          }
          setWorkersCount(l) {
            const p = parseInt(l, 10);
            const v = Math.min(navigator.hardwareConcurrency || 8, 16);
            z(
              this,
              ne,
              !Number.isNaN(p) && p > 0 && p <= v
                ? p
                : navigator.hardwareConcurrency || 8,
            );
          }
          createUI() {
            o(this, E).classList.add("captcha");
            o(this, E).setAttribute("role", "group");
            o(this, E).setAttribute(
              "aria-label",
              this.getI18nText("group-aria-label", "Cap verification"),
            );
            z(this, M, document.createElement("div"));
            o(this, M).className = "captcha-trigger";
            o(this, M).setAttribute("part", "trigger");
            o(this, M).setAttribute("role", "button");
            o(this, M).setAttribute("tabindex", "0");
            o(this, M).setAttribute(
              "aria-label",
              this.getI18nText(
                "verify-aria-label",
                "Click to verify you're a human",
              ),
            );
            o(this, M).setAttribute("aria-live", "polite");
            o(this, M).setAttribute("disabled", "true");
            o(this, M).innerHTML =
              `<div class="checkbox" part="checkbox" aria-hidden="true"><svg class="progress-ring" viewBox="0 0 32 32" aria-hidden="true"><circle class="progress-ring-bg" cx="16" cy="16" r="14"></circle><circle class="progress-ring-circle" cx="16" cy="16" r="14"></circle></svg></div><p part="label" class="label-wrapper"><span class="label active">${this.getI18nText("initial-state", "Verify you're human")}</span></p>`;
            o(this, E).appendChild(o(this, M));
            z(this, Z, document.createElement("a"));
            o(this, Z).className = "cap-troubleshoot-link";
            o(this, Z).setAttribute("part", "troubleshoot");
            o(this, Z).setAttribute("target", "_blank");
            o(this, Z).setAttribute("rel", "noopener");
            o(this, Z).hidden = true;
            o(this, E).appendChild(o(this, Z));
            z(this, Y, document.createElement("a"));
            o(this, Y).className = "credits";
            o(this, Y).setAttribute("aria-label", "Secured by Cap");
            o(this, Y).setAttribute("href", "https://trycap.dev");
            o(this, Y).setAttribute("target", "_blank");
            o(this, Y).setAttribute(
              "title",
              "Secured by Cap: The self-hosted CAPTCHA for the modern web.",
            );
            o(this, Y).textContent = "Cap";
            o(this, E).appendChild(o(this, Y));
            o(this, q).innerHTML =
              `<style${window.CAP_CSS_NONCE ? ` nonce=${window.CAP_CSS_NONCE}` : ""}>:host{display:inline-block}@media (prefers-reduced-motion:reduce){.captcha,.captcha *{transition:none!important;animation:none!important}.label{filter:none!important;opacity:1!important;transition:none!important;transform:none!important}.label:not(.active),.label.exit{display:none!important}}.captcha,.captcha *{box-sizing:border-box}.captcha{width:var(--cap-widget-width,260px);height:var(--cap-widget-height,58px);background-color:var(--cap-background,#fdfdfd);border:1px solid var(--cap-border-color,#dddddd8f);border-radius:var(--cap-border-radius,14px);-webkit-user-select:none;user-select:none;cursor:pointer;-webkit-tap-highlight-color:#fff0;color:var(--cap-color,#212121);font-family:var(--cap-font,system, -apple-system, "BlinkMacSystemFont", ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", "Ubuntu", "arial", sans-serif);transition:filter .2s,transform .2s,height .2s;display:inline-block;position:relative;overflow:hidden}.captcha.has-troubleshoot{height:calc(var(--cap-widget-height,58px) + 26px)}.captcha.has-troubleshoot .captcha-trigger{inset-block-end:26px}.captcha:not([data-state]):active{transform:scale(.97)}.captcha:hover{filter:brightness(98%)}.captcha-trigger{padding:var(--cap-widget-padding,14px);align-items:center;gap:var(--cap-gap,15px);border-radius:inherit;transition:inset .2s;display:flex;position:absolute;inset:0}.captcha-trigger:focus-visible{outline:2px solid var(--cap-focus-ring,#06c);outline-offset:-3px}.checkbox{width:var(--cap-checkbox-size,25px);height:var(--cap-checkbox-size,25px);border:var(--cap-checkbox-border,1px solid #aaaaaad1);border-radius:var(--cap-checkbox-border-radius,6px);background-color:var(--cap-checkbox-background,#fafafa91);margin-top:var(--cap-checkbox-margin,2px);margin-bottom:var(--cap-checkbox-margin,2px);flex-shrink:0;transition:opacity .2s}.captcha p{-webkit-user-select:none;user-select:none;margin:0;font-size:15px;font-weight:500}.label-wrapper{flex:1;align-items:center;min-width:0;height:2em;display:flex;position:relative;overflow:hidden}.label-wrapper:before,.label-wrapper:after{content:"";pointer-events:none;z-index:1;width:100%;height:.6em;position:absolute;inset-inline-start:0}.label-wrapper:before{background:linear-gradient(to bottom, var(--cap-background,#fdfdfd), transparent);top:0}.label-wrapper:after{background:linear-gradient(to top, var(--cap-background,#fdfdfd), transparent);bottom:0}.label{white-space:nowrap;opacity:0;filter:blur(2px);transition:transform .5s cubic-bezier(.25,1,.5,1),opacity .5s,filter .5s;position:absolute;transform:translateY(100%)}.label.active{opacity:1;filter:none;transform:translateY(0)}.label.exit{opacity:0;filter:blur(2px);transform:translateY(-100%)}.checkbox .progress-ring{width:100%;height:100%;display:none;transform:rotate(-90deg)}.checkbox .progress-ring-bg{fill:none;stroke:var(--cap-spinner-background-color,#eee);stroke-width:var(--cap-spinner-thickness,3)}.checkbox .progress-ring-circle{fill:none;stroke:var(--cap-spinner-color,#000);stroke-width:var(--cap-spinner-thickness,3);stroke-linecap:round;stroke-dasharray:87.96;stroke-dashoffset:87.96px;transition:stroke-dashoffset .3s}.captcha[data-state=verifying] .checkbox{background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;display:flex;transform:scale(1.1)}.captcha[data-state=verifying] .checkbox .progress-ring{display:block}.captcha[data-state=done] .checkbox{background-image:var(--cap-checkmark,url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E%40keyframes%20anim%7B0%25%7Bstroke-dashoffset%3A23.21320343017578px%7Dto%7Bstroke-dashoffset%3A0%7D%7D%3C%2Fstyle%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%2300a67d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m5%2012%205%205L20%207%22%20style%3D%22stroke-dashoffset%3A0%3Bstroke-dasharray%3A23.21320343017578px%3Banimation%3Aanim%20.5s%20ease%22%2F%3E%3C%2Fsvg%3E));background-size:cover;border:1px solid #0000}.captcha[data-state=done] .checkbox .progress-ring{display:none}.captcha[data-state=error] .checkbox{background-image:var(--cap-error-cross,url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24'%3E%3Cpath fill='%23f55b50' d='M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8'/%3E%3C%2Fsvg%3E"));background-size:cover;border:1px solid #0000}.captcha[data-state=error] .checkbox .progress-ring{display:none}.captcha.invalid{border-color:var(--cap-invalid-border-color,#f55b50);box-shadow:0 0 0 3px var(--cap-invalid-ring-color,#f55b5033);animation:.5s cubic-bezier(.36,.07,.19,.97) cap-shake}@keyframes cap-shake{10%,90%{transform:translate(-1px)}20%,80%{transform:translate(2px)}30%,50%,70%{transform:translate(-4px)}40%,60%{transform:translate(4px)}}@media (prefers-reduced-motion:reduce){.captcha.invalid{animation:none!important}}.captcha-trigger[disabled]{cursor:not-allowed}.captcha[data-state=verifying] .captcha-trigger{cursor:progress}.captcha[data-state=done] .captcha-trigger{cursor:default}.credits{color:var(--cap-color,#212121);text-underline-offset:.18em;z-index:2;border-radius:4px;justify-content:flex-end;align-items:center;min-width:24px;min-height:24px;padding:4px 6px;text-decoration:underline;text-decoration-thickness:.08em;position:absolute;inset-block-end:4px;inset-inline-end:4px;opacity:.8!important;font-size:12px!important;display:inline-flex!important}.captcha .credits{visibility:visible!important;pointer-events:all!important;display:inline-flex!important}.credits:focus-visible{outline:2px solid var(--cap-focus-ring,#06c);outline-offset:2px;opacity:1!important}.cap-troubleshoot-link{min-width:24px;min-height:24px;color:var(--cap-troubleshoot-color,#0050a0);text-underline-offset:.15em;cursor:pointer;z-index:2;border-radius:4px;align-items:center;padding:4px 6px;font-size:13px;font-weight:500;text-decoration:underline;text-decoration-thickness:.08em;display:inline-flex;position:absolute;inset-block-end:4px;inset-inline-start:14px}.cap-troubleshoot-link[hidden]{display:none}.cap-troubleshoot-link:hover{opacity:.85}.cap-troubleshoot-link:focus-visible{outline:2px solid var(--cap-focus-ring,#06c);outline-offset:2px}@media (forced-colors:active){.captcha,.checkbox{border-color:canvastext}:is(.captcha-trigger:focus-visible,.credits:focus-visible,.cap-troubleshoot-link:focus-visible){outline-color:highlight}.progress-ring-bg{stroke:graytext}.progress-ring-circle{stroke:canvastext}.captcha.invalid{box-shadow:none;border-color:mark}.credits{opacity:1!important}}</style>`;
            o(this, q).appendChild(o(this, E));
            V(this, S, ut).call(this);
            setTimeout(() => V(this, S, ut).call(this), 100);
          }
          addEventListeners() {
            if (o(this, M)) {
              o(this, Y).addEventListener("click", (l) => {
                l.preventDefault();
                window.open(
                  `https://trycap.dev/?${new URLSearchParams({
                    utm_source: "cap_widget",
                    utm_medium: "referral",
                    utm_campaign: "widget",
                    utm_content: window.CAP_DISABLE_WIDGET_REF
                      ? ""
                      : location.hostname,
                    ref: window.CAP_DISABLE_WIDGET_REF
                      ? ""
                      : location.href || "",
                    sub: window.CAP_DISABLE_WIDGET_REF
                      ? ""
                      : document.referrer || "",
                  }).toString()}`,
                  "_blank",
                );
              });
              o(this, M).addEventListener("click", () => {
                if (!o(this, M).hasAttribute("disabled")) {
                  this.solve();
                }
              });
              o(this, M).addEventListener("mousedown", () => {
                if (!o(this, M).hasAttribute("disabled") && o(this, S, Me)) {
                  navigator.vibrate(5);
                }
              });
              o(this, M).addEventListener("keydown", (l) => {
                if (l.target === o(this, M)) {
                  if (
                    !(
                      (l.key !== "Enter" && l.key !== " ") ||
                      o(this, M).hasAttribute("disabled")
                    )
                  ) {
                    l.preventDefault();
                    l.stopPropagation();
                    this.solve();
                  }
                }
              });
              this.addEventListener("progress", this.boundHandleProgress);
              this.addEventListener("solve", this.boundHandleSolve);
              this.addEventListener("error", this.boundHandleError);
              this.addEventListener("reset", this.boundHandleReset);
            }
          }
          animateLabel(l) {
            let k;
            if (!o(this, M)) {
              return;
            }
            const p = o(this, M).querySelector(".label-wrapper");
            if (!p) {
              return;
            }
            if (
              (k = window.matchMedia) != null &&
              k.call(window, "(prefers-reduced-motion: reduce)").matches
            ) {
              const j = p.querySelector(".label.active");
              if (j) {
                j.textContent = l;
              } else {
                const _ = document.createElement("span");
                _.className = "label active";
                _.textContent = l;
                p.appendChild(_);
              }
              return;
            }
            const v = p.querySelector(".label.active");
            const spanElement = document.createElement("span");
            spanElement.className = "label";
            spanElement.textContent = l;
            p.appendChild(spanElement);
            spanElement.offsetWidth;
            spanElement.classList.add("active");
            if (v) {
              v.classList.remove("active");
              v.classList.add("exit");
              v.addEventListener("transitionend", () => v.remove(), {
                once: true,
              });
            }
          }
          updateUI(l, p, v = false) {
            if (o(this, E) && o(this, M)) {
              o(this, E).setAttribute("data-state", l);
              o(this, E).classList.remove("has-troubleshoot");
              this.animateLabel(p);
              if (o(this, Z)) {
                o(this, Z).hidden = true;
              }
              if (v) {
                o(this, M).setAttribute("disabled", "true");
              } else {
                o(this, M).removeAttribute("disabled");
              }
            }
          }
          updateUIBlocked(l, p = false) {
            if (
              o(this, E) &&
              o(this, M) &&
              (o(this, E).setAttribute("data-state", "error"),
              o(this, M).removeAttribute("disabled"),
              this.animateLabel(l),
              o(this, Z))
            ) {
              if (p) {
                const v =
                  this.getAttribute("data-cap-troubleshooting-url") ||
                  "https://trycap.dev/guide/troubleshooting/instrumentation.html";
                o(this, Z).setAttribute("href", v);
                o(this, Z).textContent = this.getI18nText(
                  "troubleshooting-label",
                  "Troubleshoot",
                );
                o(this, Z).hidden = false;
                o(this, E).classList.add("has-troubleshoot");
              } else {
                o(this, Z).hidden = true;
                o(this, E).classList.remove("has-troubleshoot");
              }
            }
          }
          handleProgress(l) {
            if (!o(this, M)) {
              return;
            }
            const p = o(this, M).querySelector(".progress-ring-circle");
            if (p) {
              const y = 2 * Math.PI * 14;
              const k = y - (l.detail.progress / 100) * y;
              p.style.strokeDashoffset = k;
            }
            const v = o(this, M).querySelector(".label-wrapper");
            if (v) {
              const y = v.querySelector(".label.active");
              if (y) {
                y.textContent = `${this.getI18nText("verifying-label", "Verifying...")}`;
              }
            }
            this.executeAttributeCode("onprogress", l);
          }
          handleSolve(l) {
            this.updateUI(
              "done",
              this.getI18nText("solved-label", "You're a human"),
              true,
            );
            this.executeAttributeCode("onsolve", l);
            o(this, F)?.setValidity?.({});
            o(this, E)?.classList.remove("invalid");
          }
          handleError(l) {
            this.updateUI(
              "error",
              this.getI18nText("error-label", "Error. Try again."),
            );
            this.executeAttributeCode("onerror", l);
            if (o(this, S, Me)) {
              navigator.vibrate([10, 40, 10]);
            }
          }
          handleReset(l) {
            this.updateUI("", this.getI18nText("initial-state", "I'm a human"));
            this.executeAttributeCode("onreset", l);
            V(this, S, lt).call(this);
          }
          executeAttributeCode(l, p) {
            const v = this.getAttribute(l);
            if (v) {
              a.warn(
                u(),
                "inline `onxxx='…'` handlers are deprecated. use `addEventListener` callbacks instead.",
              );
              new Function("event", v).call(this, p);
            }
          }
          error(l = "Unknown error", p = "unknown") {
            a.error(u("solve"), `[${p}] ${l}`);
            this.dispatchEvent("error", {
              isCap: true,
              code: p,
              message: l,
            });
          }
          dispatchEvent(l, detail = {}) {
            const v = new CustomEvent(l, {
              bubbles: true,
              composed: true,
              detail,
            });
            super.dispatchEvent(v);
          }
          reset() {
            if (o(this, B)) {
              clearTimeout(o(this, B));
              z(this, B, null);
            }
            this.token = null;
            this.dispatchEvent("reset");
            V(this, S, ct).call(this, "");
          }
          get tokenValue() {
            return this.token;
          }
          disconnectedCallback() {
            o(this, pe)?.abort();
            this.removeEventListener("progress", this.boundHandleProgress);
            this.removeEventListener("solve", this.boundHandleSolve);
            this.removeEventListener("error", this.boundHandleError);
            this.removeEventListener("reset", this.boundHandleReset);
            o(this, P).forEach((p, v) => {
              this.removeEventListener(v.slice(2), p);
            });
            o(this, P).clear();
            if (o(this, q)) {
              o(this, q).innerHTML = "";
            }
            this.reset();
            this.cleanup();
          }
          cleanup() {
            if (o(this, B)) {
              clearTimeout(o(this, B));
              z(this, B, null);
            }
            V(this, S, at).call(this);
            if (o(this, se)) {
              clearTimeout(o(this, se));
              z(this, se, null);
            }
            if (o(this, X)) {
              o(this, X).terminate();
              z(this, X, null);
            }
            if (o(this, h)) {
              o(this, h).state = "error";
              o(this, h).notify();
              z(this, h, null);
            }
          }
        }
        B = new WeakMap();
        ne = new WeakMap();
        q = new WeakMap();
        E = new WeakMap();
        M = new WeakMap();
        Y = new WeakMap();
        Z = new WeakMap();
        de = new WeakMap();
        he = new WeakMap();
        P = new WeakMap();
        F = new WeakMap();
        h = new WeakMap();
        se = new WeakMap();
        X = new WeakMap();
        le = new WeakMap();
        ye = new WeakMap();
        pe = new WeakMap();
        S = new WeakSet();
        Me = function () {
          return (
            n &&
            !window.CAP_DISABLE_HAPTICS &&
            !this.hasAttribute("data-cap-disable-haptics")
          );
        };
        Ft = function () {
          return {
            state: "idle",
            challengeResp: null,
            challenges: null,
            results: [],
            completedCount: 0,
            solvePromise: null,
            promoteFn: null,
            _listeners: [],
            pendingPromotion: null,
            token: null,
            tokenExpires: null,
            notify() {
              for (const l of this._listeners) {
                l();
              }
              this._listeners = [];
            },
            onSettled(l) {
              if (this.state === "done" || this.state === "error") {
                l();
              } else {
                this._listeners.push(l);
              }
            },
          };
        };
        Dt = function () {
          z(this, h, V(this, S, Ft).call(this));
          V(this, S, $t).call(this);
        };
        at = function () {
          if (o(this, le)) {
            window.removeEventListener("mousemove", o(this, le));
            window.removeEventListener("touchstart", o(this, le));
            window.removeEventListener("keydown", o(this, le));
            z(this, le, null);
          }
        };
        $t = function () {
          V(this, S, at).call(this);
          const l = () => {
            V(this, S, at).call(this);
            V(this, S, ys).call(this);
          };
          z(this, le, l);
          window.addEventListener("mousemove", l, {
            passive: true,
          });
          window.addEventListener("touchstart", l, {
            passive: true,
          });
          window.addEventListener("keydown", l, {
            passive: true,
          });
        };
        Bt = function () {
          if (typeof this.checkVisibility === "function") {
            return this.checkVisibility({
              checkOpacity: true,
              checkVisibilityCSS: true,
            });
          }
          return !!(this.offsetParent || this.getClientRects().length > 0);
        };
        qt = function () {
          if (!V(this, S, Bt).call(this)) {
            a.info(u("challenges"), "solved invisible challenge");
          }
        };
        ys = function () {
          if (o(this, h).state === "idle" && V(this, S, Bt).call(this)) {
            o(this, h).state = "waiting";
            z(
              this,
              se,
              setTimeout(() => {
                V(this, S, Wt).call(this);
              }, 2500),
            );
          }
        };
        Wt = async function () {
          if (o(this, h).state !== "waiting") {
            return;
          }
          o(this, h).state = "fetching";
          o(this, h)._t0 = performance.now();
          let l = this.getAttribute("data-cap-api-endpoint");
          if (!l && window != null && window.CAP_CUSTOM_FETCH) {
            l = "/";
          }
          if (l) {
            if (!l.endsWith("/")) {
              l += "/";
            }
            try {
              const v = await b(`${l}challenge`, {
                method: "POST",
                signal: o(this, pe)?.signal,
              });
              let y;
              try {
                y = await v.json();
              } catch {
                throw new Error(
                  "Failed to parse speculative challenge response",
                );
              }
              if (y.error) {
                throw new Error(y.error);
              }
              if (!o(this, h)) {
                return;
              }
              y._apiEndpoint = l;
              o(this, h).challengeResp = y;
              if (y.format === 2 && Array.isArray(y.challenges)) {
                o(this, h).state = "idle";
                return void o(this, h).notify();
              }
              const { challenge, token } = y;
              let _ = challenge;
              if (!Array.isArray(_)) {
                let O = 0;
                _ = Array.from(
                  {
                    length: challenge.c,
                  },
                  () => {
                    O++;
                    return [
                      I(`${token}${O}`, challenge.s),
                      I(`${token}${O}d`, challenge.d),
                    ];
                  },
                );
              }
              o(this, h).challenges = _;
              o(this, h).state = "solving";
              o(this, h).solvePromise = V(this, S, xs).call(this, _);
            } catch {
              if (!o(this, h)) {
                return;
              }
              o(this, h).state = "error";
              o(this, h).notify();
            }
          } else {
            o(this, h).state = "idle";
          }
        };
        xs = async function (l) {
          J();
          let p = null;
          try {
            p = await D();
          } catch {}
          if (!o(this, X)) {
            z(this, X, new T(1));
            o(this, X)._spawn();
          }
          o(this, X).setWasm(p);
          const l_length = l.length;
          const y = new Array(l_length);
          let k = 1;
          let j = false;
          o(this, h).promoteFn = (O) => {
            if (!j) {
              j = true;
              k = O;
              o(this, X)._size = O;
              o(this, X)._ensureSize(O);
            }
          };
          if (o(this, h).pendingPromotion !== null) {
            o(this, h).promoteFn(o(this, h).pendingPromotion);
            o(this, h).pendingPromotion = null;
          }
          let _ = 0;
          while (_ < l_length) {
            const O = k;
            const L = [];
            const ee = [];
            for (let U = 0; U < O && _ < l_length; U++) {
              ee.push(_);
              L.push(l[_]);
              _++;
            }
            o(this, X)._ensureSize(Math.max(k, O));
            const oe = await Promise.all(
              L.map((U) =>
                o(this, X)
                  .run(U[0], U[1])
                  .then((K) => {
                    if (o(this, h)) {
                      o(this, h).completedCount++;
                    }
                    return K;
                  }),
              ),
            );
            for (let U = 0; U < ee.length; U++) {
              y[ee[U]] = oe[U];
            }
            if (!j && _ < l_length) {
              await new Promise((resolve) => setTimeout(resolve, 120));
            }
          }
          if (o(this, h)) {
            o(this, h).results = y;
            o(this, h).state = "redeeming";
            V(this, S, ks).call(this, y);
          }
          return y;
        };
        ks = async function (solutions) {
          try {
            if (!o(this, h)) {
              return;
            }
            const v = o(this, h).challengeResp;
            const y = v._apiEndpoint;
            if (!y) {
              throw m(
                "missing_endpoint",
                "speculative redeem: missing apiEndpoint",
              );
            }
            let k = null;
            if (v.instrumentation) {
              k = await C(v.instrumentation);
              if (!o(this, h)) {
                return;
              }
              if ((k != null && k.__timeout) || (k != null && k.__blocked)) {
                o(this, h).state = "done";
                return void o(this, h).notify();
              }
            }
            const j = await b(`${y}redeem`, {
              method: "POST",
              body: JSON.stringify({
                token: v.token,
                solutions,
                ...(k && {
                  instr: k,
                }),
              }),
              headers: {
                "Content-Type": "application/json",
              },
              signal: o(this, pe)?.signal,
            });
            let _;
            try {
              _ = await j.json();
            } catch {
              throw new Error("Failed to parse speculative redeem response");
            }
            if (!o(this, h)) {
              return;
            }
            if (!_.success) {
              throw new Error(_.error || "Speculative redeem failed");
            }
            o(this, h).token = _.token;
            o(this, h).tokenExpires = new Date(_.expires).getTime();
            o(this, h).state = "done";
            o(this, h)._invisibleElapsed = o(this, h)._t0
              ? d(o(this, h)._t0)
              : "?";
            o(this, h).notify();
          } catch {
            if (!o(this, h)) {
              return;
            }
            o(this, h).state = "done";
            o(this, h).notify();
          }
        };
        Ht = function () {
          return this.getAttribute("data-cap-hidden-field-name") || "cap-token";
        };
        ct = function (l) {
          const p = this.querySelector(`input[name='${o(this, S, Ht)}']`);
          if (p) {
            p.value = l;
          }
        };
        zt = function () {
          a.debug(
            u("solve"),
            `served from speculative cache (saved ${o(this, h)._invisibleElapsed || "?"})`,
          );
          this.dispatchEvent("progress", {
            progress: 100,
          });
          V(this, S, ct).call(this, o(this, h).token);
          this.dispatchEvent("solve", {
            token: o(this, h).token,
          });
          this.token = o(this, h).token;
          const l = o(this, h).tokenExpires - Date.now();
          if (o(this, B)) {
            clearTimeout(o(this, B));
          }
          z(
            this,
            B,
            setTimeout(() => this.reset(), l),
          );
          o(this, M).setAttribute(
            "aria-label",
            this.getI18nText(
              "verified-aria-label",
              "We have verified you're a human, you may now continue",
            ),
          );
          if (o(this, S, Me)) {
            navigator.vibrate([10, 50, 20, 30, 40]);
          }
          V(this, S, qt).call(this);
          V(this, S, Dt).call(this);
          z(this, he, false);
          return {
            success: true,
            token: this.token,
          };
        };
        Cs = function () {
          z(
            this,
            ye,
            ((l) => {
              const p = l
                ? [l]
                : navigator.languages || [navigator.language || ""];
              for (let v of p) {
                if (!v) {
                  continue;
                }
                v = v.toLowerCase();
                if (v === "en" || v.startsWith("en-")) {
                  return null;
                }
                const y = w[v]
                  ? v
                  : w[v.split("-")[0]]
                    ? v.split("-")[0]
                    : null;
                if (!y) {
                  return null;
                }
                const k = w[y].split("/");
                const j = {};
                f.forEach((_, O) => {
                  j[_] = k[O];
                });
                return j;
              }
              return null;
            })(window.CAP_LANG || this.getAttribute("data-cap-lang")),
          );
        };
        lt = function () {
          let l;
          if ((l = o(this, F)) != null && l.setValidity) {
            if (this.hasAttribute("required") && !this.token) {
              o(this, F).setValidity(
                {
                  valueMissing: true,
                },
                this.getI18nText(
                  "required-label",
                  "Please verify you're human",
                ),
                o(this, E) || this,
              );
            } else {
              o(this, F).setValidity({});
            }
          }
        };
        W = new WeakMap();
        Es = function () {
          if (!o(this, de)) {
            return false;
          }
          const l = o(this, de).getBoundingClientRect();
          if (l.width === 0 && l.height === 0) {
            return true;
          }
          const p = window.getComputedStyle(o(this, de));
          return p.display === "none" || p.visibility === "hidden";
        };
        ut = function () {
          if (o(this, Y) && o(this, E) && !V(this, S, Es).call(this)) {
            if (
              !(o(this, Y).isConnected && o(this, Y).parentNode === o(this, E))
            ) {
              o(this, E).appendChild(o(this, Y));
            }
            if (!(o(this, Y).textContent && o(this, Y).textContent.trim())) {
              o(this, Y).textContent = "Cap";
            }
            if (o(this, Y).getAttribute("href") !== "https://trycap.dev") {
              o(this, Y).setAttribute("href", "https://trycap.dev");
            }
            o(this, Y).style.cssText = [
              "display: inline-flex !important",
              "visibility: visible !important",
              "opacity: 0.8 !important",
              "pointer-events: all !important",
              "font-size: 12px !important",
              "transform: none !important",
              "clip-path: none !important",
              "filter: none !important",
              "position: absolute !important",
            ].join("; ");
          }
        };
        Se(R, "formAssociated", true);
        class Q {
          constructor(A = {}, l) {
            const p = l || document.createElement("cap-widget");
            Object.entries(A).forEach(([v, y]) => {
              p.setAttribute(v, y);
            });
            if (
              !A.apiEndpoint &&
              !(window != null && window.CAP_CUSTOM_FETCH)
            ) {
              p.remove();
              throw new Error(
                "Missing API endpoint. Either custom fetch or an API endpoint must be provided.",
              );
            }
            if (A.apiEndpoint) {
              p.setAttribute("data-cap-api-endpoint", A.apiEndpoint);
            }
            if (!(l || p.hasAttribute("data-cap-disable-haptics"))) {
              p.setAttribute("data-cap-disable-haptics", "");
            }
            this.widget = p;
            this.solve = this.widget.solve.bind(this.widget);
            this.reset = this.widget.reset.bind(this.widget);
            this.addEventListener = this.widget.addEventListener.bind(
              this.widget,
            );
            Object.defineProperty(this, "token", {
              get: () => p.token,
              configurable: true,
              enumerable: true,
            });
            if (!l) {
              p.style.display = "none";
              document.documentElement.appendChild(p);
            }
          }
        }
        window.Cap = Q;
        if (
          customElements.get("cap-widget") ||
          (window != null && window.CAP_DONT_SKIP_REDEFINE)
        ) {
          if (customElements.get("cap-widget")) {
            a.warn(
              u(),
              "cap-widget custom element already defined, skipping re-define. set window.CAP_DONT_SKIP_REDEFINE = true to override",
            );
          }
        } else {
          customElements.define("cap-widget", R);
        }
        e.exports = Q;
        t.default = Q;
      })();
    })(et, et.exports);
  }
  return et.exports;
}
ji();
function _n(e = Ve("/api/account/cap/")) {
  return new Promise((resolve, reject) => {
    const divElement = document.createElement("div");
    divElement.className = "cap-overlay";
    const divElement_1 = document.createElement("div");
    divElement_1.className = "cap-overlay-panel";
    const divElement_2 = document.createElement("div");
    divElement_2.className = "cap-overlay-title";
    divElement_2.textContent = "Verify you're human";
    const capWidgetElement = document.createElement("cap-widget");
    capWidgetElement.setAttribute("data-cap-api-endpoint", e);
    const buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.className = "cap-overlay-cancel";
    buttonElement.textContent = "Cancel";
    let m = false;
    const b = () => {
      m = true;
      divElement.remove();
    };
    const g = () => {
      if (!m) {
        b();
        reject(new Error("captcha-failed"));
      }
    };
    capWidgetElement.addEventListener("solve", (f) => {
      const w = f.detail?.token;
      b();
      if (w) {
        resolve(w);
      } else {
        reject(new Error("captcha-failed"));
      }
    });
    capWidgetElement.addEventListener("error", g);
    buttonElement.addEventListener("click", g);
    divElement.addEventListener("mousedown", (f) => {
      if (f.target === divElement) {
        g();
      }
    });
    divElement_1.append(divElement_2, capWidgetElement, buttonElement);
    divElement.append(divElement_1);
    ni().append(divElement);
  });
}
const Si = 2000;
const JsContext = r_1.createContext(null);
function useAi() {
  const [e, setE] = r_1.useState({
    status: "loading",
  });
  const [n, setN] = r_1.useState(null);
  const [i, setI] = r_1.useState(false);
  const [u, setU] = r_1.useState(false);
  const [m, setM] = r_1.useState(null);
  const [g, setG] = r_1.useState(false);
  const w = r_1.useMemo(() => Ci(), []);
  const IRef = r_1.useRef(null);
  const xRef = r_1.useRef(null);
  const refreshBilling = r_1.useCallback(async () => {
    try {
      const P = await w.billingStatus();
      setM(P);
      setU(P.active);
    } catch {
      setM(null);
    } finally {
      setG(true);
    }
  }, [w]);
  const N = r_1.useCallback(async () => {
    const P = Sn();
    const F = JSON.stringify(P);
    if (F !== xRef.current) {
      try {
        await w.putSync(P);
        xRef.current = F;
      } catch {}
    }
  }, [w]);
  const D = r_1.useCallback(async () => {
    try {
      const { data } = await w.getSync();
      if (data) {
        Ei(data);
        xRef.current = JSON.stringify(Sn());
      } else {
        await N();
      }
    } catch {}
  }, [w, N]);
  const $ = r_1.useCallback((P, F) => {
    setU(P);
    if (F) {
      setM(F);
      setG(true);
    }
  }, []);
  const J = r_1.useCallback(
    async (user, F, h) => {
      setE({
        status: "signed-in",
        user,
      });
      $(F, h);
      if (!h) {
        setG(false);
        refreshBilling();
      }
      await D();
    },
    [$, D, refreshBilling],
  );
  r_1.useEffect(() => {
    let P = false;
    w.me()
      .then(async ({ user, active, billing }) => {
        if (!P) {
          await J(user, active, billing);
        }
      })
      .catch(() => {
        if (!P) {
          setE({
            status: "signed-out",
          });
          setG(true);
        }
      });
    return () => {
      P = true;
    };
  }, [w, J]);
  r_1.useEffect(() => {
    if (e.status !== "signed-in") {
      setM(null);
      setU(false);
    }
  }, [e.status]);
  r_1.useEffect(
    () => () => {
      if (IRef.current) {
        window.clearTimeout(IRef.current);
      }
    },
    [],
  );
  const T = (P, F) => {
    if (P instanceof Error && P.message === "captcha-failed") {
      return "Captcha failed. Please try again.";
    }
    if (P instanceof Ut) {
      return P.message;
    }
    return F;
  };
  const signIn = r_1.useCallback(
    async (P, F) => {
      setI(true);
      setN(null);
      try {
        const { user, active } = await w.login(
          P,
          F,
          await _n(Ve("/api/account/cap/")),
        );
        await J(user, active);
        return {
          ok: true,
        };
      } catch (error) {
        if (error instanceof Ut && error.code === "needs_password") {
          return {
            ok: false,
            needsPassword: true,
          };
        }
        return (
          setN(T(error, "Couldn't sign in.")),
          {
            ok: false,
          }
        );
      } finally {
        setI(false);
      }
    },
    [w, J],
  );
  const sendCode = r_1.useCallback(
    async (P, F) => {
      setI(true);
      setN(null);
      try {
        const h = await _n(Ve("/api/account/cap/"));
        if (F === "reset") {
          await w.requestReset(P, h);
        } else {
          await w.requestSetPassword(P, h);
        }
        return true;
      } catch (error) {
        setN(T(error, "Couldn't send a code."));
        return false;
      } finally {
        setI(false);
      }
    },
    [w],
  );
  const submitCode = r_1.useCallback(
    async (P, F, h, se) => {
      setI(true);
      setN(null);
      try {
        const { user, active } =
          se === "reset"
            ? await w.reset(P, F, h)
            : await w.setPassword(P, F, h);
        await J(user, active);
        return true;
      } catch (error) {
        setN(T(error, "Couldn't verify the code."));
        return false;
      } finally {
        setI(false);
      }
    },
    [w, J],
  );
  const logout = r_1.useCallback(async () => {
    try {
      await w.logout();
    } catch {}
    xRef.current = null;
    setE({
      status: "signed-out",
    });
  }, [w]);
  const scheduleSync = r_1.useCallback(() => {
    if (e.status === "signed-in") {
      if (IRef.current) {
        window.clearTimeout(IRef.current);
      }
      IRef.current = window.setTimeout(() => void N(), Si);
    }
  }, [e.status, N]);
  const checkout = r_1.useCallback(
    async (P) => {
      try {
        const { url } = await w.checkout(P, hn());
        window.location.href = url;
      } catch (error) {
        setN(T(error, "Couldn't start checkout."));
      }
    },
    [w],
  );
  const manageBilling = r_1.useCallback(async () => {
    try {
      const { url } = await w.billingPortal(hn());
      window.location.href = url;
    } catch (error) {
      setN(T(error, "Couldn't open billing."));
    }
  }, [w]);
  const verifyReturn = r_1.useCallback(
    async (P) => {
      try {
        const F = await w.verifyCheckout(P);
        if (F.active) {
          setU(true);
          try {
            const { user, active, billing } = await w.me();
            setE({
              status: "signed-in",
              user,
            });
            $(active, billing);
            if (!billing) {
              await refreshBilling();
            }
          } catch {
            await refreshBilling();
          }
        }
        return F;
      } catch {
        return null;
      }
    },
    [w, $, refreshBilling],
  );
  const setDiscord = r_1.useCallback(
    async (P) => {
      setI(true);
      setN(null);
      try {
        const { user, active, billing } = await w.setDiscord(P);
        setE({
          status: "signed-in",
          user,
        });
        $(active, billing);
        return true;
      } catch (error) {
        setN(T(error, "Couldn't save Discord."));
        return false;
      } finally {
        setI(false);
      }
    },
    [w, $],
  );
  const clearError = r_1.useCallback(() => setN(null), []);
  const user = e.status === "signed-in" ? e.user : null;
  return r_1.useMemo(
    () => ({
      status: e.status,
      user,
      busy: i,
      authError: n,
      clearError,
      billing: m,
      isPlus: u,
      entitlementReady: g,
      signIn,
      sendCode,
      submitCode,
      logout,
      scheduleSync,
      checkout,
      manageBilling,
      verifyReturn,
      refreshBilling,
      setDiscord,
    }),
    [
      e.status,
      user,
      i,
      n,
      clearError,
      m,
      u,
      g,
      signIn,
      sendCode,
      submitCode,
      logout,
      scheduleSync,
      checkout,
      manageBilling,
      verifyReturn,
      refreshBilling,
      setDiscord,
    ],
  );
}
function IComponent({ children }) {
  const t = useAi();
  return <JsContext.Provider value={t}>{children}</JsContext.Provider>;
}
function useSs() {
  const e = r_1.useContext(JsContext);
  if (!e) {
    throw new Error("useAccount requires AccountProvider");
  }
  return e;
}
function Pi(accent) {
  const t = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(accent) ? accent : "#ffffff";
  document.documentElement.style.setProperty("--accent", t);
}
const Ti = r_1.lazy(() =>
  Ee(
    () => import("./AiPage-CzTVmBC0-1570f54e.js"),
    __vite__mapDeps([7, 1, 8, 9, 10, 2, 11]),
    import.meta.url,
  ).then((e) => ({
    default: r_1.memo(e.AiPage),
  })),
);
const Ni = r_1.lazy(() =>
  Ee(
    () => import("./GamesPage-CSZVFk4Y-1570f54e.js"),
    __vite__mapDeps([12, 1, 2, 13]),
    import.meta.url,
  ).then((e) => ({
    default: r_1.memo(e.GamesPage),
  })),
);
const Li = r_1.lazy(() =>
  Ee(
    () => import("./SettingsPage-3QUCS4Cs-1570f54e.js"),
    __vite__mapDeps([14, 1, 2, 15]),
    import.meta.url,
  ).then((e) => ({
    default: e.SettingsPage,
  })),
);
const Ii = r_1.lazy(() =>
  Ee(
    () => import("./AccountPage-c65yezF7-1570f54e.js"),
    __vite__mapDeps([16, 1, 2, 15, 17]),
    import.meta.url,
  ).then((e) => ({
    default: r_1.memo(e.AccountPage),
  })),
);
const Ri = r_1.lazy(() =>
  Ee(
    () => import("./PlusPage-Cwept05c-1570f54e.js"),
    __vite__mapDeps([18, 1, 2, 19, 17, 15]),
    import.meta.url,
  ).then((e) => ({
    default: r_1.memo(e.PlusPage),
  })),
);
function onClearData() {
  ke("tabs");
  ke("bookmarks");
  ke("settings");
  location.reload();
}
function OiComponent() {
  const {
    tabs,
    activeId,
    activeTab,
    open,
    openInternal,
    openUrl,
    close,
    activate,
    patch,
    reorder,
  } = useWo();
  const { settings, update } = useGr();
  const w = usePi(settings.backgroundMode);
  const { controller } = useMi(settings.adblock);
  const x = useHo();
  const C = useVo();
  const N = Ge(C.id);
  const onThemeChange = r_1.useCallback(
    (W) => {
      C.set(W);
      update({
        accent: Ge(W).accent ?? ae.accent,
      });
    },
    [C.set, update],
  );
  const $ = useSs();
  const J = activeTab?.url ?? "";
  const T = ge(J);
  const R = useDi($, T);
  const [collapsed, setCollapsed] = r_1.useState(() =>
    gt("_o1pizjb.collapsed", false),
  );
  const neRef = r_1.useRef(false);
  const [q, setQ] = r_1.useState(false);
  const [M, setM] = r_1.useState(false);
  const ZRef = r_1.useRef(null);
  r_1.useEffect(() => {
    bi(controller, $.scheduleSync);
  }, [controller, $.scheduleSync]);
  r_1.useEffect(() => {
    $.scheduleSync();
  }, [x.bookmarks, settings, C.id, $.scheduleSync]);
  r_1.useEffect(() => Pi(settings.accent), [settings.accent]);
  useRi(settings);
  const onUrl = r_1.useCallback(
    (W, ce) =>
      patch(W, {
        url: ce,
      }),
    [patch],
  );
  const onTitle = r_1.useCallback(
    (W, ce) =>
      patch(W, {
        title: ce,
      }),
    [patch],
  );
  const P = mr(settings);
  const F = r_1.useCallback(
    (W, ce) => {
      var H;
      const Xe = jn(ce, P);
      if (Xe) {
        patch(W, {
          url: Xe,
          title: Xe,
        });
        if ((H = ZRef.current) != null) {
          H.goTo(W, Xe);
        }
      }
    },
    [patch, P],
  );
  const h = r_1.useCallback((W) => F(activeId, W), [F, activeId]);
  const onOpenUrl = r_1.useCallback(
    (W) => {
      const ce = jn(W, P);
      if (ce) {
        openUrl(ce, ce);
      }
    },
    [openUrl, P],
  );
  const onBack = r_1.useCallback(() => ZRef.current?.back(), []);
  const onForward = r_1.useCallback(() => ZRef.current?.forward(), []);
  const onReload = r_1.useCallback(() => ZRef.current?.reload(), []);
  const peRef = r_1.useRef(activeTab?.title);
  peRef.current = activeTab?.title;
  const onToggleBookmark = r_1.useCallback(
    () => x.toggleForUrl(J, peRef.current),
    [x.toggleForUrl, J],
  );
  const onAddBookmark = r_1.useCallback(() => setQ(true), []);
  const be = r_1.useCallback((W) => openInternal(kr(W), xr[W]), [openInternal]);
  const onOpenAi = r_1.useCallback(() => be("ai"), [be]);
  const onOpenGames = r_1.useCallback(() => be("games"), [be]);
  const onOpenSettings = r_1.useCallback(() => be("settings"), [be]);
  const onOpenAccount = r_1.useCallback(() => be("account"), [be]);
  const { setPlusPromo } = R;
  const onUpgradePlus = r_1.useCallback(
    () => setPlusPromo("settings"),
    [setPlusPromo],
  );
  const yt = r_1.useCallback(() => openInternal(Er, jr), [openInternal]);
  const onOpenRoblox = r_1.useCallback(() => {
    if (!fo(controller)) {
      Ce("sign-in");
      yt();
    }
  }, [controller, yt]);
  useXi(yt);
  const disabled = false;
  const kt = !J;
  const paused = !!J && !T;
  const activeUrl = kt ? "" : J;
  r_1.useEffect(() => {}, [be]);
  r_1.useEffect(() => {}, [T]);
  const lnRef = r_1.useRef(T);
  r_1.useEffect(() => {
    if (!neRef.current && T === "ai" && lnRef.current !== T) {
      setCollapsed(true);
    }
    lnRef.current = T;
  }, [T]);
  const onToggleCollapse = r_1.useCallback(() => {
    neRef.current = true;
    setCollapsed((W) => {
      const ce = !W;
      He("_o1pizjb.collapsed", ce);
      return ce;
    });
  }, []);
  useFi({
    onNewTab: open,
    onCloseTab: () => close(activeId),
    onSpotlight: () => setM((W) => !W),
    onJumpToTab: (W) => {
      const ce = W === 9 ? tabs[tabs.length - 1] : tabs[W - 1];
      if (ce) {
        activate(ce.id);
      }
    },
  });
  return (
    <JnContext.Provider value={settings}>
      <M_1 reducedMotion={settings.reduceMotion ? "always" : "user"}>
        <div
          className={`_kcupku7 ${paused ? "_7e7qegi" : ""} ${w ? "flat-surfaces" : ""}`}
          data-skin={C.id}
          data-theme={C.mode}
          data-motion={settings.reduceMotion ? "reduced" : undefined}
        >
          <IoComponent
            mode={settings.backgroundMode}
            hueShift={N.veilHue ?? 0}
            paused={paused}
          />
          <div className="_oj53jls" aria-hidden />
          <UrComponent
            tabs={tabs}
            activeId={activeId}
            activeUrl={activeUrl}
            bookmarks={x.bookmarks}
            disabled={disabled}
            collapsed={collapsed}
            onSelect={activate}
            onNew={open}
            onClose={close}
            onReorder={reorder}
            onNavigate={h}
            onOpenBookmark={h}
            onAddBookmark={onAddBookmark}
            onRemoveBookmark={x.remove}
            onToggleCollapse={onToggleCollapse}
            onOpenAi={onOpenAi}
            onOpenGames={onOpenGames}
            onOpenRoblox={onOpenRoblox}
            onOpenSettings={onOpenSettings}
            onOpenAccount={onOpenAccount}
            onBack={onBack}
            onForward={onForward}
            onReload={onReload}
          />
          <main className="content">
            {(paused || T) && (
              <$r
                url={T ? "" : activeUrl}
                disabled={disabled}
                collapsed={collapsed}
                internal={!!T}
                bookmarked={x.has(J)}
                onNavigate={h}
                onBack={onBack}
                onForward={onForward}
                onReload={onReload}
                onToggleBookmark={onToggleBookmark}
              />
            )}
            <div className="_nqcfkcj">
              <Ao
                ref={ZRef}
                controller={controller}
                tabs={tabs}
                activeId={activeId}
                onUrl={onUrl}
                onTitle={onTitle}
              />
              {kt && <_o disabled={disabled} onNavigate={h} />}
              <r_1.Suspense fallback={null}>
                {T === "ai" && <Ti account={$} onOpenAccount={onOpenAccount} />}
                {T === "games" && (
                  <Ni controller={controller} onOpenUrl={onOpenUrl} />
                )}
                {T === "settings" && (
                  <Li
                    settings={settings}
                    onUpdate={update}
                    themeId={C.id}
                    onThemeChange={onThemeChange}
                    onClearData={onClearData}
                    showPlusCta={!$.isPlus && $.status !== "loading"}
                    onUpgradePlus={onUpgradePlus}
                  />
                )}
                {T === "account" && <Ii account={$} />}
                {T === "plus" && (
                  <Ri account={$} onOpenAccount={onOpenAccount} />
                )}
              </r_1.Suspense>
            </div>
          </main>
          <RoComponent open={q} onClose={() => setQ(false)} onSubmit={x.add} />
          <MoComponent
            open={R.adsNoticeOpen && !R.plusPromo}
            onAccept={R.acceptAdsNotice}
            onUpgrade={() => setPlusPromo("ads")}
          />
          <OoComponent
            open={
              R.plusToastOpen && !R.adsNoticeOpen && !R.plusPromo && !$.isPlus
            }
            onClose={() => R.setPlusToastOpen(false)}
            onUpgrade={() => {
              R.setPlusToastOpen(false);
              setPlusPromo("settings");
            }}
          />
          <FoComponent
            open={R.plusPromo !== null}
            onClose={() => setPlusPromo(null)}
            account={$}
            heading={
              R.plusPromo === "ads"
                ? "Go ad-free with Lucide Plus"
                : "Lucide Plus"
            }
            blurb={
              R.plusPromo === "ads"
                ? "Lucide Plus removes ads entirely, plus 1,500 AI messages/day and exclusive links."
                : "Remove ads, unlock 1,500 AI messages/day, and get exclusive links."
            }
            onSignUp={() => {
              setPlusPromo(null);
              onOpenAccount();
            }}
          />
          <UoComponent open={M} onClose={() => setM(false)} onSubmit={h} />
          {kt && <BrComponent />}
        </div>
      </M_1>
    </JnContext.Provider>
  );
}
const Ui = {
  login: "Welcome back",
  setup: "Activate your account",
  reset: "Reset password",
};
function FiComponent({ account, brand, loginTagline, onSubscribe, claim }) {
  const [a, setA] = r_1.useState("login");
  const [d, setD] = r_1.useState("form");
  const [b, setB] = r_1.useState(claim?.email ?? "");
  const [f, setF] = r_1.useState("");
  const [I, setI] = r_1.useState("");
  const [C, setC] = r_1.useState(null);
  const [D, setD_1] = r_1.useState(0);
  r_1.useEffect(() => {
    if (claim) {
      setB(claim.email);
      if (claim.needsPassword) {
        setA("setup");
        setD("code");
        setC(
          "Payment confirmed — enter the code we emailed to set your password.",
        );
        account.sendCode(claim.email, "set-password");
        setD_1(30);
      } else {
        setA("login");
        setC("Payment confirmed — sign in to continue.");
      }
    }
  }, [claim]);
  r_1.useEffect(() => {
    if (D <= 0) {
      return;
    }
    const E = window.setTimeout(() => setD_1((M) => M - 1), 1000);
    return () => window.clearTimeout(E);
  }, [D]);
  const J = (E) => {
    account.clearError();
    setA(E);
    setD("form");
    setF("");
    setI("");
    setC(null);
    setD_1(0);
  };
  const account_busy = account.busy;
  const R = async () => {
    if ((await account.signIn(b, f)).needsPassword) {
      setA("setup");
      setD("form");
      setC("Finish activating your account by setting a password.");
    }
  };
  const Q = async () => {
    const E = a === "reset" ? "reset" : "set-password";
    if (await account.sendCode(b, E)) {
      setD("code");
      setC(null);
      setD_1(30);
    }
  };
  const B = () =>
    account.submitCode(b, I, f, a === "reset" ? "reset" : "set-password");
  const ne = async () => {
    if (await account.sendCode(b, a === "reset" ? "reset" : "set-password")) {
      setC(
        "New code sent. If you don't receive anything, check your spam — if you used a school email, our mail might not deliver.",
      );
      setD_1(30);
    }
  };
  const q =
    d === "code"
      ? "Enter the 6-digit code we emailed you. If you don't receive anything, check your spam — if you used a school email, our mail might not deliver."
      : a === "login"
        ? (loginTagline ?? "Sign in to continue.")
        : a === "setup"
          ? "Enter your email and choose a password to get started."
          : "Enter your email and a new password — we'll email you a code to confirm.";
  return (
    <>
      <div className="_kwvgfdy">
        {brand}
        <h1>{Ui[a]}</h1>
        <p className="account-auth-auth-sub">{q}</p>
      </div>
      <div className="account-auth-auth-form">
        {C && <div className="account-auth-auth-ok">{C}</div>}
        {account.authError && (
          <div className="account-auth-error">{account.authError}</div>
        )}
        {a === "login" && (
          <>
            <label>
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={b}
                onChange={(E) => setB(E.target.value)}
                autoComplete="email"
                disabled={account_busy}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                value={f}
                onChange={(E) => setF(E.target.value)}
                autoComplete="current-password"
                disabled={account_busy}
                onKeyDown={(E) => E.key === "Enter" && void R()}
              />
            </label>
            <button
              type="button"
              className="account-auth-btn primary account-auth-auth-primary"
              disabled={account_busy || !b.trim() || f.length < 8}
              onClick={() => void R()}
            >
              {account_busy ? "Please wait…" : "Sign in"}
            </button>
            <div className="account-auth-auth-alt">
              <button
                type="button"
                className="account-auth-auth-link"
                disabled={account_busy}
                onClick={() => J("reset")}
              >
                Forgot password?
              </button>
              <span className="account-auth-auth-dot">·</span>
              <button
                type="button"
                className="account-auth-auth-link"
                disabled={account_busy}
                onClick={() => J("setup")}
              >
                First time? Activate
              </button>
            </div>
            {onSubscribe && (
              <>
                <button
                  type="button"
                  className="account-auth-btn account-auth-auth-primary"
                  disabled={account_busy}
                  onClick={() => onSubscribe(b)}
                >
                  Subscribe to Lucide Plus
                </button>
                <Fs1Component />
              </>
            )}
          </>
        )}
        {a !== "login" && d === "form" && (
          <>
            <label>
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={b}
                onChange={(E) => setB(E.target.value)}
                autoComplete="email"
                disabled={account_busy}
              />
            </label>
            {a === "reset" && (
              <label>
                <span>New password</span>
                <input
                  type="password"
                  value={f}
                  onChange={(E) => setF(E.target.value)}
                  autoComplete="new-password"
                  disabled={account_busy}
                />
              </label>
            )}
            {a === "setup" && (
              <label>
                <span>Choose a password</span>
                <input
                  type="password"
                  value={f}
                  onChange={(E) => setF(E.target.value)}
                  autoComplete="new-password"
                  disabled={account_busy}
                />
              </label>
            )}
            <button
              type="button"
              className="account-auth-btn primary account-auth-auth-primary"
              disabled={account_busy || !b.trim() || f.length < 8}
              onClick={() => void Q()}
            >
              {account_busy ? "Please wait…" : "Send code"}
            </button>
            <div className="account-auth-auth-alt">
              <button
                type="button"
                className="account-auth-auth-link"
                disabled={account_busy}
                onClick={() => J("login")}
              >
                Back to sign in
              </button>
            </div>
          </>
        )}
        {a !== "login" && d === "code" && (
          <>
            {f.length === 0 && (
              <label>
                <span>
                  {a === "reset" ? "New password" : "Choose a password"}
                </span>
                <input
                  type="password"
                  value={f}
                  onChange={(E) => setF(E.target.value)}
                  autoComplete="new-password"
                  disabled={account_busy}
                />
              </label>
            )}
            <label>
              <span>6-digit code</span>
              <input
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="000000"
                maxLength={6}
                value={I}
                onChange={(E) =>
                  setI(E.target.value.replace(/\D/g, "").slice(0, 6))
                }
                disabled={account_busy}
                autoFocus
                onKeyDown={(E) => E.key === "Enter" && void B()}
              />
            </label>
            <button
              type="button"
              className="account-auth-btn primary account-auth-auth-primary"
              disabled={account_busy || I.length !== 6 || f.length < 8}
              onClick={() => void B()}
            >
              {account_busy
                ? "Please wait…"
                : a === "reset"
                  ? "Reset password"
                  : "Activate account"}
            </button>
            <div className="account-auth-auth-alt">
              <button
                type="button"
                className="account-auth-auth-link"
                disabled={account_busy || D > 0}
                onClick={() => void ne()}
              >
                {D > 0 ? `Resend in ${D}s` : "Resend code"}
              </button>
              <span className="account-auth-auth-dot">·</span>
              <button
                type="button"
                className="account-auth-auth-link"
                disabled={account_busy}
                onClick={() => J("login")}
              >
                Back to sign in
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
function DiComponent() {
  const e = useSs();
  const [t, setT] = r_1.useState("idle");
  const [r, setR] = r_1.useState(null);
  const [a, setA] = r_1.useState(false);
  const dRef = r_1.useRef(e.verifyReturn);
  dRef.current = e.verifyReturn;
  const mRef = r_1.useRef(false);
  r_1.useEffect(() => {
    if (mRef.current) {
      return;
    }
    mRef.current = true;
    const g = new URLSearchParams(window.location.search);
    const f = g.get("checkout");
    if (
      (f !== "success" && f !== "cancel") ||
      ($s(window.location.pathname), f !== "success")
    ) {
      return;
    }
    const w = g.get("session_id");
    if (w) {
      setT("checking");
      dRef.current(w).then((I) => {
        if (I != null && I.email) {
          setR({
            email: I.email,
            needsPassword: I.needsPassword,
          });
          setA(true);
        } else {
          setT("error");
        }
      });
    }
  }, []);
  r_1.useEffect(() => {
    if (!(!a || t !== "checking" || e.status === "loading")) {
      setT(e.status === "signed-in" ? "done" : "claim");
    }
  }, [a, t, e.status]);
  r_1.useEffect(() => {
    if (t === "claim" && e.status === "signed-in") {
      setT("done");
    }
  }, [t, e.status]);
  if (t === "idle") {
    return null;
  }
  const onClick = () => setT("idle");
  return (
    <div className="_vrprf3u" onClick={t === "checking" ? undefined : onClick}>
      <div className="modal" onClick={(g) => g.stopPropagation()}>
        {t === "checking" && (
          <>
            <div className="modal-title">Lucide+</div>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              Confirming your subscription…
            </p>
          </>
        )}
        {t === "claim" && r && (
          <FiComponent
            account={e}
            claim={r}
            brand=<div className="modal-title">Lucide+</div>
          />
        )}
        {t === "done" && (
          <>
            <div className="modal-title">You're on Plus</div>
            <p
              style={{
                margin: "0 0 0.9rem",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              {r != null && r.email
                ? `${r.email} is subscribed.`
                : "Your subscription is active."}{" "}
              Your Plus perks are unlocked.
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="modal-btn primary"
                onClick={onClick}
              >
                Continue
              </button>
            </div>
          </>
        )}
        {t === "error" && (
          <>
            <div className="modal-title">Couldn't confirm payment</div>
            <p
              style={{
                margin: "0 0 0.9rem",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              We couldn't confirm your checkout. If you were charged, reach out
              on Discord and we'll sort it out.
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="modal-btn ghost"
                onClick={onClick}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
class $i extends r_1.Component {
  constructor() {
    super(...arguments);
    Se(this, "state", {
      error: null,
      info: null,
    });
    Se(this, "reset", () =>
      this.setState({
        error: null,
        info: null,
      }),
    );
  }
  static getDerivedStateFromError(n) {
    return {
      error: n,
    };
  }
  componentDidCatch(n, info) {
    this.setState({
      info,
    });
  }
  render() {
    const { error, info } = this.state;
    if (!error) {
      return this.props.children;
    }
    const i = false;
    return (
      <div className="fixed inset-0 flex items-center justify-center overflow-auto bg-bg p-8 text-text">
        <div className="w-[min(560px,100%)] rounded-[var(--radius)] border border-border bg-surface p-6 backdrop-blur-xl">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_srgb,#ff6b6b_45%,var(--border-2))] bg-[color-mix(in_srgb,#ff6b6b_18%,transparent)] text-lg font-bold text-[#ff8f8f]">
            !
          </span>
          <h1 className="mt-3.5 mb-1 text-[22px] tracking-tight">
            Something broke
          </h1>
          <p className="m-0 text-sm leading-normal text-muted">
            An unexpected error crashed this view. You can try again, or reload
            Lucide.
          </p>
          <div className="mt-[1.1rem] flex gap-2">
            <button
              type="button"
              className="h-[38px] rounded-[var(--radius-sm)] border border-transparent bg-text px-4 text-[13px] font-semibold text-bg hover:brightness-95"
              onClick={this.reset}
            >
              Try again
            </button>
            <button
              type="button"
              className="h-[38px] rounded-[var(--radius-sm)] border border-border bg-surface-2 px-4 text-[13px] font-semibold text-text hover:brightness-95"
              onClick={() => window.location.reload()}
            >
              Reload Lucide
            </button>
          </div>
          <details className="mt-5" open={i}>
            <summary className="cursor-pointer break-words text-[13px] font-semibold text-[#ff8f8f]">
              {error.name}: {error.message}
            </summary>
            {i}
          </details>
        </div>
      </div>
    );
  }
}
function BiComponent() {
  return (
    <$i>
      <IComponent>
        <>
          <OiComponent />
          <DiComponent />
        </>
      </IComponent>
    </$i>
  );
}
function Qi1Component() {
  return (
    <div className="_vrprf3u backend-unavailable-backdrop">
      <section
        className="modal backend-unavailable-modal"
        role="alertdialog"
        aria-labelledby="backend-unavailable-title"
      >
        <div className="modal-title" id="backend-unavailable-title">
          No available backend
        </div>
        <p className="backend-unavailable-body">
          Lucide couldn’t reach any of its available links. They may be blocked
          by your network or temporarily offline.
        </p>
        <p className="backend-unavailable-help">
          Try again in a moment. If this keeps happening, switch networks or ask
          for a new link.
        </p>
        <div className="modal-actions">
          <button
            type="button"
            className="modal-btn primary"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </section>
    </div>
  );
}
const Wi = [
  "assets.fern.best",
  "checkout.jbquarterhorseranch.com",
  "books.llteamstore.com",
];
let tt = null;
const set_1 = new Set();
function Pn() {
  for (const e of set_1) {
    e();
  }
}
async function zi(e) {
  try {
    const t = await fetch(`https://${e}/`, {
      method: "GET",
      redirect: "manual",
      cache: "no-store",
      mode: "cors",
    });
    return t.type === "opaqueredirect" || t.status === 303;
  } catch {
    return false;
  }
}
function Vi() {
  return (
    tt ||
    ((tt = (async () => {
      for (const e of Wi) {
        if (await zi(e)) {
          Pn();
          return e;
        }
      }
      Pn();
      return null;
    })()),
    tt)
  );
}
function Gi() {
  if (typeof navigator === "undefined" || !navigator.serviceWorker) {
    return;
  }
  const href = new URL(Ne("nfd7ig.js"), location.href).href;
  navigator.serviceWorker
    .register(href)
    .then(() => navigator.serviceWorker.ready)
    .then((t) =>
      t.active?.postMessage({
        type: "_cmtdouam3c",
      }),
    )
    .catch(() => {});
}
on(rn());
Gi();
Vi();
Gn().then((e) => {
  const rootElement = document.getElementById("root");
  let n = rootElement;
  try {
    n = rootElement.attachShadow({
      mode: "closed",
    });
  } catch {}
  ei(n);
  if (n instanceof ShadowRoot) {
    const r = new Set();
    const i = () => {
      for (const a of document.querySelectorAll(
        'link[rel="stylesheet"], style',
      )) {
        if (!r.has(a)) {
          r.add(a);
          n.append(a.cloneNode(true));
        }
      }
    };
    i();
    new MutationObserver(i).observe(document.head, {
      childList: true,
    });
  }
  c.createRoot(n).render(
    <r_1.StrictMode>
      <BiComponent />
      {e === null && <Qi1Component />}
    </r_1.StrictMode>,
  );
});
export {
  Ne as $,
  la as A,
  sr as B,
  credentials as C,
  Nt as D,
  RaComponent as E,
  da as F,
  NaComponent as G,
  ha as H,
  TaComponent as I,
  rr as J,
  pa as K,
  ua as L,
  ZiComponent as M,
  Rt as N,
  ga as O,
  PtComponent as P,
  ae as Q,
  XtComponent as R,
  CaComponent as S,
  IaComponent as T,
  FoComponent as U,
  Qo as V,
  ma as W,
  nt as X,
  hr as Y,
  xn as Z,
  KsComponent as _,
  ke as a,
  FiComponent as a1,
  Fs1Component as a2,
  Ve as b,
  or as c,
  OaComponent as d,
  JtComponent as e,
  YtComponent as f,
  NComponent as g,
  EaComponent as h,
  QiComponent as i,
  Qn1Component as j,
  Qe1Component as k,
  SaComponent as l,
  AaComponent as m,
  ti as n,
  ni as o,
  BnComponent as p,
  we as q,
  gt as r,
  Gn as s,
  ko as t,
  jo as u,
  Co as v,
  ve as w,
  allow as x,
  YsComponent as y,
  He as z,
};
