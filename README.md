# responsive.js
This repo contains JavaScript file for responsive making mini library

## Installation
Download the `responsive.min.js` file or clone the repo inside your project folder & link the file in your working file.
```JavaScript
<script src="responsive.min.js"></script>
```
Or, use the link instead `but not recommended in finalized project`,
```JavaScript
<script src="https://drive.google.com/uc?id=1opMRz11qnO1uPitXKgWQwi_INTdU4G7C"></script>
```


## Implementation
How you want to implement the features of this library depends upon your used and habits of writting code. However, I like to use this library like this;

```HTML
<div 
     class   = " classes_that_are_fixed_for_all_devices_goes_here        "     
     phone   = " classes_to_add_or_remove_while_in_phone_goes_here       " 
     -phone  = " classes_to_add_or_remove_while_not_in_phone_goes_here   " 
     tablet  = " classes_to_add_or_remove_while_in_tablet_goes_here      " 
     -tablet = " classes_to_add_or_remove_while_not_in_tablet_goes_here  " 
     laptop  = " classes_to_add_or_remove_while_in_laptop_goes_here      " 
     -laptop = " classes_to_add_or_remove_while_not_in_laptop_goes_here  " 
>
     
     <!-- Your content goes here -->
     
</div>
```


| Attribute  | Description | Activation Width (Inclusive) |
| ---------- | ----------- | ---------------------------- |
| phone      | Classes inside `phone` attribute are only active in phone sized devices     | ♾️ - 767px        |
| -phone     | Classes inside `-phone` attribute are active in all devices except phones   | 768px - ♾️   |
| tablet     | Classes inside `tablet` attribute are only active in tablet sized devices   | 768px - 1024px     |
| -tablet    | Classes inside `-tablet` attribute are active in all devices except tablets | ♾️ - 767px </br> 1024px - ♾️ |
| laptop     | Classes inside `laptop` attribute are only active in laptop sized devices   | 1024px - ♾️ |
| -laptop    | Classes inside `-laptop` attribute are active in all devices except laptops | ♾️ - 1024px |


## Coding conventions
This library uses hyphen `-` as a syntax which it means `not` in common context. For example;
> The attribute `phone` is used to add class to the respective element while in phone only whereas `-phone` i.e. `not phone` is used to add classes to respective element while not in phone only.

This convention is also applicable in case of classes inside the attribute. Adding `-` sign in front of any class inside the attribute provided by this library can eliminate that class when in the respective device size. For example;
> The class written like `phone = " class_name "` adds the class `class_name` to the element while in phone but the class written like `phone = " -class_name "` removes the class `class_name` from the respective element while in phone.


## Supported CSS libraries
> This mini library supports all the CSS libraries out there in the market. 
