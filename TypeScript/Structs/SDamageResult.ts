import * as UE from "ue";
import {edit_on_instance} from "ue";

// class SDamageResult {
class SDamageResult extends UE.Struct{
    @edit_on_instance()
    Amount: number;
    Tags: UE.GameplayTagContainer;
    HitResult: UE.HitResult;
    Source: UE.Actor;
    // Owner:CombatManagerBase;
    ExtraMultiplier: number;
}

export default SDamageResult;