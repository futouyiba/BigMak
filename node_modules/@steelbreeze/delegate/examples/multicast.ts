import { create as delegate } from "../lib/node/delegate";

const a = delegate(param => { console.log(param + " Hello"); return "Hello"; }, param => { console.log(param + " World "); return "world" });
const b = delegate(param => { console.log(param + " Hello world"); return "Hello world" });

const c = delegate(a, b);

a("a")
b("b")

const results = c("c");

console.log(results);
