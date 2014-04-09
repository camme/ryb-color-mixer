#Real Life Color (RYB) Mixer.

Emulate color mixing as if you where mixing real life colors, ie substractive colors

Usage:

    rybColorMixer.mix(arrayOfColors [,options]);
    
    // or
    
    rybColorMixer.mix(color1, color2, color3.... [,options]);
    
Where arrayOfColos is an array of hex rgb colors ['#ff0000', '#00ff00']. Example:

    rybColorMixer.mix(['#ff0000', '#00ff00']);

You can pass an options object:

    {
        hex: Boolean, // default is true
        result: "ryb|rgb", // default is "ryb"
    }

So, for example, if you want to return a mixed color as RGB:

    rybColorMixer.mix('#ff0000', '#00ff00', { result: "rgb" });

You can also snap to the nearest color in an array of hex colors:

    rybColorMixer.findNearest(orgColorinHex, listOfColors);

Example:

    rybColorMixer.findNearest('#fff000', ['#ff0000', '#ff0f00']);

## List of all methods:

- rybColorMixer.mix(*array* *[,options]*); **Returns a RGB color in hex.**
- rybColorMixer.mix(*color1, color2, color3, ...* *[,options]*); **Returns a RGB color in hex.**
- rybColorMixer.findNearest(*color*, *array*); **Returns a RGB color in hex.**
- rybColorMixer.rybToRgb(*color*); **convert a color from RYB to RGB.**

## More on how this works:
If you want to read how this works, just head over to [my blog](http://www.1001.io/mixing-real-colours-with-javascript-yellow-blue-green/)


## Dependecies
The source coude contains the code from https://github.com/bahamas10/node-rgb2ryb
I included the rgb2ryb code inside the ryb-color-mixer for ease of use in the browser. Great job @bahamas10.

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