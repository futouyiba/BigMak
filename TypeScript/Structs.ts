import * as UE from 'ue'

export class SDamageResult {
    Amount: number;
    Tags: UE.GameplayTagContainer;
    HitResult: UE.HitResult;
    Source: UE.Actor;
    // Owner:CombatManagerBase;
    ExtraMultiplier: number;
}

