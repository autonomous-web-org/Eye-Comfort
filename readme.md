# Eye Comfort
The 'Eye Comfort' Library is designed to improve user experience by providing functionalities aimed at reducing eye strain and promoting comfortable viewing. This hook can be easily integrated into any JS application to enable features such as eye comfort mode, font size adjustments, and screen brightness control. By incorporating this library, developers can enhance the accessibility and usability of their applications, ensuring that users can comfortably interact with the interface for extended periods without experiencing discomfort or fatigue.


## Features
- Night Mode hook (useNightMode)
- Brightness hook (useBrightness)
- Font Size Adjustment [in progress]


## Function & Options
### useNightMode({options})
Use this hook to create an eye comfort/night light mode for a page/element. you can use the following options:
  - element: the element on which you want to apply it. default is the whole page (:root).
### useBrightness({options})
Use this hook to adjust the brightness of a page/element. you can use the following options:
  - element: the element on which you want to apply it. default is whole page (:root).
  - value: the value could be in decimals (0 to 1) or in percentage (0% to 100%).


## Installation
```terminal
npm install eye_comfort
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/eye_comfort@1.0.1/index.min.js"></script>
```


## Initialize
```js
import { useNightMode, useBrightness } from "eye_comfort";
// or
import { useNightMode } from "eye_comfort";
// or
import { useBrightness } from "eye_comfort";
// or
<script src="https://cdn.jsdelivr.net/npm/eye_comfort@1.0.1/index.min.js"></script>
```


## Usage
```js
const nightmode = useNightMode();
const brightness = useBrightness();

// whole page
nightmode();
brightness({value: .7}); // you can also use percentage for eg. 70%

// specific element
nightmode({ element: document.querySelector("#element") });
brightness({ element: document.querySelector("#element"), value: .7 }); // you can also use percentage for eg. 70%
```


## Fun Facts
- _It uses <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter">CSS filtes</a> behind the hood so, You don't have to worry much about the site's performance or ranking issues_
- _Though these hooks have minimal state logic, they do not use react state hook and are not bound by any framework rules. This gives you the freedom to use them anywhere and any way you like, inside other hooks or in a script tag._ :wink:


You can play with these features, applied to our website at https://www.autonomousweb.org/
