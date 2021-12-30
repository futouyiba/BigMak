import * as UE from 'ue'
import {edit_on_instance, PrimitiveComponent} from 'ue'
import WGT_FloatingTextGenerator from './WGT_FloatingTextGenerator';
import { SHitFeedbackSlot } from './Structs';


class CombatManagerBase extends UE.ActorComponent{
    testCls:UE.EAnimationState;

/**
 * Metrics
 */

    @edit_on_instance()
    HitFeedbackDuration:number = 0.074;

    @edit_on_instance()
    FloatingTextGeneratorClass:UE.TSubclassOf<WGT_FloatingTextGenerator> ;

    @edit_on_instance()
    bDisplayCombatText:boolean = true;

    @edit_on_instance()
    bDisplayHitFeedback:boolean= true;

    @edit_on_instance()
    bShowStatusText:boolean= true;

    /**
     * System | Hit Feedback
     */
    MaterialFeedbackBodies:UE.TArray<UE.PrimitiveComponent>;
    FeedbackMaterialTimer:UE.TimerHandle;
    HitFeedbackSlots:UE.TMap<PrimitiveComponent,SHitFeedbackSlot>

    ReceiveBeginPlay(){

    }
}




export default CombatManagerBase;