# Eye Comfort

The **Eye Comfort** library is designed to improve user experience by reducing eye strain and making long viewing sessions more comfortable. It can be integrated into any JavaScript application to enable night/eye-comfort mode, screen brightness adjustments, and (soon) font-size controls, helping users stay comfortable during extended use.

Under the hood it relies on the CSS `filter` property, so visual changes are hardware-accelerated and generally safe for performance in modern browsers.

## Features

- Night Mode (`clsNightMode`) – configurable dim + warm (sepia) effect
- Brightness (`clsBrightness`) – global or per-element brightness control
- Font Size Adjustment – *in progress*

## Function & Options

### `clsNightMode()`

Initializes an eye-comfort / night-light controller for a page or specific element.
Returns an object with `apply()` and `reset()` methods you can call multiple times.

### `clsBrightness()`

Initializes a brightness controller for a page or specific element.
Returns an object with `apply()` and `reset()` methods for adjusting and restoring brightness.

---

## Installation

```bash
npm install eye_comfort
```

or via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/eye_comfort@1.0.1/index.min.js"></script>
```
---

## Initialize

```js
import { clsNightMode, clsBrightness } from "eye_comfort";
// or
import { clsNightMode } from "eye_comfort";
// or
import { clsBrightness } from "eye_comfort";
```


> [!NOTE]
> If you see an "export" error in Next.js, add the package to `transpilePackages` in `next.config.js`:
> ```
> const nextConfig = {
>   // ...
>   transpilePackages: ["eye_comfort"],
> };
> export default nextConfig;
> ```

---

## Usage

<a href="#options">Scroll down</a> for the full list of options.
```js
const nightmode = clsNightMode();
const brightness = clsBrightness();

// Whole page (defaults)
nightmode.apply(); // sepia(1), brightness(0.6)
brightness.apply({ value: 0.7 }); // 70% brightness (0.7)

// Specific element
const box = document.querySelector("#element");

nightmode.apply({
element: box,
value: 0.8, // 80% sepia
dim: 0.5, // 50% brightness
});

brightness.apply({
element: box,
value: 0.7, // 70% brightness (use 0.7 instead of 70)
});

// Recommended for React (and similar) to avoid re-creating controllers on every render
const nightmodeMemo = useMemo(clsNightMode, []);
const brightnessMemo = useMemo(clsBrightness, []);

// Reset to original styles
nightmode.reset();
brightness.reset();

// Include additional filters
brightness.apply({
value: 0.8,
include: "blur(10px)",
});
```
---

## Options

### Night Mode (`clsNightMode().apply`)

Applies a night/comfort mode effect. Returns `true` when applied successfully.

<table>
  <thead>
    <tr>
      <td>Option</td>
      <td>Description</td>
      <td>Default</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>element</td>
      <td>The element to which the effect is applied.</td>
      <td>:root (whole page)</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Sepia intensity from 0 (off) to 1 (full warm tint).</td>
      <td>1</td>
    </tr>
    <tr>
      <td>dim</td>
      <td>Brightness level; 1 is normal, values below 1 are darker.</td>
      <td>0.6 (60% brightness)</td>
    </tr>
    <tr>
      <td>include</td>
      <td>Additional CSS filters to append (e.g. "blur(5px)").</td>
      <td>Empty string</td>
    </tr>
  </tbody>
</table>

`reset({ element })` restores the original `filter` value of that element and returns `true` when it succeeds.

---

### Brightness (`clsBrightness().apply`)

Adjusts brightness on top of the element’s existing filters. Returns `true` when applied successfully.

<table>
  <thead>
    <tr>
      <td>Option</td>
      <td>Description</td>
      <td>Default</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>>element</td>
      <td>The element on which you want to adjust brightness.</td>
      <td>:root (whole page)</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        Brightness level: 1 is normal, values below 1 dim the page, values above 1 make it brighter.
        For a "percentage-style" mental model, use decimals: e.g. 0.7 = 70%.
      </td>
      <td>1</td>
    </tr>
    <tr>
      <td>include</td>
      <td>Extra CSS filters to append along with brightness.</td>
      <td>Empty string</td>
    </tr>
  </tbody>
</table>

`reset({ element })` restores the original `filter` state of that element and returns `true`.

---

## Fun Facts

- It uses the native CSS `filter` pipeline (brightness, sepia, etc.), so it plays nicely with modern browsers and keeps logic simple.
- It is written in plain JavaScript, so it is framework-agnostic and can be used in React, Vue, Svelte, vanilla `<script>` tags, or any other setup you prefer.

This library is inspired by and shares the core logic of the **Eye Comfort** browser extension, which you can check out here:
[**Eye Comfort - Chrome Web Store**](https://chromewebstore.google.com/detail/eye-comfort/dghfihdmhcceodeojmakgjjocfojecao)
