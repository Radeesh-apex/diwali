/*!
 * The Night Ayodhya Lit Up — Diwali 2026
 * Rama, Sita and Lakshmana return to Ayodhya on Kartika Amavasya; the city answers with lamps.
 * Pure canvas + DOM, no build step. Works on GitHub Pages as static files.
 */
(() => {
  'use strict';

  /* =====================================================================
     Content
     ===================================================================== */
  const GREETINGS = [
    { lang: 'Kannada', code: 'kn', font: 'knda', native: 'ದೀಪಾವಳಿ ಹಬ್ಬದ ಶುಭಾಶಯಗಳು', roman: 'Deepavali habbada shubhashayagalu' },
    { lang: 'Assamese', code: 'as', font: 'beng', native: 'দীপাৱলীৰ শুভেচ্ছা', roman: 'Deepawalir shubhechha' },
    { lang: 'Bengali', code: 'bn', font: 'beng', native: 'শুভ দীপাবলি', roman: 'Shubho Dipaboli' },
    { lang: 'Bodo', code: 'brx', font: 'deva', native: 'हामब्लायथि दिवालि', roman: 'Hamblaythiy Diwali' },
    { lang: 'Dogri', code: 'doi', font: 'deva', native: 'देआली दियां शुभकामनां', roman: 'Deali diyan shubhkamnaṁ' },
    { lang: 'English', code: 'en', font: 'latn', native: 'Happy Deepawali', roman: 'Happy Deepawali' },
    { lang: 'Gujarati', code: 'gu', font: 'gujr', native: 'હેપ્પી દિવાળી', roman: 'Happy Diwali' },
    { lang: 'Hindi', code: 'hi', font: 'deva', native: 'शुभ दीपावली', roman: 'Shubh Deepawali' },
    { lang: 'Kannada', code: 'kn', font: 'knda', native: 'ದೀಪಾವಳಿ ಹಬ್ಬದ ಶುಭಾಶಯಗಳು', roman: 'Deepavali habbada shubhashayagalu' },
    { lang: 'Kashmiri', code: 'ks', font: 'arab', native: 'دیوالی مبارک', roman: 'Diwali Mubarak', rtl: true },
    { lang: 'Konkani', code: 'kok', font: 'deva', native: 'दिवाळेचीं परबीं', roman: 'Diwalechin parbin' },
    { lang: 'Maithili', code: 'mai', font: 'deva', native: 'शुभ दीपावली', roman: 'Shubh Deepawali' },
    { lang: 'Malayalam', code: 'ml', font: 'mlym', native: 'സന്തോഷകരമായ ദീപാവലി', roman: 'Santhoshakaramaya Deepavali' },
    { lang: 'Manipuri', code: 'mni', font: 'beng', native: 'দীপাবলীগী য়াাইফ-পাউজেল', roman: 'Dipabaligi yaif-paujel' }, // Note: Also uses Meitei Mayek script if preferred
    { lang: 'Marathi', code: 'mr', font: 'deva', native: 'दीपावलीच्या हार्दिक शुभेच्छा', roman: 'Deepavalichya hardik shubhechha' },
    { lang: 'Nepali', code: 'ne', font: 'deva', native: 'शुभ दीपावली', roman: 'Shubh Deepawali' },
    { lang: 'Odia', code: 'or', font: 'orya', native: 'ଶୁଭ ଦୀପାବଳି', roman: 'Shubha Deepabali' },
    { lang: 'Punjabi', code: 'pa', font: 'guru', native: 'ਸ਼ੁਭ ਦੀਪਾਵਲੀ', roman: 'Shubh Deepawali' },
    { lang: 'Sanskrit', code: 'sa', font: 'deva', native: 'सुखदं दीपावल्याः', roman: 'Sukhadam Deepawalyah' },
    { lang: 'Santali', code: 'sat', font: 'olck', native: 'ᱨᱟᱹᱥᱠᱟᱹ ᱫᱤᱯᱟᱣᱟᱞᱤ', roman: 'Raska Dipawali' },
    { lang: 'Sindhi', code: 'sd', font: 'arab', native: 'خوشيءَ ڀريو ديپاولی', roman: 'Khushiya bharyo Deepawali', rtl: true },
    { lang: 'Tamil', code: 'ta', font: 'taml', native: 'தீபாவளி வாழ்த்துகள்', roman: 'Deepavali vaazhthukal' },
    { lang: 'Telugu', code: 'te', font: 'telu', native: 'దీపావళి శుభాకాంక్షలు', roman: 'Deepavali shubhakankshalu' },
    { lang: 'Urdu', code: 'ur', font: 'arab', native: 'ہیپی دیوالی', roman: 'Happy Diwali', rtl: true }
  ];

  const T = {
    walkStart: 6.5,
    walkEnd: 23.5,
    firstLamp: 17.4,
    cascadeStart: 19.6,
    cascadeSpan: 18.5,
    floatStart: 23.5,
    petals: 25.5,
    fireworks: 31.5,
    greet: 38.6,
    greetEach: 2.9,
  };
  T.finale = T.greet + GREETINGS.length * T.greetEach;

  const CAPTIONS = [
    [0.9, 6.2, '<span class="eyebrow">Kartika Amavasya</span>A moonless night — the darkest of the year.'],
    [6.9, 12.0, '<span class="eyebrow">Fourteen years</span>Bharata kept Rama’s sandals upon the throne. Ayodhya waited.'],
    [12.7, 17.2, '<span class="eyebrow">Ravana has fallen</span>Rama comes home, with Sita and Lakshmana at his side.'],
    [18.0, 24.2, '<span class="deva" lang="sa">तमसो मा ज्योतिर्गमय</span>Lead us from darkness into light.'],
    [24.9, 30.6, '<span class="eyebrow">Deepa · avali — a row of lamps</span>One lamp, then another, until no doorway is left in the dark.'],
    [31.3, 37.6, '<span class="eyebrow">Ayodhya</span>On the darkest night, the city shines brighter than dawn.'],
  ];

  const FW_COLORS = ['#ffd27a', '#ffb347', '#ff7b39', '#ff5d8f', '#fff2d6', '#c58bff', '#7fe3c4', '#ffe066'];

  /* =====================================================================
     Helpers
     ===================================================================== */
  const $ = (s) => document.querySelector(s);
  const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, f) => a + (b - a) * f;
  const smooth = (e0, e1, x) => { const k = clamp((x - e0) / (e1 - e0)); return k * k * (3 - 2 * k); };
  const easeOut = (x) => 1 - Math.pow(1 - clamp(x), 3);
  const mixc = (a, b, f) => [lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(a[2], b[2], f)];
  const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
  const hex2rgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const pick = (arr, r = Math.random) => arr[Math.floor(r() * arr.length)];

  const params = new URLSearchParams(location.search);
  const reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =====================================================================
     Canvas + layout
     ===================================================================== */
  const canvas = $('#stage');
  const ctx = canvas.getContext('2d');
  const tmp = document.createElement('canvas');
  const tctx = tmp.getContext('2d');
  const reflC = document.createElement('canvas');
  const rctx = reflC.getContext('2d');
  const glowC = document.createElement('canvas');
  const gctx = glowC.getContext('2d');
  const figC = document.createElement('canvas');
  const fctx = figC.getContext('2d');

  let W, H, DPR, u, cx, baseY, wallH, wallTop, terraceBot, stepH, ghatBot, riverTop, riverBot, nearTop, small;
  let L = {};             // pre-rendered layers
  let lights = { back: [], front: [], ground: [] };
  let handLamps = [];
  let citizens = [];
  let bigDiyas = [];
  let floaters = [];
  let stars = [];
  let flags = [];
  let revealCurve = [];   // running max distance per rank
  let lampCount = 0;
  let gate = {};
  let maxDist = 1;
  let glowSprite, fwSprites = {};

  function makeLayer() {
    const c = document.createElement('canvas');
    c.width = canvas.width; c.height = canvas.height;
    const g = c.getContext('2d');
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    return { c, g };
  }

  function layout() {
    W = window.innerWidth; H = window.innerHeight;
    small = Math.min(W, H) < 600;
    DPR = Math.min(window.devicePixelRatio || 1, small ? 1.75 : 2);
    canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
    tmp.width = canvas.width; tmp.height = canvas.height;
    figC.width = canvas.width; figC.height = canvas.height;
    const portrait = H / W > 1.15;
    u = portrait ? Math.min(W / 540, H / 900) : Math.min(W / 720, H / 820);
    cx = W / 2;
    baseY = Math.round(H * (portrait ? 0.6 : H / W < 0.58 ? 0.66 : 0.6)); // short laptop screens: more sky for the words
    wallH = 70 * u; wallTop = baseY - wallH;
    terraceBot = baseY + 22 * u;
    stepH = 8 * u;
    ghatBot = terraceBot + 4 * stepH;
    riverTop = ghatBot;
    nearTop = H - Math.max(48 * u, H * 0.085);
    riverBot = nearTop;
    makeSprites();
    build();
  }

  function makeSprites() {
    const s = 128;
    glowSprite = document.createElement('canvas');
    glowSprite.width = glowSprite.height = s;
    const g = glowSprite.getContext('2d');
    const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    gr.addColorStop(0, 'rgba(255,252,230,1)');
    gr.addColorStop(0.07, 'rgba(255,226,150,1)');
    gr.addColorStop(0.18, 'rgba(255,176,70,0.6)');
    gr.addColorStop(0.42, 'rgba(255,120,30,0.16)');
    gr.addColorStop(1, 'rgba(255,90,20,0)');
    g.fillStyle = gr; g.fillRect(0, 0, s, s);

    fwSprites = {};
    for (const col of FW_COLORS.concat(['#ffcf6b'])) {
      const c = document.createElement('canvas');
      c.width = c.height = 32;
      const gg = c.getContext('2d');
      const [r, gc, b] = hex2rgb(col);
      const rr = gg.createRadialGradient(16, 16, 0, 16, 16, 16);
      rr.addColorStop(0, 'rgba(255,250,235,1)');
      rr.addColorStop(0.08, `rgba(${r},${gc},${b},1)`);
      rr.addColorStop(0.45, `rgba(${r},${gc},${b},0.35)`);
      rr.addColorStop(1, `rgba(${r},${gc},${b},0)`);
      gg.fillStyle = rr; gg.fillRect(0, 0, 32, 32);
      fwSprites[col] = c;
    }
  }

  /* =====================================================================
     Architecture generators (outline polygons; also used to place lamps)
     ===================================================================== */
  function sym(left, x) {
    const out = left.slice();
    for (let i = left.length - 2; i >= 0; i--) out.push([2 * x - left[i][0], left[i][1]]);
    return out;
  }

  function merlons(P, xa, xb, y, mw, gap, mh) {
    let xx = xa;
    let guard = 0;
    while (xx < xb - 0.01 && guard++ < 400) {
      const x1 = Math.min(xx + gap, xb); P.push([x1, y]);
      if (x1 >= xb) break;
      const x2 = Math.min(x1 + mw, xb);
      P.push([x1, y - mh], [x2, y - mh]);
      if (x2 >= xb) break;
      P.push([x2, y]);
      xx = x2;
    }
  }

  // Left half of a dome, from base-left up to the apex (ends at x).
  function domeLeft(P, x, hw, yb, h, onion) {
    const N = 12;
    for (let i = 0; i <= N; i++) {
      const s = i / N;
      const r = onion
        ? hw * (1 + 0.32 * Math.sin((Math.PI * s) / 0.6)) * Math.pow(1 - s, 0.75)
        : hw * Math.sqrt(Math.max(0, 1 - s * s));
      P.push([x - r, yb - h * s]);
    }
    const fin = Math.max(4 * u, h * 0.35);
    P.push([x - 0.8 * u, yb - h], [x - 0.8 * u, yb - h - fin], [x, yb - h - fin - 1.5 * u]);
  }

  // Full chhatri (pillared pavilion with a dome), from [x-hw, y] to [x+hw, y].
  function chhatri(x, w, y, onion) {
    const hw = w / 2, ph = w * 0.55, P = [];
    P.push([x - hw * 0.86, y], [x - hw * 0.86, y - ph]);
    P.push([x - hw - 2 * u, y - ph], [x - hw - 2 * u, y - ph - 2 * u], [x - hw * 0.82, y - ph - 2 * u]);
    domeLeft(P, x, hw * 0.82, y - ph - 2 * u, w * 0.62, onion);
    return sym(P, x);
  }

  function haveli(x, w, h, gy, R, opt = {}) {
    const hw = w / 2, top = gy - h, P = [];
    P.push([x - hw, gy], [x - hw, top]);
    P.push([x - hw - 3 * u, top], [x - hw - 3 * u, top - 2.5 * u], [x - hw, top - 2.5 * u]);
    const pTop = top - 2.5 * u;
    let cursor = x - hw;
    if (opt.chhatri && w > 60 * u) {
      const cw = Math.min(24 * u, w * 0.26);
      const ccx = x - hw + cw / 2 + 1.5 * u;
      const ch = chhatri(ccx, cw, pTop, opt.onion);
      P.push(...ch);
      cursor = ccx + cw / 2;
    }
    const dw = opt.dome ? Math.min(w * 0.3, 40 * u) : 0;
    const mEnd = x - dw / 2;
    if (mEnd > cursor) {
      P.push([cursor, pTop]);
      merlons(P, cursor, mEnd, pTop, 4 * u, 4 * u, 4 * u);
    }
    if (opt.dome) {
      P.push([x - dw / 2, pTop]);
      domeLeft(P, x, dw / 2, pTop, dw * 0.9, opt.onion !== false);
    } else {
      const last = P[P.length - 1];
      P.push([x, last[1]]);
    }
    // windows
    const wins = [];
    const floors = Math.max(1, Math.floor((h - 12 * u) / (30 * u)));
    const cols = Math.max(1, Math.floor((w - 8 * u) / (17 * u)));
    const sp = (w - 8 * u) / cols;
    for (let r = 0; r < floors; r++) {
      for (let c = 0; c < cols; c++) {
        if (R() < 0.22) continue;
        wins.push({ x: x - hw + 4 * u + sp * (c + 0.5) - 3.5 * u, y: top + 10 * u + r * 30 * u, w: 7 * u, h: 12 * u });
      }
    }
    return { pts: sym(P, x), wins, flag: opt.dome && R() < 0.6 ? { x, y: pTop - dw * 0.9 - Math.max(4 * u, dw * 0.3), h: 14 * u } : null };
  }

  function shikhara(x, w, h, gy) {
    const hw = w / 2, P = [];
    const plinth = 0.07 * h, wall = 0.26 * h, spire = 0.48 * h;
    let y = gy;
    P.push([x - hw * 1.15, y], [x - hw * 1.15, y - plinth], [x - hw, y - plinth]);
    y -= plinth;
    P.push([x - hw, y - wall]); y -= wall;
    P.push([x - hw * 1.08, y], [x - hw * 1.08, y - 0.025 * h], [x - hw * 0.96, y - 0.025 * h]);
    y -= 0.025 * h;
    const N = 18;
    for (let i = 1; i <= N; i++) {
      const s = i / N;
      const r = hw * 0.96 * (1 - 0.66 * Math.pow(s, 1.5));
      // bhumi courses: tiny notches give the spire its carved, stepped profile
      const notch = i % 3 === 0 ? 1.2 * u : 0;
      P.push([x - r - notch, y - spire * s]);
      if (notch) P.push([x - r, y - spire * s]);
    }
    const r1 = hw * 0.96 * 0.34;
    y -= spire;
    P.push([x - r1 * 0.72, y], [x - r1 * 0.72, y - 0.015 * h]); y -= 0.015 * h;
    const ar = r1 * 1.25, ah = 0.04 * h;
    P.push([x - ar, y - ah * 0.3], [x - ar, y - ah * 0.7], [x - r1 * 0.7, y - ah]); y -= ah;
    const kr = r1 * 0.45, kh = 0.065 * h;
    P.push([x - kr * 0.5, y], [x - kr, y - kh * 0.35], [x - kr * 0.7, y - kh * 0.7], [x - kr * 0.25, y - kh * 0.8], [x - kr * 0.25, y - kh]);
    y -= kh;
    P.push([x, y - 0.012 * h]);
    return { pts: sym(P, x), wins: [], flag: { x, y: y - 0.012 * h, h: Math.max(16 * u, 0.15 * h) } };
  }

  function temple(x, w, h, gy) {
    const shapes = [];
    // urushringas (subsidiary spires) clustered around the main spire
    shapes.push(shikhara(x - w * 0.36, w * 0.46, h * 0.58, gy - h * 0.07));
    shapes.push(shikhara(x + w * 0.36, w * 0.46, h * 0.58, gy - h * 0.07));
    const main = shikhara(x, w, h, gy);
    shapes.push(main);
    shapes[0].flag = null; shapes[1].flag = null;
    return shapes;
  }

  function sample(pts, spacing, skipY, out, extra) {
    let carry = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
      if (i === 0 && y1 === y2) continue;
      const len = Math.hypot(x2 - x1, y2 - y1);
      let d = carry;
      while (d < len) {
        const f = d / len;
        const x = x1 + (x2 - x1) * f, y = y1 + (y2 - y1) * f;
        if (y < skipY && x > -10 && x < W + 10) out.push(Object.assign({ x, y }, extra));
        d += spacing;
      }
      carry = d - len;
    }
  }

  function fillPoly(g, pts) {
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
    g.closePath();
  }

  /* =====================================================================
     Build the city
     ===================================================================== */
  function build() {
    const R = rng(20261020);
    const gateCy = baseY - 60 * u;
    gate = { cx, cy: gateCy };
    maxDist = Math.hypot(Math.max(cx, W - cx), H - gateCy) * 1.02;
    flags = [];

    const far = [], back = [], trees = [];
    const allLamps = [];

    // ---------- far haze silhouettes ----------
    {
      let x = -20 * u;
      while (x < W + 40 * u) {
        const w = (40 + R() * 70) * u;
        const h = (70 + R() * 90) * u * (1 - 0.25 * Math.abs(x - cx) / W);
        const k = R();
        if (k < 0.2) far.push(shikhara(x + w / 2, w * 0.7, h * 1.3, baseY));
        else far.push(haveli(x + w / 2, w, h, baseY, R, { dome: k > 0.65, onion: true }));
        x += w * (0.7 + R() * 0.3);
      }
    }

    // ---------- the royal complex behind the gate ----------
    const mainH = Math.min(260 * u, baseY - H * 0.22);
    back.push(haveli(cx - 92 * u, 66 * u, 150 * u, baseY, R, { dome: true, onion: true }));
    back.push(haveli(cx + 92 * u, 66 * u, 150 * u, baseY, R, { dome: true, onion: true }));
    temple(cx, 112 * u, mainH, baseY).forEach((s) => back.push(s));

    // ---------- the rest of Ayodhya ----------
    function side(dir) {
      let x = cx + dir * 150 * u;
      let guard = 0;
      while (((dir < 0 && x > -80 * u) || (dir > 0 && x < W + 80 * u)) && guard++ < 80) {
        const fall = 1 - 0.35 * clamp(Math.abs(x - cx) / (W * 0.6));
        const k = R();
        let w;
        if (k < 0.17) {
          w = (64 + R() * 30) * u;
          const h = (170 + R() * 60) * u * fall;
          temple(x + dir * w / 2, w, h, baseY).forEach((s) => back.push(s));
        } else if (k < 0.34) {
          // palace: two tiers
          w = (120 + R() * 70) * u;
          const h1 = (90 + R() * 40) * u * fall, h2 = (50 + R() * 30) * u * fall;
          const px = x + dir * w / 2;
          back.push(haveli(px, w, h1, baseY, R, { chhatri: true, onion: R() < 0.5 }));
          back.push(haveli(px, w * 0.56, h2, baseY - h1 - 2.5 * u, R, { dome: true, onion: true }));
        } else if (k < 0.47) {
          w = (26 + R() * 24) * u;
          trees.push({ x: x + dir * w / 2, h: (80 + R() * 70) * u, kind: R() < 0.55 ? 'palm' : 'round', seed: R() * 10 });
        } else {
          w = (60 + R() * 60) * u;
          const h = (95 + R() * 80) * u * fall;
          back.push(haveli(x + dir * w / 2, w, h, baseY, R, { chhatri: R() < 0.5, dome: R() < 0.35, onion: R() < 0.7 }));
        }
        x += dir * (w + (2 + R() * 14) * u);
      }
    }
    side(-1); side(1);

    // ---------- gate + wall ----------
    const gw = 150 * u, tw = 46 * u, th = 182 * u, ch = 140 * u;
    const ow = 78 * u, springH = 70 * u;
    const xl = cx - gw / 2 - tw;
    const G = [];
    G.push([xl, wallTop], [xl, baseY - th]);
    G.push([xl - 4 * u, baseY - th], [xl - 4 * u, baseY - th - 3 * u]);
    G.push(...chhatri(xl + tw / 2, tw * 0.9, baseY - th - 3 * u, true));
    G.push([xl + tw + 4 * u, baseY - th - 3 * u], [xl + tw + 4 * u, baseY - th], [xl + tw, baseY - th], [xl + tw, baseY - ch]);
    G.push([xl + tw - 2 * u, baseY - ch], [xl + tw - 2 * u, baseY - ch - 3 * u], [xl + tw, baseY - ch - 3 * u]);
    const pTop = baseY - ch - 3 * u;
    merlons(G, xl + tw, cx - 18 * u, pTop, 5 * u, 4 * u, 5 * u);
    G.push([cx - 18 * u, pTop]);
    domeLeft(G, cx, 18 * u, pTop, 22 * u, true);
    const gatePts = sym(G, cx);
    const xr = 2 * cx - xl;

    const Wl = [[-10, baseY], [-10, wallTop]];
    merlons(Wl, -10, xl, wallTop, 8 * u, 9 * u, 8 * u);
    Wl.push([xl, wallTop]);
    const Wr = [[xr, wallTop]];
    merlons(Wr, xr, W + 10, wallTop, 8 * u, 9 * u, 8 * u);
    Wr.push([W + 10, wallTop], [W + 10, baseY]);
    const wallPts = Wl.concat(gatePts, Wr);

    // pointed arch opening
    const arch = [];
    const off = ow * 0.12, ar = ow / 2 + off;
    arch.push([cx - ow / 2, baseY], [cx - ow / 2, baseY - springH]);
    const acx = cx + off, acy = baseY - springH;
    const endA = Math.acos(-off / ar); // angle where x == cx
    for (let i = 1; i <= 14; i++) {
      const a = Math.PI - (Math.PI - endA) * (i / 14);
      arch.push([acx + Math.cos(a) * ar, acy - Math.sin(a) * ar]);
    }
    const archPts = sym(arch, cx);
    const archTop = acy - Math.sin(endA) * ar;
    gate = { cx, cy: gateCy, xl, xr, tw, th, ch, ow, springH, archTop, archPts, pTop };

    /* ---------- pre-render layers ---------- */
    for (const k of ['backD', 'backL', 'frontD', 'frontL', 'groundD', 'groundL', 'nearD', 'nearL']) L[k] = makeLayer();

    // far + back buildings
    const drawBuildings = (g, lit) => {
      // far haze
      g.fillStyle = lit ? 'rgb(52,24,34)' : 'rgb(9,10,22)';
      far.forEach((s) => { fillPoly(g, s.pts); g.fill(); });
      if (lit) {
        // far city lamps baked as tiny dots
        g.globalCompositeOperation = 'lighter';
        const dots = [];
        far.forEach((s) => sample(s.pts, 12 * u, baseY - wallH + 4 * u, dots, {}));
        for (const d of dots) {
          const sz = 7 * u * (0.7 + R() * 0.5);
          g.globalAlpha = 0.55;
          g.drawImage(glowSprite, d.x - sz / 2, d.y - sz / 2, sz, sz);
        }
        g.globalAlpha = 1;
        g.globalCompositeOperation = 'source-over';
      }
      // back buildings
      const grd = g.createLinearGradient(0, baseY - 300 * u, 0, baseY);
      if (lit) { grd.addColorStop(0, 'rgb(44,18,22)'); grd.addColorStop(1, 'rgb(118,52,26)'); }
      else { grd.addColorStop(0, 'rgb(6,6,12)'); grd.addColorStop(1, 'rgb(5,5,9)'); }
      g.fillStyle = grd;
      back.forEach((s) => { fillPoly(g, s.pts); g.fill(); });
      g.lineWidth = Math.max(1, 1.1 * u);
      g.strokeStyle = lit ? 'rgba(255,180,110,0.35)' : 'rgba(90,100,160,0.10)';
      back.forEach((s) => { fillPoly(g, s.pts); g.stroke(); });
      // trees
      trees.forEach((tr) => drawTree(g, tr, lit));
      if (lit) {
        // windows glow
        g.save();
        g.shadowColor = 'rgba(255,170,60,0.9)';
        g.shadowBlur = 6 * u * DPR;
        back.forEach((s) => s.wins.forEach((w) => {
          if (w.y + w.h > wallTop - 2 * u) return;
          g.fillStyle = R() < 0.8 ? 'rgba(255,186,90,0.92)' : 'rgba(255,140,60,0.8)';
          g.beginPath();
          g.moveTo(w.x, w.y + w.h); g.lineTo(w.x, w.y + w.w / 2);
          g.arc(w.x + w.w / 2, w.y + w.w / 2, w.w / 2, Math.PI, 0);
          g.lineTo(w.x + w.w, w.y + w.h); g.closePath(); g.fill();
        }));
        g.restore();
      }
    };
    drawBuildings(L.backD.g, false);
    drawBuildings(L.backL.g, true);

    back.forEach((s) => { if (s.flag) flags.push(s.flag); });

    // front: wall + gate
    const drawFront = (g, lit) => {
      const grd = g.createLinearGradient(0, baseY - th, 0, baseY);
      if (lit) { grd.addColorStop(0, 'rgb(84,36,26)'); grd.addColorStop(1, 'rgb(150,72,34)'); }
      else { grd.addColorStop(0, 'rgb(7,7,12)'); grd.addColorStop(1, 'rgb(6,6,10)'); }
      g.fillStyle = grd;
      fillPoly(g, wallPts); g.fill();
      g.lineWidth = Math.max(1, 1.2 * u);
      g.strokeStyle = lit ? 'rgba(255,196,120,0.45)' : 'rgba(110,120,180,0.10)';
      fillPoly(g, wallPts); g.stroke();
      // cornice band on the wall
      g.strokeStyle = lit ? 'rgba(255,190,120,0.35)' : 'rgba(110,120,180,0.06)';
      g.beginPath(); g.moveTo(0, wallTop + 16 * u); g.lineTo(xl, wallTop + 16 * u); g.moveTo(xr, wallTop + 16 * u); g.lineTo(W, wallTop + 16 * u); g.stroke();
      // gate panels and tower niches
      g.strokeStyle = lit ? 'rgba(255,214,150,0.55)' : 'rgba(110,120,180,0.08)';
      for (const tx of [xl + tw / 2, xr - tw / 2]) {
        for (let k = 0; k < 3; k++) {
          const ny = baseY - th + 24 * u + k * 46 * u, nw = 14 * u, nh = 24 * u;
          g.beginPath();
          g.moveTo(tx - nw / 2, ny + nh); g.lineTo(tx - nw / 2, ny + nw / 2);
          g.arc(tx, ny + nw / 2, nw / 2, Math.PI, 0); g.lineTo(tx + nw / 2, ny + nh); g.closePath();
          if (lit) { g.fillStyle = 'rgba(255,170,70,0.85)'; g.fill(); }
          g.stroke();
        }
      }
      // arch frame
      g.lineWidth = Math.max(1, 3 * u);
      fillPoly(g, archPts.map(([x, y]) => [cx + (x - cx) * 1.14, baseY - (baseY - y) * 1.08]));
      g.strokeStyle = lit ? 'rgba(255,214,150,0.6)' : 'rgba(110,120,180,0.08)';
      g.stroke();
      // opening: dark street, or the palace beyond ablaze
      fillPoly(g, archPts);
      if (lit) {
        const og = g.createRadialGradient(cx, baseY, 4 * u, cx, baseY - 40 * u, 110 * u);
        og.addColorStop(0, 'rgb(255,246,214)'); og.addColorStop(0.35, 'rgb(255,196,96)'); og.addColorStop(1, 'rgb(190,78,26)');
        g.fillStyle = og; g.fill();
        // receding street of lamps seen through the gate
        g.save(); fillPoly(g, archPts); g.clip();
        g.globalCompositeOperation = 'lighter';
        for (let row = 0; row < 6; row++) {
          const yy = baseY - 18 * u - row * 7 * u, spread = (ow / 2) * (1 - row * 0.13);
          for (const sgn of [-1, 1]) {
            const s = 9 * u * (1 - row * 0.12);
            g.drawImage(glowSprite, cx + sgn * spread * 0.8 - s / 2, yy - s / 2, s, s);
          }
        }
        g.restore();
      } else { g.fillStyle = 'rgb(2,2,4)'; g.fill(); }
      if (lit) drawTorans(g);
    };
    drawFront(L.frontD.g, false);
    drawFront(L.frontL.g, true);

    // ground: terrace + ghat steps (+ rangoli)
    const drawGround = (g, lit) => {
      let gr = g.createLinearGradient(0, baseY, 0, terraceBot);
      if (lit) { gr.addColorStop(0, 'rgb(96,46,26)'); gr.addColorStop(1, 'rgb(136,70,34)'); }
      else { gr.addColorStop(0, 'rgb(5,5,8)'); gr.addColorStop(1, 'rgb(7,7,11)'); }
      g.fillStyle = gr; g.fillRect(0, baseY, W, terraceBot - baseY + 1);
      for (let i = 0; i < 4; i++) {
        const y = terraceBot + i * stepH;
        g.fillStyle = lit ? `rgb(${78 - i * 8},${36 - i * 4},${22 - i * 2})` : 'rgb(4,4,7)';
        g.fillRect(0, y, W, stepH * 0.55 + 1);
        g.fillStyle = lit ? `rgb(${128 - i * 10},${64 - i * 6},${32 - i * 3})` : 'rgb(7,7,11)';
        g.fillRect(0, y + stepH * 0.55, W, stepH * 0.45 + 1);
      }
      if (lit) drawRangoli(g, cx, (baseY + terraceBot) / 2 + 3 * u, 64 * u, 8 * u);
      // a few ghat pavilions breaking the steps
      g.fillStyle = lit ? 'rgb(70,32,22)' : 'rgb(5,5,8)';
    };
    drawGround(L.groundD.g, false);
    drawGround(L.groundL.g, true);

    // near ledge
    const drawNear = (g, lit) => {
      const gr = g.createLinearGradient(0, nearTop, 0, H);
      if (lit) { gr.addColorStop(0, 'rgb(112,56,28)'); gr.addColorStop(0.3, 'rgb(60,28,16)'); gr.addColorStop(1, 'rgb(20,9,7)'); }
      else { gr.addColorStop(0, 'rgb(8,8,12)'); gr.addColorStop(1, 'rgb(2,2,4)'); }
      g.fillStyle = gr;
      g.fillRect(0, nearTop, W, H - nearTop);
      g.fillStyle = lit ? 'rgba(255,190,120,0.5)' : 'rgba(110,120,180,0.10)';
      g.fillRect(0, nearTop, W, Math.max(1, 1.2 * u));
    };
    drawNear(L.nearD.g, false);
    drawNear(L.nearL.g, true);

    /* ---------- lamps ---------- */
    const spB = Math.max(5, 9 * u);
    const hideBehindWall = wallTop - 3 * u;
    back.forEach((s, bi) => {
      const pts = [];
      sample(s.pts, spB, hideBehindWall, pts, { layer: 'back', s: 13 * u });
      const n = pts.length;
      pts.forEach((p, i) => { p.chain = i / Math.max(1, n); });
      allLamps.push(...pts);
    });
    // wall merlons + cornice niches
    const wl = [];
    sample(Wl.concat([[xl, wallTop]]), Math.max(5, 8.5 * u), baseY, wl, { layer: 'front', s: 14 * u });
    sample(Wr, Math.max(5, 8.5 * u), baseY, wl, { layer: 'front', s: 14 * u });
    wl.forEach((p) => { if (p.y > wallTop - 9 * u && p.y < wallTop + 1) allLamps.push(p); else if (p.y <= wallTop - 7 * u) allLamps.push(p); });
    for (let x = 6 * u; x < W; x += Math.max(6, 11 * u)) {
      if (x > xl - 4 * u && x < xr + 4 * u) continue;
      allLamps.push({ x, y: wallTop + 16 * u, layer: 'front', s: 13 * u });
    }
    // gate outline and arch
    sample(gatePts, Math.max(4, 7 * u), baseY, allLamps, { layer: 'front', s: 15 * u, gateLamp: true });
    sample(archPts.map(([x, y]) => [cx + (x - cx) * 1.2, baseY - (baseY - y) * 1.12]), Math.max(4, 6.5 * u), baseY - 2 * u, allLamps, { layer: 'front', s: 15 * u, gateLamp: true });
    // terrace edge + ghat steps: the ocean of lamps
    for (let x = 3 * u; x < W; x += Math.max(4, 7 * u)) {
      if (Math.abs(x - cx) < ow / 2 + 6 * u && false) continue;
      allLamps.push({ x: x + (R() - 0.5) * 2 * u, y: terraceBot - 1.5 * u, layer: 'ground', s: 13 * u });
    }
    for (let i = 0; i < 4; i++) {
      const y = terraceBot + i * stepH + stepH * 0.62;
      const sp = Math.max(3.6, 5.8 * u);
      for (let x = (i % 2 ? sp / 2 : 0) + 2 * u; x < W; x += sp) {
        allLamps.push({ x: x + (R() - 0.5) * 1.5 * u, y: y + (R() - 0.5) * 1.2 * u, layer: 'ground', s: (12 + i * 0.8) * u });
      }
    }
    // order the cascade: outward from the gate, chasing along each building's outline
    for (const p of allLamps) {
      const d = Math.hypot(p.x - cx, (p.y - gateCy) * 1.4);
      p.d = d;
      p.key = d / maxDist + R() * 0.07 + (p.chain !== undefined ? p.chain * 0.05 : 0) - (p.gateLamp ? 0.04 : 0);
      p.ph = R() * 100;
      p.a = 0.85 + R() * 0.15;
    }
    allLamps.sort((a, b) => a.key - b.key);
    lampCount = allLamps.length;
    revealCurve = new Float32Array(lampCount);
    let m = 0;
    allLamps.forEach((p, i) => {
      p.t0 = T.cascadeStart + T.cascadeSpan * Math.pow(i / lampCount, 0.42);
      m = Math.max(m, p.d); revealCurve[i] = m;
    });
    lights = { back: [], front: [], ground: [] };
    allLamps.forEach((p) => lights[p.layer].push(p));
    // the first lamps after the citizens: a handful of soft pings
    pingTimes = allLamps.slice(0, 14).map((p) => p.t0);

    /* ---------- citizens holding lamps ---------- */
    citizens = [];
    handLamps = [];
    const cy = baseY + 7 * u;
    const rightX = [62, 104, 140, 176, 226, 268, 318, 372];
    const leftX = [-104, -146, -196, -250, -306, -366];
    const kinds = ['woman', 'man', 'woman', 'child', 'man', 'woman', 'man', 'woman', 'child', 'man', 'woman', 'man', 'woman', 'man'];
    let ki = 0;
    const order = [];
    rightX.forEach((dx) => order.push({ x: cx + dx * u, dir: -1 }));
    leftX.forEach((dx) => order.push({ x: cx + dx * u, dir: 1 }));
    order.sort((a, b) => Math.abs(a.x - cx) - Math.abs(b.x - cx));
    order.forEach((o, i) => {
      if (o.x < -20 || o.x > W + 20) return;
      const kind = kinds[ki++ % kinds.length];
      const h = (kind === 'child' ? 46 : kind === 'woman' ? 66 : 72) * u * (0.95 + R() * 0.08);
      const c = { x: o.x, y: cy, h, kind, dir: o.dir, seed: R() * 10 };
      const skin = CIT_SKIN[Math.floor(R() * CIT_SKIN.length)];
      const cl = () => CIT_CLOTH[Math.floor(R() * CIT_CLOTH.length)];
      if (kind === 'woman') {
        const sari = cl().slice(), bd = R() < 0.6 ? [234, 178, 64] : [200, 40, 60];
        c.look = { skin, sari, border: bd, blouse: sari.map((v) => v * 0.7) };
      } else {
        c.look = { skin };
        c.cloth = { top: kind === 'child' ? cl() : (R() < 0.5 ? [238, 230, 212] : cl()), bottom: [236, 228, 210] };
        c.turban = kind === 'man' ? cl() : null;
      }
      const [lx, ly] = lampHold(h);
      c.lx = c.x + c.dir * lx; c.ly = c.y + ly;
      const t0 = i === 0 ? T.firstLamp : T.firstLamp + 0.9 + Math.pow(i, 0.8) * 0.45;
      c.t0 = t0;
      citizens.push(c);
      handLamps.push({ x: c.lx, y: c.ly, s: 16 * u, t0, ph: R() * 50, a: 1, first: i === 0 });
    });
    prerenderCitizens();

    /* ---------- big foreground diyas ---------- */
    bigDiyas = [];
    const nBig = Math.max(5, Math.floor(W / (64 * u)));
    const spBig = W / nBig;
    for (let i = 0; i < nBig; i++) {
      const x = spBig * (i + 0.5) + (R() - 0.5) * spBig * 0.25;
      const d = Math.abs(x - cx) / (W / 2);
      bigDiyas.push({
        x, y: nearTop + Math.min(16 * u, (H - nearTop) * 0.35), s: (40 + R() * 10) * u,
        t0: T.cascadeStart + T.cascadeSpan * (0.7 + 0.28 * d) + R() * 0.3,
        ph: R() * 60, dots: R() < 0.5,
      });
    }
    bigDiyas.sort((a, b) => a.t0 - b.t0);

    /* ---------- floating diyas on the Sarayu ---------- */
    floaters = [];
    const nF = Math.floor(W / (16 * u));
    for (let i = 0; i < nF; i++) {
      const depth = R();
      floaters.push({
        x0: R() * W, depth,
        y: riverTop + 6 * u + depth * (riverBot - riverTop - 14 * u),
        v: (4 + R() * 6) * u * (0.6 + depth),
        s: (9 + depth * 12) * u,
        t0: T.floatStart + R() * (T.cascadeStart + T.cascadeSpan - T.floatStart),
        ph: R() * 40,
      });
    }

    /* ---------- stars ---------- */
    stars = [];
    const nS = Math.floor((W * baseY) / 5200);
    for (let i = 0; i < nS; i++) {
      stars.push({ x: R() * W, y: R() * (baseY - 60 * u), r: 0.3 + R() * R() * 1.3, ph: R() * 10, sp: 0.5 + R() * 2 });
    }
  }

  function drawTree(g, tr, lit) {
    const x = tr.x, y = baseY, h = tr.h;
    g.save();
    g.fillStyle = lit ? 'rgb(24,14,12)' : 'rgb(4,5,8)';
    g.strokeStyle = g.fillStyle;
    if (tr.kind === 'palm') {
      const lean = Math.sin(tr.seed) * 10 * u;
      g.lineWidth = 3 * u; g.lineCap = 'round';
      g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + lean * 0.2, y - h * 0.5, x + lean, y - h); g.stroke();
      const tx = x + lean, ty = y - h;
      g.lineWidth = 2 * u;
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * Math.PI * 2 + tr.seed;
        const len = (24 + (k % 3) * 6) * u;
        const ex = tx + Math.cos(a) * len, ey = ty + Math.abs(Math.sin(a)) * len * 0.35 + len * 0.35 * (Math.cos(a) * 0 + 1) - len * 0.3;
        g.beginPath(); g.moveTo(tx, ty); g.quadraticCurveTo(tx + Math.cos(a) * len * 0.6, ty - 10 * u, ex, ey); g.stroke();
      }
    } else {
      g.fillRect(x - 2 * u, y - h * 0.45, 4 * u, h * 0.45);
      const r = h * 0.28;
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * Math.PI * 2 + tr.seed;
        g.beginPath(); g.arc(x + Math.cos(a) * r * 0.55, y - h * 0.66 + Math.sin(a) * r * 0.4, r * 0.62, 0, Math.PI * 2); g.fill();
      }
      g.beginPath(); g.arc(x, y - h * 0.72, r * 0.75, 0, Math.PI * 2); g.fill();
    }
    g.restore();
  }

  function drawTorans(g) {
    const { xl, xr, tw, ow, archTop, ch } = gate;
    // mango-leaf toran across the top of the arch
    const ty = archTop - 12 * u, tx0 = cx - ow / 2 - 16 * u, tx1 = cx + ow / 2 + 16 * u;
    g.strokeStyle = 'rgba(150,90,40,0.95)'; g.lineWidth = Math.max(1, 1 * u);
    g.beginPath(); g.moveTo(tx0, ty); g.lineTo(tx1, ty); g.stroke();
    for (let x = tx0 + 2 * u, i = 0; x < tx1; x += 5 * u, i++) {
      const lh = (i % 2 ? 9 : 12) * u;
      g.fillStyle = i % 2 ? 'rgb(64,128,46)' : 'rgb(44,104,38)';
      g.beginPath(); g.moveTo(x - 2 * u, ty); g.quadraticCurveTo(x - 2.4 * u, ty + lh * 0.6, x, ty + lh); g.quadraticCurveTo(x + 2.4 * u, ty + lh * 0.6, x + 2 * u, ty); g.closePath(); g.fill();
    }
    // marigold swags between the towers
    const swag = (x0, x1, y, sag) => {
      const n = Math.floor((x1 - x0) / (2.6 * u));
      for (let i = 0; i <= n; i++) {
        const f = i / n, x = lerp(x0, x1, f), yy = y + Math.sin(f * Math.PI) * sag;
        g.fillStyle = i % 3 === 0 ? 'rgb(255,196,40)' : 'rgb(255,128,20)';
        g.beginPath(); g.arc(x, yy, 1.8 * u, 0, Math.PI * 2); g.fill();
      }
    };
    const sy = baseY - ch + 6 * u;
    const segW = (xr - tw - (xl + tw)) / 3;
    for (let k = 0; k < 3; k++) swag(xl + tw + k * segW, xl + tw + (k + 1) * segW, sy, 10 * u);
    // vertical garlands on tower edges
    for (const gx of [xl + tw - 3 * u, xr - tw + 3 * u, xl + 3 * u, xr - 3 * u]) {
      for (let y = baseY - gate.th + 8 * u; y < baseY - 10 * u; y += 2.8 * u) {
        g.fillStyle = Math.floor(y / (2.8 * u)) % 4 === 0 ? 'rgb(255,200,50)' : 'rgb(255,120,20)';
        g.beginPath(); g.arc(gx, y, 1.6 * u, 0, Math.PI * 2); g.fill();
      }
    }
  }

  function drawRangoli(g, x, y, rx, ry) {
    g.save();
    g.translate(x, y); g.scale(1, ry / rx);
    const rings = [
      { r: rx, n: 16, c: 'rgb(214,40,90)', pr: rx * 0.22 },
      { r: rx * 0.72, n: 12, c: 'rgb(255,170,30)', pr: rx * 0.2 },
      { r: rx * 0.46, n: 8, c: 'rgb(40,160,150)', pr: rx * 0.18 },
    ];
    for (const ring of rings) {
      g.fillStyle = ring.c;
      for (let i = 0; i < ring.n; i++) {
        const a = (i / ring.n) * Math.PI * 2;
        g.save(); g.rotate(a); g.translate(ring.r - ring.pr, 0);
        g.beginPath(); g.ellipse(0, 0, ring.pr, ring.pr * 0.42, 0, 0, Math.PI * 2); g.fill();
        g.restore();
      }
    }
    g.fillStyle = 'rgb(255,236,190)';
    g.beginPath(); g.arc(0, 0, rx * 0.2, 0, Math.PI * 2); g.fill();
    g.strokeStyle = 'rgba(255,240,210,0.8)'; g.lineWidth = rx * 0.025;
    g.beginPath(); g.arc(0, 0, rx * 1.04, 0, Math.PI * 2); g.stroke();
    g.restore();
  }

  /* =====================================================================
     Figures — painted, articulated people (profile view, facing +x)
     All coordinates are in units of body height h, relative to the hip joint.
     ===================================================================== */
  const TAU = Math.PI * 2;
  const col = (c, k = 1, a = 1) => `rgba(${clamp(c[0] * k, 0, 255) | 0},${clamp(c[1] * k, 0, 255) | 0},${clamp(c[2] * k, 0, 255) | 0},${a})`;
  const GOLD = [236, 184, 72], GOLD_D = [150, 100, 30], HAIR = [22, 16, 16];

  const LOOKS = {
    rama: {
      skin: [92, 104, 136], dhoti: [236, 176, 44], dhotiBorder: [178, 34, 34], sash: [190, 40, 46],
      uttariya: [226, 112, 30], uttBorder: [240, 200, 90], crown: true, garland: true, thread: true, quiver: true, bow: 'hand',
    },
    lak: {
      skin: [204, 150, 108], dhoti: [214, 104, 34], dhotiBorder: [236, 186, 70], sash: [40, 110, 70],
      uttariya: [236, 190, 60], uttBorder: [190, 50, 40], crown: true, thread: true, quiver: true, bow: 'back',
    },
    sita: { skin: [218, 164, 126], sari: [176, 26, 44], border: [234, 178, 64], blouse: [140, 20, 36], tiara: true },
  };

  const CIT_SKIN = [[150, 98, 66], [176, 120, 84], [126, 84, 58], [196, 142, 104]];
  const CIT_CLOTH = [[236, 228, 208], [222, 150, 40], [40, 120, 90], [196, 40, 90], [70, 90, 170], [232, 196, 70], [150, 40, 50], [240, 120, 60]];

  function capsule(g, x1, y1, r1, x2, y2, r2) {
    const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy);
    g.beginPath();
    if (d < 1e-4 || Math.abs(r1 - r2) >= d) { g.arc(x1, y1, Math.max(r1, r2), 0, TAU); g.fill(); return; }
    const a = Math.atan2(dy, dx), off = Math.acos((r1 - r2) / d);
    g.arc(x1, y1, r1, a + off, a - off + TAU);
    g.arc(x2, y2, r2, a - off, a + off);
    g.closePath(); g.fill();
  }
  function chain(g, pts) { for (let i = 0; i < pts.length - 1; i++) capsule(g, pts[i][0], pts[i][1], pts[i][2], pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]); }
  function smoothClosed(g, P) {
    const n = P.length, m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    g.beginPath();
    const s = m(P[n - 1], P[0]); g.moveTo(s[0], s[1]);
    for (let i = 0; i < n; i++) { const q = m(P[i], P[(i + 1) % n]); g.quadraticCurveTo(P[i][0], P[i][1], q[0], q[1]); }
    g.closePath();
  }
  function smoothOpen(g, P) {
    g.beginPath(); g.moveTo(P[0][0], P[0][1]);
    for (let i = 1; i < P.length - 1; i++) { const q = [(P[i][0] + P[i + 1][0]) / 2, (P[i][1] + P[i + 1][1]) / 2]; g.quadraticCurveTo(P[i][0], P[i][1], q[0], q[1]); }
    const l = P[P.length - 1]; g.lineTo(l[0], l[1]);
  }
  const S = (h, P) => P.map(([x, y]) => [x * h, y * h]);

  // ---------- kinematics ----------
  function legPose(h, ph, walk) {
    const w = typeof walk === 'number' ? walk : walk ? 1 : 0;
    const sw = Math.max(0, Math.sin(ph + Math.PI * 0.75));
    const a = 0.3 * w * Math.sin(ph);
    const kf = 0.05 + w * (0.01 + 0.75 * sw * sw);
    const knee = [Math.sin(a) * 0.245 * h, Math.cos(a) * 0.245 * h];
    const b = a - kf;
    const ankle = [knee[0] + Math.sin(b) * 0.235 * h, knee[1] + Math.cos(b) * 0.235 * h];
    const fa = clamp(0.7 * Math.max(0, -a) + 0.45 * Math.max(0, kf - 0.3), 0, 0.85);
    return { knee, ankle, b, fa };
  }
  function armPose(h, ua, ef) {
    const sh = [0.004 * h, -0.285 * h];
    const el = [sh[0] + Math.sin(ua) * 0.165 * h, sh[1] + Math.cos(ua) * 0.165 * h];
    const fa = ua + ef;
    const wr = [el[0] + Math.sin(fa) * 0.145 * h, el[1] + Math.cos(fa) * 0.145 * h];
    const hd = [wr[0] + Math.sin(fa + 0.15) * 0.055 * h, wr[1] + Math.cos(fa + 0.15) * 0.055 * h];
    return { sh, el, wr, hd, fa };
  }
  const standHipY = (h) => -(0.245 * h + 0.235 * h * Math.cos(0.05) + 0.03 * h);
  // lamp position for a citizen holding a thali (world, before mirroring)
  function lampHold(h) {
    const ap = armPose(h, 0.42, 1.08);
    return [ap.hd[0] + 0.01 * h, standHipY(h) + ap.hd[1] - 0.03 * h];
  }

  // ---------- body parts ----------
  function drawLeg(g, h, L, skin, k) {
    g.fillStyle = col(skin, k);
    const calf = [L.knee[0] + (L.ankle[0] - L.knee[0]) * 0.33 - Math.cos(L.b) * 0.012 * h, L.knee[1] + (L.ankle[1] - L.knee[1]) * 0.33 + Math.sin(L.b) * 0.012 * h];
    chain(g, [[0, 0, 0.052 * h], [L.knee[0], L.knee[1], 0.03 * h]]);
    chain(g, [[L.knee[0], L.knee[1], 0.029 * h], [calf[0], calf[1], 0.033 * h], [L.ankle[0], L.ankle[1], 0.018 * h]]);
    // foot
    const ca = Math.cos(L.fa), sa = Math.sin(L.fa);
    const R = (x, y) => [L.ankle[0] + (x * ca - y * sa) * h, L.ankle[1] + (x * sa + y * ca) * h];
    const F = [R(-0.018, -0.012), R(-0.03, 0.02), R(-0.022, 0.03), R(0.06, 0.03), R(0.088, 0.026), R(0.082, 0.016), R(0.03, 0.002), R(0.016, -0.014)];
    smoothClosed(g, F); g.fill();
    // anklet
    g.strokeStyle = col(GOLD, k); g.lineWidth = 0.006 * h;
    g.beginPath(); const a1 = R(-0.02, -0.004), a2 = R(0.02, -0.004); g.moveTo(a1[0], a1[1]); g.lineTo(a2[0], a2[1]); g.stroke();
  }

  function drawArm(g, h, A, skin, k, o = {}) {
    const mid1 = [(A.sh[0] + A.el[0]) / 2, (A.sh[1] + A.el[1]) / 2];
    const mid2 = [A.el[0] + (A.wr[0] - A.el[0]) * 0.35, A.el[1] + (A.wr[1] - A.el[1]) * 0.35];
    g.fillStyle = col(o.sleeve || skin, k);
    if (o.longSleeve) {
      chain(g, [[A.sh[0], A.sh[1], 0.036 * h], [mid1[0], mid1[1], 0.031 * h], [A.el[0], A.el[1], 0.025 * h], [mid2[0], mid2[1], 0.024 * h], [A.wr[0], A.wr[1], 0.019 * h]]);
    } else {
      chain(g, [[A.sh[0], A.sh[1], 0.035 * h], [mid1[0], mid1[1], 0.03 * h]]);
      g.fillStyle = col(skin, k);
      chain(g, [[mid1[0], mid1[1], 0.029 * h], [A.el[0], A.el[1], 0.021 * h], [mid2[0], mid2[1], 0.022 * h], [A.wr[0], A.wr[1], 0.015 * h]]);
    }
    g.fillStyle = col(skin, k);
    if (o.palm) {
      // open palm raised in blessing
      const ang = Math.atan2(A.hd[1] - A.wr[1], A.hd[0] - A.wr[0]);
      g.save(); g.translate(A.wr[0], A.wr[1]); g.rotate(ang);
      g.beginPath(); g.ellipse(0.034 * h, 0, 0.036 * h, 0.017 * h, 0, 0, TAU); g.fill();
      g.beginPath(); g.ellipse(0.012 * h, -0.016 * h, 0.014 * h, 0.006 * h, -0.6, 0, TAU); g.fill(); // thumb
      g.restore();
    } else {
      capsule(g, A.wr[0], A.wr[1], 0.016 * h, A.hd[0], A.hd[1], 0.014 * h);
    }
    // ornaments: armlet + bangle
    const perp = (p, q, r) => { const dx = q[0] - p[0], dy = q[1] - p[1], d = Math.hypot(dx, dy) || 1; return [-dy / d * r, dx / d * r]; };
    g.strokeStyle = col(o.bangle || GOLD, k); g.lineCap = 'round';
    if (!o.longSleeve && !o.noArmlet) {
      const p = [A.sh[0] + (A.el[0] - A.sh[0]) * 0.42, A.sh[1] + (A.el[1] - A.sh[1]) * 0.42], v = perp(A.sh, A.el, 0.031 * h);
      g.lineWidth = 0.011 * h; g.beginPath(); g.moveTo(p[0] - v[0], p[1] - v[1]); g.lineTo(p[0] + v[0], p[1] + v[1]); g.stroke();
    }
    const w = [A.el[0] + (A.wr[0] - A.el[0]) * 0.88, A.el[1] + (A.wr[1] - A.el[1]) * 0.88], v2 = perp(A.el, A.wr, 0.019 * h);
    g.lineWidth = 0.008 * h; g.beginPath(); g.moveTo(w[0] - v2[0], w[1] - v2[1]); g.lineTo(w[0] + v2[0], w[1] + v2[1]); g.stroke();
  }

  function headCenter(h) { return [0.016 * h, -0.41 * h]; }

  function drawHead(g, h, o) {
    const [cx0, cy0] = headCenter(h);
    const p = (x, y) => [cx0 + x * h, cy0 + y * h];
    // neck
    g.fillStyle = col(o.skin);
    capsule(g, 0.004 * h, -0.305 * h, 0.03 * h, cx0 - 0.006 * h, cy0 + 0.035 * h, 0.026 * h);
    // skull + face profile
    const back = p(-0.057, 0.0), top = p(-0.002, -0.07);
    g.beginPath();
    g.moveTo(back[0], back[1]);
    let q = p(-0.06, -0.05); g.quadraticCurveTo(q[0], q[1], top[0], top[1]);
    q = p(0.046, -0.072); let e = p(0.05, -0.034); g.quadraticCurveTo(q[0], q[1], e[0], e[1]);
    for (const [x, y] of [[0.057, -0.017], [0.054, -0.008], [0.069, 0.012], [0.057, 0.019], [0.059, 0.028], [0.053, 0.033], [0.057, 0.039], [0.05, 0.053]]) { const pt = p(x, y); g.lineTo(pt[0], pt[1]); }
    q = p(0.04, 0.066); e = p(0.012, 0.06); g.quadraticCurveTo(q[0], q[1], e[0], e[1]);
    e = p(-0.012, 0.046); g.lineTo(e[0], e[1]);
    e = p(-0.036, 0.034); g.lineTo(e[0], e[1]);
    q = p(-0.06, 0.03); g.quadraticCurveTo(q[0], q[1], back[0], back[1]);
    g.closePath(); g.fill();
    // cheek shading
    g.fillStyle = col(o.skin, 0.86, 0.6);
    g.beginPath(); const jw = p(0.0, 0.03); g.ellipse(jw[0], jw[1], 0.03 * h, 0.022 * h, 0, 0, TAU); g.fill();
    // ear
    g.fillStyle = col(o.skin, 0.82);
    const er = p(-0.01, 0.004); g.beginPath(); g.ellipse(er[0], er[1], 0.009 * h, 0.015 * h, 0.15, 0, TAU); g.fill();
    // eye + brow
    g.fillStyle = 'rgba(245,236,222,0.9)';
    const ey = p(0.038, -0.006); g.beginPath(); g.ellipse(ey[0], ey[1], 0.01 * h, 0.0045 * h, 0.05, 0, TAU); g.fill();
    g.fillStyle = 'rgba(24,14,10,1)';
    g.beginPath(); g.ellipse(ey[0] + 0.004 * h, ey[1], 0.0045 * h, 0.0042 * h, 0, 0, TAU); g.fill();
    g.strokeStyle = 'rgba(20,12,10,0.95)'; g.lineWidth = 0.0035 * h; g.lineCap = 'round';
    g.beginPath(); const b1 = p(0.026, -0.016), b2 = p(0.052, -0.02); g.moveTo(b1[0], b1[1]); g.quadraticCurveTo(cx0 + 0.04 * h, cy0 - 0.026 * h, b2[0], b2[1]); g.stroke();
    g.lineWidth = 0.0025 * h; g.beginPath(); const l1 = p(0.042, 0.034), l2 = p(0.056, 0.033); g.moveTo(l1[0], l1[1]); g.lineTo(l2[0], l2[1]); g.stroke();
    // lips tint
    g.fillStyle = col(o.lip || [150, 60, 60], 1, 0.7);
    g.beginPath(); const lp = p(0.054, 0.032); g.ellipse(lp[0], lp[1], 0.005 * h, 0.006 * h, 0, 0, TAU); g.fill();
    // earring
    g.fillStyle = col(GOLD);
    const ek = p(-0.008, 0.028); g.beginPath(); g.arc(ek[0], ek[1], 0.009 * h, 0, TAU); g.fill();
    g.fillStyle = col([200, 40, 40]); g.beginPath(); g.arc(ek[0], ek[1], 0.004 * h, 0, TAU); g.fill();
    if (o.bindi) { g.fillStyle = 'rgb(200,20,30)'; const bd = p(0.052, -0.03); g.beginPath(); g.arc(bd[0], bd[1], 0.005 * h, 0, TAU); g.fill(); }
    if (o.noseRing) { g.strokeStyle = col(GOLD); g.lineWidth = 0.003 * h; const nr = p(0.06, 0.02); g.beginPath(); g.arc(nr[0], nr[1], 0.007 * h, -1, 2.4); g.stroke(); }
    if (o.tilak) { g.fillStyle = 'rgb(214,40,30)'; const tk = p(0.051, -0.045); g.fillRect(tk[0] - 0.003 * h, tk[1] - 0.012 * h, 0.005 * h, 0.022 * h); }
    if (o.mustache) { g.fillStyle = col(HAIR); const m = p(0.05, 0.022); g.beginPath(); g.ellipse(m[0], m[1], 0.012 * h, 0.004 * h, 0.2, 0, TAU); g.fill(); }
  }

  function drawLongHair(g, h, wv) {
    const [cx0, cy0] = headCenter(h);
    const p = (x, y) => [cx0 + x * h, cy0 + y * h];
    g.fillStyle = col(HAIR);
    smoothClosed(g, [p(0.01, -0.07), p(-0.05, -0.06), p(-0.072, -0.01), p(-0.08 - wv * 0.3, 0.07), p(-0.088 - wv * 0.5, 0.13), p(-0.06, 0.135), p(-0.045, 0.07), p(-0.034, 0.02), p(-0.01, -0.03), p(0.03, -0.06)]);
    g.fill();
  }

  function drawCrown(g, h) {
    const [cx0, cy0] = headCenter(h);
    const p = (x, y) => [cx0 + x * h, cy0 + y * h];
    const P = [p(0.055, -0.034), p(0.054, -0.08), p(0.04, -0.118), p(0.025, -0.154), p(0.009, -0.19), p(-0.002, -0.218), p(-0.014, -0.19), p(-0.03, -0.154), p(-0.046, -0.118), p(-0.06, -0.08), p(-0.062, -0.026)];
    const gr = g.createLinearGradient(0, cy0 - 0.22 * h, 0, cy0 - 0.03 * h);
    gr.addColorStop(0, 'rgb(255,230,150)'); gr.addColorStop(0.5, col(GOLD)); gr.addColorStop(1, col(GOLD_D));
    g.fillStyle = gr;
    g.beginPath(); g.moveTo(P[0][0], P[0][1]); for (let i = 1; i < P.length; i++) g.lineTo(P[i][0], P[i][1]); g.closePath(); g.fill();
    // band + tiers
    g.strokeStyle = col(GOLD_D, 0.85); g.lineWidth = 0.004 * h;
    for (const ty of [-0.08, -0.118, -0.154]) { const a = p(-0.06, ty), b = p(0.054, ty); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
    g.fillStyle = col(GOLD, 1.08);
    const b0 = p(-0.062, -0.05), b1 = p(0.056, -0.05);
    g.fillRect(b0[0], b0[1], b1[0] - b0[0], 0.014 * h);
    // jewels
    const gem = (x, y, r, c) => { const q = p(x, y); g.fillStyle = c; g.beginPath(); g.arc(q[0], q[1], r * h, 0, TAU); g.fill(); };
    gem(0.022, -0.043, 0.008, 'rgb(200,30,50)'); gem(-0.022, -0.043, 0.006, 'rgb(30,140,90)');
    gem(0.012, -0.1, 0.007, 'rgb(200,30,50)'); gem(0.004, -0.136, 0.005, 'rgb(30,140,90)'); gem(-0.002, -0.172, 0.005, 'rgb(200,30,50)');
    // side ornament (karna-phool) fanning behind the ear
    g.fillStyle = col(GOLD, 0.95);
    const s0 = p(-0.05, -0.03); g.beginPath(); g.moveTo(s0[0], s0[1]);
    const s1 = p(-0.085, -0.06), s2 = p(-0.09, -0.01); g.quadraticCurveTo(s1[0], s1[1], s2[0], s2[1]); g.closePath(); g.fill();
  }

  function drawTurban(g, h, c) {
    const [cx0, cy0] = headCenter(h);
    const p = (x, y) => [cx0 + x * h, cy0 + y * h];
    g.fillStyle = col(HAIR);
    smoothClosed(g, [p(-0.04, -0.02), p(-0.06, 0.02), p(-0.05, 0.05), p(-0.03, 0.03)]); g.fill();
    g.fillStyle = col(c);
    smoothClosed(g, [p(0.058, -0.03), p(0.064, -0.072), p(0.025, -0.104), p(-0.04, -0.1), p(-0.075, -0.064), p(-0.07, -0.012), p(-0.035, -0.02), p(0.02, -0.035)]); g.fill();
    g.strokeStyle = col(c, 0.75); g.lineWidth = 0.004 * h;
    for (const k of [0, 1, 2]) { const a = p(0.055, -0.045 - k * 0.016), b = p(-0.068, -0.03 - k * 0.02); g.beginPath(); g.moveTo(a[0], a[1]); g.quadraticCurveTo(cx0, cy0 - (0.075 + k * 0.012) * h, b[0], b[1]); g.stroke(); }
  }

  function drawShortHair(g, h) {
    const [cx0, cy0] = headCenter(h);
    const p = (x, y) => [cx0 + x * h, cy0 + y * h];
    g.fillStyle = col(HAIR);
    smoothClosed(g, [p(0.045, -0.05), p(0.02, -0.078), p(-0.04, -0.07), p(-0.064, -0.02), p(-0.055, 0.03), p(-0.035, 0.02), p(-0.02, -0.03), p(0.02, -0.05)]); g.fill();
  }

  // ---------- full figures ----------
  // o: { look, walk, ph, time, seed, ua, ef (near arm override), farUa, farEf, palm, lamp, cloth, turban, child }
  function drawMan(g, h, o) {
    const lk = o.look || {};
    const walk = typeof o.walk === 'number' ? o.walk : o.walk ? 1 : 0, ph = o.ph || 0, tm = o.time || 0;
    const skin = lk.skin || [170, 116, 80];
    const near = legPose(h, ph, walk), far = legPose(h, ph + Math.PI, walk);
    const hipY = -(Math.max(near.ankle[1], far.ankle[1]) + 0.03 * h);
    const wv = Math.sin(tm * 2.1 + (o.seed || 0)) * 0.02 + 0.03 * walk;
    g.save();
    g.translate(0, hipY);
    g.lineCap = 'round'; g.lineJoin = 'round';

    // behind the body: stole tail, quiver, slung bow, hair
    if (lk.uttariya) {
      g.fillStyle = col(lk.uttariya, 0.78);
      smoothClosed(g, S(h, [[-0.05, -0.29], [-0.11, -0.24 + wv], [-0.17 - wv, -0.12 + wv], [-0.22 - wv * 1.5, 0.02 + wv], [-0.18 - wv, 0.04], [-0.12, -0.12], [-0.06, -0.22]]));
      g.fill();
    }
    if (lk.bow === 'back') {
      g.strokeStyle = col([92, 52, 24]); g.lineWidth = 0.016 * h;
      smoothOpen(g, S(h, [[-0.14, -0.5], [-0.17, -0.42], [-0.13, -0.1], [-0.02, 0.12], [0.01, 0.14]])); g.stroke();
      g.strokeStyle = col(GOLD); g.lineWidth = 0.005 * h; g.stroke();
    }
    if (lk.quiver) {
      g.save(); g.translate(-0.075 * h, -0.27 * h); g.rotate(-0.42);
      g.fillStyle = col([110, 62, 30]);
      g.beginPath(); g.moveTo(-0.026 * h, -0.05 * h); g.lineTo(0.026 * h, -0.05 * h); g.lineTo(0.02 * h, 0.25 * h); g.lineTo(-0.02 * h, 0.25 * h); g.closePath(); g.fill();
      g.fillStyle = col(GOLD);
      for (const yy of [-0.04, 0.05, 0.2]) g.fillRect(-0.026 * h, yy * h, 0.052 * h, 0.012 * h);
      // fletching
      for (const [dx, c] of [[-0.014, [240, 236, 226]], [0, [196, 40, 40]], [0.014, [240, 236, 226]]]) {
        g.strokeStyle = col([120, 80, 40]); g.lineWidth = 0.004 * h;
        g.beginPath(); g.moveTo(dx * h, -0.05 * h); g.lineTo(dx * h, -0.1 * h); g.stroke();
        g.fillStyle = col(c);
        g.beginPath(); g.moveTo(dx * h, -0.08 * h); g.lineTo(dx * h - 0.008 * h, -0.13 * h); g.lineTo(dx * h + 0.008 * h, -0.13 * h); g.closePath(); g.fill();
      }
      g.restore();
    }
    if (lk.crown) drawLongHair(g, h, wv);

    // far arm
    const farA = armPose(h, o.farUa !== undefined ? o.farUa : 0.3 * walk * Math.sin(ph) + 0.08 * (1 - walk), o.farEf !== undefined ? o.farEf : 0.15 + walk * (0.1 + 0.2 * Math.max(0, Math.sin(ph))));
    drawArm(g, h, farA, skin, 0.68, { sleeve: o.cloth ? o.cloth.top : null, longSleeve: !!o.cloth });

    // Kodanda held in the far hand
    if (lk.bow === 'hand') {
      const hx = farA.hd[0], hy = farA.hd[1];
      const B = [[hx + 0.012 * h, hy - 0.45 * h], [hx - 0.006 * h, hy - 0.43 * h], [hx + 0.055 * h, hy - 0.25 * h], [hx + 0.004 * h, hy], [hx + 0.055 * h, hy + 0.23 * h], [hx - 0.006 * h, hy + 0.41 * h], [hx + 0.012 * h, hy + 0.43 * h]];
      g.strokeStyle = 'rgba(240,226,200,0.9)'; g.lineWidth = Math.max(0.6, 0.003 * h);
      g.beginPath(); g.moveTo(B[1][0], B[1][1]); g.lineTo(B[5][0], B[5][1]); g.stroke();
      g.strokeStyle = col([96, 50, 22]); g.lineWidth = 0.017 * h; smoothOpen(g, B); g.stroke();
      g.strokeStyle = col(GOLD); g.lineWidth = 0.006 * h; smoothOpen(g, B); g.stroke();
      g.fillStyle = col(skin, 0.68); capsule(g, farA.wr[0], farA.wr[1], 0.016 * h, hx, hy, 0.015 * h);
    }

    // legs
    drawLeg(g, h, far, skin, 0.7);
    drawLeg(g, h, near, skin, 1);

    // dhoti
    const kF = near.knee[0] >= far.knee[0] ? near.knee : far.knee;
    const kB = kF === near.knee ? far.knee : near.knee;
    const dhC = o.cloth ? o.cloth.bottom : lk.dhoti;
    const long = o.cloth ? 0.06 : 0.0;
    const hemF = [kF[0] / h + 0.05, kF[1] / h + 0.075 + long], hemF2 = [kF[0] / h - 0.005, kF[1] / h + 0.095 + long];
    const midH = [(kF[0] + kB[0]) / 2 / h, (kF[1] + kB[1]) / 2 / h + 0.05 + long];
    const hemB2 = [kB[0] / h + 0.02, kB[1] / h + 0.095 + long], hemB = [kB[0] / h - 0.05, kB[1] / h + 0.07 + long];
    g.fillStyle = col(dhC);
    smoothClosed(g, S(h, [[0.07, -0.07], [0.09, 0.03], hemF, hemF2, midH, hemB2, hemB, [-0.1, 0.03], [-0.075, -0.07]]));
    g.fill();
    // folds
    g.strokeStyle = col(dhC, 0.78, 0.8); g.lineWidth = 0.005 * h;
    for (const f of [0.25, 0.5, 0.75]) {
      g.beginPath(); g.moveTo((0.06 - f * 0.12) * h, -0.04 * h);
      g.quadraticCurveTo(lerp(0.07, -0.08, f) * h, 0.1 * h, lerp(hemF[0], hemB[0], f) * h, lerp(hemF[1], hemB[1], f) * h - 0.01 * h); g.stroke();
    }
    // front pleated fall
    g.fillStyle = col(dhC, 0.9);
    const fall = [hemF[0] * 0.55 + midH[0] * 0.45, Math.max(hemF[1], midH[1]) + 0.01];
    smoothClosed(g, S(h, [[0.05, -0.04], [0.078, -0.04], [fall[0] + 0.03, fall[1]], [fall[0] - 0.015, fall[1] + 0.01]])); g.fill();
    g.strokeStyle = col(dhC, 0.7, 0.9); g.lineWidth = 0.004 * h;
    for (const k of [0, 1, 2]) { g.beginPath(); g.moveTo((0.056 + k * 0.008) * h, -0.03 * h); g.lineTo((fall[0] - 0.008 + k * 0.014) * h, (fall[1] + 0.002) * h); g.stroke(); }
    // border at the hem
    g.strokeStyle = col(o.cloth ? dhC : lk.dhotiBorder, o.cloth ? 0.7 : 1); g.lineWidth = 0.014 * h;
    smoothOpen(g, S(h, [hemF, hemF2, midH, hemB2, hemB])); g.stroke();

    // torso
    const topC = o.cloth ? o.cloth.top : skin;
    g.fillStyle = col(topC);
    g.beginPath();
    g.moveTo(0.03 * h, -0.32 * h);
    g.quadraticCurveTo(0.072 * h, -0.3 * h, 0.088 * h, -0.245 * h);
    g.quadraticCurveTo(0.1 * h, -0.2 * h, 0.076 * h, -0.168 * h);
    g.quadraticCurveTo(0.068 * h, -0.11 * h, 0.064 * h, -0.06 * h);
    g.lineTo(0.074 * h, o.cloth ? 0.08 * h : 0); g.lineTo(-0.074 * h, o.cloth ? 0.08 * h : 0);
    g.quadraticCurveTo(-0.088 * h, -0.04 * h, -0.062 * h, -0.1 * h);
    g.quadraticCurveTo(-0.05 * h, -0.17 * h, -0.07 * h, -0.25 * h);
    g.quadraticCurveTo(-0.072 * h, -0.305 * h, -0.03 * h, -0.325 * h);
    g.closePath(); g.fill();
    if (!o.cloth) {
      // muscle definition
      g.strokeStyle = col(skin, 0.82, 0.7); g.lineWidth = 0.004 * h;
      g.beginPath(); g.moveTo(0.05 * h, -0.2 * h); g.quadraticCurveTo(0.075 * h, -0.17 * h, 0.08 * h, -0.175 * h); g.stroke();
      g.beginPath(); g.moveTo(0.055 * h, -0.13 * h); g.lineTo(0.062 * h, -0.09 * h); g.stroke();
    }
    if (lk.thread) {
      g.strokeStyle = 'rgba(246,238,220,0.95)'; g.lineWidth = 0.004 * h;
      g.beginPath(); g.moveTo(-0.035 * h, -0.31 * h); g.quadraticCurveTo(0.03 * h, -0.2 * h, 0.068 * h, -0.08 * h); g.stroke();
    }
    if (lk.quiver) { // strap
      g.strokeStyle = col([110, 62, 30]); g.lineWidth = 0.009 * h;
      g.beginPath(); g.moveTo(0.012 * h, -0.32 * h); g.lineTo(0.07 * h, -0.14 * h); g.stroke();
    }
    // necklaces
    g.strokeStyle = col(GOLD); g.lineWidth = 0.007 * h;
    g.beginPath(); g.moveTo(0.012 * h, -0.318 * h); g.quadraticCurveTo(0.05 * h, -0.28 * h, 0.078 * h, -0.27 * h); g.stroke();
    if (!o.cloth) { g.lineWidth = 0.005 * h; g.beginPath(); g.moveTo(0.006 * h, -0.316 * h); g.quadraticCurveTo(0.06 * h, -0.24 * h, 0.088 * h, -0.215 * h); g.stroke(); }
    // uttariya across the chest
    if (lk.uttariya) {
      g.fillStyle = col(lk.uttariya);
      smoothClosed(g, S(h, [[-0.05, -0.33], [0.0, -0.33], [0.06, -0.2], [0.082, -0.11], [0.06, -0.08], [0.02, -0.2], [-0.055, -0.27]])); g.fill();
      g.strokeStyle = col(lk.uttBorder); g.lineWidth = 0.006 * h;
      smoothOpen(g, S(h, [[0.0, -0.33], [0.06, -0.2], [0.082, -0.11]])); g.stroke();
    }
    // sash at the waist, with a knotted end hanging in front
    if (lk.sash) {
      g.fillStyle = col(lk.sash);
      g.beginPath(); g.moveTo(0.068 * h, -0.08 * h); g.lineTo(0.076 * h, -0.045 * h); g.lineTo(-0.08 * h, -0.045 * h); g.lineTo(-0.074 * h, -0.08 * h); g.closePath(); g.fill();
      smoothClosed(g, S(h, [[0.066, -0.06], [0.08, -0.06], [0.09 + wv * 0.4, 0.14], [0.072 + wv * 0.4, 0.15]])); g.fill();
      g.fillStyle = col(GOLD); g.fillRect(-0.08 * h, -0.066 * h, 0.156 * h, 0.006 * h);
    }
    // flower garland (vanamala)
    if (lk.garland) {
      const G = S(h, [[0.012, -0.318], [0.074, -0.24], [0.1, -0.1], [0.098, 0.06], [0.086, 0.13]]);
      const cols = ['rgb(250,246,236)', 'rgb(255,190,40)', 'rgb(214,40,60)', 'rgb(255,140,20)'];
      let idx = 0;
      for (let i = 0; i < G.length - 1; i++) {
        const [x1, y1] = G[i], [x2, y2] = G[i + 1], n = Math.ceil(Math.hypot(x2 - x1, y2 - y1) / (0.011 * h));
        for (let j = 0; j < n; j++) {
          const f = j / n; g.fillStyle = cols[idx++ % cols.length];
          g.beginPath(); g.arc(lerp(x1, x2, f), lerp(y1, y2, f), 0.0075 * h, 0, TAU); g.fill();
        }
      }
    }

    // head
    drawHead(g, h, { skin, tilak: lk.crown && o.tilak, mustache: o.mustache });
    if (lk.crown) drawCrown(g, h);
    else if (o.turban) drawTurban(g, h, o.turban);
    else drawShortHair(g, h);

    // near arm
    let ua = -0.3 * walk * Math.sin(ph) + 0.1 * (1 - walk), ef = 0.2 + walk * (0.05 + 0.2 * Math.max(0, -Math.sin(ph)));
    if (o.ua !== undefined) { const k = o.armBlend === undefined ? 1 : o.armBlend; ua = lerp(ua, o.ua, k); ef = lerp(ef, o.ef, k); }
    const A = armPose(h, ua, ef);
    drawArm(g, h, A, skin, 1, { palm: o.palm, sleeve: o.cloth ? o.cloth.top : null, longSleeve: !!o.cloth, noArmlet: !!o.cloth });
    if (o.lamp) drawThali(g, h, A);
    g.restore();
  }

  function drawThali(g, h, A) {
    const x = A.hd[0] + 0.01 * h, y = A.hd[1] - 0.004 * h;
    g.fillStyle = col(GOLD, 0.9);
    g.beginPath(); g.ellipse(x, y, 0.05 * h, 0.011 * h, 0, 0, TAU); g.fill();
    g.fillStyle = col([170, 80, 40]);
    g.beginPath(); g.ellipse(x, y - 0.012 * h, 0.017 * h, 0.01 * h, 0, 0, Math.PI); g.fill();
    g.fillStyle = col([255, 120, 20]);
    for (const dx of [-0.032, 0.03]) { g.beginPath(); g.arc(x + dx * h, y - 0.008 * h, 0.006 * h, 0, TAU); g.fill(); }
  }

  function drawWoman(g, h, o) {
    const lk = o.look || {};
    const walk = typeof o.walk === 'number' ? o.walk : o.walk ? 1 : 0, ph = o.ph || 0, tm = o.time || 0;
    const skin = lk.skin, sari = lk.sari, border = lk.border, blouse = lk.blouse;
    const near = legPose(h, ph, walk), far = legPose(h, ph + Math.PI, walk);
    const maxY = Math.max(near.ankle[1], far.ankle[1]);
    const hipY = -(maxY + 0.03 * h);
    const ground = (maxY + 0.03 * h) / h; // hip-relative, in h
    const wv = Math.sin(tm * 1.8 + (o.seed || 0)) * 0.02 + 0.03 * walk;
    g.save(); g.translate(0, hipY);
    g.lineCap = 'round'; g.lineJoin = 'round';
    const [hx, hy] = headCenter(h).map((v) => v / h);

    // pallu flowing down the back
    g.fillStyle = col(sari, 0.78);
    smoothClosed(g, S(h, [[hx - 0.06, hy + 0.06], [-0.1, -0.24], [-0.13 - wv, -0.06], [-0.17 - wv * 1.6, 0.16], [-0.12 - wv, 0.15], [-0.08, -0.04], [-0.05, -0.24]]));
    g.fill();
    g.strokeStyle = col(border, 0.85); g.lineWidth = 0.01 * h;
    smoothOpen(g, S(h, [[-0.1, -0.24], [-0.13 - wv, -0.06], [-0.17 - wv * 1.6, 0.16]])); g.stroke();

    // feet peeking from the hem
    drawLeg(g, h, far, skin, 0.7);
    drawLeg(g, h, near, skin, 1);

    // sari skirt
    const fx = Math.max(near.ankle[0], far.ankle[0]) / h + 0.06, bx = Math.min(near.ankle[0], far.ankle[0]) / h - 0.07;
    const hem = ground - 0.022;
    g.fillStyle = col(sari);
    smoothClosed(g, S(h, [[0.058, -0.075], [0.078, 0.06], [fx + 0.01, hem - 0.04], [fx, hem], [(fx + bx) / 2, hem + 0.004], [bx, hem], [bx - 0.012, hem - 0.05], [-0.095, 0.08], [-0.066, -0.075]]));
    g.fill();
    // pleats fanning from the waist
    for (let k = 0; k < 6; k++) {
      const f = k / 5;
      g.strokeStyle = k % 2 ? col(sari, 1.18, 0.6) : col(sari, 0.72, 0.8);
      g.lineWidth = 0.005 * h;
      g.beginPath(); g.moveTo((0.04 + f * 0.02) * h, -0.05 * h);
      g.quadraticCurveTo((0.06 + f * 0.02) * h, (hem * 0.5) * h, (fx - 0.09 + f * 0.09) * h, hem * h); g.stroke();
    }
    g.strokeStyle = col(sari, 0.75, 0.6);
    g.beginPath(); g.moveTo(-0.07 * h, 0.0); g.quadraticCurveTo(-0.08 * h, hem * 0.5 * h, (bx + 0.02) * h, hem * h); g.stroke();
    // zari border at the hem
    g.strokeStyle = col(border); g.lineWidth = 0.016 * h;
    g.beginPath(); g.moveTo((bx - 0.004) * h, (hem - 0.004) * h); g.quadraticCurveTo(((fx + bx) / 2) * h, (hem + 0.008) * h, (fx + 0.004) * h, (hem - 0.004) * h); g.stroke();

    // waist skin + blouse
    g.fillStyle = col(skin, 0.92);
    smoothClosed(g, S(h, [[0.05, -0.18], [0.062, -0.08], [-0.06, -0.08], [-0.058, -0.18]])); g.fill();
    g.fillStyle = col(blouse);
    g.beginPath();
    g.moveTo(0.026 * h, -0.318 * h);
    g.quadraticCurveTo(0.08 * h, -0.29 * h, 0.088 * h, -0.225 * h);
    g.quadraticCurveTo(0.088 * h, -0.18 * h, 0.06 * h, -0.17 * h);
    g.lineTo(-0.058 * h, -0.17 * h);
    g.quadraticCurveTo(-0.068 * h, -0.25 * h, -0.032 * h, -0.322 * h);
    g.closePath(); g.fill();
    // pallu across the chest, gathered at the waist
    g.fillStyle = col(sari);
    smoothClosed(g, S(h, [[0.064, -0.07], [0.082, -0.15], [0.094, -0.23], [0.06, -0.3], [-0.01, -0.33], [-0.05, -0.3], [-0.02, -0.22], [0.02, -0.12]])); g.fill();
    g.strokeStyle = col(border); g.lineWidth = 0.01 * h;
    smoothOpen(g, S(h, [[0.064, -0.07], [0.082, -0.15], [0.094, -0.23], [0.06, -0.3]])); g.stroke();
    // necklace
    g.strokeStyle = col(GOLD); g.lineWidth = 0.007 * h;
    g.beginPath(); g.moveTo(0.012 * h, -0.318 * h); g.quadraticCurveTo(0.045 * h, -0.29 * h, 0.07 * h, -0.285 * h); g.stroke();

    // head
    g.fillStyle = col(HAIR);
    smoothClosed(g, S(h, [[hx - 0.03, hy - 0.06], [hx - 0.08, hy - 0.02], [hx - 0.085, hy + 0.04], [hx - 0.05, hy + 0.05]])); g.fill();
    drawHead(g, h, { skin, bindi: true, noseRing: !!lk.tiara, lip: [170, 50, 60] });
    // hood of the pallu framing the face
    g.fillStyle = col(sari);
    smoothClosed(g, S(h, [[hx + 0.044, hy - 0.056], [hx + 0.005, hy - 0.086], [hx - 0.055, hy - 0.068], [hx - 0.082, hy - 0.01], [hx - 0.078, hy + 0.08], [-0.06, -0.28], [-0.03, -0.3], [hx - 0.034, hy + 0.04], [hx - 0.034, hy - 0.012], [hx + 0.005, hy - 0.058]]));
    g.fill();
    g.strokeStyle = col(border); g.lineWidth = 0.009 * h;
    smoothOpen(g, S(h, [[hx + 0.044, hy - 0.056], [hx + 0.005, hy - 0.06], [hx - 0.034, hy - 0.012], [hx - 0.034, hy + 0.04], [-0.03, -0.3]])); g.stroke();
    if (lk.tiara) {
      g.strokeStyle = col(GOLD); g.lineWidth = 0.006 * h;
      g.beginPath(); g.moveTo((hx + 0.046) * h, (hy - 0.05) * h); g.quadraticCurveTo((hx + 0.02) * h, (hy - 0.07) * h, (hx - 0.005) * h, (hy - 0.062) * h); g.stroke();
      g.fillStyle = col(GOLD); g.beginPath(); g.arc((hx + 0.05) * h, (hy - 0.043) * h, 0.006 * h, 0, TAU); g.fill();
    }

    // near arm: short sleeve, bangles; holds the pallu, or a lamp
    let ua = o.ua !== undefined ? o.ua : 0.22 + 0.05 * walk * Math.sin(ph);
    let ef = o.ef !== undefined ? o.ef : 1.75;
    const A = armPose(h, ua, ef);
    drawArm(g, h, A, skin, 1, { sleeve: blouse, bangle: [214, 40, 60] });
    g.strokeStyle = col(GOLD); g.lineWidth = 0.006 * h;
    const bw = [A.el[0] + (A.wr[0] - A.el[0]) * 0.78, A.el[1] + (A.wr[1] - A.el[1]) * 0.78];
    g.beginPath(); g.arc(bw[0], bw[1], 0.016 * h, 0, TAU); g.stroke();
    if (o.lamp) drawThali(g, h, A);
    g.restore();
  }

  // Shade figures already painted on g (device px canvas): far-side shading, warm lamplight, optional darkness
  function lightFigures(g, people, light, warm, dark = true) {
    g.save();
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    g.globalCompositeOperation = 'source-atop';
    for (const pp of people) {
      const rx = pp.x - 0.35 * pp.h, ry = pp.y - 1.3 * pp.h, rw = 0.7 * pp.h, rh = 1.35 * pp.h;
      const gr = g.createLinearGradient(pp.x - pp.dir * 0.12 * pp.h, 0, pp.x + pp.dir * 0.08 * pp.h, 0);
      gr.addColorStop(0, 'rgba(10,4,8,0.38)'); gr.addColorStop(1, 'rgba(10,4,8,0)');
      g.fillStyle = gr; g.fillRect(rx, ry, rw, rh);
      if (warm > 0) {
        const ug = g.createLinearGradient(0, pp.y, 0, pp.y - 1.1 * pp.h);
        ug.addColorStop(0, `rgba(255,170,80,${0.32 * warm})`); ug.addColorStop(1, 'rgba(255,170,80,0)');
        g.fillStyle = ug; g.fillRect(rx, ry, rw, rh);
      }
      if (dark) {
        const L = pp.light !== undefined ? pp.light : light;
        g.fillStyle = `rgba(4,4,10,${clamp(1 - L)})`;
        g.fillRect(rx, ry, rw, rh);
      }
    }
    g.restore();
  }

  // Citizens barely move, so they are painted once per layout; each frame only their darkness changes.
  let citC = null, citMask = null;
  function prerenderCitizens() {
    citC = makeLayer(); citMask = makeLayer();
    const g = citC.g;
    for (const c of citizens) {
      g.save(); g.translate(c.x, c.y); g.scale(c.dir, 1);
      if (c.kind === 'woman') drawWoman(g, c.h, { look: c.look, lamp: true, ua: 0.42, ef: 1.08, seed: c.seed });
      else drawMan(g, c.h, { look: { skin: c.look.skin }, cloth: c.cloth, turban: c.turban, mustache: c.kind === 'man', lamp: true, ua: 0.42, ef: 1.08, seed: c.seed });
      g.restore();
    }
    lightFigures(g, citizens.map((c) => ({ x: c.x, y: c.y, h: c.h, dir: c.dir })), 1, 1, false);
    const m = citMask.g;
    m.setTransform(1, 0, 0, 1, 0, 0);
    m.drawImage(citC.c, 0, 0);
    m.globalCompositeOperation = 'source-in';
    m.fillStyle = 'rgb(4,4,10)'; m.fillRect(0, 0, citMask.c.width, citMask.c.height);
  }

  function drawCitizens(t, warm) {
    if (!citizens.length || !citC) return;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
    const top = Math.max(0, Math.floor((baseY - 100 * u) * DPR)), hh = Math.ceil((baseY + 14 * u) * DPR) - top;
    // dark silhouettes first, then each person's colours faded in by how much light reaches them
    ctx.drawImage(citMask.c, 0, top, citMask.c.width, hh, 0, top, citMask.c.width, hh);
    for (const c of citizens) {
      const lit = smooth(c.t0 - 0.2, c.t0 + 1.4, t);
      const L = clamp(0.04 + 0.86 * Math.max(lit * 0.9, warm));
      if (L < 0.01) continue;
      const x0 = c.dir > 0 ? c.x - 0.14 * c.h : c.x - 0.32 * c.h;
      const sx = Math.max(0, Math.floor(x0 * DPR)), sy = Math.floor((c.y - 1.32 * c.h) * DPR);
      const sw = Math.ceil(0.46 * c.h * DPR), sh = Math.ceil(1.38 * c.h * DPR);
      ctx.globalAlpha = L;
      ctx.drawImage(citC.c, sx, sy, sw, sh, sx, sy, sw, sh);
    }
    ctx.restore();
  }

  /* =====================================================================
     Fireworks + sparks
     ===================================================================== */
  const rockets = [];
  const sparks = [];
  let flash = 0;
  let nextLaunch = 0;

  function launch(x, ty, quiet) {
    const y0 = baseY - 30 * u;
    ty = clamp(ty, H * 0.05, baseY - 170 * u);
    const g = 270 * u;
    const vy = -Math.sqrt(2 * g * Math.max(40, y0 - ty));
    rockets.push({ x, y: y0, vx: (Math.random() - 0.5) * 24 * u, vy, g, type: pick(['peony', 'peony', 'chrys', 'willow', 'ring', 'double']), color: pick(FW_COLORS) });
    if (!quiet) AudioFX.play('launch', 0.09 + Math.random() * 0.05, 0.9 + Math.random() * 0.3, (x / W) * 2 - 1);
  }

  function spark(x, y, vx, vy, life, color, size, drag, grav, trail) {
    if (sparks.length > (small ? 1600 : 3200)) return;
    sparks.push({ x, y, vx, vy, life, max: life, color, size, drag, grav, trail });
  }

  function burst(r) {
    const n = Math.round((small ? 80 : 130) * (0.8 + Math.random() * 0.4));
    const v = (190 + Math.random() * 120) * u;
    const c2 = pick(FW_COLORS);
    switch (r.type) {
      case 'ring': {
        const tilt = Math.random() * Math.PI, sq = 0.35 + Math.random() * 0.4;
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2;
          const ex = Math.cos(a) * v, ey = Math.sin(a) * v * sq;
          spark(r.x, r.y, ex * Math.cos(tilt) - ey * Math.sin(tilt), ex * Math.sin(tilt) + ey * Math.cos(tilt), 1.5 + Math.random() * 0.4, r.color, 2.2 * u, 1.4, 50 * u, false);
        }
        for (let i = 0; i < n / 3; i++) { const a = Math.random() * Math.PI * 2, s = v * 0.3 * Math.random(); spark(r.x, r.y, Math.cos(a) * s, Math.sin(a) * s, 1.2, c2, 1.8 * u, 1.6, 50 * u, false); }
        break;
      }
      case 'willow':
        for (let i = 0; i < n; i++) {
          const a = Math.random() * Math.PI * 2, s = v * (0.4 + 0.6 * Math.sqrt(Math.random()));
          spark(r.x, r.y, Math.cos(a) * s, Math.sin(a) * s, 2.6 + Math.random() * 1.1, '#ffcf6b', 1.7 * u, 2.1, 42 * u, true);
        }
        break;
      case 'double':
        for (let i = 0; i < n; i++) {
          const a = Math.random() * Math.PI * 2, s = v * (0.75 + 0.25 * Math.random());
          spark(r.x, r.y, Math.cos(a) * s, Math.sin(a) * s, 1.6 + Math.random() * 0.4, r.color, 2.2 * u, 1.5, 55 * u, false);
        }
        for (let i = 0; i < n / 2; i++) {
          const a = Math.random() * Math.PI * 2, s = v * 0.38 * (0.7 + 0.3 * Math.random());
          spark(r.x, r.y, Math.cos(a) * s, Math.sin(a) * s, 1.4, c2, 2 * u, 1.5, 55 * u, false);
        }
        break;
      case 'chrys':
        for (let i = 0; i < n; i++) {
          const a = Math.random() * Math.PI * 2, s = v * (0.5 + 0.5 * Math.sqrt(Math.random()));
          spark(r.x, r.y, Math.cos(a) * s, Math.sin(a) * s, 1.7 + Math.random() * 0.5, r.color, 2 * u, 1.6, 60 * u, true);
        }
        break;
      default: // peony
        for (let i = 0; i < n; i++) {
          const a = Math.random() * Math.PI * 2, s = v * (0.35 + 0.65 * Math.sqrt(Math.random()));
          spark(r.x, r.y, Math.cos(a) * s, Math.sin(a) * s, 1.5 + Math.random() * 0.6, Math.random() < 0.8 ? r.color : c2, 2.3 * u, 1.6, 60 * u, false);
        }
    }
    flash = Math.min(1, flash + (reduceMotion ? 0.12 : 0.35));
    AudioFX.boom(0.16 + Math.random() * 0.12, 0.8 + Math.random() * 0.35, (r.x / W) * 2 - 1);
  }

  function sparkleFrom(rect, count) {
    for (let i = 0; i < count; i++) {
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + rect.height * (0.25 + Math.random() * 0.55);
      spark(x, y, (Math.random() - 0.5) * 30 * u, -(10 + Math.random() * 40) * u, 0.9 + Math.random() * 0.9, Math.random() < 0.7 ? '#ffcf6b' : '#fff2d6', 1.5 * u, 1.2, -18 * u, false);
    }
  }

  function updateFireworks(t, dt) {
    if (started && t >= T.fireworks) {
      if (t >= nextLaunch) {
        const k = t > T.finale ? 1.7 : t > T.greet ? 1.25 : 0.9;
        // while words are on screen, keep bursts to the sides so the greeting stays readable
        const fx = () => (t >= T.greet - 1 ? (Math.random() < 0.5 ? 0.04 + Math.random() * 0.2 : 0.76 + Math.random() * 0.2) : 0.08 + Math.random() * 0.84) * W;
        launch(fx(), H * 0.06 + Math.random() * (baseY - 240 * u - H * 0.06));
        if (Math.random() < 0.22 * k) launch(fx(), H * 0.08 + Math.random() * (baseY - 260 * u - H * 0.08), true);
        nextLaunch = t + ((reduceMotion ? 1.6 : 0.45) + Math.random() * 0.9) / k;
      }
    }
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.vy += r.g * dt; r.x += r.vx * dt; r.y += r.vy * dt;
      if (Math.random() < 0.8) spark(r.x, r.y, (Math.random() - 0.5) * 12 * u, 20 * u, 0.35 + Math.random() * 0.25, '#ffcf6b', 1.2 * u, 2, 30 * u, false);
      if (r.vy >= -18 * u) { burst(r); rockets.splice(i, 1); }
    }
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      const dr = Math.exp(-p.drag * dt);
      p.vx *= dr; p.vy = p.vy * dr + p.grav * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) sparks.splice(i, 1);
    }
    flash *= Math.exp(-3.2 * dt);
  }

  function drawFireworks() {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const r of rockets) {
      const s = 7 * u;
      ctx.globalAlpha = 1;
      ctx.drawImage(fwSprites['#ffcf6b'], r.x - s / 2, r.y - s / 2, s, s);
    }
    for (const p of sparks) {
      const f = p.life / p.max;
      let a = Math.pow(f, 1.2);
      if (f < 0.35 && Math.random() < 0.25) a *= 0.3; // crackle
      const s = p.size * (0.55 + 0.45 * f) * 6;
      const spr = fwSprites[p.color] || fwSprites['#ffcf6b'];
      ctx.globalAlpha = a;
      ctx.drawImage(spr, p.x - s / 2, p.y - s / 2, s, s);
      if (p.trail) {
        ctx.globalAlpha = a * 0.45;
        ctx.drawImage(spr, p.x - p.vx * 0.05 - s * 0.35, p.y - p.vy * 0.05 - s * 0.35, s * 0.7, s * 0.7);
        ctx.globalAlpha = a * 0.22;
        ctx.drawImage(spr, p.x - p.vx * 0.1 - s * 0.25, p.y - p.vy * 0.1 - s * 0.25, s * 0.5, s * 0.5);
      }
    }
    ctx.restore();
  }

  /* =====================================================================
     Petals
     ===================================================================== */
  const petals = [];
  let petalSpawned = 0;
  function updatePetals(t, dt) {
    if (t > T.petals && t < T.petals + 9 && !reduceMotion) {
      const target = Math.floor((t - T.petals) * 22);
      while (petalSpawned < target) {
        petalSpawned++;
        petals.push({
          x: cx + (Math.random() - 0.5) * 420 * u, y: baseY - (120 + Math.random() * 140) * u,
          vx: (Math.random() - 0.5) * 16 * u, vy: (22 + Math.random() * 22) * u,
          rot: Math.random() * 6, vr: (Math.random() - 0.5) * 6, s: (2.2 + Math.random() * 1.8) * u,
          c: pick(['#ff8c1a', '#ffb51f', '#ff7a00', '#ffd23f', '#e0245e']), ph: Math.random() * 6, life: 1,
        });
      }
    }
    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.x += (p.vx + Math.sin(t * 2 + p.ph) * 14 * u) * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
      if (p.y > terraceBot) { p.life -= dt * 0.8; p.vy = 0; p.vx = 0; p.vr = 0; }
      if (p.life <= 0) petals.splice(i, 1);
    }
  }
  function drawPetals() {
    for (const p of petals) {
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.globalAlpha = clamp(p.life);
      ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.ellipse(0, 0, p.s, p.s * 0.55 * Math.abs(Math.cos(p.rot * 1.3)) + 0.3, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  /* =====================================================================
     Frame rendering
     ===================================================================== */
  let pingTimes = [];

  function revealAt(t) {
    if (t < T.firstLamp) return { r: 0, full: false, frac: 0 };
    let r = 0, frac = 0;
    const early = smooth(T.firstLamp, T.cascadeStart + 1.5, t);
    r = lerp(30 * u, 110 * u, early);
    if (t >= T.cascadeStart) {
      frac = Math.pow(clamp((t - T.cascadeStart) / T.cascadeSpan), 1 / 0.42);
      const idx = Math.min(lampCount - 1, Math.floor(frac * lampCount));
      r = Math.max(r, (revealCurve[idx] || 0) + 70 * u);
    }
    return { r, full: frac >= 1 && t > T.cascadeStart + T.cascadeSpan + 0.5, frac };
  }

  function drawLayer(dark, lit, rv, extraAlpha = 1) {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (rv.full) { ctx.drawImage(lit.c, 0, 0); ctx.restore(); return; }
    ctx.drawImage(dark.c, 0, 0);
    if (rv.r > 0) {
      tctx.setTransform(1, 0, 0, 1, 0, 0);
      tctx.globalCompositeOperation = 'source-over';
      tctx.clearRect(0, 0, tmp.width, tmp.height);
      tctx.drawImage(lit.c, 0, 0);
      tctx.globalCompositeOperation = 'destination-in';
      const gx = gate.cx * DPR, gy = gate.cy * DPR, R = rv.r * DPR;
      const gr = tctx.createRadialGradient(gx, gy, 0, gx, gy, R);
      gr.addColorStop(0, `rgba(0,0,0,${extraAlpha})`);
      gr.addColorStop(0.62, `rgba(0,0,0,${0.85 * extraAlpha})`);
      gr.addColorStop(1, 'rgba(0,0,0,0)');
      tctx.fillStyle = gr;
      tctx.fillRect(0, 0, tmp.width, tmp.height);
      tctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(tmp, 0, 0);
    }
    ctx.restore();
  }

  function drawLamps(list, t) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < list.length; i++) {
      const Lp = list[i];
      if (t < Lp.t0) break; // lists are sorted by ignition time
      const age = t - Lp.t0;
      let f = 0.84 + 0.16 * Math.sin(t * 9.1 + Lp.ph) * Math.sin(t * 5.3 + Lp.ph * 1.7);
      if (age < 1) f *= 1 + 1.4 * (1 - age) * (1 - age);
      const s = Lp.s * f;
      ctx.globalAlpha = Math.min(1, age / 0.3) * Lp.a;
      ctx.drawImage(glowSprite, Lp.x - s / 2, Lp.y - s * 0.62, s, s);
    }
    ctx.restore();
  }

  function drawSky(t, warm) {
    const em = smooth(1.5, 11, t);
    const top = mixc([1, 1, 4], [12, 7, 26], warm);
    const mid = mixc(mixc([2, 2, 6], [5, 6, 16], em), [44, 16, 44], warm);
    const hor = mixc(mixc([2, 2, 6], [16, 18, 40], em), [176, 76, 32], warm);
    const g = ctx.createLinearGradient(0, 0, 0, baseY);
    g.addColorStop(0, rgb(top)); g.addColorStop(0.6, rgb(mid)); g.addColorStop(1, rgb(hor));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, baseY + 2);
    // stars (no moon tonight)
    const sa = smooth(0, 4, t) * (1 - 0.75 * warm);
    if (sa > 0.01) {
      ctx.fillStyle = '#dfe6ff';
      for (const s of stars) {
        ctx.globalAlpha = sa * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph))) * (1 - s.y / baseY * 0.5);
        ctx.fillRect(s.x, s.y, s.r, s.r);
      }
      ctx.globalAlpha = 1;
    }
    if (warm > 0.01 || flash > 0.01) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const rg = ctx.createRadialGradient(cx, baseY, 10, cx, baseY, Math.max(W, H) * 0.75);
      rg.addColorStop(0, `rgba(255,140,50,${0.22 * warm})`);
      rg.addColorStop(1, 'rgba(255,100,30,0)');
      ctx.fillStyle = rg; ctx.fillRect(0, 0, W, baseY);
      if (flash > 0.01) { ctx.fillStyle = `rgba(255,200,140,${flash * 0.09})`; ctx.fillRect(0, 0, W, baseY); }
      ctx.restore();
    }
  }

  function drawFlags(t, warm) {
    ctx.save();
    const col = rgb(mixc([10, 10, 18], [255, 128, 26], warm));
    ctx.strokeStyle = rgb(mixc([10, 10, 18], [120, 60, 30], warm));
    ctx.lineWidth = Math.max(1, 1 * u);
    for (const f of flags) {
      ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(f.x, f.y - f.h); ctx.stroke();
      const fw = f.h * 0.75, top = f.y - f.h;
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.moveTo(f.x, top);
      for (let k = 1; k <= 6; k++) {
        const fx = f.x + (fw * k) / 6;
        ctx.lineTo(fx, top + (f.h * 0.22 * k) / 6 + Math.sin(t * 4 + k * 0.9 + f.x) * 1.2 * u * (k / 6));
      }
      ctx.lineTo(f.x, top + f.h * 0.45);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }

  function trioState(t) {
    const p = clamp((t - T.walkStart) / (T.walkEnd - T.walkStart));
    const a = 0.8, v = 2 / (1 + a);
    const e = p < a ? v * p : v * a + v * (p - a) - (v / (2 * (1 - a))) * (p - a) * (p - a);
    const speed = p <= 0 || p >= 1 ? 0 : p < a ? 1 : 1 - (p - a) / (1 - a);
    const startX = -70 * u, endX = cx + 40 * u;
    const x = lerp(startX, endX, e);
    return { x, dist: x - startX, walk: clamp(speed * 1.6) };
  }

  function drawTrio(t, warm) {
    const st = trioState(t);
    const feet = baseY + 15 * u;
    const people = [
      { kind: 'lak', x: st.x - 80 * u, h: 104 * u, off: 1.4 },
      { kind: 'sita', x: st.x - 40 * u, h: 96 * u, off: 2.7 },
      { kind: 'rama', x: st.x, h: 108 * u, off: 0 },
    ];
    const minX = st.x - 160 * u, maxX = st.x + 80 * u;
    if (maxX < -10) return;
    const top = feet - 150 * u;
    const arrival = smooth(T.walkEnd - 1, T.walkEnd + 2, t);
    const bless = smooth(T.walkEnd + 0.6, T.walkEnd + 2.4, t);

    // divine aura: the only light on the road before the city wakes
    const auraA = 0.15 + 0.1 * arrival + 0.04 * Math.sin(t * 1.4);
    const acx = st.x - 40 * u, acy = feet - 56 * u;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const ag = ctx.createRadialGradient(acx, acy, 4 * u, acx, acy, 160 * u);
    ag.addColorStop(0, `rgba(255,222,160,${auraA})`);
    ag.addColorStop(0.45, `rgba(255,190,110,${auraA * 0.35})`);
    ag.addColorStop(1, 'rgba(255,170,90,0)');
    ctx.fillStyle = ag;
    ctx.fillRect(acx - 160 * u, acy - 160 * u, 320 * u, 320 * u);
    ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.ellipse(acx, feet + 2 * u, 100 * u, 9 * u, 0, 0, Math.PI * 2);
    const pg = ctx.createRadialGradient(acx, feet, 0, acx, feet, 100 * u);
    pg.addColorStop(0, 'rgba(255,210,140,0.35)'); pg.addColorStop(1, 'rgba(255,190,120,0)');
    ctx.fillStyle = pg; ctx.fill();
    ctx.restore();
    // contact shadows once the lamps are lit
    if (warm > 0.05) {
      ctx.save(); ctx.fillStyle = `rgba(20,6,4,${0.35 * warm})`;
      for (const pp of people) { ctx.beginPath(); ctx.ellipse(pp.x + 0.02 * pp.h, feet + 1 * u, 0.16 * pp.h, 0.025 * pp.h, 0, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    }

    const sx = Math.floor(Math.max(0, minX) * DPR), sy = Math.floor(Math.max(0, top) * DPR);
    const sw = Math.ceil(Math.min(W, maxX) * DPR) - sx, sh = Math.ceil((feet + 12 * u) * DPR) - sy;
    if (sw <= 0 || sh <= 0) return;
    fctx.setTransform(1, 0, 0, 1, 0, 0);
    fctx.clearRect(sx, sy, sw, sh);
    fctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    for (const pp of people) {
      const ph = (st.dist / (0.8 * pp.h)) * Math.PI * 2 + pp.off;
      fctx.save(); fctx.translate(pp.x, feet);
      if (pp.kind === 'sita') drawWoman(fctx, pp.h, { look: LOOKS.sita, walk: st.walk, ph, time: t, seed: 2 });
      else if (pp.kind === 'rama') drawMan(fctx, pp.h, {
        look: LOOKS.rama, walk: st.walk, ph, time: t, seed: 0, tilak: true,
        farUa: 0.5 + 0.04 * st.walk * Math.sin(ph), farEf: 0.55, ua: 0.98, ef: 1.72, armBlend: bless, palm: bless > 0.55
      });
      else drawMan(fctx, pp.h, { look: LOOKS.lak, walk: st.walk, ph, time: t, seed: 4, tilak: true });
      fctx.restore();
    }
    const light = 0.3 + 0.64 * smooth(T.firstLamp + 0.5, T.walkEnd + 1.5, t);
    lightFigures(fctx, people.map((pp) => ({ x: pp.x, y: feet, h: pp.h, dir: 1 })), light, warm);

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.shadowColor = `rgba(255,214,150,${0.7 + 0.2 * arrival})`;
    ctx.shadowBlur = (8 + 5 * arrival) * u * DPR;
    ctx.drawImage(figC, sx, sy, sw, sh, sx, sy, sw, sh);
    ctx.shadowBlur = 0;
    ctx.drawImage(figC, sx, sy, sw, sh, sx, sy, sw, sh);
    ctx.restore();
  }

  function drawFlame(x, y, h, t, ph) {
    const fl = 1 + 0.08 * Math.sin(t * 17 + ph) + 0.05 * Math.sin(t * 29 + ph * 2);
    const sway = Math.sin(t * 6 + ph) * 0.08 * h;
    const fh = h * fl;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const s = h * 4.2;
    ctx.globalAlpha = 0.8;
    ctx.drawImage(glowSprite, x - s / 2, y - fh * 0.4 - s / 2, s, s);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    const g = ctx.createRadialGradient(x, y - fh * 0.25, 0, x, y - fh * 0.3, fh * 0.75);
    g.addColorStop(0, 'rgba(255,255,240,1)');
    g.addColorStop(0.35, 'rgba(255,214,110,1)');
    g.addColorStop(0.75, 'rgba(255,128,24,0.9)');
    g.addColorStop(1, 'rgba(255,90,10,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(x - 0.22 * h, y);
    ctx.quadraticCurveTo(x - 0.3 * h, y - fh * 0.45, x + sway, y - fh);
    ctx.quadraticCurveTo(x + 0.3 * h, y - fh * 0.45, x + 0.22 * h, y);
    ctx.quadraticCurveTo(x, y + 0.12 * h, x - 0.22 * h, y);
    ctx.fill();
    ctx.restore();
  }

  function drawBigDiya(d, t) {
    const lit = t >= d.t0;
    const age = lit ? t - d.t0 : 0;
    const k = lit ? Math.min(1, age / 0.6) : 0;
    const s = d.s, x = d.x, y = d.y;
    // body
    ctx.save();
    const g = ctx.createLinearGradient(0, y - s * 0.1, 0, y + s * 0.3);
    g.addColorStop(0, rgb(mixc([18, 10, 10], [206, 104, 50], k)));
    g.addColorStop(1, rgb(mixc([6, 4, 6], [84, 32, 14], k)));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(x - s * 0.5, y);
    ctx.lineTo(x + s * 0.34, y);
    ctx.quadraticCurveTo(x + s * 0.5, y - s * 0.02, x + s * 0.62, y - s * 0.1); // spout
    ctx.quadraticCurveTo(x + s * 0.52, y + s * 0.05, x + s * 0.38, y + s * 0.07);
    ctx.quadraticCurveTo(x + s * 0.2, y + s * 0.32, x - s * 0.06, y + s * 0.32);
    ctx.quadraticCurveTo(x - s * 0.4, y + s * 0.3, x - s * 0.5, y);
    ctx.fill();
    // oil
    ctx.fillStyle = rgb(mixc([4, 3, 4], [60, 26, 8], k));
    ctx.beginPath(); ctx.ellipse(x - s * 0.06, y + s * 0.01, s * 0.42, s * 0.05, 0, 0, Math.PI * 2); ctx.fill();
    // painted dots
    if (k > 0) {
      ctx.fillStyle = `rgba(255,230,180,${0.75 * k})`;
      for (let i = 0; i < 6; i++) {
        const f = (i + 0.5) / 6;
        const px = x - s * 0.42 + f * s * 0.76, py = y + s * (0.12 + Math.sin(f * Math.PI) * 0.1);
        ctx.beginPath(); ctx.arc(px, py, s * 0.022, 0, Math.PI * 2); ctx.fill();
      }
      // rim light
      ctx.strokeStyle = `rgba(255,200,130,${0.5 * k})`;
      ctx.lineWidth = Math.max(1, s * 0.02);
      ctx.beginPath(); ctx.moveTo(x - s * 0.5, y); ctx.lineTo(x + s * 0.34, y); ctx.stroke();
    }
    ctx.restore();
    if (lit) {
      const grow = Math.min(1, age / 0.5);
      drawFlame(x + s * 0.52, y - s * 0.09, s * 0.42 * (0.3 + 0.7 * grow), t, d.ph);
    }
  }

  function drawRiver(t, warm, rv) {
    const g = ctx.createLinearGradient(0, riverTop, 0, riverBot);
    g.addColorStop(0, rgb(mixc([4, 5, 12], [44, 18, 22], warm)));
    g.addColorStop(1, rgb(mixc([1, 1, 4], [10, 5, 10], warm)));
    ctx.fillStyle = g;
    ctx.fillRect(0, riverTop, W, riverBot - riverTop + 1);
    // reflection: copy the city above the waterline, flipped, in rippling strips
    const d = DPR, hgt = (riverBot - riverTop) * d, top = riverTop * d;
    const strip = Math.max(2, Math.round(2 * d));
    // one snapshot of the region above the waterline (drawing a canvas onto itself is costly)
    const srcH = Math.min(Math.round(top), Math.ceil(hgt * 1.25) + strip * 2);
    if (reflC.width !== canvas.width || reflC.height !== srcH) { reflC.width = canvas.width; reflC.height = srcH; }
    rctx.setTransform(1, 0, 0, 1, 0, 0);
    rctx.globalCompositeOperation = 'copy';
    rctx.drawImage(canvas, 0, Math.round(top) - srcH, canvas.width, srcH, 0, 0, canvas.width, srcH);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (let y = 0; y < hgt; y += strip) {
      const sy = srcH - Math.round(y * 1.25) - strip;
      if (sy < 0) break;
      const depth = y / hgt;
      const off = Math.sin(y * 0.11 / d + t * 1.7) * (0.6 + depth * 4) * d + Math.sin(y * 0.031 / d - t * 0.9) * 1.5 * d;
      ctx.globalAlpha = 0.62 * (1 - depth * 0.55);
      ctx.drawImage(reflC, 0, sy, canvas.width, strip * 1.25, off, top + y, canvas.width, strip);
    }
    ctx.restore();
    // depth fade
    const fg = ctx.createLinearGradient(0, riverTop, 0, riverBot);
    fg.addColorStop(0, 'rgba(2,3,8,0.05)'); fg.addColorStop(1, 'rgba(2,3,8,0.55)');
    ctx.fillStyle = fg; ctx.fillRect(0, riverTop, W, riverBot - riverTop + 1);
    // floating diyas
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const f of floaters) {
      if (t < f.t0) continue;
      const age = t - f.t0;
      const x = ((f.x0 + (t - T.floatStart) * f.v) % (W + 40 * u) + (W + 40 * u)) % (W + 40 * u) - 20 * u;
      const y = f.y + Math.sin(t * 1.2 + f.ph) * 1.2 * u;
      const fl = 0.85 + 0.15 * Math.sin(t * 8 + f.ph);
      const a = Math.min(1, age / 0.8);
      const s = f.s * fl;
      ctx.globalAlpha = a;
      ctx.drawImage(glowSprite, x - s / 2, y - s * 0.6, s, s);
      ctx.globalAlpha = a * 0.35;
      ctx.drawImage(glowSprite, x - s * 0.3, y, s * 0.6, s * 2.2); // streak on the water
    }
    ctx.restore();
  }

  function render(t, dt) {
    const rv = revealAt(t);
    const warm = clamp(Math.pow(rv.frac, 0.7) * 0.95 + smooth(T.firstLamp, T.cascadeStart + 3, t) * 0.06);

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;

    drawSky(t, warm);
    updateFireworks(t, dt);
    drawFireworks();

    drawLayer(L.backD, L.backL, rv);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    drawFlags(t, warm);
    drawLamps(lights.back, t);

    drawLayer(L.frontD, L.frontL, rv);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    // the gate's own warmth, first to wake
    const gl = smooth(T.firstLamp, T.firstLamp + 7, t);
    if (gl > 0) {
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const gg = ctx.createRadialGradient(cx, baseY - 40 * u, 4 * u, cx, baseY - 40 * u, 170 * u);
      gg.addColorStop(0, `rgba(255,190,100,${0.28 * gl * (0.92 + 0.08 * Math.sin(t * 7))})`);
      gg.addColorStop(1, 'rgba(255,140,60,0)');
      ctx.fillStyle = gg; ctx.fillRect(cx - 170 * u, baseY - 210 * u, 340 * u, 340 * u);
      ctx.restore();
    }
    drawLamps(lights.front, t);

    drawLayer(L.groundD, L.groundL, rv);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    // citizens and their hand-held lamps
    drawCitizens(t, warm);
    drawLamps(handLamps, t);
    for (const hl of handLamps) {
      if (t >= hl.t0) {
        const age = t - hl.t0;
        if (hl.first && age < 2.5) {
          // the first flame: a bloom that announces it
          ctx.save(); ctx.globalCompositeOperation = 'lighter';
          const s = 120 * u * (1 - age / 2.5) + 20 * u;
          ctx.globalAlpha = 0.5 * (1 - age / 2.5);
          ctx.drawImage(glowSprite, hl.x - s / 2, hl.y - s / 2, s, s);
          ctx.restore();
        }
      }
    }
    drawLamps(lights.ground, t);

    drawTrio(t, warm);
    updatePetals(t, dt);
    drawPetals();

    drawRiver(t, warm, rv);

    // near ledge
    const nearK = smooth(T.cascadeStart + T.cascadeSpan * 0.68, T.cascadeStart + T.cascadeSpan, t);
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(L.nearD.c, 0, 0);
    if (nearK > 0) { ctx.globalAlpha = nearK; ctx.drawImage(L.nearL.c, 0, 0); }
    ctx.restore();
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    for (const d of bigDiyas) drawBigDiya(d, t);
  }

  /* =====================================================================
     Audio (Web Audio): firework samples + synthesized bell, shankh, drone
     ===================================================================== */
  const AudioFX = {
    ctx: null, bus: null, master: null, bufs: {}, els: {}, muted: params.has('mute'), droneNodes: null, lastBoom: 0,
    init() {
      if (this.ctx) return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try { this.ctx = new AC(); } catch (e) { return; }
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 1;
      this.master.connect(this.ctx.destination);
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -16; comp.ratio.value = 4;
      comp.connect(this.master);
      this.bus = comp;
      const load = (name, url) => fetch(url).then((r) => r.arrayBuffer())
        .then((b) => new Promise((res, rej) => this.ctx.decodeAudioData(b, res, rej)))
        .then((buf) => { this.bufs[name] = buf; })
        .catch(() => { try { this.els[name] = new Audio(url); } catch (e) { /* no audio */ } }); // file:// fallback
      load('launch', 'assets/audio/launch.mp3');
      load('boom', 'assets/audio/explosion.mp3');
    },
    resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
    out(pan) {
      if (this.ctx.createStereoPanner) {
        const p = this.ctx.createStereoPanner(); p.pan.value = clamp(pan, -1, 1); p.connect(this.bus); return p;
      }
      return this.bus;
    },
    play(name, gain, rate, pan = 0) {
      if (this.muted) return;
      const b = this.bufs[name];
      if (!b) {
        const el = this.els[name];
        if (el) { const a = el.cloneNode(); a.volume = clamp(gain * 2.5); a.playbackRate = rate; a.play().catch(() => { }); }
        return;
      }
      if (!this.ctx) return;
      const s = this.ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = rate;
      const g = this.ctx.createGain(); g.gain.value = gain;
      s.connect(g); g.connect(this.out(pan)); s.start();
    },
    boom(gain, rate, pan) {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      if (now - this.lastBoom < 0.12) return;
      this.lastBoom = now;
      this.play('boom', gain, rate, pan);
    },
    bell(freq = 392, gain = 0.22) {
      if (!this.ctx || this.muted) return;
      const now = this.ctx.currentTime;
      const partials = [[0.5, 0.35, 5], [1, 1, 4], [1.19, 0.45, 3], [1.56, 0.3, 2.5], [2, 0.38, 2.2], [2.74, 0.22, 1.6], [3.76, 0.14, 1.1], [5.4, 0.08, 0.7]];
      const out = this.out(0);
      for (const [m, a, dec] of partials) {
        const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = freq * m;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(gain * a, now + 0.006);
        g.gain.exponentialRampToValueAtTime(0.0001, now + dec);
        o.connect(g); g.connect(out); o.start(now); o.stop(now + dec + 0.1);
      }
    },
    ping(freq) {
      if (!this.ctx || this.muted) return;
      const now = this.ctx.currentTime;
      const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = freq;
      const o2 = this.ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = freq * 2.76;
      const g = this.ctx.createGain(), g2 = this.ctx.createGain();
      g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.05, now + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
      g2.gain.setValueAtTime(0, now); g2.gain.linearRampToValueAtTime(0.015, now + 0.005); g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
      const out = this.out((Math.random() - 0.5) * 0.8);
      o.connect(g); g.connect(out); o2.connect(g2); g2.connect(out);
      o.start(now); o2.start(now); o.stop(now + 1.7); o2.stop(now + 0.7);
    },
    shankh() {
      // conch: a breathy, nasal horn with a rising onset
      if (!this.ctx || this.muted) return;
      const c = this.ctx, now = c.currentTime, f = 233;
      const g = c.createGain();
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.11, now + 0.5);
      g.gain.setValueAtTime(0.11, now + 2.0);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 820; bp.Q.value = 1.2;
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
      bp.connect(lp); lp.connect(g); g.connect(this.out(0));
      const vib = c.createOscillator(); vib.frequency.value = 5.2;
      const vg = c.createGain(); vg.gain.value = 2.2; vib.connect(vg);
      for (const [m, type, a] of [[1, 'sawtooth', 0.6], [2, 'triangle', 0.25], [1.005, 'sawtooth', 0.3]]) {
        const o = c.createOscillator(); o.type = type;
        o.frequency.setValueAtTime(f * m * 0.93, now);
        o.frequency.exponentialRampToValueAtTime(f * m, now + 0.45);
        vg.connect(o.frequency);
        const og = c.createGain(); og.gain.value = a;
        o.connect(og); og.connect(bp); o.start(now); o.stop(now + 3.3);
      }
      // breath noise
      const len = c.sampleRate * 3.2, nb = c.createBuffer(1, len, c.sampleRate), ch = nb.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * 0.25;
      const ns = c.createBufferSource(); ns.buffer = nb; ns.connect(bp); ns.start(now);
      vib.start(now); vib.stop(now + 3.3);
    },
    droneStart() {
      if (!this.ctx || this.droneNodes) return;
      const c = this.ctx, now = c.currentTime;
      const g = c.createGain(); g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.05, now + 8);
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
      lp.connect(g); g.connect(this.bus);
      const nodes = [];
      // Sa, Pa, upper Sa, low Sa — a tanpura-like bed in C#
      for (const [f, a, lfo] of [[138.59, 0.5, 0.07], [207.65, 0.32, 0.11], [277.18, 0.25, 0.09], [69.3, 0.42, 0.05]]) {
        const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
        const o2 = c.createOscillator(); o2.type = 'sine'; o2.frequency.value = f * 1.003;
        const og = c.createGain(); og.gain.value = a;
        const l = c.createOscillator(); l.frequency.value = lfo;
        const lg = c.createGain(); lg.gain.value = a * 0.5;
        l.connect(lg); lg.connect(og.gain);
        o.connect(og); o2.connect(og); og.connect(lp);
        o.start(); o2.start(); l.start();
        nodes.push(o, o2, l);
      }
      this.droneNodes = { g, lp, nodes };
    },
    brighten(k) { if (this.droneNodes) this.droneNodes.lp.frequency.setTargetAtTime(900 + 1400 * k, this.ctx.currentTime, 1.5); },
    setMuted(m) {
      this.muted = m;
      if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 1, this.ctx.currentTime, 0.08);
    },
  };

  /* =====================================================================
     Story timeline: captions, greetings, finale, sound cues
     ===================================================================== */
  const capEl = $('#caption'), greetEl = $('#greet'), finaleEl = $('#finale'), actionsEl = $('#actions');
  const hud = $('#hud'), skipBtn = $('#skipBtn');
  let started = false, t = 0, last = 0;
  let capIdx = -1, gIdx = -1, finaleShown = false;
  let cues = [];

  function buildCues() {
    cues = [
      { t: T.firstLamp, fn: () => AudioFX.bell(392, 0.24) },
      { t: T.walkEnd - 0.4, fn: () => AudioFX.shankh() },
      { t: T.fireworks - 0.6, fn: () => AudioFX.bell(294, 0.2) },
      { t: T.finale + 0.2, fn: () => AudioFX.bell(440, 0.18) },
    ];
    const scale = [554.37, 622.25, 698.46, 830.61, 932.33, 1108.73];
    handLamps.slice(1).forEach((h, i) => cues.push({ t: h.t0, fn: () => AudioFX.ping(scale[i % scale.length]) }));
    pingTimes.slice(0, 8).forEach((pt, i) => cues.push({ t: pt, fn: () => AudioFX.ping(scale[(i + 2) % scale.length] * 1.5) }));
    cues.sort((a, b) => a.t - b.t);
    cues.forEach((c) => { c.done = c.t < t; });
  }

  function runCues(t) {
    for (const c of cues) if (!c.done && t >= c.t) { c.done = true; if (t - c.t < 0.5) c.fn(); }
  }

  function updateCaption(t) {
    let idx = -1;
    for (let i = 0; i < CAPTIONS.length; i++) if (t >= CAPTIONS[i][0] && t < CAPTIONS[i][1]) idx = i;
    if (!started) idx = -1;
    if (idx === capIdx) return;
    capIdx = idx;
    if (idx < 0) { capEl.classList.remove('show'); return; }
    capEl.classList.remove('show');
    capEl.innerHTML = CAPTIONS[idx][2];
    void capEl.offsetWidth;
    capEl.classList.add('show');
  }

  const STYLES = ['style-rise', 'style-bloom', 'style-sweep'];
  function makeCard(gr, i) {
    const card = document.createElement('div');
    card.className = 'gcard ' + STYLES[i % STYLES.length];
    card.lang = gr.code;
    card.dir = gr.rtl ? 'rtl' : 'ltr';
    const stack = document.createElement('div');
    stack.className = 'g-stack f-' + gr.font;
    for (const cls of ['g-shade', 'g-glow']) {
      const d = document.createElement('div');
      d.className = 'g-native ' + cls + ' f-' + gr.font;
      d.setAttribute('aria-hidden', 'true');
      d.textContent = gr.native;
      stack.appendChild(d);
    }
    const nat = document.createElement('div');
    nat.className = 'g-native f-' + gr.font;
    gr.native.split(' ').forEach((w, wi, arr) => {
      const s = document.createElement('span');
      s.className = 'w'; s.style.setProperty('--i', wi); s.textContent = w;
      nat.appendChild(s);
      if (wi < arr.length - 1) nat.appendChild(document.createTextNode(' '));
    });
    stack.appendChild(nat);
    card.appendChild(stack);
    const orn = document.createElement('div');
    orn.className = 'g-orn';
    orn.setAttribute('aria-hidden', 'true');
    orn.innerHTML = '<svg viewBox="0 0 320 18"><path class="ln" d="M150 9H10"/><path class="ln" d="M170 9h140"/><path class="dot" d="M160 2c2.5 3.5 4 6 4 8a4 4 0 0 1-8 0c0-2 1.5-4.5 4-8z"/><circle class="dot" cx="140" cy="9" r="1.4"/><circle class="dot" cx="180" cy="9" r="1.4"/></svg>';
    card.appendChild(orn);
    if (gr.roman) {
      const r = document.createElement('div'); r.className = 'g-roman'; r.lang = 'en'; r.dir = 'ltr'; r.textContent = gr.roman; card.appendChild(r);
    }
    const lg = document.createElement('div'); lg.className = 'g-lang'; lg.lang = 'en'; lg.dir = 'ltr'; lg.textContent = gr.lang; card.appendChild(lg);
    return card;
  }

  function updateGreeting(t) {
    let idx = -1;
    if (started && t >= T.greet && t < T.finale) idx = Math.floor((t - T.greet) / T.greetEach);
    if (idx === gIdx) return;
    const old = greetEl.querySelector('.gcard:not(.out)');
    if (old) {
      const nat = old.querySelector('.g-native:not(.g-glow):not(.g-shade)');
      if (nat) sparkleFrom(nat.getBoundingClientRect(), small ? 40 : 80);
      old.classList.add('out');
      setTimeout(() => old.remove(), 900);
    }
    gIdx = idx;
    if (idx >= 0) greetEl.appendChild(makeCard(GREETINGS[idx], idx));
  }

  function buildFinale() {
    const title = $('#finaleTitle');
    const txt = 'Happy Deepavali';
    title.textContent = '';
    title.setAttribute('data-text', txt);
    [...txt].forEach((ch, i) => {
      const s = document.createElement('span');
      s.className = 'ch'; s.style.setProperty('--i', i);
      s.textContent = ch === ' ' ? ' ' : ch;
      s.setAttribute('aria-hidden', 'true');
      title.appendChild(s);
    });
    const rib = $('#ribbon');
    const items = GREETINGS.map((g) => `<span class="f-${g.font}" lang="${g.code}" dir="${g.rtl ? 'rtl' : 'ltr'}">${g.native}</span><span class="sep">✦</span>`).join('');
    rib.innerHTML = items + items;
  }

  function updateFinale(t) {
    const show = started && t >= T.finale;
    if (show === finaleShown) return;
    finaleShown = show;
    if (show) {
      finaleEl.hidden = false; actionsEl.hidden = false;
      void finaleEl.offsetWidth;
      finaleEl.classList.add('show');
      setTimeout(() => actionsEl.classList.add('show'), 2600);
    } else {
      finaleEl.classList.remove('show'); actionsEl.classList.remove('show');
      finaleEl.hidden = true; actionsEl.hidden = true;
    }
  }

  function updateHud(t) {
    skipBtn.classList.toggle('gone', t > T.greet - 2);
    document.body.classList.toggle('can-fire', started && t > T.fireworks);
    document.body.classList.toggle('reading', started && t >= T.greet - 0.6);
  }

  function resetTransient() {
    rockets.length = 0; sparks.length = 0; petals.length = 0;
    petalSpawned = Math.max(0, Math.floor((t - T.petals) * 22));
    nextLaunch = 0;
    greetEl.innerHTML = ''; gIdx = -1; capIdx = -1;
    finaleShown = true; updateFinale(-1); finaleShown = false;
    buildCues();
  }

  /* =====================================================================
     Main loop
     ===================================================================== */
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016);
    last = now;
    if (started) t += dt;
    render(t, dt);
    updateCaption(t);
    updateGreeting(t);
    updateFinale(t);
    updateHud(t);
    if (started) {
      runCues(t);
      AudioFX.brighten(revealAt(t).frac);
    }
  }

  /* =====================================================================
     Interaction
     ===================================================================== */
  function begin(fromT) {
    if (started) return;
    AudioFX.init(); AudioFX.resume(); AudioFX.droneStart();
    started = true;
    t = fromT || 0;
    resetTransient();
    hud.hidden = false;
    $('#intro').classList.add('leaving');
  }

  $('#beginBtn').addEventListener('click', () => {
    const b = $('#beginBtn');
    if (b.classList.contains('lit')) return;
    b.classList.add('lit');
    AudioFX.init(); AudioFX.resume();
    AudioFX.ping(830.61);
    setTimeout(() => begin(0), 1100);
  });

  skipBtn.addEventListener('click', () => {
    if (t < T.greet - 2) { t = T.greet - 2; resetTransient(); }
  });

  $('#replayBtn').addEventListener('click', () => { t = 0; resetTransient(); });

  const soundBtn = $('#soundBtn');
  const syncSound = () => {
    soundBtn.setAttribute('aria-pressed', AudioFX.muted ? 'true' : 'false');
    soundBtn.setAttribute('aria-label', AudioFX.muted ? 'Unmute sound' : 'Mute sound');
  };
  soundBtn.addEventListener('click', () => { AudioFX.init(); AudioFX.resume(); AudioFX.setMuted(!AudioFX.muted); syncSound(); });
  syncSound();

  canvas.addEventListener('pointerdown', (e) => {
    if (!started || t < T.fireworks) return;
    AudioFX.resume();
    launch(e.clientX + (Math.random() - 0.5) * 30 * u, e.clientY);
  });

  // personalisation: ?from=Name
  const fromLine = $('#fromLine'), fromName = $('#fromName');
  function setFrom(name) {
    const n = (name || '').trim().slice(0, 40);
    fromName.textContent = n;
    fromLine.hidden = !n;
  }
  setFrom(params.get('from'));

  const toastEl = $('#toast');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  function shareUrl() {
    const url = new URL(location.href);
    url.searchParams.delete('t'); url.searchParams.delete('autoplay'); url.searchParams.delete('mute');
    const n = fromName.textContent.trim();
    if (n) url.searchParams.set('from', n); else url.searchParams.delete('from');
    return url.toString();
  }

  const nameForm = $('#nameForm'), nameInput = $('#nameInput');
  $('#nameBtn').addEventListener('click', () => {
    nameForm.hidden = !nameForm.hidden;
    if (!nameForm.hidden) { nameInput.value = fromName.textContent; nameInput.focus(); }
  });
  nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setFrom(nameInput.value);
    nameForm.hidden = true;
    try { history.replaceState(null, '', shareUrl()); } catch (err) { /* file:// */ }
    toast(fromName.textContent ? 'Your name is on the greeting' : 'Name removed');
  });

  document.addEventListener('keydown', (e) => {
    if (e.target && e.target.tagName === 'INPUT') return;
    if (e.key === 'm' || e.key === 'M') soundBtn.click();
  });

  // preload the scripts' fonts so greetings never flash a fallback
  function preloadFonts() {
    if (!document.fonts || !document.fonts.load) return;
    const fams = { deva: 'Noto Serif Devanagari', taml: 'Noto Serif Tamil', telu: 'Noto Serif Telugu', beng: 'Noto Serif Bengali', gujr: 'Noto Serif Gujarati', knda: 'Noto Serif Kannada', mlym: 'Noto Serif Malayalam', guru: 'Noto Serif Gurmukhi', orya: 'Noto Serif Oriya', arab: 'Noto Nastaliq Urdu', latn: 'Cormorant Garamond' };
    GREETINGS.forEach((g) => { document.fonts.load(`600 40px "${fams[g.font]}"`, g.native).catch(() => { }); });
    document.fonts.load('italic 500 40px "Cormorant Garamond"', 'Happy Deepavali').catch(() => { });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { layout(); buildCues(); }, 150);
  });

  /* ---------- boot ---------- */
  layout();
  buildFinale();
  preloadFonts();
  buildCues();
  requestAnimationFrame(frame);

  // ?autoplay&t=40 for previews; ?t alone also jumps straight in.
  if (params.has('autoplay') || params.has('t')) {
    const st = parseFloat(params.get('t')) || 0;
    $('#intro').style.transition = 'none';
    begin(st);
  }

  // test hook for headless screenshots
  window.__diwali = { seek: (s) => { t = s; resetTransient(); }, T };
})();
