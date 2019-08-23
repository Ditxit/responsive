# responsive.js
This repo contains JavaScript file for responsive making mini library

## Installation
Download the `responsive.min.js` file or clone the repo inside your project folder & link the file in your working file like this.
```
<script src="responsive.min.js"></script>
```

## Implementation
After you include the JavaScript inside your working file, you have to remember some of the reserved html attributes represented in table below;

| Attribute  | Description | Activation Width (Inclusive) |
| ---------- | ----------- | ---------------------------- |
| phone      | Classes inside `phone` attribute are only active in phone sized devices     | `-∞ to 767px`        |
| -phone     | Classes inside `-phone` attribute are active in all devices except phones   | `768px to +∞`   |
| tablet     | Classes inside `tablet` attribute are only active in tablet sized devices   | `768px to 1024px`     |
| -tablet    | Classes inside `-tablet` attribute are active in all devices except tablets | `-∞ to 767px` </br> `1024px to +∞` |
| laptop     | The classes inside `laptop` attribute are only active in laptop sized devices   | `1024px to +∞` |
| -laptop    | The classes inside `-laptop` attribute are active in all devices except laptops | `-∞ to 1024px` |

