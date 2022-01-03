/* global describe, it */
var assert = require("assert"),
	delegate = require("../lib/node/delegate");

var i = 0;
var d1 = delegate.create(function() { i += 1; }, function() { i += 2; });
var d2 = delegate.create(function() { i += 4; }, function() { i += 8; });
var d3 = delegate.create(d1, d2);

describe("test/multicast.js", function () {
	it("multicast delegates call all delegates", function () {
		assert.equal(0, i);

		d1();

		assert.equal(3, i);

		d2();

		assert.equal(15, i);

		d3();

		assert.equal(30, i);
	});
});