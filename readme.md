# Eye Comfort
The 'Eye Comfort' Library is designed to improve user experience by providing functionalities aimed at reducing eye strain and promoting comfortable viewing. It can be easily integrated into any JS application to enable features such as eye comfort mode, font size adjustments, and screen brightness control. By incorporating this library, developers can enhance the accessibility and usability of their applications, ensuring that users can comfortably interact with the interface for extended periods without experiencing discomfort or fatigue.


## Features
- Night Mode (clsNightMode)
- Brightness (clsBrightness)
- Font Size Adjustment [in progress]


## Function & Options
### clsNightMode()
Use this to initalize an eye comfort/night light mode for a page/element. It returns a function that can be used to create the effect.
### clsBrightness()
Use this, to initalize brightness functionality, to adjust the brightness of a page/element. It returns a function that can be used to create the effect.


## Installation
```terminal
npm install eye_comfort
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/eye_comfort@1.0.1/index.min.js"></script>
```


## Initialize
```js
import { clsNightMode, clsBrightness } from "eye_comfort";
// or
import { clsNightMode } from "eye_comfort";
// or
import { clsBrightness } from "eye_comfort";
// or
<script src="https://cdn.jsdelivr.net/npm/eye_comfort@1.0.1/index.min.js"></script>
```
> [!NOTE]
> In case you get any issue while using it with NextJs try adding this rule in the next.config
> 
> ```js
> { ... transpilePackages: ['eye_comfort'], ...}
> ```



## Usage
<a href="#options">Scroll Down</a> for the complete list of options, to consumed by returned functions
```js
const nightmode = clsNightMode();
const brightness = clsBrightness();

// whole page
nightmode();
brightness({value: .7}); // you can also use percentage for eg. 70%

// specific element
nightmode({ element: document.querySelector("#element") });
brightness({ element: document.querySelector("#element"), value: .7 }); // you can also use percentage for eg. 70%

// the best way, to use in react or other lib. that reinitiates local variable on state change, is to use it with a hook that can memoize/cache the output
const nightmode = useMemo(clsNightMode, []);
const brightness = useMemo(clsBrightness, []);

// reset to default when disabled
nightmode({ original: "brightness(.4)" });

// include another filter as well
brightness({ include: "blur(10px)" });
```


## Options
### Night Mode
This function is used to toggle night mode effect on a page, it *returns a boolean (enabled or not)*.
<table>
  <thead>
    <tr>
      <td>Option</td>
      <td>Description</td>
      <td>Default Value</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>element</td>
      <td>the element on which you want to apply the effect</td>
      <td>:root (whole page)</td>
    </tr>
    <tr>
      <td>original</td>
      <td>the original value, i.e. value that should be applied on reset / when disabled</td>
      <td>empty string</td>
    </tr>
    <tr>
      <td>include</td>
      <td>the value to be included along with the effect, when it's enabled</td>
      <td>empty string</td>
    </tr>
  </tbody>
</table>

### Brightness
This function is used to adjust brightness of a page, it *returns nothing*.
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
      <td>the element on which you want to apply the effect</td>
      <td>:root (whole page)</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
      the intensity of the filter, it could be in decimals (0 to 1) or in percentage (0% to 100%)
      </td>
      <td>0 (dim) | 1 (bright)</td>
    </tr>
    <tr>
      <td>include</td>
      <td>the value to be included along with the effect</td>
      <td>empty string</td>
    </tr>
  </tbody>
</table>


## Fun Facts
- _It uses <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter">CSS filtes</a> behind the hood so, You don't have to worry about the site's performance or ranking issues_
- _It is created using plain JavaScript, thus not bound by any framework rules. This gives you the freedom to use it anywhere and in any way you like, whether inside other hooks or in a script tag._ :wink:


You can play with these features, applied to our website at https://www.autonomousweb.org/
