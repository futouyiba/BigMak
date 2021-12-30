import * as UE from "ue";
import { edit_on_instance, DetourCrowdAIController } from "ue";
import CombatManagerBase from "./CombatManagerBase";
import Modifier from "./Modifier";

class Status extends UE.ActorComponent{
    /**
     * Metrics | HUD
     */
    @edit_on_instance()
    Type:UE.EStatusType = UE.EStatusType.Malus;

    @edit_on_instance()
    Name:string;

    @edit_on_instance()
    Icon:UE.Texture2D;

    @edit_on_instance()
    Description:string = "this is a status effect";

    /**
     * Metrics | Stats
     */
    @edit_on_instance()
    Duration:number = 3.0;

    @edit_on_instance()
    Value:number = 3.0;

    /**
     * Metrics | Stack
     */
    @edit_on_instance()
    StackDurationType:UE.EStatusStackType = UE.EStatusStackType.ResetsDuration;

    @edit_on_instance()
    bStackValues:boolean = false;

    /**
     * Metrics|Visual
     */
    @edit_on_instance()
    AttachPoint:string;

    @edit_on_instance()
    StatusFX:UE.ParticleSystem;

    /**
     * Metrics|Checkers
     */
    @edit_on_instance()
    VisionCheckerChannel:UE.ETraceTypeQuery;

    /**
     * References | Components
     */
    StatusFXRef:UE.ParticleSystem;

    /**
     * References | Target
     */
    TargetCombatManager:CombatManagerBase;

    /**
     * References | Owner
     */
    Instigator:UE.Actor;

    InstigatorCombatManager:CombatManagerBase;

    /**
     * References | Checker
     */
    DistanceCheckerSource:UE.Actor;

    /**
     * stop adding category from now.
     * reason:
     * 1. maybe switch to meta information decorators
     * 2. reduce prototyping period, preparing for issues to come out.
     */
    EndTimer:UE.TimerHandle;

    bExpired:boolean;

    StackAmount:number;

    ModifierID:number;

    Modifiers:UE.TArray<Modifier>;


}

export default Status;