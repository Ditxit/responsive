# responsive.js
This repo contains JavaScript file for responsive making mini library

</br>
-------------------------------------------------------------------------------------------------------------------------------------
</br>

## 🔰 Installation

Download the `responsive.min.js` file or clone the repo inside your project folder & link the file in your working file.
```JavaScript
<script type="text/javascript" src="responsive.min.js"></script>
```
Or, use the link instead `but not recommended in finalized project`,
```JavaScript
<script type="text/javascript" src="https://drive.google.com/uc?id=1opMRz11qnO1uPitXKgWQwi_INTdU4G7C"></script>
```

-------------------------------------------------------------------------------------------------------------------------------------

## 🔰 Implementation
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


-------------------------------------------------------------------------------------------------------------------------------------


## 🔰 Coding conventions
This library uses hyphen `-` as a syntax which it means `not` in common context. This syntax can be use infront of both attributes as well as classes. 

#### Hyphen (-) in attributes
Using the hyphen (-) infront of attributes denotes not in that device. For example;
> The attribute `phone` is used to add class to the respective element while in phone only whereas `-phone` i.e. `not phone` is used to add classes to respective element while not in phone only.

<table>
<tr><th>With hyphen (-)</th><th>Without Hyphen (-)</th></tr>
<tr><td>

| Attributes | Phone | Tablet | Laptop |
| ---------- | :---: | :----: | :----: | 
| phone      | ✔️   | ❌     | ❌    | 
| tablet     | ❌   | ✔️     | ❌    |
| laptop     | ❌   | ❌     | ✔️    |

</td><td>

| Attributes | Phone | Tablet | Laptop |
| ---------- | :---: | :----: | :----: | 
| -phone     | ❌   | ✔️     | ✔️    | 
| -tablet    | ✔️   | ❌     | ✔️    |
| -laptop    | ✔️   | ✔️     | ❌    |

</td></tr> </table>

#### Hyphen (-) in classes
Using the hyphen (-) in front of classes denotes to remove the class while in the respective device size. For example;
> The class written like `phone = " your_class_name "` adds the class `your_class_name` to the element while in phone but the class written like `phone = " -your_class_name "` removes the class `your_class_name` from the respective element while in phone.


-------------------------------------------------------------------------------------------------------------------------------------


## 🔰 Supported CSS libraries
> This mini library supports all the CSS libraries out there in the market. If you want to use the library made specifically for this javascript library keep tuned I'm working on it.
