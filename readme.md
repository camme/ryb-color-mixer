Real Life Color Mixer by Camilo Tapia (github.com/Camme)
Emulate color mixing as if you where mixing real life colors, ie substractive colors

Usage:

    RLColorMixer.mixColorS(arrayOfColors);

where arrayOFColos is an array of hex rgb colors ['#ff0000', '#00ff00'] or an array with the amoutn of each color [{color: '#ff0000', parts: 10}, {color: '#00ff00', parts: 2}].  or a mizture of the two.

You can also snap to the nearest color in an array of hex rgb colors:

    RLColorMixer.findNearest(orgColorinHex, listOfColors);

Example:

    RLColorMixer.findNearest('#fff000', ['#ff0000', '#ff0f00']);



