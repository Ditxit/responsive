# responsive.js
This repo contains JavaScript file for responsive making mini library

## Installation
Download the `responsive.min.js` file or clone the repo inside your project folder & link the file in your working file.
```JavaScript
<script src="responsive.min.js"></script>
```

## Implementation
How you want to implement the features of this library depends upon your used and habits of writting code. However, I like to use this library like this;

```HTML
<div 
     class=" ...never_changing_classes_here... "
     phone=" ...phone_only_classes_here... " 
     tablet=" ...tablet_only_classes_here... " 
     laptop=" ...laptop_only_classes_here... " 
>
     ...your_content_goes_here...
</div>
```


| Attribute  | Description | Activation Width (Inclusive) |
| ---------- | ----------- | ---------------------------- |
| phone      | Classes inside `phone` attribute are only active in phone sized devices     | `♾️ to 767px`        |
| -phone     | Classes inside `-phone` attribute are active in all devices except phones   | `768px to ♾️`   |
| tablet     | Classes inside `tablet` attribute are only active in tablet sized devices   | `768px to 1024px`     |
| -tablet    | Classes inside `-tablet` attribute are active in all devices except tablets | `♾️ to 767px` </br> `1024px to ♾️` |
| laptop     | The classes inside `laptop` attribute are only active in laptop sized devices   | `1024px to ♾️` |
| -laptop    | The classes inside `-laptop` attribute are active in all devices except laptops | `♾️ to 1024px` |

