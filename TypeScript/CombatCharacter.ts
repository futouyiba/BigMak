import {Character} from "ue";
import {ICombat, ISkill, IStats} from "./Interfaces";
import CombatManagerBase from "./CombatManagerBase";
import {SkillManager} from "./SkillManager";
import * as UE from "ue";
import {SDamageResult} from "./Structs";

class CombatCharacter extends Character implements ISkill, ICombat, IStats{
    FindStatsManager(): import("./StatManager").default {
        throw new Error("Method not implemented.");
    }
    TakeDamage(InDamageResult: SDamageResult): boolean {
        throw new Error("Method not implemented.");
    }
    FindCombatManager(): CombatManagerBase {
        return undefined;
    }

    FindSkillManager(): SkillManager {
        return undefined;
    }

    FindTeam(ReturnTeam: UE.Team) {
    }

    FindWeapon(): { WeaponActor: UE.Actor; SKComponent: UE.SkeletalMeshComponent } {
        return {SKComponent: undefined, WeaponActor: undefined};
    }

    OnDeath(InDamageResult: SDamageResult): boolean {
        return false;
    }

    OnRevive(): boolean {
        return false;
    }

    ShouldConsumeHit(): boolean {
        return false;
    }

}

export default CombatCharacter;