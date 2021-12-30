import * as UE from 'ue'
import {rpc, edit_on_instance} from 'ue'


export class SDamageResult {
    Amount:number;
    Tags:UE.GameplayTagContainer;
    HitResult:UE.HitResult;
    Source:UE.Actor;
    // Owner:CombatManagerBase;
    ExtraMultiplier:number;
}

class CombatManagerBase extends UE.ActorComponent{
    testCls:UE.EAnimationState;


}

export interface IAnimCommunication{
    SetAnimationState(NewAnimState:UE.EAnimationState):void;
}



export default CombatManagerBase;