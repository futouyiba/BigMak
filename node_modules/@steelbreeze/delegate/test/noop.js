/* global describe, it */
var assert = require("assert"),
	delegate = require("../lib/node/delegate");

var d1 = delegate.create();
var d2 = delegate.create();
var d3 = delegate.create(d1, null, undefined);

describe("test/noop.js", function () {
	it("return from create() with no args return the same delegate so are comparable", function () {
		assert(d2 === d1);
	});

	it("return from create() with noop, null or undefined as args return noop", function () {
		assert(d3 === d1);
	});

	it("returns from create() returning noop are callable", function () {
		d1();
		d2();
		d3();
	});
});