import * as UE from 'ue'
import {Actor, edit_on_instance, ETeam, PrimitiveComponent, TArray, Team, uproperty} from 'ue'
import WGT_FloatingTextGenerator from './WGT_FloatingTextGenerator';
import GlobalDamageModifier from "./GlobalDamageModifier";
import SHitFeedbackSlot from "./Structs/SHitFeedbackSlot";
import StatManager from "./StatManager";


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
    @uproperty.uproperty(uproperty.Category="References | Owner")
    private RefStatSystem: StatManager;


    GetPairedStatManager():StatManager{
        if (this.RefStatSystem) {
            return this.RefStatSystem;
        }
        else {
            this.SetPairedStatManager();
            return this.RefStatSystem;
        }
    }


    GetOwningTeam(): Team {
        //todo
        return;
    }


    ReceiveBeginPlay(): void {

    }

    SetTeam(NewTeam: ETeam): void {
        return;//todo
    }

    // should be called on begin play
    private SetPairedStatManager():void {
        let user = this.GetUser();
        let statMgr = (user as any).StatManager;
        if (!statMgr) return;
        this.RefStatSystem = statMgr;
        statMgr.onStatUpdate.Add(this.OnHealthStatNotify);
        this.StoreInitialHealthRep(null);
        // return statMgr;
    }

    OnHealthStatNotify(OnHealthStatNotify: any) {
        throw new Error("Method not implemented.");
    }

    GetUser():Actor{
        return this.GetOwner();
    }

    private StoreInitialHealthRep(InStat:any) {
        
    }
}


export default CombatManagerBase;