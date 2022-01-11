import * as ue from 'ue'
// import {TArray} from "ue";

declare module "ue"{
    interface Object{
        CreateDefaultSubobjectGeneric<T extends ue.Object>(SubojectFName:string, ReturnType:ue.Class):T;
    }

    interface TArray<T>{
        extendProp :number;
        foreach(func:(T)=>void):void;
        Remove(eleToRm:T):boolean;
        //todo https://stackoverflow.com/questions/52844124/how-to-create-an-extension-method-for-a-specific-type-of-generic-type-in-typescr
    }
}

ue.Object.prototype.CreateDefaultSubobjectGeneric = function CreateDefaultSubobjectGeneric<T extends ue.Object>(SubojectFName:string, ReturnType: ue.Class):T{
    return this.CreateDefaultSubobject(SubojectFName, ReturnType, ReturnType, true, false, false) as T;
}

export function foreach<T>(tArray: ue.TArray<T>, func:(T)=>void) {
    // if (typeof func != "function") return;
    let num = tArray.Num();
    for (let i = 0; i < num; i++) {
        let ele = tArray.Get(i);
        func(ele);
    }
}

ue.TArray.prototype.extendProp = 1;
ue.TArray.prototype.foreach = function<T>(this:ue.TArray<T>,func:(e:T)=>void):void{
    console.log('foreach of TArray is ran over...');
    let num = this.Num();
    for (let i = 0; i < num; i++) {
        let ele = this.Get(i);
        func(ele);
    }
};
ue.TArray.prototype.Remove = function<T> (this:ue.TArray<T>, eleToRm:T):boolean{
    let index = this.FindIndex(eleToRm);
    if (index<=-1) return false;
    this.RemoveAt(index);
    return true;
}

// TArray<T>.prototype.foreach = function (func: any) :void{
//     let num = tarray.Num();
//     for (let i = 0; i < num; i++) {
//         let ele = tarray.Get(i);
//         func(ele);
//     }
// }