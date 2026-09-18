/* @ds-bundle: {"format":4,"namespace":"TerraODesignSystem_91237a","components":[{"name":"GrainCover","sourcePath":"components/brand/GrainCover.jsx"},{"name":"InformacoesLayout","sourcePath":"components/brand/InformacoesLayout.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Camera","sourcePath":"components/chrome/Camera.jsx"},{"name":"HomeIndicator","sourcePath":"components/chrome/HomeIndicator.jsx"},{"name":"StatusBar","sourcePath":"components/chrome/StatusBar.jsx"},{"name":"AccountType","sourcePath":"components/social/AccountType.jsx"},{"name":"HighlightCover","sourcePath":"components/social/HighlightCover.jsx"},{"name":"IGButton","sourcePath":"components/social/IGButton.jsx"},{"name":"IGTabBar","sourcePath":"components/social/IGTabBar.jsx"},{"name":"InstagramHighlightIcons","sourcePath":"components/social/InstagramHighlightIcons.jsx"},{"name":"PerfilStory","sourcePath":"components/social/PerfilStory.jsx"},{"name":"ProfileName","sourcePath":"components/social/ProfileName.jsx"},{"name":"ProfileStat","sourcePath":"components/social/ProfileStat.jsx"},{"name":"Seguir","sourcePath":"components/social/Seguir.jsx"},{"name":"StoryAvatar","sourcePath":"components/social/StoryAvatar.jsx"},{"name":"UserName","sourcePath":"components/social/UserName.jsx"},{"name":"VerificadoPagina","sourcePath":"components/social/VerificadoPagina.jsx"},{"name":"VerifiedBadge","sourcePath":"components/social/VerifiedBadge.jsx"},{"name":"Website","sourcePath":"components/social/Website.jsx"}],"sourceHashes":{"components/brand/GrainCover.jsx":"d4dd41abb759","components/brand/InformacoesLayout.jsx":"14301bd97c15","components/brand/Logo.jsx":"caa0ba3240f5","components/chrome/Camera.jsx":"558411b7b9a2","components/chrome/HomeIndicator.jsx":"43a3197c02c7","components/chrome/StatusBar.jsx":"72efb73c2617","components/social/AccountType.jsx":"458083b98502","components/social/HighlightCover.jsx":"eed51920c57d","components/social/IGButton.jsx":"3f71f5558bd5","components/social/IGTabBar.jsx":"7e3de276c2c2","components/social/InstagramHighlightIcons.jsx":"0fc457ae1f41","components/social/PerfilStory.jsx":"78f208b0097f","components/social/ProfileName.jsx":"63f245c349bc","components/social/ProfileStat.jsx":"da3df252748e","components/social/Seguir.jsx":"a2e628f0e436","components/social/StoryAvatar.jsx":"7f96aebcdb03","components/social/UserName.jsx":"8e6d2a21f8fa","components/social/VerificadoPagina.jsx":"9e1485193831","components/social/VerifiedBadge.jsx":"c58130ec5a8c","components/social/Website.jsx":"adb595cb9294","ui_kits/instagram/PhoneFrame.jsx":"7d08a2dfab0e","ui_kits/instagram/ProfileScreen.jsx":"4b1eb0730a36","ui_kits/instagram/StoryScreen.jsx":"8e73983bdb62"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TerraODesignSystem_91237a = window.TerraODesignSystem_91237a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GrainCover.jsx
try { (() => {
/**
 * GrainCover — the signature grainy black-and-white "destaque" cover:
 * a high-grain glass/light texture with the thin TERRAÇO logotype and
 * optional wide-tracked label. Used for social highlight covers, story
 * openers and section dividers.
 *
 * texture: image src for the grain photo (assets/textures/*)
 * ratio: aspect-ratio css string (default '1 / 1')
 * title / subtitle: overlaid thin display copy
 */
function GrainCover({
  texture,
  title = 'TERRAÇO',
  subtitle,
  align = 'center',
  ratio = '1 / 1',
  radius = 0,
  style = {},
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      overflow: 'hidden',
      borderRadius: radius,
      background: texture ? `#0a0a0a url(${texture}) center / cover no-repeat` : '#0a0a0a',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grain-tint)',
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      justifyContent: 'center',
      textAlign: align,
      padding: '10%',
      gap: 14
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 200,
      fontSize: 'clamp(28px, 9cqw, 72px)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--color-off)',
      lineHeight: 1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 400,
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'rgba(242,242,242,0.85)'
    }
  }, subtitle), children));
}
Object.assign(__ds_scope, { GrainCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GrainCover.jsx", error: String((e && e.message) || e) }); }

// components/brand/InformacoesLayout.jsx
try { (() => {
/**
 * InformacoesLayout — the kit's "Informações - Layout" family (the most
 * instanced symbol in the file). Corner metadata that frames every brand
 * guideline slide: brand label, topic, © line and page number.
 * Fills its positioned container; place inside a position:relative slide.
 */
function InformacoesLayout({
  tone = 'dark',
  topic = 'Identidade Visual',
  page = '01',
  brand = 'Terraço · Envidraçamentos',
  copyright = '© Terraço Envidraçamentos · Yamb',
  inset = 76,
  style = {}
}) {
  const fg = tone === 'dark' ? 'var(--color-off)' : 'var(--color-chumbo)';
  const mut = tone === 'dark' ? 'rgba(242,242,242,0.55)' : 'rgba(27,27,27,0.55)';
  const lbl = {
    fontFamily: 'var(--font-label)',
    fontSize: 11,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    position: 'absolute'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset,
      pointerEvents: 'none',
      color: fg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...lbl,
      top: 0,
      left: 0
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lbl,
      top: 0,
      right: 0,
      color: mut,
      textAlign: 'right'
    }
  }, topic), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lbl,
      bottom: 0,
      left: 0,
      color: mut
    }
  }, copyright), /*#__PURE__*/React.createElement("span", {
    style: {
      ...lbl,
      bottom: 0,
      right: 0
    }
  }, page));
}
Object.assign(__ds_scope, { InformacoesLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/InformacoesLayout.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/**
 * Logo — the Terraço brand mark, rendered from the real bitmap
 * lockups shipped in assets/logos/.
 *
 * variant: 'symbol' | 'horizontal' | 'horizontal-descriptor' | 'vertical'
 * tone:    'dark' (white mark, for dark backgrounds)
 *          'light' (dark mark, for light backgrounds)
 * basePath: relative prefix to the project root (e.g. '../../' from a
 *           component card two levels deep). Defaults to ''.
 */
function Logo({
  variant = 'horizontal',
  tone = 'dark',
  basePath = '',
  height,
  style = {},
  alt = 'Terraço Envidraçamentos'
}) {
  const files = {
    'symbol': {
      dark: 'logo-symbol.png',
      light: 'logo-symbol.png'
    },
    'horizontal': {
      dark: 'logo-horizontal-white.png',
      light: 'logo-horizontal.png'
    },
    'horizontal-descriptor': {
      dark: 'logo-horizontal-descriptor-white.png',
      light: 'logo-horizontal-descriptor.png'
    },
    'vertical': {
      dark: 'logo-vertical-white.png',
      light: 'logo-vertical.png'
    }
  };
  const file = (files[variant] || files.horizontal)[tone];
  const defaultH = {
    symbol: 44,
    horizontal: 40,
    'horizontal-descriptor': 56,
    vertical: 120
  }[variant] || 40;
  return /*#__PURE__*/React.createElement("img", {
    src: `${basePath}assets/logos/${file}`,
    alt: alt,
    style: {
      height: height || defaultH,
      width: 'auto',
      display: 'block',
      objectFit: 'contain',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Camera.jsx
try { (() => {
/** Camera — the kit's "Camera" symbol (story composer camera glyph). */
function Camera({
  size = 26,
  color = '#fff',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.7",
    "aria-label": "Camera",
    style: style
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "13",
    rx: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12.5",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6l1.5-2h5L16 6"
  }));
}
Object.assign(__ds_scope, { Camera });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Camera.jsx", error: String((e && e.message) || e) }); }

// components/chrome/HomeIndicator.jsx
try { (() => {
/** HomeIndicator — the kit's "iPhone XS / Home Indicator" symbol. */
function HomeIndicator({
  color = '#fff',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 3,
      background: color
    }
  }));
}
Object.assign(__ds_scope, { HomeIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/HomeIndicator.jsx", error: String((e && e.message) || e) }); }

// components/chrome/StatusBar.jsx
try { (() => {
/**
 * StatusBar — the kit's iOS status bar family ("Bars/Status Bar/Dark Status Bar"
 * plus the Time / Wifi Full / Battery Full / Cellular Connection Full /
 * Connections symbols it composes). Used atop the Instagram mockups.
 */
function StatusBar({
  time = '9:41',
  color = '#fff',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px 0 34px',
      color,
      fontFamily: 'var(--font-system)',
      fontSize: 15,
      fontWeight: 600,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12",
    fill: color,
    "aria-label": "Cellular Connection"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4",
    width: "3",
    height: "8",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "1.5",
    width: "3",
    height: "10.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "0",
    width: "3",
    height: "12",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: color,
    "aria-label": "Wifi"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8.5.7 10.4 10.4 0 0 0 1.3 3.6L2.5 4.9A8.4 8.4 0 0 1 8.5 2.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6c1.2 0 2.3.5 3.1 1.3l1.2-1.3A6.4 6.4 0 0 0 8.5 4a6.4 6.4 0 0 0-4.3 2l1.2 1.3A4.6 4.6 0 0 1 8.5 6Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10",
    r: "1.6"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "13",
    viewBox: "0 0 26 13",
    fill: "none",
    "aria-label": "Battery"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "22",
    height: "12",
    rx: "3.5",
    stroke: color,
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "18",
    height: "9",
    rx: "2",
    fill: color
  }), /*#__PURE__*/React.createElement("rect", {
    x: "24",
    y: "4",
    width: "2",
    height: "5",
    rx: "1",
    fill: color,
    opacity: "0.5"
  }))));
}
Object.assign(__ds_scope, { StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/social/AccountType.jsx
try { (() => {
/** AccountType — the kit's "account type" field: the category line under the name. */
function AccountType({
  children = 'Vidraçaria',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-system)',
      fontSize: 13.5,
      color: 'var(--color-ig-text-2)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { AccountType });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/AccountType.jsx", error: String((e && e.message) || e) }); }

// components/social/HighlightCover.jsx
try { (() => {
/**
 * HighlightCover — Instagram "destaque" (highlight) cover.
 * The Terraço profile uses covers built on the glass mark / grain
 * textures with a thin outer ring, e.g. the "Comece aqui" highlight.
 */
function HighlightCover({
  src,
  label = '',
  size = 84,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": label || 'highlight',
    style: {
      width: size,
      height: size,
      padding: 2,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      background: 'var(--color-ig-bg)',
      cursor: onClick ? 'pointer' : 'default',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: src ? `var(--color-chumbo) url(${src}) center / cover no-repeat` : 'var(--gradient-vidro)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-system)',
      fontSize: 12,
      color: 'var(--text-primary)',
      maxWidth: size + 20,
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { HighlightCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/HighlightCover.jsx", error: String((e && e.message) || e) }); }

// components/social/IGButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IGButton — the action buttons on the Terraço Instagram profile.
 * Mirrors the .fig "Tipo=Seguir" symbol (SF Pro Semibold 14, radius 7).
 */
function IGButton({
  variant = 'follow',
  children,
  icon = null,
  onClick,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    height: 32,
    padding: '0 14px',
    border: 'none',
    borderRadius: 'var(--radius-xs)',
    fontFamily: 'var(--font-system)',
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: 'var(--ls-tight)',
    lineHeight: 1,
    cursor: 'pointer',
    transition: 'filter var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    follow: {
      background: 'var(--color-ig-blue)',
      color: '#fff'
    },
    following: {
      background: 'var(--color-ig-surface)',
      color: '#fff'
    },
    neutral: {
      background: 'var(--color-ig-surface)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: '#fff',
      boxShadow: 'inset 0 0 0 1px var(--color-ig-border)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.neutral),
      ...style
    },
    onMouseDown: e => e.currentTarget.style.filter = 'brightness(0.9)',
    onMouseUp: e => e.currentTarget.style.filter = 'none',
    onMouseLeave: e => e.currentTarget.style.filter = 'none'
  }, rest), icon, children);
}
Object.assign(__ds_scope, { IGButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/IGButton.jsx", error: String((e && e.message) || e) }); }

// components/social/IGTabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IGTabBar — Instagram bottom navigation used in the profile mockup.
 * Generic app chrome (the source file has no custom icon set), drawn
 * as thin line icons matching iOS Instagram.
 */
const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};
function Home() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", _extends({}, S, {
    d: "M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5"
  })));
}
function Search() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("circle", _extends({}, S, {
    cx: "11",
    cy: "11",
    r: "7"
  })), /*#__PURE__*/React.createElement("path", _extends({}, S, {
    d: "m20 20-4-4"
  })));
}
function Plus() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("rect", _extends({}, S, {
    x: "3.5",
    y: "3.5",
    width: "17",
    height: "17",
    rx: "5"
  })), /*#__PURE__*/React.createElement("path", _extends({}, S, {
    d: "M12 8.5v7M8.5 12h7"
  })));
}
function Heart() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", _extends({}, S, {
    d: "M12 20s-7-4.6-7-9.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7-.4c0 4.8-7 9.4-7 9.4Z"
  })));
}
function IGTabBar({
  avatar,
  active = 'home',
  style = {}
}) {
  const items = [{
    key: 'home',
    el: /*#__PURE__*/React.createElement(Home, null)
  }, {
    key: 'search',
    el: /*#__PURE__*/React.createElement(Search, null)
  }, {
    key: 'add',
    el: /*#__PURE__*/React.createElement(Plus, null)
  }, {
    key: 'activity',
    el: /*#__PURE__*/React.createElement(Heart, null)
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 22px 8px',
      background: 'var(--color-ig-bg)',
      borderTop: '1px solid var(--color-ig-border)',
      color: '#fff',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.key,
    style: {
      opacity: active === it.key ? 1 : 0.92,
      display: 'inline-flex'
    }
  }, it.el)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      border: active === 'profile' ? '2px solid #fff' : '1px solid var(--color-ig-border)',
      background: avatar ? `#000 url(${avatar}) center / cover no-repeat` : 'var(--color-ig-surface)'
    }
  }));
}
Object.assign(__ds_scope, { IGTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/IGTabBar.jsx", error: String((e && e.message) || e) }); }

// components/social/InstagramHighlightIcons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InstagramHighlightIcons — the kit's "Instagram highlight icons" family.
 * Wrapper over HighlightCover; icon='01'|'02' picks the source variant
 * (glass mark vs grain-texture cover).
 */
function InstagramHighlightIcons({
  icon = '01',
  src,
  label,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.HighlightCover, _extends({
    src: icon === '01' ? undefined : src,
    label: label
  }, rest));
}
Object.assign(__ds_scope, { InstagramHighlightIcons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/InstagramHighlightIcons.jsx", error: String((e && e.message) || e) }); }

// components/social/ProfileName.jsx
try { (() => {
/** ProfileName — the kit's "Name" field: the profile display name. */
function ProfileName({
  children = 'Terraço Envidraçamentos',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-system)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-primary)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ProfileName });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/ProfileName.jsx", error: String((e && e.message) || e) }); }

// components/social/ProfileStat.jsx
try { (() => {
/**
 * ProfileStat — a Posts / Followers / Following stat column
 * from the Terraço profile header.
 */
function ProfileStat({
  value,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-system)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-primary)',
      lineHeight: 1.2
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-primary)',
      lineHeight: 1.4
    }
  }, label));
}
Object.assign(__ds_scope, { ProfileStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/ProfileStat.jsx", error: String((e && e.message) || e) }); }

// components/social/Seguir.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Seguir — the kit's "Seguir" (Follow) family. Thin wrapper over IGButton
 * exposing the source vocabulary. `seguindo` toggles the Following state.
 */
function Seguir({
  seguindo = false,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.IGButton, _extends({
    variant: seguindo ? 'following' : 'follow'
  }, rest), children || (seguindo ? 'Seguindo' : 'Seguir'));
}
Object.assign(__ds_scope, { Seguir });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Seguir.jsx", error: String((e && e.message) || e) }); }

// components/social/StoryAvatar.jsx
try { (() => {
/**
 * StoryAvatar — circular profile/story avatar with ring states.
 * From the .fig "Perfil + Story" / "Tipo=Storie por ver" symbols.
 * ring: 'unseen' (glass-cyan gradient), 'seen' (muted gray), 'none'.
 */
function StoryAvatar({
  src,
  alt = '',
  size = 84,
  ring = 'unseen',
  label = null,
  onClick,
  style = {}
}) {
  const rings = {
    unseen: 'conic-gradient(from 200deg, var(--color-destaque), var(--color-vidro-400), var(--color-destaque-2), var(--color-destaque))',
    seen: 'var(--color-ig-border)',
    none: 'transparent'
  };
  const pad = ring === 'none' ? 0 : 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": alt || label || 'story',
    style: {
      width: size,
      height: size,
      padding: pad,
      border: 'none',
      borderRadius: '50%',
      background: rings[ring] || rings.none,
      cursor: onClick ? 'pointer' : 'default',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: ring === 'none' ? 'none' : '2px solid var(--color-ig-bg)',
      background: src ? `#000 url(${src}) center / cover no-repeat` : 'var(--color-ig-surface)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-system)',
      fontSize: 12,
      color: 'var(--text-primary)',
      maxWidth: size + 16,
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { StoryAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/StoryAvatar.jsx", error: String((e && e.message) || e) }); }

// components/social/PerfilStory.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PerfilStory — the kit's "Perfil + Story" family. Wrapper over StoryAvatar.
 * tipo: 'porVer' (unseen ring) | 'visto' (seen) | 'seguir' (plain).
 */
function PerfilStory({
  tipo = 'porVer',
  ...rest
}) {
  const ring = tipo === 'visto' ? 'seen' : tipo === 'seguir' ? 'none' : 'unseen';
  return /*#__PURE__*/React.createElement(__ds_scope.StoryAvatar, _extends({
    ring: ring
  }, rest));
}
Object.assign(__ds_scope, { PerfilStory });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/PerfilStory.jsx", error: String((e && e.message) || e) }); }

// components/social/UserName.jsx
try { (() => {
/** UserName — the kit's "user_name" field: the @handle in the header. */
function UserName({
  children = 'terracoenvidracamentos',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-system)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-primary)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { UserName });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/UserName.jsx", error: String((e && e.message) || e) }); }

// components/social/VerifiedBadge.jsx
try { (() => {
/**
 * VerifiedBadge — the Instagram verified check used on the
 * Terraço page ("Verificado pagina" symbol). Tinted with the
 * brand glass-cyan accent rather than IG blue.
 */
function VerifiedBadge({
  size = 18,
  color = 'var(--color-destaque)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    role: "img",
    "aria-label": "Verificado",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 1.6l2.34 1.7 2.9-.02 1 2.72 2.35 1.68-.9 2.76.9 2.76-2.35 1.68-1 2.72-2.9-.02L12 22.4l-2.34-1.7-2.9.02-1-2.72-2.35-1.68.9-2.76-.9-2.76 2.35-1.68 1-2.72 2.9.02L12 1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "var(--color-chumbo)",
    d: "M10.6 15.2l-2.9-2.9 1.32-1.32 1.58 1.58 3.9-3.9 1.32 1.33-5.22 5.2z"
  }));
}
Object.assign(__ds_scope, { VerifiedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/VerifiedBadge.jsx", error: String((e && e.message) || e) }); }

// components/social/VerificadoPagina.jsx
try { (() => {
/**
 * VerificadoPagina — the kit's "Verificado pagina" family. Verified check
 * next to a page name. `verificado` toggles the badge.
 */
function VerificadoPagina({
  nome = 'terracoenvidracamentos',
  verificado = true,
  size = 16,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-system)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      ...style
    }
  }, nome, verificado && /*#__PURE__*/React.createElement(__ds_scope.VerifiedBadge, {
    size: size
  }));
}
Object.assign(__ds_scope, { VerificadoPagina });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/VerificadoPagina.jsx", error: String((e && e.message) || e) }); }

// components/social/Website.jsx
try { (() => {
/** Website — the kit's "website" field: the profile link, tinted glass-cyan. */
function Website({
  children = 'www.terracovidros.com',
  href = '#',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-system)',
      fontSize: 13.5,
      color: 'var(--color-destaque)',
      textDecoration: 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Website });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Website.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/PhoneFrame.jsx
try { (() => {
/* global React */
// PhoneFrame — minimal iPhone bezel for the Instagram mockups.
function PhoneFrame({
  children,
  statusColor = '#fff',
  time = '9:41'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 54,
      background: '#000',
      padding: 5,
      boxShadow: '0 40px 90px rgba(0,0,0,0.55), inset 0 0 0 2px #2a2a2a',
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 49,
      overflow: 'hidden',
      background: 'var(--color-ig-bg)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px 0 34px',
      color: statusColor,
      fontFamily: 'var(--font-system)',
      fontSize: 15,
      fontWeight: 600,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("span", null, time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12",
    fill: statusColor
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4",
    width: "3",
    height: "8",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "1.5",
    width: "3",
    height: "10.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "0",
    width: "3",
    height: "12",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: statusColor
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8.5.7 10.4 10.4 0 0 0 1.3 3.6L2.5 4.9A8.4 8.4 0 0 1 8.5 2.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6c1.2 0 2.3.5 3.1 1.3l1.2-1.3A6.4 6.4 0 0 0 8.5 4a6.4 6.4 0 0 0-4.3 2l1.2 1.3A4.6 4.6 0 0 1 8.5 6Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10",
    r: "1.6"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "13",
    viewBox: "0 0 26 13",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "22",
    height: "12",
    rx: "3.5",
    stroke: statusColor,
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "18",
    height: "9",
    rx: "2",
    fill: statusColor
  }), /*#__PURE__*/React.createElement("rect", {
    x: "24",
    y: "4",
    width: "2",
    height: "5",
    rx: "1",
    fill: statusColor,
    opacity: "0.5"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 122,
      height: 34,
      borderRadius: 20,
      background: '#000',
      zIndex: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children)));
}
window.PhoneFrame = PhoneFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/ProfileScreen.jsx
try { (() => {
/* global React */
// ProfileScreen — the Terraço Instagram profile (@terracoenvidracamentos).
function ProfileScreen({
  onOpenStory,
  assets
}) {
  const NS = window.TerraODesignSystem_91237a;
  const {
    IGButton,
    StoryAvatar,
    HighlightCover,
    VerifiedBadge,
    ProfileStat,
    IGTabBar
  } = NS;
  const {
    photos
  } = assets;
  const [following, setFollowing] = React.useState(false);
  const grid = [photos + 'post-01a.png', photos + 'post-02.png', photos + 'post-03.png', photos + 'post-07.jpg', photos + 'post-08.jpg', photos + 'post-09.jpg'];
  const chevron = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      color: '#fff',
      fontFamily: 'var(--font-system)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2px 16px 10px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 16,
      fontWeight: 700
    }
  }, "terracoenvidracamentos ", /*#__PURE__*/React.createElement(VerifiedBadge, {
    size: 16
  })), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.8"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(StoryAvatar, {
    src: photos + 'profile-story-cover.jpg',
    ring: "unseen",
    size: 88,
    onClick: onOpenStory
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(ProfileStat, {
    value: "129",
    label: "Posts"
  }), /*#__PURE__*/React.createElement(ProfileStat, {
    value: "3.680",
    label: "Followers"
  }), /*#__PURE__*/React.createElement(ProfileStat, {
    value: "230",
    label: "Following"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Terra\xE7o Envidra\xE7amentos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.5,
      marginTop: 3,
      color: '#e8e8e8'
    }
  }, "Vidros inteligentes. Alma sergipana.", /*#__PURE__*/React.createElement("br", null), "Especialistas em envidra\xE7amento de varandas", /*#__PURE__*/React.createElement("br", null), "Mais conforto, seguran\xE7a e valoriza\xE7\xE3o", /*#__PURE__*/React.createElement("br", null), "Atendimento em Aracaju e regi\xE3o \u2193"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      marginTop: 3,
      color: 'var(--color-destaque)'
    }
  }, "www.terracovidros.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(IGButton, {
    variant: following ? 'following' : 'follow',
    style: {
      flex: 2.2
    },
    onClick: () => setFollowing(f => !f)
  }, following ? 'Following' : 'Follow'), /*#__PURE__*/React.createElement(IGButton, {
    variant: "neutral",
    style: {
      flex: 1.6
    }
  }, "Message"), /*#__PURE__*/React.createElement(IGButton, {
    variant: "neutral",
    style: {
      flex: 1.4
    }
  }, "Email"), /*#__PURE__*/React.createElement(IGButton, {
    variant: "neutral",
    style: {
      width: 40,
      padding: 0
    },
    icon: chevron
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 18,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement(HighlightCover, {
    label: "Comece aqui",
    size: 72,
    onClick: onOpenStory
  }), /*#__PURE__*/React.createElement(HighlightCover, {
    src: assets.textures + 'grain-terraco.png',
    label: "Projetos",
    size: 72
  }), /*#__PURE__*/React.createElement(HighlightCover, {
    src: photos + 'post-09.jpg',
    label: "Varandas",
    size: 72
  }), /*#__PURE__*/React.createElement(HighlightCover, {
    src: assets.textures + 'grain-03.png',
    label: "Depoimentos",
    size: 72
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--color-ig-border)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      padding: '11px 0',
      borderBottom: '1.5px solid #fff'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3v18M15 3v18M3 9h18M3 15h18"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      padding: '11px 0',
      color: 'var(--color-ig-text-2)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.6-7-9.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7-.4c0 4.8-7 9.4-7 9.4Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.4"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 2
    }
  }, grid.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      background: `#111 url(${src}) center/cover no-repeat`
    }
  })))), /*#__PURE__*/React.createElement(IGTabBar, {
    avatar: photos + 'profile-story-cover.jpg',
    active: "profile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      display: 'grid',
      placeItems: 'center',
      paddingBottom: 6,
      background: 'var(--color-ig-bg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 130,
      height: 4,
      borderRadius: 3,
      background: '#fff'
    }
  })));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/StoryScreen.jsx
try { (() => {
/* global React */
// StoryScreen — a Terraço Instagram story ("Depoimento Família Queiroz").
function StoryScreen({
  onClose,
  assets
}) {
  const NS = window.TerraODesignSystem_91237a;
  const {
    Logo
  } = NS;
  const {
    photos
  } = assets;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      color: '#fff',
      fontFamily: 'var(--font-system)',
      background: `#000 url(${photos + 'story-familia.png'}) center/cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 160,
      background: 'var(--scrim-top)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 12,
      right: 12,
      display: 'flex',
      gap: 4,
      zIndex: 3
    }
  }, [1, 0, 0].map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 2.5,
      borderRadius: 2,
      background: 'rgba(255,255,255,.35)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: f ? '60%' : 0,
      background: '#fff'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: 14,
      right: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.6)',
      background: `#000 url(${photos + 'profile-story-cover.jpg'}) center/cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "terracoenvidracamentos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, "2h"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "close",
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 92,
      left: 24,
      right: 24,
      zIndex: 2,
      opacity: 0.92
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal-descriptor",
    tone: "dark",
    basePath: assets.base,
    height: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 96,
      padding: '0 26px',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 40,
      lineHeight: 1.05,
      letterSpacing: '.01em',
      textShadow: '0 2px 20px rgba(0,0,0,.5)'
    }
  }, "Depoimento", /*#__PURE__*/React.createElement("br", null), "Fam\xEDlia Queiroz"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      marginTop: 12,
      fontFamily: 'var(--font-label)',
      fontSize: 12,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      background: 'var(--color-destaque)',
      color: 'var(--color-chumbo)',
      padding: '5px 12px',
      borderRadius: 4,
      fontWeight: 600
    }
  }, "Envidra\xE7amento")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '14px 16px 26px',
      background: 'linear-gradient(to top, rgba(0,0,0,.5), transparent)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.7"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "13",
    rx: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12.5",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6l1.5-2h5L16 6"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 44,
      border: '1px solid rgba(255,255,255,.5)',
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      padding: '0 18px',
      fontSize: 14,
      color: 'rgba(255,255,255,.8)'
    }
  }, "Send message"), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.8"
  }))));
}
window.StoryScreen = StoryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/StoryScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GrainCover = __ds_scope.GrainCover;

__ds_ns.InformacoesLayout = __ds_scope.InformacoesLayout;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Camera = __ds_scope.Camera;

__ds_ns.HomeIndicator = __ds_scope.HomeIndicator;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.AccountType = __ds_scope.AccountType;

__ds_ns.HighlightCover = __ds_scope.HighlightCover;

__ds_ns.IGButton = __ds_scope.IGButton;

__ds_ns.IGTabBar = __ds_scope.IGTabBar;

__ds_ns.InstagramHighlightIcons = __ds_scope.InstagramHighlightIcons;

__ds_ns.PerfilStory = __ds_scope.PerfilStory;

__ds_ns.ProfileName = __ds_scope.ProfileName;

__ds_ns.ProfileStat = __ds_scope.ProfileStat;

__ds_ns.Seguir = __ds_scope.Seguir;

__ds_ns.StoryAvatar = __ds_scope.StoryAvatar;

__ds_ns.UserName = __ds_scope.UserName;

__ds_ns.VerificadoPagina = __ds_scope.VerificadoPagina;

__ds_ns.VerifiedBadge = __ds_scope.VerifiedBadge;

__ds_ns.Website = __ds_scope.Website;

})();
