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
     class  =" ...classes_that_are_fixed_for_all_devices_goes_here...   "
     phone  =" ...classes_to_add_or_remove_while_in_phone_goes_here...  " 
     tablet =" ...classes_to_add_or_remove_while_in_tablet_goes_here... " 
     laptop =" ...classes_to_add_or_remove_while_in_laptop_goes_here... " 
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



## Supported CSS libraries
> This mini library supports all the CSS libraries out there in the market. 
