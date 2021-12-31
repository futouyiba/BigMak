import * as UE from "ue";

// class SDamageResult {
class DamageResult extends UE.Struct{
    Amount: number;
    Tags: UE.GameplayTagContainer;
    HitResult: UE.HitResult;
    Source: UE.Actor;
    // Owner:CombatManagerBase;
    ExtraMultiplier: number;
}

export default DamageResult;