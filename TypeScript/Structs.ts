import * as UE from 'ue'
import {Cost, EStatCarrier, TArray} from 'ue'

export class SHitMaterialSlot {
    BaseMaterial: UE.MaterialInterface;
    HitMaterial: UE.MaterialInterface;
}

export class SHitFeedbackSlot {
    MaterialIndexes: UE.TMap<number, SHitMaterialSlot>;
}

export class SSkillCost {
    TargetCarrier: EStatCarrier;
    Costs: TArray<Cost>;
}

