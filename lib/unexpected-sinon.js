// Copyright (c) 2013 Sune Simonsen <sune@we-knowhow.dk>
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the 'Software'), to deal in the Software without
// restriction, including without limitation the rights to use, copy,
// modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
// BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(function (root, factory) {

    // This is needed in order to get WebPack to work with sinon
    // It has been isolated from the default AMD pattern to avoid confusion
    if (typeof sinon !== undefined) {
        module.exports = factory(sinon);
        return;
    }

    if (typeof exports === 'object') {
        module.exports = factory(require('sinon'));
    } else if (typeof define === 'function' && define.amd) {
        define(['sinon'], factory);
    } else {
        root.weknowhow = root.weknowhow || {};
        root.weknowhow.unexpectedSinon = factory(root.sinon);
    }
}(this, function (sinon) {
    return {
        name: 'unexpected-sinon',
        installInto: function (expect) {
            expect.addAssertion('was [not] called', function (expect, subject) {
                if (this.flags.not) {
                    sinon.assert.notCalled(subject);
                } else {
                    sinon.assert.called(subject);
                }
            });

            expect.addAssertion('was called once', function (expect, subject) {
                sinon.assert.calledOnce(subject);
            });

            expect.addAssertion('was called twice', function (expect, subject) {
                sinon.assert.calledTwice(subject);
            });

            expect.addAssertion('was called thrice', function (expect, subject) {
                sinon.assert.calledThrice(subject);
            });

            expect.addAssertion('was called times', function (expect, subject, times) {
                sinon.assert.callCount(subject, times);
            });

            expect.addAssertion('given call order', function (expect, subject) {
                sinon.assert.callOrder.apply(null, subject);
            });

            expect.addAssertion('was [always] called on', function (expect, subject, target) {
                if (this.flags.always) {
                    sinon.assert.alwaysCalledOn(subject, target);
                } else {
                    sinon.assert.calledOn(subject, target);
                }
            });

            expect.addAssertion('was [always] called with [exactly]', function (expect, subject) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (this.flags.always && this.flags.exactly) {
                    sinon.assert.alwaysCalledWithExactly.apply(null, args);
                } else if (this.flags.always) {
                    sinon.assert.alwaysCalledWith.apply(null, args);
                } else if (this.flags.exactly) {
                    sinon.assert.calledWithExactly.apply(null, args);
                } else {
                    sinon.assert.calledWith.apply(null, args);
                }
            });

            expect.addAssertion('was never called with', function (expect, subject) {
                var args = Array.prototype.slice.call(arguments, 1);
                sinon.assert.neverCalledWith.apply(null, args);
            });

            expect.addAssertion('[always] threw', function (expect, subject, value) {
                if (this.flags.always) {
                    sinon.assert.alwaysThrew(subject, value);
                } else {
                    sinon.assert.threw(subject, value);
                }
            });

            expect.addAssertion('was [always] called with match', function (expect, subject) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (this.flags.always) {
                    sinon.assert.alwaysCalledWithMatch.apply(null, args);
                } else {
                    sinon.assert.calledWithMatch.apply(null, args);
                }
            });
        }
    };
}));
