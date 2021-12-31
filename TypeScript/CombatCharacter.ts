import {Character} from "ue";
// import {ICombat, ISkill, IStats} from "./Interfaces";
import CombatManagerBase from "./CombatManagerBase";
import SkillManager from "./SkillManager";
import * as UE from "ue";
import StatManager from "./StatManager";
import SDamageResult from "./Structs/SDamageResult";

// class DamageResult extends UE.Struct {
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
    ReceiveBeginPlay(): void {
        console.log('character begin play');
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

    FindTeam():UE.Team {
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