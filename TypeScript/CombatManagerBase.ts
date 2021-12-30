import * as UE from 'ue'
import {rpc, edit_on_instance} from 'ue'
import WGT_FloatingTextGenerator from './WGT_FloatingTextGenerator';


class CombatManagerBase extends UE.ActorComponent{
    testCls:UE.EAnimationState;

    @edit_on_instance()
    HitFeedbackDuration:number;

    @edit_on_instance()
    FloatingTextGeneratorClass:UE.TSubclassOf<WGT_FloatingTextGenerator>;


}




export default CombatManagerBase;