import * as UE from 'ue'
import {Cost, EStatCarrier, TArray} from 'ue'

export class SDamageResult {
    Amount: number;
    Tags: UE.GameplayTagContainer;
    HitResult: UE.HitResult;
    Source: UE.Actor;
    // Owner:CombatManagerBase;
    ExtraMultiplier: number;
}

export class SHitMaterialSlot{
    BaseMaterial:UE.MaterialInterface;
    HitMaterial:UE.MaterialInterface;

}

export class SHitFeedbackSlot{
    MaterialIndexes:UE.TMap<number, SHitMaterialSlot>;
}

export class SSkillCost{
    TargetCarrier:EStatCarrier=EStatCarrier.Skill;
    Costs:TArray<Cost>;
}