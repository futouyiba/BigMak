import * as UE from 'ue'
import CombatManagerBase from './CombatManagerBase'
import SkillManager from "./SkillManager";
import StatManager from "./StatManager";
import {NetworkModifierManager} from "./NetworkModifierManager";
import ChatManager from "./ChatManager";
import ActionManger from "./ActionManger";
import SDamageResult from "./Structs/SDamageResult";

export interface ICombat{
    // return: DiedFromDamages as boolean.
    TakeDamage(InDamageResult:SDamageResult):boolean;
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

export interface ISkill{
    FindSkillManager():SkillManager;
}

export interface IStats{
    FindStatsManager():StatManager;
}

export interface INetworkModifier{
    FindNetworkModifierManager():NetworkModifierManager;
}

export interface IChat{
    GetChatManager():ChatManager;
}

export interface IAction{
    FindActionManager():ActionManger;
}