import * as UE from 'ue'

// UE.TArray.prototype.ForEach = (func:any)=>{
//     let num = this.Num();
//     for (let i = 0; i < num; i++) {
//         let ele = this.Get(i);
//         func(ele);
//     }
// }

// interface IInner{
//     GetInner():number;
// }
//
// class Container implements IInner{
//     GetInner(): number {
//         return 1;
//     }
// }
//
// let a = "test";
// let b = a as unknown as IInner;
// console.log(b);
//
// let test2 = new Container();
// let infer2 = test2 as unknown as IInner;
// console.log(infer2);
// console.log(infer2.GetInner());
//
// let a2 = a as any;
// if (a2.GetInner){
// let inner5:number = a2.GetInner();}
//
// let inner4 = (a as any).GetInner!();

// let inner3 = (a as any).GetInner();
// console.log(inner3);
