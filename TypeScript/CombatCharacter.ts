import * as ue from "ue";
import {BlueprintFunctionLibrary, Character, rpc, Struct, TArray, uclass, ufunction} from "ue";
// import {ICombat, ISkill, IStats} from "./Interfaces";
import CombatManagerBase from "./CombatManagerBase";
import SkillManager from "./SkillManager";
import StatManager from "./StatManager";
import SDamageResult from "./Structs/SDamageResult";

// @uclass.uclass(uclass.BlueprintType)
// class SDamageResult {
//     foo: number;
//     bar: number;
// }

// class SDamageResult extends Struct {
// // class DamageResult extends UE.Object{
//     Amount: number;
//     // Tags: UE.GameplayTagContainer;
//     // HitResult: UE.HitResult;
//     // Source: UE.Actor;
//     // Owner:CombatManagerBase;
//     // ExtraMultiplier: number;
// }

// class CombatCharacter extends Character implements ISkill, ICombat, IStats{
class CombatCharacter extends Character {

    arr:TArray<number>;

    ReceiveBeginPlay(): void {
        console.log('character begin play');
        this.TestForTArray();
    }

    TestForTArray():void{
        // let num = this.arr.Num();
        // for (let i = 0; i < num; i++) {
        //     let ele = this.arr.Get(i);
        //     console.log(i, ele);
        // }
        this.arr.foreach((ele)=>{
            console.log(ele);
        });
    }

    // @rpc.flags(rpc.FunctionFlags.FUNC_NetMulticast)
    @ufunction.ufunction(
        ufunction.NetMulticast,
        ufunction.Unreliable
    )
    TestRpc(): void {
        console.log("test rpc");
    }

    FindStatsManager(): StatManager {
        return undefined;
    }

    TakeDamage(InDamageResult: SDamageResult): boolean {
        console.log('damage is...' + InDamageResult);
        return false;
    }

    FindCombatManager(): CombatManagerBase {
        return undefined;
    }

    FindSkillManager(): SkillManager {
        return undefined;
    }

    FindTeam(): ue.Team {
        return undefined;
    }

    // FindWeapon(): [UE.Actor,  UE.SkeletalMeshComponent] {
    // // FindWeapon(): { WeaponActor: UE.Actor, SKComponent: UE.SkeletalMeshComponent } {
    //     return [undefined,undefined];
    // }

    //
    // @UE.ufunction.ufunction(UE.ufunction.BlueprintCallable)
    OnDeath(InDamageResult: SDamageResult): boolean {
        console.log("character on death");
        return false;
    }

    //
    // OnRevive(): boolean {
    //     return false;
    // }
    //
    // ShouldConsumeHit(): boolean {
    //     return false;
    // }

}

export default CombatCharacter;