import * as UE from 'ue'
import { SDamageResult } from "./Structs";
import CombatManagerBase from './CombatManagerBase'

interface ICombat{
    // return: DiedFromDamages as boolean.
    TakeDamge(InDamageResult:SDamageResult):boolean;
    // return: Received as boolean.
    OnDeath(InDamageResult:SDamageResult):boolean;
    FindTeam(ReturnTeam:UE.Team)
    FindWeapon():{WeaponActor:UE.Actor, SKComponent:UE.SkeletalMeshComponent};
    FindCombatManager():CombatManagerBase;
    ShouldConsumeHit():boolean;
    // return: Received as boolean.
    OnRevive():boolean;
}

export interface IAnimCommunication{
    SetAnimationState(NewAnimState:UE.EAnimationState):void;
}
