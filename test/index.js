var rybColorMixer = require("../");
var should = require("should");

describe("Mix colors in RYB.", function() {

    it("Will mix blue and yellow into green", function() {
        var mixed = rybColorMixer.mix(['0000ff', '00ff00']);
        mixed.should.equal('00ffff');
    });

    it("Will mix red and yellow into orange", function() {
        var mixed = rybColorMixer.mix(['ff0000', '00ff00']);
        mixed.should.equal('ffff00');
    });

    it("Will mix orange and yellow into orangeyellow", function() {
        var mixed = rybColorMixer.mix(['ffff00', '00ff00']);
        mixed.should.equal('7fff00');
    });

});

describe("Mix colors in RYB, sent as arguments.", function() {

    it("Will mix blue and yellow into green", function() {
        var mixed = rybColorMixer.mix('0000ff', '00ff00');
        mixed.should.equal('00ffff');
    });

});

describe("Mix colors in RYB, return as array.", function() {

    it("Will mix blue and yellow into green", function() {
        var mixed = rybColorMixer.mix('0000ff', '00ff00', { hex: false });
        mixed[0].should.equal(0);
        mixed[1].should.equal(255);
        mixed[2].should.equal(255);
    });

});

describe("Mix colors in RYB, sent as arrays.", function() {

    it("Will mix blue and yellow into green", function() {
        var mixed = rybColorMixer.mix([0, 0, 255], [0, 255, 0]);
        mixed.should.equal('00ffff');
    });

    it("Will mix blue and yellow into green in arrays", function() {
        var mixed = rybColorMixer.mix([[0, 0, 255], [0, 255, 0]]);
        mixed.should.equal('00ffff');
    });

    it("Will mix red and yellow into orange", function() {
        var mixed = rybColorMixer.mix([255, 0, 0], [0, 255, 0]);
        mixed.should.equal('ffff00');
    });

    it("Will mix orange and yellow into orangeyellow", function() {
        var mixed = rybColorMixer.mix([255, 255, 0], [0, 255, 0]);
        mixed.should.equal('7fff00');
    });

});


describe("Mix colors in RYB but return RGB", function() {

    it("Will mix blue and yellow into green", function() {
        var mixed = rybColorMixer.mix(['0000ff', '00ff00'], { result: "rgb" });
        mixed.should.equal('00a933');
    });

    it("Will mix red and yellow into orange", function() {
        var mixed = rybColorMixer.mix(['ff0000', '00ff00'], { result: "rgb" });
        mixed.should.equal('ff8000');
    });

    it("Will mix orange and yellow into orangeyellow", function() {
        var mixed = rybColorMixer.mix(['ffff00', '00ff00'], { result: "rgb" });
        mixed.should.equal('ffc000');
    });

});


describe("Mix colors in RYB but return RGB, but send as arguments", function() {

    it("Will mix blue and yellow into green", function() {
        var mixed = rybColorMixer.mix('0000ff', '00ff00', { result: "rgb" });
        mixed.should.equal('00a933');
    });

});

describe("Convert from RYB to RGB", function() {

    it("Convert yellow", function() {
        var mixed = rybColorMixer.rybToRgb('00ff00', { hex: true });
        mixed.should.equal('ffff00');
    });

});
