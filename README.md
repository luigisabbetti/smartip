# SmarTip

SmarTip is a simple jQuery Plugin developed by [Luigi Sabbetti](https://www.luigisabbetti.it/About).

# How to install

First of all you must download the `smartip.js` file located in `dist` folder. You can use minifed or uncompressed file. 
Don't worry about performance because this library is 1KB!

Include this file in your project, after jQuery

`<script src="yourLocalFolder/smartip.min.js"></script>`

Now you can call plugin, for example at ready function

`$('target').smartip()`

# API options

You can also call SmartTip and pass it different parameters.

Available options: <br />
xDirection: Left and Right. Default: Right <br />
yDirection: Top and Bottom. Default: Bottom <br />
Position (x,y values): Default 10, 10 <br />

Example:

`$('target').smartip(15, 15, "right", "top")`

# LIVE EXAMPLE

You can see a live example at [codepen.com](https://codepen.io/LuigiSabbetti/pen/jzBQJr)
If you have a problem, don't hesitate to contact me at [info@luigisabbetti.it](mailto:info@luigisabbetti.it)

Made with love from south of Italy.