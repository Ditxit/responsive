# responsive.js
This repo contains JavaScript file for responsive making mini library

## Installation
Download the `responsive.min.js` file or clone the repo inside your project folder & link the file in your working file like this.
```
<script src="responsive.min.js"></script>
```

## Implementation
After you include the JavaScript inside your working file, you have to remember some of the reserved html attributes represented in table below;

| Attribute  | Description | Active Between Range |
| ---------- | ----------- | ----------- |
| phone      | The classes inside `phone` attribute are only active in phone sized devices     | 0px `-` 767px |
| -phone     | The classes inside `-phone` attribute are active in all devices except phones   | Device Width >= `768px` |
| tablet     | The classes inside `tablet` attribute are only active in tablet sized devices   | `1024px` >= Device Width >= `768px` |
| -tablet    | The classes inside `-tablet` attribute are active in all devices except tablets | `1024px` >= Device Width >= `768px` |
| laptop     | The classes inside `laptop` attribute are only active in laptop sized devices   | Smaller than `768px` |
| -laptop    | The classes inside `-laptop` attribute are active in all devices except laptops | Smaller than `768px` |

