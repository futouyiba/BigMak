# delegate
Multicast delegate for TypeScript and JavaScript.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][npm-url]
  [![Code Climate](https://codeclimate.com/github/steelbreeze/delegate/badges/gpa.svg)](https://codeclimate.com/github/steelbreeze/delegate)
  [![Test Coverage](https://codeclimate.com/github/steelbreeze/delegate/badges/coverage.svg)](https://codeclimate.com/github/steelbreeze/delegate/coverage)

If you like delegate, please star it...

## Install
```shell
npm i @steelbreeze/delegate
```

## Usage
### TypeScript
```typescript
import { create as delegate } from "@steelbreeze/delegate";

const a = delegate(param => console.log(param + " Hello"), param => console.log(param + " World "));
const b = delegate(param => console.log(param + " Hello world"));

const c = delegate(a, b);

a("a")
b("b")
c("c");
```

### JavaScript
```javascript
var delegate = require("@steelbreeze/delegate");

var a = delegate.create(function (param) { console.log(param + " Hello"); }, function (param) { console.log(param + " World "); });
var b = delegate.create(function (param) { console.log(param + " Hello world"); });

var c = delegate.create(a, b);

a("a");
b("b");
c("c");
```
### Output
The output of the above code will be:
```shell
a Hello
a World
b Hello world
c Hello
c World
c Hello world
```
## API
### Interfaces
#### Delegate
A prototype for a delegate function that is callable and may return a value.

```typescript
interface Delegate<TReturn = any> {
	(...args: any[]): TReturn
}
```
#### MulticastDelegate
A prototype for a multicast delegate function that calls multiple delegates and returns all their return values as an array.

```typescript
interface MulticastDelegate<TReturn = any> {
	(...args: any[]): TReturn[]
}
```
### Functions
#### create
Creates a new delegate from one or more functions or delegates, the result of which is callable and when called returns an array of all the return values from those functions or delegates.

```typescript
create<TReturn = any>(...delegates: Delegate<TReturn>[]): MulticastDelegate<TReturn>
```

## License
MIT License

Copyright (c) 2017 David Mesquita-Morris

[npm-image]: https://img.shields.io/npm/v/@steelbreeze/delegate.svg
[npm-url]:       https://www.npmjs.com/package/@steelbreeze/delegate
[downloads-image]: https://img.shields.io/npm/dm/@steelbreeze/delegate.svg
