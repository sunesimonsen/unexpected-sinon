/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/array/given-call-order.md contains correct examples", function () {
        var testPromises = [];
        var obj = {
            foo: function () { return 'foo'; },
            bar: function () { return 'bar'; },
            baz: function () { return 'baz'; }
        };
        sinon.spy(obj, 'foo');
        sinon.spy(obj, 'bar');
        sinon.spy(obj, 'baz');
        obj.foo();
        obj.bar();
        obj.baz();
        expect([obj.foo, obj.bar, obj.baz], 'given call order');

        try {
            expect([obj.bar, obj.foo, obj.baz], 'given call order');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect([obj.bar, obj.foo, obj.baz], 'given call order');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected [ bar, foo, baz ] given call order\n" +
                "\n" +
                "foo(); at theFunction (theFileName:xx:yy) // spy: expected foo to be bar\n" +
                "bar(); at theFunction (theFileName:xx:yy) // spy: expected bar to be foo\n" +
                "baz(); at theFunction (theFileName:xx:yy)"
            );
        }

        try {
            var spy1 = sinon.spy().named('spy1');
            var spy2 = sinon.spy().named('spy2');
            spy1();
            spy2();
            spy1();

            expect([spy1, spy2, spy2], 'given call order');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var spy1 = sinon.spy().named('spy1');").nl();
                output.code("var spy2 = sinon.spy().named('spy2');").nl();
                output.code("spy1();").nl();
                output.code("spy2();").nl();
                output.code("spy1();").nl();
                output.code("").nl();
                output.code("expect([spy1, spy2, spy2], 'given call order');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected [ spy1, spy2, spy2 ] given call order\n" +
                "\n" +
                "spy1(); at theFunction (theFileName:xx:yy)\n" +
                "spy2(); at theFunction (theFileName:xx:yy)\n" +
                "spy1(); at theFunction (theFileName:xx:yy) // spy: expected spy1 to be spy2"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/array/to-have-calls-satisfying.md contains correct examples", function () {
        var testPromises = [];
        var noop = sinon.spy().named('noop');

        var increment = sinon.spy(function increment(n) {
            if (n === 666) {
                throw new Error("No, I won't do that");
            }
            return n + 1;
        });

        increment(456);
        noop(987);
        increment(123);
        noop(555);
        try {
            increment(666);
        } catch (e) {}

        expect([noop, increment], 'to have calls satisfying', [
            { spy: increment, args: [ 456 ], returned: 457 },
            noop,
            increment,
            noop,
            { spy: increment, args: [ 666 ], threw: /^No/ }
        ]);

        try {
            expect([increment, noop], 'to have calls satisfying', [
                { spy: increment, args: [ 123 ] },
                noop,
                { spy: increment, returned: 557 },
                noop,
                { spy: increment, args: [ 666 ], threw: { message: expect.it('not to match', /^No/) } }
            ]);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect([increment, noop], 'to have calls satisfying', [").nl();
                output.code("    { spy: increment, args: [ 123 ] },").nl();
                output.code("    noop,").nl();
                output.code("    { spy: increment, returned: 557 },").nl();
                output.code("    noop,").nl();
                output.code("    { spy: increment, args: [ 666 ], threw: { message: expect.it('not to match', /^No/) } }").nl();
                output.code("]);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected [ increment, noop ] to have calls satisfying\n" +
                "[\n" +
                "  { spy: increment, args: [ 123 ] },\n" +
                "  noop,\n" +
                "  { spy: increment, returned: 557 },\n" +
                "  noop,\n" +
                "  {\n" +
                "    spy: increment,\n" +
                "    args: [ 666 ],\n" +
                "    threw: { message: expect.it('not to match', ...) }\n" +
                "  }\n" +
                "]\n" +
                "\n" +
                "increment(\n" +
                "  456 // should equal 123\n" +
                "); at theFunction (theFileName:xx:yy)\n" +
                "noop( 987 ); at theFunction (theFileName:xx:yy)\n" +
                "increment( 123 ); at theFunction (theFileName:xx:yy)\n" +
                "  // returned: expected 124 to equal 557\n" +
                "noop( 555 ); at theFunction (theFileName:xx:yy)\n" +
                "increment( 666 ); at theFunction (theFileName:xx:yy)\n" +
                "  // threw: expected Error('No, I won\\'t do that')\n" +
                "  //        to satisfy { message: expect.it('not to match', /^No/) }\n" +
                "  //\n" +
                "  //        {\n" +
                "  //          message: 'No, I won\\'t do that' // should not match /^No/\n" +
                "  //                                          //\n" +
                "  //                                          // No, I won't do that\n" +
                "  //                                          // ^^\n" +
                "  //        }"
            );
        }

        var mySpy = sinon.spy().named('mySpy');
        mySpy({foo: 123, bar: 456});
        expect([ mySpy ], 'to have calls satisfying', [
            { args: [ { foo: 123 } ] }
        ]);

        try {
            expect([ mySpy ], 'to have calls exhaustively satisfying', [
                { args: [ { foo: 123 } ] }
            ]);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect([ mySpy ], 'to have calls exhaustively satisfying', [").nl();
                output.code("    { args: [ { foo: 123 } ] }").nl();
                output.code("]);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected [ mySpy ] to have calls exhaustively satisfying [ { args: [ ... ] } ]\n" +
                "\n" +
                "mySpy(\n" +
                "  {\n" +
                "    foo: 123,\n" +
                "    bar: 456 // should be removed\n" +
                "  }\n" +
                "); at theFunction (theFileName:xx:yy)"
            );
        }

        try {
            var spy1 = sinon.spy().named('spy1');
            var spy2 = sinon.spy().named('spy2');

            spy1(123);
            spy2(456);
            spy1(false);
            spy2(789);

            expect([ spy1, spy2 ], 'to have calls satisfying', function () {
                spy1(123);
                spy2(456);
                spy1(expect.it('to be a string'));
                spy2(789);
            });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var spy1 = sinon.spy().named('spy1');").nl();
                output.code("var spy2 = sinon.spy().named('spy2');").nl();
                output.code("").nl();
                output.code("spy1(123);").nl();
                output.code("spy2(456);").nl();
                output.code("spy1(false);").nl();
                output.code("spy2(789);").nl();
                output.code("").nl();
                output.code("expect([ spy1, spy2 ], 'to have calls satisfying', function () {").nl();
                output.code("    spy1(123);").nl();
                output.code("    spy2(456);").nl();
                output.code("    spy1(expect.it('to be a string'));").nl();
                output.code("    spy2(789);").nl();
                output.code("});").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected [ spy1, spy2 ] to have calls satisfying\n" +
                "spy1( 123 );\n" +
                "spy2( 456 );\n" +
                "spy1( expect.it('to be a string') );\n" +
                "spy2( 789 );\n" +
                "\n" +
                "spy1( 123 ); at theFunction (theFileName:xx:yy)\n" +
                "spy2( 456 ); at theFunction (theFileName:xx:yy)\n" +
                "spy1(\n" +
                "  false // should be a string\n" +
                "); at theFunction (theFileName:xx:yy)\n" +
                "spy2( 789 ); at theFunction (theFileName:xx:yy)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/threw.md contains correct examples", function () {
        var testPromises = [];
        var stub = sinon.stub().named('myStub');
        var error = new TypeError('wat');
        stub.throws(error);
        try { stub(); } catch (e) {}

        expect(stub, 'threw');
        expect(stub, 'threw', 'wat');
        expect(stub, 'threw', error);
        expect(stub, 'threw', { name: 'TypeError' });

        try {
            expect(sinon.spy().named('mySpy'), 'threw', new SyntaxError());
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(sinon.spy().named('mySpy'), 'threw', new SyntaxError());").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected mySpy threw SyntaxError()\n" +
                "  spy did not throw exception"
            );
        }

        expect(stub, 'always threw');
        expect(stub, 'always threw', 'wat');
        expect(stub, 'always threw', error);
        expect(stub, 'always threw', { name: 'TypeError' });

        try {
            stub.throws(new SyntaxError('waat'));
            try { stub(); } catch (e) {}

            expect(stub, 'always threw', /waat/);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("stub.throws(new SyntaxError('waat'));").nl();
                output.code("try { stub(); } catch (e) {}").nl();
                output.code("").nl();
                output.code("expect(stub, 'always threw', /waat/);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected myStub always threw /waat/\n" +
                "\n" +
                "myStub(); at theFunction (theFileName:xx:yy)\n" +
                "// expected: threw /waat/\n" +
                "//   expected TypeError('wat') to satisfy /waat/\n" +
                "myStub(); at theFunction (theFileName:xx:yy)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/to-have-calls-satisfying.md contains correct examples", function () {
        var testPromises = [];
        var increment = sinon.spy(function increment(n) {
            return n + 1;
        });
        increment(42);
        increment(46);
        expect(increment, 'to have calls satisfying', [
            { args: [ 42 ] },
            { args: [ 46 ], returned: 47 }
        ]);

        try {
            var increment = sinon.spy().named('increment');
            increment(42);
            increment(46, 'yadda');

            expect(increment, 'to have calls satisfying', [
                { args: [ 42 ] },
                { args: [ 20 ] }
            ]);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var increment = sinon.spy().named('increment');").nl();
                output.code("increment(42);").nl();
                output.code("increment(46, 'yadda');").nl();
                output.code("").nl();
                output.code("expect(increment, 'to have calls satisfying', [").nl();
                output.code("    { args: [ 42 ] },").nl();
                output.code("    { args: [ 20 ] }").nl();
                output.code("]);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected increment to have calls satisfying [ { args: [ 42 ] }, { args: [ 20 ] } ]\n" +
                "\n" +
                "increment( 42 ); at theFunction (theFileName:xx:yy)\n" +
                "increment(\n" +
                "  46, // should equal 20\n" +
                "  'yadda' // should be removed\n" +
                "); at theFunction (theFileName:xx:yy)"
            );
        }

        var mySpy = sinon.spy().named('mySpy');
        mySpy({foo: 123, bar: 456});
        expect(mySpy, 'to have calls satisfying', [
            { args: [ { foo: 123 } ] }
        ]);

        try {
            expect(mySpy, 'to have calls exhaustively satisfying', [
                { args: [ { foo: 123 } ] }
            ]);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(mySpy, 'to have calls exhaustively satisfying', [").nl();
                output.code("    { args: [ { foo: 123 } ] }").nl();
                output.code("]);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected mySpy to have calls exhaustively satisfying [ { args: [ ... ] } ]\n" +
                "\n" +
                "mySpy(\n" +
                "  {\n" +
                "    foo: 123,\n" +
                "    bar: 456 // should be removed\n" +
                "  }\n" +
                "); at theFunction (theFileName:xx:yy)"
            );
        }

        try {
            var increment = sinon.spy().named('increment');
            increment(1);
            increment(2);
            increment(3);

            expect(increment, 'to have calls satisfying', function () {
                increment(1);
                increment(expect.it('to be a number'));
            });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var increment = sinon.spy().named('increment');").nl();
                output.code("increment(1);").nl();
                output.code("increment(2);").nl();
                output.code("increment(3);").nl();
                output.code("").nl();
                output.code("expect(increment, 'to have calls satisfying', function () {").nl();
                output.code("    increment(1);").nl();
                output.code("    increment(expect.it('to be a number'));").nl();
                output.code("});").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected increment to have calls satisfying\n" +
                "increment( 1 );\n" +
                "increment( expect.it('to be a number') );\n" +
                "\n" +
                "increment( 1 ); at theFunction (theFileName:xx:yy)\n" +
                "increment( 2 ); at theFunction (theFileName:xx:yy)\n" +
                "increment( 3 ); at theFunction (theFileName:xx:yy) // should be removed"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-on.md contains correct examples", function () {
        var testPromises = [];
        var obj = { spy: sinon.spy().named('mySpy') };
        obj.spy();
        expect(obj.spy, 'was called on', obj);

        try {
            var another = {};
            expect(obj.spy, 'was called on', another);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var another = {};").nl();
                output.code("expect(obj.spy, 'was called on', another);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected mySpy was called on {}\n" +
                "\n" +
                "mySpy(); at theFunction (theFileName:xx:yy)\n" +
                "// expected: was called on {}\n" +
                "//   expected mySpy to be called with {} as this but was called with { spy: mySpy }"
            );
        }

        expect(obj.spy, 'was always called on', obj);

        try {
            obj.spy.call({});
            expect(obj.spy, 'was always called on', obj);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("obj.spy.call({});").nl();
                output.code("expect(obj.spy, 'was always called on', obj);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected mySpy was always called on { spy: mySpy }\n" +
                "\n" +
                "mySpy(); at theFunction (theFileName:xx:yy)\n" +
                "mySpy(); at theFunction (theFileName:xx:yy)\n" +
                "// expected: was called on { spy: mySpy }\n" +
                "//   expected mySpy to be called with { spy: mySpy } as this but was called with {}"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-times.md contains correct examples", function () {
        var testPromises = [];
        var increment = sinon.spy();
        increment(41);
        increment(42);
        increment(43);
        expect(increment, 'was called times', 3);

        try {
            var add = sinon.spy().named('add');
            add(41, 42);
            add(41, 43);
            add(41, 44);
            add(41, 45);
            expect(add, 'was called times', 2);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var add = sinon.spy().named('add');").nl();
                output.code("add(41, 42);").nl();
                output.code("add(41, 43);").nl();
                output.code("add(41, 44);").nl();
                output.code("add(41, 45);").nl();
                output.code("expect(add, 'was called times', 2);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected add was called times 2\n" +
                "  expected\n" +
                "  add( 41, 42 ); at theFunction (theFileName:xx:yy)\n" +
                "  add( 41, 43 ); at theFunction (theFileName:xx:yy)\n" +
                "  add( 41, 44 ); at theFunction (theFileName:xx:yy)\n" +
                "  add( 41, 45 ); at theFunction (theFileName:xx:yy)\n" +
                "  to have length 2\n" +
                "    expected 4 to be 2"
            );
        }

        var spy = sinon.spy();
        spy(1);
        expect(spy, 'was called once');
        spy(2);
        expect(spy, 'was called twice');
        spy(3);
        expect(spy, 'was called thrice');
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-with.md contains correct examples", function () {
        var testPromises = [];
        var mySpy = sinon.spy().named('mySpy');
        mySpy({ foo: 'bar' }, 'baz', 'quux');
        expect(mySpy, 'was called with', [ { foo: 'bar' }, 'baz', expect.it('to be truthy') ]);

        try {
            expect(mySpy, 'was called with', [ 'baz', { foo: 'bar' }, 'quux' ]);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(mySpy, 'was called with', [ 'baz', { foo: 'bar' }, 'quux' ]);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected mySpy was called with [ 'baz', { foo: 'bar' }, 'quux' ]\n" +
                "\n" +
                "mySpy(\n" +
                "  { foo: 'bar' }, // should equal 'baz'\n" +
                "  'baz', // should equal { foo: 'bar' }\n" +
                "  'quux'\n" +
                "); at theFunction (theFileName:xx:yy)"
            );
        }

        var mySpy = sinon.spy().named('mySpy');
        mySpy({ foo: 'bar' }, 'baz', true);
        mySpy({ foo: 'bar' }, 'baz', true);
        expect(mySpy, 'was always called with', [ { foo: 'bar' }, 'baz', expect.it('to be truthy') ]);

        try {
            mySpy({ foo: 'bar' }, 'baz');
            expect(mySpy, 'was always called with', [ { foo: 'bar' }, 'baz', expect.it('to be truthy') ]);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("mySpy({ foo: 'bar' }, 'baz');").nl();
                output.code("expect(mySpy, 'was always called with', [ { foo: 'bar' }, 'baz', expect.it('to be truthy') ]);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected mySpy\n" +
                "was always called with [ { foo: 'bar' }, 'baz', expect.it('to be truthy') ]\n" +
                "\n" +
                "mySpy( { foo: 'bar' }, 'baz', true ); at theFunction (theFileName:xx:yy)\n" +
                "mySpy( { foo: 'bar' }, 'baz', true ); at theFunction (theFileName:xx:yy)\n" +
                "mySpy(\n" +
                "  { foo: 'bar' },\n" +
                "  'baz'\n" +
                "  // missing: should be truthy\n" +
                "); at theFunction (theFileName:xx:yy)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called.md contains correct examples", function () {
        var testPromises = [];
        var increment = sinon.spy();
        increment(42);
        expect(increment, 'was called');

        try {
            expect(sinon.spy().named('mySpy'), 'was called');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(sinon.spy().named('mySpy'), 'was called');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected mySpy was called"
            );
        }

        expect(sinon.spy(), 'was not called');

        try {
            var add = sinon.spy().named('add');
            add(42, 42);
            expect(add, 'was not called');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var add = sinon.spy().named('add');").nl();
                output.code("add(42, 42);").nl();
                output.code("expect(add, 'was not called');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected add was not called\n" +
                "\n" +
                "add( 42, 42 ); at theFunction (theFileName:xx:yy) // should be removed"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spyCall/to-satisfy.md contains correct examples", function () {
        var testPromises = [];
        var decrement = sinon.spy(function decrement(n) {
            return n - 1;
        });

        decrement(42);
        decrement(46);

        expect(decrement.firstCall, 'to satisfy', { args: [ 42 ], returned: 41 });

        try {
            var decrement = sinon.spy(function decrement(n) {
                return n - 1;
            }).named('decrement');

            decrement(20);
            decrement(200);
            decrement(2000);

            expect(decrement.secondCall, 'to satisfy', { args: [ 20 ] });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var decrement = sinon.spy(function decrement(n) {").nl();
                output.code("    return n - 1;").nl();
                output.code("}).named('decrement');").nl();
                output.code("").nl();
                output.code("decrement(20);").nl();
                output.code("decrement(200);").nl();
                output.code("decrement(2000);").nl();
                output.code("").nl();
                output.code("expect(decrement.secondCall, 'to satisfy', { args: [ 20 ] });").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected decrement( 200 ); at theFunction (theFileName:xx:yy)\n" +
                "to satisfy { args: [ 20 ] }\n" +
                "\n" +
                "decrement(\n" +
                "  200 // should equal 20\n" +
                "); at theFunction (theFileName:xx:yy)"
            );
        }

        var getRandomPrefixedInteger = sinon.spy(function getRandomPrefixedInteger() {
            return 'prefix-' + parseInt(Math.random() * 10, 10);
        });

        getRandomPrefixedInteger();
        getRandomPrefixedInteger();
        getRandomPrefixedInteger();

        expect(getRandomPrefixedInteger.getCall(0), 'to satisfy', {
            returned: expect.it('to be a string').and('to match', /^prefix-[0-9]$/)
        });
        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        var obj = { spy: sinon.spy() };
        obj.spy(42);
        obj.spy({ foo: 'bar' }, 'baz', "qux");
        expect(obj.spy, "was called twice");
        expect(obj.spy, 'was called with', [ { foo: 'bar' }, 'baz', expect.it('to be truthy') ]);
        expect(obj.spy, 'was always called on', obj);

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz');
        spy('qux');
        spy('quux');

        expect(spy.args, 'to equal', [
            [{ foo: 'bar' }, 'baz'],
            ['qux'],
            ['quux']
        ]);

        expect(spy.args[1], 'to equal', ['qux']);

        expect(spy.args, 'to satisfy', {
            0: [
                { foo: 'bar' },
                expect.it('to be a string').and('to have length', 3)
            ],
            2: ['quux']
        });
        return expect.promise.all(testPromises);
    });
});
