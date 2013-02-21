#Real Life Color Mixer.

Emulate color mixing as if you where mixing real life colors, ie substractive colors

Usage:

    RLColorMixer.mixColors(arrayOfColors);

Where arrayOfColos is an array of hex rgb colors ['#ff0000', '#00ff00']. Example:

     RLColorMixer.mixColors(['#ff0000', '#00ff00']);

You can also pass the amount of each color you want to use:

    RLColorMixer.mixColors({color: '#ff0000', parts: 10}, {color: '#00ff00', parts: 2});

Or a mixture of the two:
   
    RLColorMixer.mixColors(['#ff0000', {color: '#00ff00', parts: 2}]);

You can also snap to the nearest color in an array of hex rgb colors:

    RLColorMixer.findNearest(orgColorinHex, listOfColors);

Example:

    RLColorMixer.findNearest('#fff000', ['#ff0000', '#ff0f00']);

## List of all methods:

- RLColorMixer.mixColors(*array*); **Returns a RGB color in hex.**
- RLColorMixer.findNearest(*color*, *array*); **Returns a RGB color in hex.**
- RLColorMixer.hexToRgb(*string*); **Returns an array.**
- RLColorMixer.rgbToHex([*int*, *int*, *int*]); **Returns a RGB color in hex.**

-------------------------
## License 

(The MIT License)

Copyright (c) 2011 Camilo Tapia &lt;camilo.tapia@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.