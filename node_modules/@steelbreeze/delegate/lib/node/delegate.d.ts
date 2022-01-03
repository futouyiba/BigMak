/**
 * @module delegate
 *
 * Multicast delegate for TypeScript
 *
 * Copyright (c) 2017 David Mesquita-Morris
 */
/**
 * The prototype for any callable function; one that takes an arbitory number of parameters and may return a value.
 */
export interface Delegate<TReturn = any> {
    /**
     * @param args An arbitory number of parameters to pass to the [delegate]{@link Delegate}.
     * @return An optional return from the [delegate]{@link Delegate}.
     */
    (...args: any[]): TReturn;
}
/**
 * Implementation of a [multicast delegate]{@link MulticastDelegate} as returned by the [[create]] function.
 * A [multicast delegate]{@link MulticastDelegate} encaptulates an arbitory number of [delegates]{@link Delegate} and returns an array of all their return values when called.
 * A [multicast delegate]{@link MulticastDelegate} is substitutable for a [delegates]{@link Delegate}.
 */
export interface MulticastDelegate<TReturn = any> {
    /**
     * @param args An arbitory number of parameters to pass to the [multicast delegate]{@link MulticastDelegate}.
     * @return An array of return values from the [multicast delegate]{@link MulticastDelegate}.
     */
    (...args: any[]): TReturn[];
}
/**
 * Creates a [multicast delegate]{@link Delegate} for one or more [delegates]{@link Delegate} (functions) that can be called as one.
 * @param delegates The set of [delegates]{@link Delegate} (functions) to aggregate into a single [delegate]{@link Delegate}.
 * @return Returns a [delegate]{@link Delegate} that when called calls the other [delegates]{@link Delegate} provided.
 */
export declare function create<TReturn = any>(...delegates: Delegate<TReturn>[]): MulticastDelegate<TReturn>;
