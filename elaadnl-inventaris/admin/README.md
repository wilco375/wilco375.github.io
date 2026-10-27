# Inventaris admin — design reference

This is a design mockup created in a visual design tool, exported as a
standalone page. Treat it as a REFERENCE MOCKUP, not production code:
the markup and inline styles carry the design's precise values — colors,
font sizes, spacing, radii, shadows, layout — which an implementation
should replicate faithfully in its own components and styling system
rather than copy wholesale.

## Contents

- `Main.dc.html` — the artboard (a Design Component: an `<x-dc>`
  template + a small logic class). The values to replicate live in its
  inline `style="…"` attributes and the `<helmet><style>` block.
- `ds/elaadnl/_ds_bundle.js` — referenced resource
- `ds/elaadnl/styles.css` — referenced resource
- `ds/elaadnl/tokens/base.css` — referenced resource
- `ds/elaadnl/tokens/breakpoints.css` — referenced resource
- `ds/elaadnl/tokens/charts.css` — referenced resource
- `ds/elaadnl/tokens/colors.css` — referenced resource
- `ds/elaadnl/tokens/fonts.css` — referenced resource
- `ds/elaadnl/tokens/shape.css` — referenced resource
- `ds/elaadnl/tokens/spacing.css` — referenced resource
- `ds/elaadnl/tokens/typography.css` — referenced resource
- `ds/elaadnl/assets/logos/logo-elaadnl.png` — referenced resource
- `ds/elaadnl/ui_kits/testlab-portal/OverviewScreen.jsx` — referenced resource
- `ds/elaadnl/ui_kits/testlab-portal/PortalShell.jsx` — referenced resource
- `ds/elaadnl/ui_kits/testlab-portal/SessionScreen.jsx` — referenced resource
- `ds/elaadnl/ui_kits/website/HomeScreen.jsx` — referenced resource
- `ds/elaadnl/ui_kits/website/ProjectScreen.jsx` — referenced resource
- `ds/elaadnl/ui_kits/website/PublicationsScreen.jsx` — referenced resource
- `ds/elaadnl/ui_kits/website/SiteChrome.jsx` — referenced resource
- `support.js`, `vendor/react*.js` — the runtime that renders the
  component in a browser; not part of the design.

## Viewing

Serve the folder (e.g. `python3 -m http.server`) and open `Main.dc.html`;
some browsers block the scripts over file://.
