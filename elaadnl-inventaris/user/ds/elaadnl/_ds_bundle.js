/* @ds-bundle: {"format":4,"namespace":"ElaadNLDesignSystem_3820f3","components":[{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx"},{"name":"ChartFrame","sourcePath":"components/charts/ChartFrame.jsx"},{"name":"ChartLegend","sourcePath":"components/charts/ChartLegend.jsx"},{"name":"DonutChart","sourcePath":"components/charts/DonutChart.jsx"},{"name":"LineChart","sourcePath":"components/charts/LineChart.jsx"},{"name":"Sparkline","sourcePath":"components/charts/Sparkline.jsx"},{"name":"SERIES","sourcePath":"components/charts/chart-utils.js"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"PHOSPHOR_PATHS","sourcePath":"components/core/phosphor-paths.js"},{"name":"PHOSPHOR_VIEWBOX","sourcePath":"components/core/phosphor-paths.js"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KeyValueList","sourcePath":"components/data/KeyValueList.jsx"},{"name":"StatTile","sourcePath":"components/data/StatTile.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"LinkArrow","sourcePath":"components/navigation/LinkArrow.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/charts/BarChart.jsx":"78dc34be514b","components/charts/ChartFrame.jsx":"772391547196","components/charts/ChartLegend.jsx":"97826a038cba","components/charts/DonutChart.jsx":"73942cf6120a","components/charts/LineChart.jsx":"abe6fe1c2f44","components/charts/Sparkline.jsx":"29386389857b","components/charts/chart-utils.js":"2ffa586baf4b","components/core/Badge.jsx":"8bcfb4dd0fb9","components/core/Button.jsx":"a85a989745cf","components/core/Card.jsx":"864e3c1c7f75","components/core/Icon.jsx":"95e73138c139","components/core/IconButton.jsx":"27de39124bb9","components/core/Logo.jsx":"125b8583e07b","components/core/Tag.jsx":"a73551f276a5","components/core/phosphor-paths.js":"079f82594994","components/data/DataTable.jsx":"5966e4b3c62a","components/data/KeyValueList.jsx":"4ffabd72795c","components/data/StatTile.jsx":"0afc3089cc77","components/feedback/Alert.jsx":"984fc21785f9","components/feedback/Dialog.jsx":"50ab0212e641","components/feedback/ProgressBar.jsx":"2fa0dd18519c","components/feedback/Toast.jsx":"64164f798c91","components/feedback/Tooltip.jsx":"46226a7355bc","components/forms/Checkbox.jsx":"316b38e91440","components/forms/FormField.jsx":"f60907d7b24c","components/forms/Input.jsx":"28bbe33410b2","components/forms/Radio.jsx":"897c124e891e","components/forms/SearchField.jsx":"1938123c97a2","components/forms/Select.jsx":"00fa90af26f5","components/forms/Switch.jsx":"a42ac095db83","components/forms/Textarea.jsx":"f54c1bb43aaa","components/navigation/Breadcrumb.jsx":"d058f71e431f","components/navigation/LinkArrow.jsx":"1430b67d2a07","components/navigation/Pagination.jsx":"4a5f54a057f7","components/navigation/Tabs.jsx":"333fb86d3ac3","ui_kits/testlab-portal/OverviewScreen.jsx":"618d619037d1","ui_kits/testlab-portal/PortalShell.jsx":"e5fb6007e085","ui_kits/testlab-portal/SessionScreen.jsx":"2508dedc5203","ui_kits/website/HomeScreen.jsx":"2f055df23c6b","ui_kits/website/ProjectScreen.jsx":"d9f8d715f3dd","ui_kits/website/PublicationsScreen.jsx":"c6b69fa5f1dc","ui_kits/website/SiteChrome.jsx":"f9bfbe69afbd"},"inlinedExternals":[],"unexposedExports":[{"name":"extent","sourcePath":"components/charts/chart-utils.js"},{"name":"linePath","sourcePath":"components/charts/chart-utils.js"},{"name":"niceTicks","sourcePath":"components/charts/chart-utils.js"},{"name":"seriesColor","sourcePath":"components/charts/chart-utils.js"}]} */

(() => {

const __ds_ns = (window.ElaadNLDesignSystem_3820f3 = window.ElaadNLDesignSystem_3820f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/charts/ChartLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARK = {
  line: c => ({
    width: 14,
    height: 0,
    borderTop: 'var(--chart-stroke) solid ' + c
  }),
  dashed: c => ({
    width: 14,
    height: 0,
    borderTop: 'var(--chart-stroke) dashed ' + c
  }),
  area: c => ({
    width: 12,
    height: 10,
    background: c,
    opacity: .22,
    border: '1px solid ' + c
  }),
  swatch: c => ({
    width: 12,
    height: 12,
    background: c,
    borderRadius: 2
  }),
  dot: c => ({
    width: 8,
    height: 8,
    background: c,
    borderRadius: '50%'
  })
};
function ChartLegend({
  items = [],
  layout = 'row',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: layout === 'column' ? 'column' : 'row',
      flexWrap: 'wrap',
      gap: layout === 'column' ? 'var(--space-2)' : 'var(--space-2) var(--space-5)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      ...MARK[it.mark || 'swatch'](it.color)
    }
  }), it.label, it.value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { ChartLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ChartLegend.jsx", error: String((e && e.message) || e) }); }

// components/charts/ChartFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chrome around any plot: eyebrow, title, unit, legend, footnote.
 * Keeps every ElaadNL chart labelled the same way, whatever draws the data.
 */
function ChartFrame({
  eyebrow,
  title,
  unit,
  legend,
  footnote,
  actions,
  height,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), (eyebrow || title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      marginTop: eyebrow ? 2 : 0
    }
  }, title)), actions), unit && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--chart-axis-label)'
    }
  }, unit), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      minWidth: 0
    }
  }, children), legend && /*#__PURE__*/React.createElement(__ds_scope.ChartLegend, {
    items: legend
  }), footnote && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-subtle)',
      lineHeight: 'var(--lh-normal)'
    }
  }, footnote));
}
Object.assign(__ds_scope, { ChartFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ChartFrame.jsx", error: String((e && e.message) || e) }); }

// components/charts/chart-utils.js
try { (() => {
// Shared geometry helpers for the ElaadNL chart primitives. No dependencies.
const SERIES = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)', 'var(--chart-7)', 'var(--chart-8)'];
function seriesColor(i) {
  return SERIES[i % SERIES.length];
}
function extent(values, {
  zeroBased = true
} = {}) {
  const flat = values.flat().filter(v => typeof v === 'number' && !Number.isNaN(v));
  let min = Math.min(...flat),
    max = Math.max(...flat);
  if (zeroBased && min > 0) min = 0;
  if (min === max) {
    max = min + 1;
  }
  return [min, max];
}
function niceTicks(min, max, count = 4) {
  const span = max - min;
  const raw = span / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= raw) || mag * 10;
  const out = [];
  for (let t = Math.ceil(min / step) * step; t <= max + 1e-9; t += step) out.push(Number(t.toFixed(10)));
  return out;
}
function linePath(points, {
  stepped = false,
  smooth = false
} = {}) {
  if (!points.length) return '';
  if (stepped) {
    return points.reduce((d, p, i) => i === 0 ? `M${p[0]},${p[1]}` : `${d} H${p[0]} V${p[1]}`, '');
  }
  if (!smooth || points.length < 3) {
    return points.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
  }
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i],
      [x1, y1] = points[i + 1];
    const mx = (x0 + x1) / 2;
    d += ` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  return d;
}
Object.assign(__ds_scope, { SERIES, seriesColor, extent, niceTicks, linePath });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/chart-utils.js", error: String((e && e.message) || e) }); }

// components/charts/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BarChart({
  series = [],
  labels = [],
  variant = 'grouped',
  height = 240,
  width = 640,
  yTicks = 4,
  unitSuffix = '',
  threshold,
  thresholdLabel,
  showGrid = true,
  highlightIndex,
  style,
  ...rest
}) {
  const norm = series.map(s => Array.isArray(s) ? {
    values: s
  } : s);
  const horizontal = variant === 'horizontal';
  const PAD = horizontal ? {
    top: 6,
    right: 30,
    bottom: 20,
    left: 96
  } : {
    top: 8,
    right: 8,
    bottom: 24,
    left: 40
  };
  const stacked = variant === 'stacked';
  const totals = labels.map((_, i) => norm.reduce((a, s) => a + (s.values[i] || 0), 0));
  const [min, max] = __ds_scope.extent(stacked ? [totals] : norm.map(s => s.values), {
    zeroBased: true
  });
  const ticks = __ds_scope.niceTicks(min, max, yTicks);
  const hi = Math.max(max, ticks[ticks.length - 1]);
  const iw = width - PAD.left - PAD.right,
    ih = height - PAD.top - PAD.bottom;
  const n = labels.length || 1;
  const groupSize = (horizontal ? ih : iw) / n;
  const gap = groupSize * 0.28;
  const lanes = stacked ? 1 : norm.length;
  const bw = (groupSize - gap) / lanes;
  const scale = v => v / (hi || 1) * (horizontal ? iw : ih);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    role: "img",
    style: style
  }, rest), showGrid && ticks.map(t => horizontal ? /*#__PURE__*/React.createElement("g", {
    key: t
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD.left + scale(t),
    x2: PAD.left + scale(t),
    y1: PAD.top,
    y2: PAD.top + ih,
    stroke: "var(--chart-grid)",
    strokeWidth: "1",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("text", {
    x: PAD.left + scale(t),
    y: height - 6,
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontSize: "10",
    fontWeight: "600",
    fill: "var(--chart-axis-label)"
  }, t, unitSuffix)) : /*#__PURE__*/React.createElement("g", {
    key: t
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD.left,
    x2: width - PAD.right,
    y1: PAD.top + ih - scale(t),
    y2: PAD.top + ih - scale(t),
    stroke: "var(--chart-grid)",
    strokeWidth: "1",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("text", {
    x: PAD.left - 8,
    y: PAD.top + ih - scale(t),
    textAnchor: "end",
    dominantBaseline: "middle",
    fontFamily: "var(--font-display)",
    fontSize: "10",
    fontWeight: "600",
    fill: "var(--chart-axis-label)"
  }, t, unitSuffix))), threshold != null && !horizontal && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: PAD.left,
    x2: width - PAD.right,
    y1: PAD.top + ih - scale(threshold),
    y2: PAD.top + ih - scale(threshold),
    stroke: "var(--chart-threshold)",
    strokeWidth: "1",
    strokeDasharray: "4 3",
    vectorEffect: "non-scaling-stroke"
  }), thresholdLabel && /*#__PURE__*/React.createElement("text", {
    x: width - PAD.right,
    y: PAD.top + ih - scale(threshold) - 5,
    textAnchor: "end",
    fontFamily: "var(--font-display)",
    fontSize: "10",
    fontWeight: "700",
    fill: "var(--chart-threshold)"
  }, thresholdLabel)), labels.map((l, i) => {
    let acc = 0;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, norm.map((s, si) => {
      const v = s.values[i] || 0;
      const c = highlightIndex === i ? 'var(--chart-highlight)' : s.color || __ds_scope.seriesColor(si);
      if (horizontal) {
        const yy = PAD.top + i * groupSize + gap / 2 + (stacked ? 0 : si * bw);
        const xx = PAD.left + (stacked ? scale(acc) : 0);
        acc += v;
        return /*#__PURE__*/React.createElement("rect", {
          key: si,
          x: xx,
          y: yy,
          width: Math.max(scale(v), 1),
          height: bw - 2,
          rx: "var(--chart-bar-radius)",
          fill: c
        });
      }
      const len = scale(v);
      const yy = PAD.top + ih - (stacked ? scale(acc) + len : len);
      acc += v;
      return /*#__PURE__*/React.createElement("rect", {
        key: si,
        x: PAD.left + i * groupSize + gap / 2 + (stacked ? 0 : si * bw),
        y: yy,
        width: bw - 2,
        height: Math.max(len, 1),
        rx: "var(--chart-bar-radius)",
        fill: c
      });
    }), horizontal ? /*#__PURE__*/React.createElement("text", {
      x: PAD.left - 10,
      y: PAD.top + i * groupSize + groupSize / 2,
      textAnchor: "end",
      dominantBaseline: "middle",
      fontFamily: "var(--font-display)",
      fontSize: "10",
      fontWeight: "600",
      fill: "var(--chart-axis-label)"
    }, l) : /*#__PURE__*/React.createElement("text", {
      x: PAD.left + i * groupSize + groupSize / 2,
      y: height - 8,
      textAnchor: "middle",
      fontFamily: "var(--font-display)",
      fontSize: "10",
      fontWeight: "600",
      letterSpacing: ".06em",
      fill: "var(--chart-axis-label)"
    }, l));
  }));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/DonutChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DonutChart({
  data = [],
  size = 180,
  thickness = 22,
  variant = 'donut',
  centerValue,
  centerLabel,
  startAngle = -90,
  style,
  ...rest
}) {
  const total = data.reduce((a, d) => a + (d.value || 0), 0) || 1;
  const r = size / 2 - thickness / 2;
  const c = size / 2;
  const gauge = variant === 'gauge';
  const sweep = gauge ? 180 : 360;
  const start = gauge ? -180 : startAngle;
  const arc = (a0, a1) => {
    const p = a => [c + r * Math.cos(a * Math.PI / 180), c + r * Math.sin(a * Math.PI / 180)];
    const [x0, y0] = p(a0),
      [x1, y1] = p(a1);
    return `M${x0},${y0} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1},${y1}`;
  };
  let a = start;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: gauge ? size / 2 + thickness : size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${size} ${gauge ? size / 2 + thickness : size}`,
    width: size,
    role: "img"
  }, /*#__PURE__*/React.createElement("path", {
    d: arc(start, start + sweep - 0.01),
    fill: "none",
    stroke: "var(--grey-100)",
    strokeWidth: thickness
  }), data.map((d, i) => {
    const span = d.value / total * sweep;
    const path = arc(a, a + span - (data.length > 1 ? 1.2 : 0));
    a += span;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: path,
      fill: "none",
      stroke: d.color || __ds_scope.seriesColor(i),
      strokeWidth: thickness,
      strokeLinecap: "butt"
    });
  })), (centerValue != null || centerLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: gauge ? 'flex-end' : 'center',
      paddingBottom: gauge ? 2 : 0
    }
  }, centerValue != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size / 4.6,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--chart-ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, centerValue), centerLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, centerLabel)));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/LineChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  top: 8,
  right: 8,
  bottom: 22,
  left: 40
};
function LineChart({
  series = [],
  labels = [],
  variant = 'line',
  height = 240,
  width = 640,
  yTicks = 4,
  unitSuffix = '',
  threshold,
  thresholdLabel,
  forecastFrom,
  showGrid = true,
  showDots = false,
  zeroBased = true,
  style,
  ...rest
}) {
  const norm = series.map(s => Array.isArray(s) ? {
    values: s
  } : s);
  const all = norm.map(s => s.values);
  const [min, max] = __ds_scope.extent(threshold != null ? [...all, [threshold]] : all, {
    zeroBased
  });
  const ticks = __ds_scope.niceTicks(min, max, yTicks);
  const lo = Math.min(min, ticks[0]),
    hi = Math.max(max, ticks[ticks.length - 1]);
  const iw = width - PAD.left - PAD.right,
    ih = height - PAD.top - PAD.bottom;
  const n = Math.max(...all.map(v => v.length), 1);
  const x = i => PAD.left + (n === 1 ? iw / 2 : i / (n - 1) * iw);
  const y = v => PAD.top + ih - (v - lo) / (hi - lo || 1) * ih;
  const stacked = variant === 'stacked-area';
  const stepped = variant === 'stepped';
  const filled = variant === 'area' || stacked;

  // cumulative baselines for stacked areas
  const base = new Array(n).fill(0);
  const drawn = norm.map(s => {
    const pts = s.values.map((v, i) => {
      const top = stacked ? base[i] + v : v;
      const p = [x(i), y(top), stacked ? y(base[i]) : y(lo)];
      return p;
    });
    if (stacked) s.values.forEach((v, i) => {
      base[i] += v;
    });
    return pts;
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    role: "img",
    style: style
  }, rest), showGrid && ticks.map(t => /*#__PURE__*/React.createElement("g", {
    key: t
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD.left,
    x2: width - PAD.right,
    y1: y(t),
    y2: y(t),
    stroke: "var(--chart-grid)",
    strokeWidth: "1",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("text", {
    x: PAD.left - 8,
    y: y(t),
    textAnchor: "end",
    dominantBaseline: "middle",
    fontFamily: "var(--font-display)",
    fontSize: "10",
    fontWeight: "600",
    fill: "var(--chart-axis-label)"
  }, t, unitSuffix))), threshold != null && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: PAD.left,
    x2: width - PAD.right,
    y1: y(threshold),
    y2: y(threshold),
    stroke: "var(--chart-threshold)",
    strokeWidth: "1",
    strokeDasharray: "4 3",
    vectorEffect: "non-scaling-stroke"
  }), thresholdLabel && /*#__PURE__*/React.createElement("text", {
    x: width - PAD.right,
    y: y(threshold) - 5,
    textAnchor: "end",
    fontFamily: "var(--font-display)",
    fontSize: "10",
    fontWeight: "700",
    fill: "var(--chart-threshold)"
  }, thresholdLabel)), drawn.map((pts, si) => {
    const c = norm[si].color || __ds_scope.seriesColor(si);
    const top = pts.map(p => [p[0], p[1]]);
    const cut = forecastFrom != null ? Math.max(0, forecastFrom) : null;
    const solid = cut != null ? top.slice(0, cut + 1) : top;
    const dashed = cut != null ? top.slice(cut) : null;
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, filled && /*#__PURE__*/React.createElement("path", {
      d: `${__ds_scope.linePath(top, {
        stepped
      })} L${pts[pts.length - 1][0]},${pts[pts.length - 1][2]} ${[...pts].reverse().map(p => `L${p[0]},${p[2]}`).join(' ')} Z`,
      fill: c,
      opacity: stacked ? .82 : .14
    }), /*#__PURE__*/React.createElement("path", {
      d: __ds_scope.linePath(solid, {
        stepped
      }),
      fill: "none",
      stroke: c,
      strokeWidth: "var(--chart-stroke)",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      vectorEffect: "non-scaling-stroke"
    }), dashed && dashed.length > 1 && /*#__PURE__*/React.createElement("path", {
      d: __ds_scope.linePath(dashed, {
        stepped
      }),
      fill: "none",
      stroke: "var(--chart-forecast)",
      strokeWidth: "var(--chart-stroke)",
      strokeDasharray: "6 4",
      strokeLinejoin: "round",
      vectorEffect: "non-scaling-stroke"
    }), showDots && top.map((p, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: "var(--chart-dot)",
      fill: "var(--surface-card)",
      stroke: c,
      strokeWidth: "2",
      vectorEffect: "non-scaling-stroke"
    })));
  }), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: height - 6,
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontSize: "10",
    fontWeight: "600",
    letterSpacing: ".06em",
    fill: "var(--chart-axis-label)"
  }, l)));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sparkline({
  values = [],
  width = 120,
  height = 34,
  variant = 'line',
  color = 'var(--chart-1)',
  showLast = false,
  style,
  ...rest
}) {
  const min = Math.min(...values),
    max = Math.max(...values),
    span = max - min || 1;
  const pts = values.map((v, i) => [i / Math.max(values.length - 1, 1) * width, height - 3 - (v - min) / span * (height - 6)]);
  if (variant === 'bars') {
    const bw = width / values.length;
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: `0 0 ${width} ${height}`,
      width: width,
      height: height,
      role: "img",
      style: style
    }, rest), values.map((v, i) => {
      const h = Math.max((v - min) / span * (height - 4), 1);
      return /*#__PURE__*/React.createElement("rect", {
        key: i,
        x: i * bw,
        y: height - h,
        width: Math.max(bw - 1.5, 1),
        height: h,
        rx: "1",
        fill: color,
        opacity: i === values.length - 1 && showLast ? 1 : .55
      });
    }));
  }
  const d = __ds_scope.linePath(pts, {
    stepped: variant === 'stepped'
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${width} ${height}`,
    width: width,
    height: height,
    role: "img",
    preserveAspectRatio: "none",
    style: style
  }, rest), variant === 'area' && /*#__PURE__*/React.createElement("path", {
    d: `${d} L${width},${height} L0,${height} Z`,
    fill: color,
    opacity: ".14"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "var(--chart-stroke)",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }), showLast && pts.length > 0 && /*#__PURE__*/React.createElement("circle", {
    cx: pts[pts.length - 1][0],
    cy: pts[pts.length - 1][1],
    r: "2.5",
    fill: color
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--grey-100)',
    color: 'var(--grey-700)'
  },
  brand: {
    background: 'var(--blue-50)',
    color: 'var(--brand-primary)'
  },
  accent: {
    background: 'var(--yellow-100)',
    color: 'var(--olive-700)'
  },
  success: {
    background: 'var(--status-success-bg)',
    color: 'var(--olive-700)'
  },
  warning: {
    background: 'var(--status-warning-bg)',
    color: '#8a7200'
  },
  danger: {
    background: 'var(--status-danger-bg)',
    color: 'var(--status-danger)'
  },
  info: {
    background: 'var(--status-info-bg)',
    color: 'var(--brand-primary)'
  },
  solid: {
    background: 'var(--brand-primary)',
    color: 'var(--text-on-brand)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...TONES[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--brand-primary)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid var(--brand-primary)'
  },
  accent: {
    background: 'var(--brand-accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--brand-accent)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--grey-0)',
    color: 'var(--brand-primary)',
    border: '1px solid var(--grey-0)'
  },
  danger: {
    background: 'var(--status-danger)',
    color: 'var(--grey-0)',
    border: '1px solid var(--status-danger)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--brand-primary-hover)',
    borderColor: 'var(--brand-primary-hover)'
  },
  secondary: {
    background: 'var(--blue-50)'
  },
  accent: {
    background: 'var(--yellow-400)',
    borderColor: 'var(--yellow-400)'
  },
  ghost: {
    background: 'var(--blue-50)'
  },
  inverse: {
    background: 'var(--blue-50)'
  },
  danger: {
    background: '#9d2a21',
    borderColor: '#9d2a21'
  }
};
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--control-pad-x-sm)',
    fontSize: 'var(--fs-xs)',
    gap: '6px'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 var(--control-pad-x-md)',
    fontSize: 'var(--fs-sm)',
    gap: '8px'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--control-pad-x-lg)',
    fontSize: 'var(--fs-base)',
    gap: '10px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-wide)',
    textDecoration: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control), transform var(--dur-fast) var(--ease-standard)',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...(disabled ? {
      opacity: .42,
      pointerEvents: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s,
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'raised',
  interactive = false,
  padding = 'var(--card-pad)',
  as = 'div',
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as === 'a' ? 'a' : as;
  const base = {
    raised: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    },
    flat: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none'
    },
    muted: {
      background: 'var(--surface-card-muted)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    brand: {
      background: 'var(--surface-brand)',
      border: '1px solid var(--surface-brand)',
      color: 'var(--text-on-brand)',
      boxShadow: 'none'
    },
    gradient: {
      background: 'var(--gradient-brand)',
      border: 'none',
      color: 'var(--text-on-brand)',
      boxShadow: 'none'
    }
  }[variant];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      overflow: 'hidden',
      display: 'block',
      textDecoration: 'none',
      borderBottom: undefined,
      transition: 'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-standard)',
      ...base,
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-md)',
        transform: 'translateY(-2px)',
        borderColor: 'var(--border-brand)'
      } : null),
      ...(interactive ? {
        cursor: 'pointer'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 42,
  lg: 52
};
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = SIZES[size];
  const base = {
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--grey-0)',
      color: 'var(--brand-primary)',
      border: '1px solid var(--border-default)'
    },
    filled: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand-primary)'
    },
    accent: {
      background: 'var(--brand-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--brand-accent)'
    }
  }[variant];
  const hov = {
    ghost: {
      background: 'var(--blue-50)'
    },
    outline: {
      background: 'var(--blue-50)',
      borderColor: 'var(--border-brand)'
    },
    filled: {
      background: 'var(--brand-primary-hover)'
    },
    accent: {
      background: 'var(--yellow-400)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: 0,
      transition: 'var(--transition-control)',
      ...base,
      ...(hover && !disabled ? hov : null),
      ...(disabled ? {
        opacity: .42,
        pointerEvents: 'none'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILE = {
  elaad: 'logo-elaadnl.png',
  testlab: 'logo-elaad-testlab.png'
};

/**
 * `basePath` defaults to '../../assets/logos', which resolves correctly from any
 * page two levels below the design-system root (component cards, ui_kits/*,
 * templates/*). Pass an explicit basePath or src from anywhere else.
 */
function Logo({
  brand = 'elaad',
  height = 44,
  basePath = '../../assets/logos',
  src,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src || `${basePath}/${FILE[brand]}`,
    alt: brand === 'testlab' ? 'Elaad Testlab' : 'ElaadNL',
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      background: selected ? 'var(--brand-primary)' : hover && clickable ? 'var(--blue-50)' : 'var(--grey-25)',
      color: selected ? 'var(--text-on-brand)' : 'var(--text-body)',
      border: '1px solid ' + (selected ? 'var(--brand-primary)' : 'var(--border-subtle)'),
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      cursor: 'pointer',
      opacity: .6,
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/phosphor-paths.js
try { (() => {
/**
 * Phosphor Icons (regular weight) path data, embedded from
 * @phosphor-icons/core@2.1.1 — MIT licensed, see assets/fonts/OFL.txt siblings
 * and https://github.com/phosphor-icons/core for the licence.
 *
 * Embedded rather than linked so icons work offline, inside sandboxed previews
 * and in exported artefacts, and so they inherit currentColor. All glyphs are
 * drawn on Phosphor's 256×256 grid.
 *
 * To add a glyph: copy the `d` attribute(s) from
 * @phosphor-icons/core/assets/regular/<name>.svg — never redraw one by hand.
 */
const PHOSPHOR_PATHS = {
  'lightning': 'M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z',
  'battery-charging': 'M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM138.81,123.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L119.06,136H100a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L112.94,120H132A8,8,0,0,1,138.81,123.79Z',
  'plug': 'M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z',
  'plugs-connected': 'M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z',
  'car': 'M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z',
  'truck': 'M255.42,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,255.42,117ZM192,88h34.58l9.6,24H192ZM32,72H176v64H32ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm81-24H111a32,32,0,0,0-62,0H32V152H176v12.31A32.11,32.11,0,0,0,161,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm48-24H223a32.06,32.06,0,0,0-31-24V128h48Z',
  'pulse': 'M240,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.71A8,8,0,0,1,200,120h32A8,8,0,0,1,240,128Z',
  'gauge': 'M207.06,72.67A111.24,111.24,0,0,0,128,40h-.4C66.07,40.21,16,91,16,153.13V176a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V152A111.25,111.25,0,0,0,207.06,72.67ZM224,176H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,176H32V153.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V80a8,8,0,0,0,16,0V56.33A96.14,96.14,0,0,1,221,128H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z',
  'shield-check': 'M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z',
  'flask': 'M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z',
  'hard-drives': 'M208,136H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,64H48V152H208v48Zm0-160H48A16,16,0,0,0,32,56v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,64H48V56H208v48ZM192,80a12,12,0,1,1-12-12A12,12,0,0,1,192,80Zm0,96a12,12,0,1,1-12-12A12,12,0,0,1,192,176Z',
  'cube': 'M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z',
  'factory': 'M116,176a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h28A8,8,0,0,1,116,176Zm60-8H148a8,8,0,0,0,0,16h28a8,8,0,0,0,0-16Zm64,48a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16h8V88a8,8,0,0,1,12.8-6.4L96,120V88a8,8,0,0,1,12.8-6.4l38.74,29.05L159.1,29.74A16.08,16.08,0,0,1,174.94,16h18.12A16.08,16.08,0,0,1,208.9,29.74l15,105.13s.08.78.08,1.13v72h8A8,8,0,0,1,240,216Zm-77.86-94.4,8.53,6.4h36.11L193.06,32H174.94ZM48,208H208V144H168a8,8,0,0,1-4.8-1.6l-14.4-10.8,0,0L112,104v32a8,8,0,0,1-12.8,6.4L48,104Z',
  'tag': 'M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z',
  'file-text': 'M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z',
  'download-simple': 'M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z',
  'calendar-blank': 'M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z',
  'buildings': 'M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z',
  'users': 'M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z',
  'user': 'M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z',
  'arrow-right': 'M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z',
  'arrow-left': 'M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z',
  'magnifying-glass': 'M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z',
  'arrow-square-out': 'M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z',
  'caret-down': 'M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z',
  'caret-right': 'M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z',
  'warning': 'M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z',
  'check-circle': 'M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z',
  'x-circle': 'M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z',
  'warning-circle': 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z',
  'info': 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z',
  'squares-four': 'M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z',
  'image': 'M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z',
  'plus': 'M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z',
  'pencil-simple': 'M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z',
  'x': 'M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z',
  'sign-out': 'M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z',
  'list': 'M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z',
  'funnel': 'M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z',
  'clock': 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z'
};

// Brand marks, used only in social-follow rows (site footer). Same Phosphor
// regular set, so they match the rest of the vocabulary in weight and grid.
Object.assign(PHOSPHOR_PATHS, {
  'linkedin-logo': 'M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z',
  'youtube-logo': 'M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z',
  'instagram-logo': 'M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z',
  'facebook-logo': 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z',
  'x-logo': 'M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z'
});
const PHOSPHOR_VIEWBOX = '0 0 256 256';
Object.assign(__ds_scope, { PHOSPHOR_PATHS, PHOSPHOR_VIEWBOX });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/phosphor-paths.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Phosphor is ElaadNL's de-facto icon set (its Lab Management frontend already
 * uses @phosphor-icons/react). Glyphs are rendered as inline SVG filled with
 * currentColor, so an icon always inherits the colour of the text, button or
 * tile it sits in — and works offline, in sandboxed previews and in exports.
 *
 * ElaadNL styling = Phosphor `regular`. `size` accepts a number (px) or any
 * CSS length; the default `1.25em` scales with its container's font size,
 * which keeps icons correct in responsive and mobile layouts.
 */
function Icon({
  name,
  size = '1.25em',
  title,
  style,
  ...rest
}) {
  const d = __ds_scope.PHOSPHOR_PATHS[name];
  if (!d && typeof console !== 'undefined') {
    console.warn(`[ElaadNL Icon] unknown glyph "${name}" — add its Phosphor path to components/core/phosphor-paths.js`);
  }
  const px = typeof size === 'number' ? `${size}px` : size;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: __ds_scope.PHOSPHOR_VIEWBOX,
    width: px,
    height: px,
    fill: "currentColor",
    role: title ? 'img' : 'presentation',
    "aria-hidden": title ? undefined : 'true',
    "aria-label": title,
    focusable: "false",
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      verticalAlign: '-0.15em',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("title", null, title), d && /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  zebra = true,
  style,
  ...rest
}) {
  const pad = dense ? '8px 12px' : '14px 16px';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--grey-0)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: dense ? 'var(--fs-xs)' : 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-muted)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: pad,
      textAlign: c.align || 'left',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: zebra && i % 2 ? 'var(--grey-25)' : 'transparent'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: pad,
      textAlign: c.align || 'left',
      color: 'var(--text-body)',
      borderBottom: '1px solid var(--border-subtle)',
      fontVariantNumeric: c.align === 'right' ? 'tabular-nums' : 'normal'
    }
  }, r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KeyValueList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function KeyValueList({
  items = [],
  columns = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
      gap: 'var(--space-4) var(--space-8)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '4px 0 0',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      fontWeight: 'var(--fw-medium)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { KeyValueList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KeyValueList.jsx", error: String((e && e.message) || e) }); }

// components/data/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  label,
  value,
  unit,
  delta,
  deltaTone = 'neutral',
  icon,
  variant = 'card',
  style,
  ...rest
}) {
  const brand = variant === 'brand' || variant === 'gradient';
  const bg = {
    card: 'var(--surface-card)',
    muted: 'var(--surface-card-muted)',
    brand: 'var(--surface-brand)',
    gradient: 'var(--gradient-brand)'
  }[variant];
  const dc = {
    up: 'var(--status-success)',
    down: 'var(--status-danger)',
    neutral: 'var(--text-muted)'
  }[deltaTone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 'var(--space-5)',
      background: bg,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid ' + (variant === 'card' ? 'var(--border-subtle)' : 'transparent'),
      boxShadow: variant === 'card' ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: brand ? 'rgba(255,255,255,.85)' : 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: brand ? 'rgba(255,255,255,.9)' : 'var(--brand-secondary)'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-3xl)',
      lineHeight: 1,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: brand ? 'var(--grey-0)' : 'var(--text-heading)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-md)',
      fontWeight: 'var(--fw-medium)',
      color: brand ? 'rgba(255,255,255,.8)' : 'var(--text-muted)'
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--fs-xs)',
      color: brand ? 'rgba(255,255,255,.85)' : dc
    }
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--status-info-bg)',
    fg: 'var(--brand-primary)',
    bar: 'var(--brand-secondary)'
  },
  success: {
    bg: 'var(--status-success-bg)',
    fg: 'var(--olive-700)',
    bar: 'var(--status-success)'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    fg: '#8a7200',
    bar: 'var(--status-warning)'
  },
  danger: {
    bg: 'var(--status-danger-bg)',
    fg: 'var(--status-danger)',
    bar: 'var(--status-danger)'
  }
};
function Alert({
  tone = 'info',
  title,
  icon,
  onDismiss,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      borderTop: '3px solid ' + t.bar,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      flex: '0 0 auto',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-sm)',
      color: t.fg,
      marginBottom: children ? 4 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)'
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Sluiten",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: t.fg,
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  footer,
  width = 520,
  onClose,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-panel)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--grey-0)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--gradient-brand)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lg)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Sluiten",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: 20,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7")), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-muted)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  label,
  showValue = false,
  height = 8,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    brand: 'var(--brand-primary)',
    accent: 'var(--brand-accent)',
    gradient: 'var(--gradient-brand)',
    success: 'var(--status-success)',
    danger: 'var(--status-danger)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      background: 'var(--grey-100)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DOT = {
  info: 'var(--brand-secondary)',
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  danger: 'var(--status-danger)'
};
function Toast({
  tone = 'info',
  title,
  description,
  action,
  onDismiss,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 300,
      maxWidth: 420,
      padding: 'var(--space-4)',
      background: 'var(--grey-0)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: DOT[tone],
      marginTop: 6,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      marginTop: 2,
      lineHeight: 'var(--lh-normal)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Sluiten",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 'var(--z-overlay)',
      padding: '6px 10px',
      background: 'var(--grey-800)',
      color: 'var(--grey-0)',
      fontSize: 'var(--fs-2xs)',
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--brand-primary)' : 'var(--grey-0)',
      border: '1px solid ' + (on ? 'var(--brand-primary)' : 'var(--border-default)'),
      transition: 'var(--transition-control)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 2,
      background: 'var(--grey-0)'
    }
  }) : checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormField({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      lineHeight: 1.4,
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  disabled = false,
  iconLeft,
  type = 'text',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    height: 'var(--control-h-md)',
    padding: '0 var(--space-3)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-sm)',
    color: 'var(--text-body)',
    background: disabled ? 'var(--grey-50)' : 'var(--grey-0)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid ' + (invalid ? 'var(--status-danger)' : focus ? 'var(--border-brand)' : 'var(--border-default)'),
    boxShadow: focus ? 'var(--shadow-focus)' : 'none',
    outline: 'none',
    transition: 'var(--transition-control)',
    opacity: disabled ? .6 : 1
  };
  const input = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...field,
      ...(iconLeft ? {
        paddingLeft: 38
      } : null),
      ...style
    }
  }, rest));
  if (!iconLeft) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-subtle)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, iconLeft), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  disabled = false,
  label,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--grey-0)',
      border: '1px solid ' + (checked ? 'var(--brand-primary)' : 'var(--border-default)'),
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--brand-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  placeholder = 'Zoeken',
  value,
  onChange,
  onSubmit,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    iconLeft: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "magnifying-glass",
      size: 16
    }),
    "aria-label": placeholder
  }));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  disabled = false,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 'var(--control-h-md)',
      padding: '0 36px 0 var(--space-3)',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--grey-50)' : 'var(--grey-0)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (invalid ? 'var(--status-danger)' : focus ? 'var(--border-brand)' : 'var(--border-default)'),
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      opacity: disabled ? .6 : 1,
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      marginTop: -2,
      width: 8,
      height: 8,
      borderRight: '2px solid var(--brand-primary)',
      borderBottom: '2px solid var(--brand-primary)',
      transform: 'rotate(45deg) translateY(-25%)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-primary)' : 'var(--grey-200)',
      position: 'relative',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--grey-0)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: 'var(--space-3)',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--grey-50)' : 'var(--grey-0)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      border: '1px solid ' + (invalid ? 'var(--status-danger)' : focus ? 'var(--border-brand)' : 'var(--border-default)'),
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-control)',
      opacity: disabled ? .6 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Kruimelpad",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-heading)',
        fontWeight: 'var(--fw-semibold)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        color: 'var(--text-muted)',
        borderBottom: 'none'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--grey-300)'
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LinkArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LinkArrow({
  href = '#',
  tone = 'brand',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'inverse' ? 'var(--grey-0)' : 'var(--brand-primary)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      textDecoration: 'none',
      borderBottom: 'none',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: 7,
      height: 7,
      borderRight: '2px solid currentColor',
      borderTop: '2px solid currentColor',
      transform: 'rotate(45deg) translateX(' + (hover ? '2px' : '0') + ')',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { LinkArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LinkArrow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  style,
  ...rest
}) {
  const go = p => onChange && p >= 1 && p <= pageCount && onChange(p);
  const pages = [];
  for (let p = 1; p <= pageCount; p++) {
    if (p === 1 || p === pageCount || Math.abs(p - page) <= 1) pages.push(p);else if (pages[pages.length - 1] !== '…') pages.push('…');
  }
  const cell = extra => ({
    minWidth: 34,
    height: 34,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 'var(--fw-semibold)',
    border: '1px solid var(--border-subtle)',
    background: 'var(--grey-0)',
    color: 'var(--brand-primary)',
    transition: 'var(--transition-control)',
    ...extra
  });
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Paginering",
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page - 1),
    disabled: page === 1,
    "aria-label": "Vorige",
    style: cell({
      opacity: page === 1 ? .4 : 1
    })
  }, "\u2039"), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'e' + i,
    style: {
      color: 'var(--text-subtle)',
      padding: '0 4px'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    "aria-current": p === page || undefined,
    style: cell(p === page ? {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      borderColor: 'var(--brand-primary)'
    } : null)
  }, p)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page + 1),
    disabled: page === pageCount,
    "aria-label": "Volgende",
    style: cell({
      opacity: page === pageCount ? .4 : 1
    })
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'underline' ? 'var(--space-6)' : 'var(--space-1)',
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      background: variant === 'pills' ? 'var(--grey-25)' : 'transparent',
      padding: variant === 'pills' ? '4px' : 0,
      borderRadius: variant === 'pills' ? 'var(--radius-md)' : 0,
      ...style
    }
  }, rest), items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-sm)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: on ? variant === 'pills' ? 'var(--brand-primary)' : 'var(--text-heading)' : 'var(--text-muted)',
        background: variant === 'pills' ? on ? 'var(--grey-0)' : 'transparent' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: variant === 'pills' ? '8px 16px' : '0 0 12px',
        borderRadius: variant === 'pills' ? 'var(--radius-sm)' : 0,
        boxShadow: variant === 'pills' && on ? 'var(--shadow-xs)' : 'none',
        borderBottom: variant === 'underline' ? '3px solid ' + (on ? 'var(--brand-accent)' : 'transparent') : 'none',
        marginBottom: variant === 'underline' ? -1 : 0,
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/testlab-portal/OverviewScreen.jsx
try { (() => {
const {
  Card,
  StatTile,
  DataTable,
  Badge,
  Button,
  Icon,
  ProgressBar,
  Alert,
  Tabs,
  LinkArrow
} = window.__ELAAD;
const SESSIONS = [{
  id: 'TS-2026-118',
  station: 'CS-01 · Alfen Eve',
  type: 'Interoperabiliteit',
  p: '22 kW',
  thd: '3,1 %',
  st: 'ok'
}, {
  id: 'TS-2026-117',
  station: 'CS-07 · ABB Terra',
  type: 'Power Quality',
  p: '50 kW',
  thd: '4,8 %',
  st: 'warn'
}, {
  id: 'TS-2026-116',
  station: 'CS-03 · Wallbox',
  type: 'Smart Charging',
  p: '11 kW',
  thd: '2,4 %',
  st: 'ok'
}, {
  id: 'TS-2026-115',
  station: 'CS-12 · Kempower',
  type: 'Power Quality',
  p: '150 kW',
  thd: '7,2 %',
  st: 'fail'
}, {
  id: 'TS-2026-114',
  station: 'CS-05 · HEMS-rig',
  type: 'Interoperabiliteit',
  p: '7,4 kW',
  thd: '2,9 %',
  st: 'ok'
}];
const BADGE = {
  ok: ['success', 'Geslaagd'],
  warn: ['warning', 'Aandacht'],
  fail: ['danger', 'Afgekeurd']
};
function Sparkline({
  points,
  color = 'var(--brand-primary)'
}) {
  const max = Math.max(...points),
    min = Math.min(...points);
  const d = points.map((p, i) => `${i / (points.length - 1) * 100},${34 - (p - min) / (max - min || 1) * 30}`).join(' L');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 36",
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: 44
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: points.map((p, i) => `${i / (points.length - 1) * 100},${34 - (p - min) / (max - min || 1) * 30}`).join(' '),
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round"
  }));
}
function OverviewScreen() {
  const [range, setRange] = React.useState('Week');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Meetreeks onvolledig",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "warning",
      size: 18
    }),
    onDismiss: () => {}
  }, "Sessie TS-2026-115 mist 3 minuten aan data tussen 14:02 en 14:05."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Sessies deze week",
    value: "18",
    delta: "+4 t.o.v. vorige week",
    deltaTone: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "flask",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Bezetting testbanken",
    value: "76",
    unit: "%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "gauge",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Openstaande bevindingen",
    value: "7",
    delta: "\u22122 deze week",
    deltaTone: "down",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "warning-circle",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    variant: "gradient",
    label: "Piekvermogen lab",
    value: "312",
    unit: "kW",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "lightning",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lg)'
    }
  }, "Labvermogen"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pills",
    items: ['Dag', 'Week', 'Maand'],
    value: range,
    onChange: setRange
  })), /*#__PURE__*/React.createElement(Sparkline, {
    points: [120, 180, 150, 240, 210, 290, 260, 312, 270, 230, 250, 200]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-2xs)',
      color: 'var(--text-subtle)',
      fontFamily: 'var(--font-display)',
      letterSpacing: '.08em'
    }
  }, ['MA', 'DI', 'WO', 'DO', 'VR', 'ZA', 'ZO'].map(d => /*#__PURE__*/React.createElement("span", {
    key: d
  }, d)))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-5)',
      fontSize: 'var(--fs-lg)'
    }
  }, "Testbanken"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "AC-bank 1",
    value: 92,
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "AC-bank 2",
    value: 64,
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "DC-bank",
    value: 78,
    showValue: true,
    tone: "gradient"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "HEMS-rig",
    value: 31,
    showValue: true
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lg)'
    }
  }, "Recente testsessies"), /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#"
  }, "Alle sessies")), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      border: 'none',
      borderRadius: 0
    },
    columns: [{
      key: 'id',
      label: 'Sessie'
    }, {
      key: 'station',
      label: 'Laadstation'
    }, {
      key: 'type',
      label: 'Testtype'
    }, {
      key: 'p',
      label: 'Vermogen',
      align: 'right'
    }, {
      key: 'thd',
      label: 'THD',
      align: 'right'
    }, {
      key: 'st',
      label: 'Status'
    }],
    rows: SESSIONS.map(s => ({
      ...s,
      id: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          color: 'var(--brand-primary)'
        }
      }, s.id),
      st: /*#__PURE__*/React.createElement(Badge, {
        tone: BADGE[s.st][0],
        dot: true
      }, BADGE[s.st][1])
    }))
  })));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/testlab-portal/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/testlab-portal/PortalShell.jsx
try { (() => {
const {
  Logo,
  Icon,
  Badge,
  Tooltip
} = window.__ELAAD;
const NAV = [{
  label: 'Overzicht',
  icon: 'squares-four'
}, {
  label: 'Testsessies',
  icon: 'flask'
}, {
  label: 'Laadstations',
  icon: 'plug'
}, {
  label: 'Metingen',
  icon: 'pulse'
}, {
  label: 'Rapporten',
  icon: 'file-text'
}, {
  label: 'Kalender',
  icon: 'calendar-blank'
}];
function PortalShell({
  view,
  onNavigate,
  title,
  subtitle,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-muted)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 236,
      flex: '0 0 auto',
      background: 'var(--blue-800)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-elaad-testlab.png",
    alt: "Elaad Testlab",
    style: {
      width: '100%',
      background: '#fff',
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '0 var(--space-3)'
    }
  }, NAV.map(n => {
    const on = n.label === view;
    return /*#__PURE__*/React.createElement("button", {
      key: n.label,
      onClick: () => onNavigate && onNavigate(n.label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: '10px 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-sm)',
        fontWeight: on ? 700 : 500,
        background: on ? 'rgba(255,255,255,.12)' : 'transparent',
        color: on ? '#fff' : 'rgba(255,255,255,.72)',
        borderLeft: '3px solid ' + (on ? 'var(--brand-accent)' : 'transparent'),
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 17
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--space-5)',
      color: 'rgba(255,255,255,.5)',
      fontSize: 'var(--fs-2xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--gradient-brand)',
      borderRadius: 2,
      marginBottom: 'var(--space-4)'
    }
  }), "Testlab Arnhem \xB7 v4.2")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      padding: 'var(--space-5) var(--space-8)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-xl)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), actions, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Ingelogd als M. de Vries"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--blue-50)',
      color: 'var(--brand-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-sm)'
    }
  }, "MV"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-8)'
    }
  }, children)));
}
Object.assign(window, {
  PortalShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/testlab-portal/PortalShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/testlab-portal/SessionScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Icon,
  Badge,
  Dialog,
  FormField,
  Input,
  Select,
  Textarea,
  Checkbox,
  Switch,
  KeyValueList,
  DataTable,
  Toast,
  Tag,
  Radio
} = window.__ELAAD;
function SessionScreen() {
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [live, setLive] = React.useState(true);
  const [mode, setMode] = React.useState('ac');
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(false), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lg)',
      flex: 1
    }
  }, "Nieuwe testsessie"), /*#__PURE__*/React.createElement(Switch, {
    checked: live,
    onChange: e => setLive(e.target.checked),
    label: "Live meetwaarden"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Laadstation",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Selecteer station",
    options: ['CS-01 · Alfen Eve', 'CS-03 · Wallbox', 'CS-07 · ABB Terra', 'CS-12 · Kempower']
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Testtype",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Selecteer testtype",
    options: ['Interoperabiliteit', 'Power Quality', 'Smart Charging', 'Cybersecurity']
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Sessiecode",
    hint: "Automatisch gegenereerd, aanpasbaar"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "TS-2026-119"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Normkader"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Selecteer norm",
    options: ['EV-211 (IEC 62443)', 'EV-311 (IEC 62443)', 'ISO 15118-2', 'OpenADR 3.0']
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Laadmodus",
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "mode",
    checked: mode === 'ac',
    onChange: () => setMode('ac'),
    label: "AC laden (max 22 kW)"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "mode",
    checked: mode === 'dc',
    onChange: () => setMode('dc'),
    label: "DC snelladen (max 350 kW)"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "mode",
    checked: mode === 'v2g',
    onChange: () => setMode('v2g'),
    label: "Bidirectioneel (V2G)"
  }))), /*#__PURE__*/React.createElement(FormField, {
    label: "Opmerkingen",
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Bijzonderheden over de opstelling\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Meetgegevens automatisch archiveren"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Concept opslaan"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setOpen(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Sessie starten")))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lg)',
      flex: 1
    }
  }, "Meetkanalen"), /*#__PURE__*/React.createElement(Badge, {
    tone: live ? 'success' : 'neutral',
    dot: true
  }, live ? 'Live' : 'Gepauzeerd')), /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    style: {
      border: 'none',
      borderRadius: 0
    },
    columns: [{
      key: 'k',
      label: 'Kanaal'
    }, {
      key: 'v',
      label: 'Waarde',
      align: 'right'
    }, {
      key: 'n',
      label: 'Norm',
      align: 'right'
    }, {
      key: 's',
      label: 'Status'
    }],
    rows: [{
      k: 'Spanning L1',
      v: '230,4 V',
      n: '207–253 V',
      s: /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Binnen")
    }, {
      k: 'Stroom L1',
      v: '31,8 A',
      n: '≤ 32 A',
      s: /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Grens")
    }, {
      k: 'THD spanning',
      v: '3,1 %',
      n: '≤ 8 %',
      s: /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Binnen")
    }, {
      k: 'Flikker Pst',
      v: '0,62',
      n: '≤ 1,0',
      s: /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Binnen")
    }, {
      k: 'Cos φ',
      v: '0,98',
      n: '≥ 0,95',
      s: /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Binnen")
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      position: 'sticky',
      top: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "muted"
  }, /*#__PURE__*/React.createElement(KeyValueList, {
    items: [{
      label: 'Testbank',
      value: 'AC-bank 2'
    }, {
      label: 'Operator',
      value: 'M. de Vries'
    }, {
      label: 'Gestart',
      value: '—'
    }, {
      label: 'Verwachte duur',
      value: '3 u 20 min'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "raised"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 var(--space-4)',
      fontSize: 'var(--fs-base)'
    }
  }, "Checklist vooraf"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Aardlekbeveiliging getest"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Meetkabels gekalibreerd"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Firmwareversie vastgelegd"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Backend-koppeling gecontroleerd"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--fs-base)'
    }
  }, "Labels"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, ['Interoperabiliteit', 'V2G', 'SCALE', 'Klantopdracht'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    onRemove: () => {}
  }, t))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Testsessie starten",
    description: "De sessie start direct en registreert meetwaarden.",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Annuleren"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        setToast(true);
      }
    }, "Starten"))
  }, /*#__PURE__*/React.createElement(KeyValueList, {
    columns: 2,
    items: [{
      label: 'Sessie',
      value: 'TS-2026-119'
    }, {
      label: 'Station',
      value: 'CS-01 · Alfen Eve'
    }, {
      label: 'Testtype',
      value: 'Interoperabiliteit'
    }, {
      label: 'Norm',
      value: 'ISO 15118-2'
    }]
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Testsessie gestart",
    description: "TS-2026-119 \xB7 CS-01 \xB7 Alfen Eve",
    onDismiss: () => setToast(false)
  })));
}
Object.assign(window, {
  SessionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/testlab-portal/SessionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon,
  LinkArrow,
  StatTile
} = window.__ELAAD;
const NEWS = [{
  date: '31 juli 2026',
  title: 'Nieuwe aansluitspecificaties 4.0 bereiden laadpalen voor op slimme fundering',
  topic: 'Netbeheerderskeuringen',
  photo: 'connector-ccs-detail.jpg'
}, {
  date: '20 juli 2026',
  title: 'ElaadNL test implementatie OpenADR voor dynamisch netbewust laden',
  topic: 'Smart Charging',
  photo: 'engineer-measurement-bench.jpg'
}, {
  date: '13 juli 2026',
  title: 'Hoe veilig is de digitale infrastructuur van een heavy duty laadplein?',
  topic: 'Cybersecurity',
  photo: 'truck-dashboard-detail.jpg'
}, {
  date: '13 juli 2026',
  title: 'Effect statisch netbewust laden op netcongestie Utrecht onderzocht',
  topic: 'Smart Charging',
  photo: 'car-charging-detail.jpg'
}];
const PROJECTS = [{
  title: 'Energie Management Systemen (EMS) op de bouwplaats',
  tags: ['Logistiek', 'Versnellen proces'],
  photo: 'testlab-hall-wide.jpg'
}, {
  title: 'BuildZero',
  tags: ['Logistiek'],
  photo: 'truck-dashboard-detail.jpg'
}, {
  title: 'Interoperabiliteit in Home Energy Management',
  tags: ['Smart Charging', 'Interoperabiliteit'],
  photo: 'car-charging-detail.jpg'
}, {
  title: 'Slimme Fundering',
  tags: ['Netbeheerderskeuringen', 'Interoperabiliteit'],
  photo: 'connector-ccs-detail.jpg'
}];
const EVENTS = [{
  kind: 'Live event',
  when: 'dinsdag 8 september 2026 · 12:00 – 17:30 uur',
  title: 'Midterm Event Charging Energy Hubs',
  sub: 'Charging Energy Hubs'
}, {
  kind: 'Live event',
  when: 'woensdag 25 – donderdag 26 november 2026',
  title: 'Test evenement Residentiële Flexibiliteit: derde editie',
  sub: 'Twee hele dagen in het Elaad Testlab'
}, {
  kind: 'Live event',
  when: 'najaar 2026 · 9.00 – 17.00 uur',
  title: 'Train de trainer ‘laadpunten voor EV’: 2e editie',
  sub: 'Vindt plaats in najaar 2026'
}];
const PHOTO = '../../assets/photography/';
function MediaSlot({
  height = 200,
  label,
  src,
  radius = 'var(--radius-lg) var(--radius-lg) 0 0'
}) {
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: PHOTO + src,
    alt: label || '',
    style: {
      height,
      width: '100%',
      objectFit: 'cover',
      borderRadius: radius,
      display: 'block',
      flex: '0 0 auto'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--grey-100)',
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--grey-300)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 26,
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      marginTop: 6,
      fontFamily: 'var(--font-display)',
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, label || 'Beeldbank')));
}
function SectionHead({
  title,
  linkLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#"
  }, linkLabel));
}
function HomeScreen({
  onOpenProject
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--blue-700)',
      minHeight: 520,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO + 'testlab-hall-wide.jpg',
    alt: "Elaad Testlab in Arnhem",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingTop: 'var(--space-16)',
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      maxWidth: 820,
      fontSize: 'clamp(34px,4.4vw,60px)',
      lineHeight: 1.06,
      margin: 0
    }
  }, "ElaadNL test en onderzoekt het slim en duurzaam opladen van elektrische voertuigen"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Meer informatie over het testlab"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg"
  }, "Bekijk onze publicaties"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 6,
      background: 'var(--gradient-brand)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      padding: 'var(--space-10) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Laadpunten getest",
    value: "1.284",
    delta: "+12% t.o.v. 2025",
    deltaTone: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plug",
      size: 20
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Publicaties",
    value: "167",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 20
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Lopende projecten",
    value: "38",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "pulse",
      size: 20
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    variant: "gradient",
    label: "Netbeheerders",
    value: "6",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "buildings",
      size: 20
    })
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Nieuws",
    linkLabel: "Alle berichten"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, NEWS.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    variant: "raised",
    interactive: true,
    as: "a",
    href: "#",
    padding: "0"
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    height: 150,
    src: n.photo,
    label: n.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, n.date), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-md)',
      margin: 'var(--space-2) 0 var(--space-4)',
      lineHeight: 1.3
    }
  }, n.title), /*#__PURE__*/React.createElement(Tag, null, n.topic))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-brand)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: '#fff'
    }
  }, "In the spotlights"), /*#__PURE__*/React.createElement(LinkArrow, {
    tone: "inverse",
    href: "#"
  }, "Alle projecten")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    variant: "raised",
    interactive: true,
    padding: "0",
    onClick: () => onOpenProject && onOpenProject(p)
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    height: 130,
    src: p.photo,
    label: p.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Lopend project"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-md)',
      margin: 0,
      lineHeight: 1.3
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#",
    style: {
      marginTop: 'auto'
    }
  }, "Bekijk project"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Evenementen",
    linkLabel: "Alle evenementen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, EVENTS.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.title,
    variant: "flat",
    interactive: true,
    as: "a",
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, e.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, e.when)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-lg)',
      margin: 'var(--space-3) 0 var(--space-2)'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, e.sub)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-brand)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: 0,
      maxWidth: 620
    }
  }, "Schrijf je in en blijf op de hoogte van al ons nieuws"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Nieuwsbrief")))));
}
Object.assign(window, {
  HomeScreen,
  MediaSlot,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectScreen.jsx
try { (() => {
const {
  Card,
  Tag,
  Badge,
  Icon,
  Button,
  Breadcrumb,
  KeyValueList,
  Tabs,
  ProgressBar,
  LinkArrow,
  StatTile
} = window.__ELAAD;
function ProjectScreen({
  project,
  onBack
}) {
  const [tab, setTab] = React.useState('Aanpak');
  const title = project && project.title || 'Slimme Fundering';
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--grey-600)',
      minHeight: 340,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/connector-ccs-detail.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      paddingBottom: 'var(--space-10)',
      paddingTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      marginBottom: 'var(--space-4)'
    },
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Projecten',
      href: '#'
    }, {
      label: title
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Lopend project"), /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Testen")), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: 0,
      maxWidth: 760
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 5,
      background: 'var(--gradient-brand)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-md)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-body)'
    }
  }, "Laadpalen worden steeds slimmer, maar de fundering waarop ze staan verandert nauwelijks mee. In dit project onderzoeken we met netbeheerders en fabrikanten hoe een gestandaardiseerde \u201Cslimme fundering\u201D de aanleg versnelt en het laadpunt voorbereidt op netbewust laden."), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Aanpak', 'Resultaten', 'Publicaties'],
    value: tab,
    onChange: setTab,
    style: {
      margin: 'var(--space-8) 0 var(--space-6)'
    }
  }), tab === 'Aanpak' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We werken in drie stappen: inventarisatie van bestaande funderingsvarianten, laboratoriumtesten in het Elaad Testlab, en een veldproef bij twee netbeheerders."), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Projectvoortgang",
    value: 62,
    showValue: true,
    tone: "gradient"
  })), tab === 'Resultaten' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Varianten getest",
    value: "14"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Aanlegtijd korter",
    value: "31",
    unit: "%",
    variant: "muted"
  })), tab === 'Publicaties' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, ['Aansluitspecificaties Laadobjecten 3x25A–3x80A v4.0', 'Onepager Slimme Fundering'].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "flat",
    interactive: true,
    as: "a",
    href: "#",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18,
    style: {
      color: 'var(--brand-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-heading)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 'var(--space-8)'
    }
  }, ['Netbeheerderskeuringen', 'Interoperabiliteit', 'Versnellen proces', 'Laadpaalkeuringen'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBack,
    style: {
      marginTop: 'var(--space-8)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    })
  }, "Terug naar projecten")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      position: 'sticky',
      top: 150
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "muted"
  }, /*#__PURE__*/React.createElement(KeyValueList, {
    items: [{
      label: 'Looptijd',
      value: '2024 – 2027'
    }, {
      label: 'Partners',
      value: 'Liander, Stedin, Enexis'
    }, {
      label: 'Thema',
      value: 'Interoperabiliteit'
    }, {
      label: 'Contact',
      value: 'testlab@elaad.nl'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "gradient"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-lg)',
      margin: '0 0 var(--space-3)'
    }
  }, "Testen in het Elaad Testlab?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.9)',
      fontSize: 'var(--fs-sm)',
      margin: '0 0 var(--space-5)'
    }
  }, "Laat je laadstation of HEMS toetsen op interoperabiliteit, power quality en cybersecurity."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Neem contact op"))))));
}
Object.assign(window, {
  ProjectScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PublicationsScreen.jsx
try { (() => {
const {
  Card,
  Tag,
  Badge,
  Icon,
  Input,
  Select,
  Checkbox,
  Pagination,
  Button,
  LinkArrow
} = window.__ELAAD;
const GROUPS = [{
  title: 'Bidirectioneel laden',
  items: [{
    t: 'V2G Implementation Guide',
    y: '2025',
    kind: 'PDF'
  }, {
    t: 'Technical requirements for purchasing and operating Smart and Bidirectional Charging v1.0',
    y: '2025',
    kind: 'PDF'
  }, {
    t: 'Outlook: Bidirectioneel laden: welke kant gaat het op?',
    y: '2025',
    kind: 'Outlook'
  }, {
    t: 'SCALE: V2G Interoperability testing',
    y: '2025',
    kind: 'PDF'
  }]
}, {
  title: 'Smart Charging',
  items: [{
    t: 'Nationaal Laadonderzoek 2025',
    y: '2025',
    kind: 'Rapport'
  }, {
    t: 'Guide to Smart Charging Solutions',
    y: '2025',
    kind: 'PDF'
  }, {
    t: 'Results of large scale technical smart charging test of electric vehicles',
    y: '2025',
    kind: 'PDF'
  }, {
    t: 'Flexpower3: meer laden op een vol elektriciteitsnet',
    y: '2024',
    kind: 'Rapport'
  }]
}, {
  title: 'Power Quality',
  items: [{
    t: 'TEPQEV whitepaper: Standards for 2–150 kHz',
    y: '2023',
    kind: 'Whitepaper'
  }, {
    t: 'Power Quality Guidelines (Enedis & ElaadNL)',
    y: '2022',
    kind: 'PDF'
  }]
}];
const TOPICS = ['Bidirectioneel laden', 'Residentiële flexibiliteit', 'Smart Charging', 'Cyber security', 'Quickscans', 'Outlooks', 'Public Key Infrastructure', 'Nationaal Laadonderzoek', 'Power Quality'];
function PublicationsScreen() {
  const [q, setQ] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [checked, setChecked] = React.useState(['Smart Charging']);
  const toggle = t => setChecked(c => c.includes(t) ? c.filter(x => x !== t) : [...c, t]);
  const match = s => !q || s.toLowerCase().includes(q.toLowerCase());
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: 'var(--space-12) 0 var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Kennisbank"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-2) 0 var(--space-3)'
    }
  }, "Publicaties"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 640,
      margin: 0,
      fontSize: 'var(--fs-md)',
      color: 'var(--text-muted)'
    }
  }, "Op deze pagina vind je onze belangrijkste publicaties over uiteenlopende onderwerpen."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 150,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-sm)',
      marginBottom: 'var(--space-3)'
    }
  }, "Zoeken"), /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Titel of trefwoord",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifying-glass",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-sm)',
      marginBottom: 'var(--space-3)'
    }
  }, "Jaar"), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Alle jaren",
    options: ['2026', '2025', '2024', '2023']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-sm)',
      marginBottom: 'var(--space-3)'
    }
  }, "Onderwerp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, TOPICS.map(t => /*#__PURE__*/React.createElement(Checkbox, {
    key: t,
    checked: checked.includes(t),
    onChange: () => toggle(t),
    label: t
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)'
    }
  }, GROUPS.map(g => {
    const items = g.items.filter(i => match(i.t));
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: g.title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-xl)'
      }
    }, g.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-subtle)'
      }
    }, items.length, " publicaties")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, items.map(i => /*#__PURE__*/React.createElement(Card, {
      key: i.t,
      variant: "flat",
      interactive: true,
      as: "a",
      href: "#",
      padding: "var(--space-4) var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--blue-50)',
        color: 'var(--brand-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-heading)'
      }
    }, i.t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        marginTop: 4,
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", null, i.y), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, i.kind))), /*#__PURE__*/React.createElement(Icon, {
      name: "download-simple",
      size: 18,
      style: {
        color: 'var(--brand-primary)'
      }
    }))))));
  }), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 8,
    onChange: setPage
  })))));
}
Object.assign(window, {
  PublicationsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PublicationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Logo,
  Icon,
  Button,
  LinkArrow
} = window.__ELAAD;
const TOP = ['Publicaties', 'Data', 'Beeldbank', 'Vacatures', 'Over ons', 'Contact'];
const MAIN = [{
  label: 'Home'
}, {
  label: 'Onderzoek',
  children: ['Smart Charging', 'Human Capital', 'Open Source', 'Power Quality', 'Logistiek', 'Data-analyse en Outlooks', 'Cybersecurity', 'Versnellen proces', 'Gedragsonderzoek']
}, {
  label: 'Testen',
  children: ['Testen algemeen', 'Interoperabiliteit', 'Netbeheerderskeuringen', 'Power Quality', 'Smart Charging', 'Cybersecurity']
}, {
  label: 'Projecten'
}, {
  label: 'Evenementen'
}, {
  label: 'Nieuws'
}];
function SiteHeader({
  active,
  onNavigate
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 200,
      background: '#fff',
      boxShadow: '0 1px 0 var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-muted)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 38
    }
  }, TOP.map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(t);
    },
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      borderBottom: 'none',
      fontWeight: 500
    }
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--brand-primary)',
      borderBottom: 'none',
      fontWeight: 700,
      fontFamily: 'var(--font-display)'
    }
  }, "EN"))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      height: 92
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('Home');
    },
    style: {
      borderBottom: 'none',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    brand: "elaad",
    height: 64
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    },
    onMouseLeave: () => setOpen(null)
  }, MAIN.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(item.children ? item.label : null)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(item.label);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      borderBottom: '3px solid ' + (active === item.label ? 'var(--brand-accent)' : 'transparent'),
      paddingBottom: 6,
      color: active === item.label ? 'var(--text-heading)' : 'var(--text-body)'
    }
  }, item.label, item.children && /*#__PURE__*/React.createElement(Icon, {
    name: "caret-down",
    size: 14
  })), item.children && open === item.label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -16,
      marginTop: 10,
      minWidth: 260,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-2)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--gradient-brand)',
      margin: '-8px -8px 8px',
      borderRadius: '6px 6px 0 0'
    }
  }), item.children.map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(c);
    },
    style: {
      padding: '9px 12px',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      borderBottom: 'none',
      borderRadius: 'var(--radius-sm)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--blue-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, c))))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Zoeken",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--brand-primary)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "magnifying-glass",
    size: 20
  })))));
}
const PARTNERS = ['Stedin', 'Enexis', 'Coteq', 'Liander', 'Westland Infra', 'Rendo'];
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-muted)',
      padding: 'var(--space-10) 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Een initiatief van de netbeheerders"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, PARTNERS.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-md)',
      fontWeight: 700,
      color: 'var(--grey-300)'
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue-800)',
      color: 'rgba(255,255,255,.78)',
      padding: 'var(--space-12) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    brand: "elaad",
    height: 56,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: 6
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      maxWidth: 380
    }
  }, "Kennis- en innovatiecentrum ElaadNL onderzoekt en test de mogelijkheden voor Smart Charging: elektrische voertuigen slim en duurzaam opladen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, ['linkedin-logo', 'youtube-logo', 'x-logo', 'instagram-logo', 'facebook-logo'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    "aria-label": n,
    style: {
      borderBottom: 'none',
      color: 'rgba(255,255,255,.8)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 20
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-base)',
      marginBottom: 'var(--space-4)'
    }
  }, "Onderwerpen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Smart Charging', 'Power Quality', 'Cybersecurity', 'Interoperabiliteit', 'Logistiek'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'rgba(255,255,255,.78)',
      borderBottom: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-base)',
      marginBottom: 'var(--space-4)'
    }
  }, "Organisatie"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Over ons', 'Vacatures', 'Contact', 'Privacyverklaring', 'Responsible Disclosure Policy'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'rgba(255,255,255,.78)',
      borderBottom: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      marginTop: 'var(--space-10)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid rgba(255,255,255,.14)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,.55)'
    }
  }, "Copyright \xA9 ElaadNL 2026")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.ChartFrame = __ds_scope.ChartFrame;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.SERIES = __ds_scope.SERIES;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.PHOSPHOR_PATHS = __ds_scope.PHOSPHOR_PATHS;

__ds_ns.PHOSPHOR_VIEWBOX = __ds_scope.PHOSPHOR_VIEWBOX;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KeyValueList = __ds_scope.KeyValueList;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.LinkArrow = __ds_scope.LinkArrow;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
