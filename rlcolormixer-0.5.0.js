(function() {

    // Real Life Color Mixer by Camilo Tapia (github.com/Camme)
    // Emulate color mixing as if you where mixing real life colors, ie substractive colors
    //
    // Usage:
    //
    // RLColorMixer.mixColorS(arrayOfColors);
    // where arrayOFColos is an array of hex rgb colors ['#ff0000', '#00ff00'] or an array with the amoutn of each color
    // [{color: '#ff0000', parts: 10}, {color: '#00ff00', parts: 2}].
    // or a mizture of the two.
    //
    // You can also snap to the nearest color in an array of hex rgb colors:
    // RLColorMixer.findNearest(orgColorinHex, listOfColors);
    //
    // Example:
    // RLColorMixer.findNearest('#fff000', ['#ff0000', '#ff0f00']);
    //

    if (window.RLColorMixer) {
        if (console && console.log) {
            console.log("RLColorMixer already set");
        }
    }
    else {
        var RLColorMixer = window.RLColorMixer = {};
    }

    function mixColors(colors) {

        colors = colors.concat([]);

        if (colors.length == 0) {
            return '#ffffff';
        }

        if (colors.length == 1) {
            return colors[0];
        }

        // normalize
        var parts = 0;
        for(var i = 0, ii = colors.length; i < ii; i++){
            if (typeof colors[i] != 'object') {
                colors[i] = {
                    parts: 1,
                    color: colors[i]
                };
            }
            if (colors[i].parts) {
                parts += colors[i].parts;
            }
            else {
                parts++;
            }
        }

        var newR = 0;
        var newY = 0;
        var newB = 0;

        for(var i = 0, ii = colors.length; i < ii; i++){

            var colorObject = colors[i];
            var color = hexToRgb(colorObject.color);
            var rybColor = rybrgb.rgb2ryb(color);

            for(var j = 0, jj = colorObject.parts; j < jj; j++){
                newR += rybColor[0];
                newY += rybColor[1];
                newB += rybColor[2];
            }

        }

        var avgNewR = newR / parts;
        var avgNewY = newY / parts;
        var avgNewB = newB / parts 

        var newColor = rybrgb.ryb2rgb([avgNewR, avgNewY, avgNewB]);

        var mixedColor = rgbToHex([newColor[0], newColor[1], newColor[2]]);

        return mixedColor;

    }

    function findNearest(color, list) {

        var listCopy = list.concat([]);

        listCopy.sort(function(c1, c2) {
            var rgb1 = hexToRgb(c1);
            var rgb2 = hexToRgb(c2);
            var c = hexToRgb(color);
            var euclideanDistance1 = Math.sqrt(Math.pow(c[0] - rgb1[0], 2) + Math.pow(c[1] - rgb1[1], 2) + Math.pow(c[2] - rgb1[2], 2));
            var euclideanDistance2 = Math.sqrt(Math.pow(c[0] - rgb2[0], 2) + Math.pow(c[1] - rgb2[1], 2) + Math.pow(c[2] - rgb2[2], 2));
            return euclideanDistance1 - euclideanDistance2;
        });

        return listCopy[0];

    }

    function hexToRgb(hex) {
        var hex = hex.replace("#", '');
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
        return [r, g, b];
    }

    function rgbToHex(rgbArray) {
        var rHex = Math.round(rgbArray[0]).toString(16); rHex = rHex.length == 1 ? "0" + rHex : rHex;
        var gHex = Math.round(rgbArray[1]).toString(16); gHex = gHex.length == 1 ? "0" + gHex : gHex;
        var bHex = Math.round(rgbArray[2]).toString(16); bHex = bHex.length == 1 ? "0" + bHex : bHex;
        return "#" + rHex + gHex + bHex;;
    }

    RLColorMixer.mixColors = mixColors;
    RLColorMixer.findNearest = findNearest;
    RLColorMixer.hexToRgb = hexToRgb;
    RLColorMixer.rgbToHex = rgbToHex;

})();



(function() {

/**
 * Original Work
 * Author: Arah J. Leonard
 * Copyright 01AUG09
 * Original source:
 * http://www.insanit.net/computer-programming/red-green-blue-to-red-yellow-blue-part-2/
 * Distributed under the LGPL - http://www.gnu.org/copyleft/lesser.html
 * ALSO distributed under the The MIT License from the Open Source Initiative
 * (OSI) - http://www.opensource.org/licenses/mit-license.php
 * You may use EITHER of these licenses to work with / distribute this source code.
 * Enjoy!
 *
 * Modified by Dave Eddy <dave@daveeddy.com>
 *  * ported to JS
*/

    // Added by Camilo Tapia (github.com/Camme) to expose it
    // in a specific namespace when using in the browser
    if (typeof exports == 'undefined') {
        var module = {};
        var exports =  module.exports = {};
        window.rybrgb = module.exports;
    }

    if (typeof exports !== 'undefined') {
        module.exports.rgb2ryb = rgb2ryb;
        module.exports.ryb2rgb = ryb2rgb;
        module.exports.complimentary = complimentary;
    }

/**
 * Convert a red-green-blue system to a red-yellow-blue system.
*/
    function rgb2ryb(color) {
        var r = color[0], g = color[1], b = color[2];
        // Remove the whiteness from the color.
        var w = Math.min(r, g, b);
        r -= w;
        g -= w;
        b -= w;

        var mg = Math.max(r, g, b);

        // Get the yellow out of the red+green.
        var y = Math.min(r, g);
        r -= y;
        g -= y;

        // If this unfortunate conversion combines blue and green, then cut each in
        // half to preserve the value's maximum range.
        if (b && g) {
            b /= 2.0;
            g /= 2.0;
        }

        // Redistribute the remaining green.
        y += g;
        b += g;

        // Normalize to values.
        var my = Math.max(r, y, b);
        if (my) {
            var n = mg / my;
            r *= n;
            y *= n;
            b *= n;
        }

        // Add the white back in.
        r += w;
        y += w;
        b += w;

        // And return back the ryb typed accordingly.
        return [r, y, b];
    }

/**
 * Convert a red-yellow-blue system to a red-green-blue system.
*/
    function ryb2rgb(color) {
        var r = color[0], y = color[1], b = color[2];
        // Remove the whiteness from the color.
        var w = Math.min(r, y, b);
        r -= w;
        y -= w;
        b -= w;

        var my = Math.max(r, y, b);

        // Get the green out of the yellow and blue
        var g = Math.min(y, b);
        y -= g;
        b -= g;

        if (b && g) {
            b *= 2.0;
            g *= 2.0;
        }

        // Redistribute the remaining yellow.
        r += y;
        g += y;

        // Normalize to values.
        var mg = Math.max(r, g, b);
        if (mg) {
            var n = my / mg;
            r *= n;
            g *= n;
            b *= n;
        }

        // Add the white back in.
        r += w;
        g += w;
        b += w;

        // And return back the ryb typed accordingly.
        return [r, g, b];
    }

/**
 * Return the complementary color values for a given color.
 * You must also give it the upper limit of the color values, typically 255 for
 * GUIs, 1.0 for OpenGL.
*/
    function complimentary(color, limit) {
        var r = color[0], g = color[1], b = color[2];
        limit = limit || 255;
        return [limit - r, limit - g, limit - b];
    }


})();
