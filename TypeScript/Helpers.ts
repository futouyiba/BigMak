import * as ue from 'ue'
import {TArray} from "ue";

export function foreach<T>(tarray: TArray<T>, func:(T)=>void) {
    // if (typeof func != "function") return;
    let num = tarray.Num();
    for (let i = 0; i < num; i++) {
        let ele = tarray.Get(i);
        func(ele);
    }
}

// TArray<T>.prototype.foreach = function (func: any) :void{
//     let num = tarray.Num();
//     for (let i = 0; i < num; i++) {
//         let ele = tarray.Get(i);
//         func(ele);
//     }
// }