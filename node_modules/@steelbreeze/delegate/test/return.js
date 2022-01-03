/* global describe, it */
var assert = require("assert"),
	delegate = require("../lib/node/delegate");

var d1 = delegate.create(function () { return "Hello"; });
var d2 = delegate.create(function () { return "World"; });
var d3 = delegate.create(d1, d2);

var r2 = d2();
var r3 = d3();

describe("test/return.js", function () {
	it("result from delegate is array", function () {
		assert(r2 instanceof Array);
		assert(r3 instanceof Array);
	});

	it("results are typed", function () {
		assert(typeof r2[0] === "string");
	});
});