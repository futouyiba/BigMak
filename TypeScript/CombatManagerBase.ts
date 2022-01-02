import * as UE from 'ue'
import {edit_on_instance, ETeam, PrimitiveComponent, TArray, Team, uproperty} from 'ue'
import WGT_FloatingTextGenerator from './WGT_FloatingTextGenerator';
import GlobalDamageModifier from "./GlobalDamageModifier";
import SHitFeedbackSlot from "./Structs/SHitFeedbackSlot";


class CombatManagerBase extends UE.ActorComponent {
    testCls: UE.EAnimationState;

    /**
     * Metrics
     */

    @edit_on_instance()
    HitFeedbackDuration: number = 0.074;

    @edit_on_instance()
    FloatingTextGeneratorClass: UE.TSubclassOf<WGT_FloatingTextGenerator>;

    @edit_on_instance()
    bDisplayCombatText: boolean = true;

    @edit_on_instance()
    bDisplayHitFeedback: boolean = true;

    @edit_on_instance()
    bShowStatusText: boolean = true;

    /**
     * System | Hit Feedback
     */
    @uproperty.uproperty(uproperty.Category="System | HitFeedback")
    MaterialFeedbackBodies: UE.TArray<UE.PrimitiveComponent>;
    @uproperty.uproperty(uproperty.Category="System | HitFeedback")
    FeedbackMaterialTimer: UE.TimerHandle;
    @uproperty.uproperty(uproperty.Category="System | HitFeedback")
    HitFeedbackSlots: UE.TMap<PrimitiveComponent, SHitFeedbackSlot>
    @uproperty.uproperty(uproperty.Category="System | HitFeedback")
    GlobalCombatModifiers: TArray<GlobalDamageModifier>;

    GetOwningTeam(): Team {
        //todo
        return;
    }


    ReceiveBeginPlay(): void {

    }

    SetTeam(NewTeam: ETeam): void {
        return;//todo
    }
}


export default CombatManagerBase;