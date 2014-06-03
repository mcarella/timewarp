TIMEWARP
========

A simple, mobile-first SASS boilerplate for single page web apps. 

![](http://i1.ytimg.com/vi/4Mky7-t_nsQ/maxresdefault.jpg)

## SCSS folder
`_core.scss`
Is the place where to put variables declarations (colors, spacings, widths) and typography stuff (fonts imports, font variables, etc). You will also find a ready to use set of useful mixins.

### Variables coding convention
**color-** is the prefix for colors variables. 
**font-** is the prefix for fonts variables. 
**spacing-** is the prefix for spacings variables (margin, paddings).
**width-** is the prefix for width variables. 
**height-** is the prefix for height variables. 
**lineHeight-** is the prefix for line height variables. 

### Resetting styles
Timewarp comes with **normalize** and Meyer's **reset**. Choose you own, including it into `style.scss`.

`style.scss`
No style in there, just imports. If you want to change something, edit the corresponding `_layout.wathever.scss` file.

### Mobile first
The css architecture is splitted into common breakpoints to help you in responsive development.
Starting with baseline shared styles (`_layout.common.scss`) and introducing more advanced layout rules when screen size permits keeps code simpler, smaller and more maintainable. That's why you will find files for common breakpoints: `1240up` for large screens, `1030up` for regular desktop screens, `768up` for tablets and small laptops, `481up` for phablets.

## JS folder
### files naming convention
`app.` is the prefix for your app core files. 
`lib.` is the prefix for external libraries and dependencies (ex. angular, jquery, etc). 
`plugin.` is the prefix for jquery plugins.

### javascript included files
`app.controller.js` angularjs app boilerplate. 
`app.main.js` should contain jquery and presentational stuff.
`plugin.boilerplate.js` a jquery plugin boilerplate.
`lib.analytics.js` google analytics, just set the GA code.

## Grunt
Time warp comes with grunt to minify, concat, than uglify your scripts.

## Compass
Time warp comes with compass to help you styling things faster.

### [!] NOTE
This boilerplate is work in progress.
