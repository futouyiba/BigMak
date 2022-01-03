"use strict";
/**
 * @module delegate
 *
 * Multicast delegate for TypeScript
 *
 * Copyright (c) 2017 David Mesquita-Morris
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***
 * A [[MulticastDelegate]] does nothing; this is returned from the [[create]] function if no [callable]{@link isCallable} [delegates]{@link Delegate} are passed in.
 * @hidden
 */
var noop = function () { return []; };
/**
 * Tests a [delegate]{@link Delegate} to see if it contains behavior.
 * @hidden
 */
function hasBehavior(delegate) {
    return delegate !== noop && delegate !== undefined && delegate !== null;
}
/**
 * Creates a [multicast delegate]{@link Delegate} for one or more [delegates]{@link Delegate} (functions) that can be called as one.
 * @param delegates The set of [delegates]{@link Delegate} (functions) to aggregate into a single [delegate]{@link Delegate}.
 * @return Returns a [delegate]{@link Delegate} that when called calls the other [delegates]{@link Delegate} provided.
 */
function create() {
    var delegates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        delegates[_i] = arguments[_i];
    }
    var callable = delegates.filter(hasBehavior);
    return callable.length !== 0 ? function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return callable.map(function (f) { return f.apply(void 0, args); });
    } : noop;
}
exports.create = create;
