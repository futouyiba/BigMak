import * as UE from 'ue'
import {Action, edit_on_instance, ETeam, TArray, Texture2D, TSubclassOf} from 'ue'
import Skill from "./Skill";
import ActionManger from "./ActionManger";
import StatManager from "./StatManager";
import GlobalDamageModifier from "./GlobalDamageModifier";
import {IAction, ICombat, IStats} from './Interfaces'
import {SSkillCost} from "./Structs/SSkillCost";

class Modifier extends UE.Object{
 @edit_on_instance()
 Name:string;

 @edit_on_instance()
 Icon:UE.Texture2D;

 @edit_on_instance()
 Target:UE.Object;

 TargetSkill:Skill;

 ActionManagerRef:ActionManger;

 StatManagerRef:StatManager;

 StoredInitialSkillHitFX:UE.ParticleSystem;

 StatModifiers:UE.TArray<UE.StatModifier>;

 InitialCostList:TArray<SSkillCost>;

 ActionModifiers:TArray<Action>;

 ActionForbidden:TArray<number>;

 bInputsShutDown:boolean;

 StoredInitialTeam: ETeam;

 SkillModifierIndex:number=0;

 bSkillTagsModified:boolean=false;

 AppliedGlobalModifiers:TArray<GlobalDamageModifier>;

 DisabledRegenerations:TArray<UE.EStat>;

 StoredInitialGameplayTags:UE.GameplayTagContainer;

 WantedSkillToModify:TSubclassOf<Skill>;

 RemoveAllModifiers():void{
  //todo
 }

 RemoveTeamModifier():void{
  if (!this.StoredInitialTeam) return;
  //todo

 }

 RemoveGlobalModifiers():void{
  let n = this.AppliedGlobalModifiers.Num();
  if (n<=0) return;
  let target = (this.GetModTarget()) as unknown as ICombat;
  if (!target) return;
  let combatMgr = target.FindCombatManager();
  for (let i = 0; i < n; i++) {
   let index = combatMgr.GlobalCombatModifiers.FindIndex(this.AppliedGlobalModifiers.Get(i));
   combatMgr.GlobalCombatModifiers.RemoveAt(index);
  }
 }

 GetModTarget():UE.Object{
  return this.Target;
 }

 StoreModifierValues(Name:string, Icon:Texture2D):void{
  this.Name = Name;
  this.Icon = Icon;
 }

 GetModStatManager():StatManager{
  if (this.StatManagerRef) return this.StatManagerRef;
  let target = this.GetModTarget() as unknown as IStats;
  let statMgr = target.FindStatsManager();
  if (statMgr){
   this.StatManagerRef = statMgr;
   return statMgr;
  }
  return null;
 }

 GetModActionManager():ActionManger{
  if (this.ActionManagerRef) return this.ActionManagerRef;
  let target = this.GetModTarget() as unknown as IAction;
  if (!target) return;
  let actionMgr = target.FindActionManager();
  if (!actionMgr) return;
  this.ActionManagerRef = actionMgr;
  return actionMgr;
 }

 RemoveScriptedChanges(){}

 // Call this if you want to modify the target's combat team
 AddTeamModifier(NewTeam:ETeam):void{
  let target = this.GetModTarget() as unknown as ICombat;
  if (!target) return;
  let combatMgr = target.FindCombatManager();
  if (!combatMgr) return;
  this.StoredInitialTeam = combatMgr.GetOwningTeam().Team;
  combatMgr.SetTeam(NewTeam);
 }

 //call this if you want to modify the target's combat team.
 AddGlobalCombatModifier(InGlobalModifier:TSubclassOf<GlobalDamageModifier>):void{
  let target = this.GetModTarget() as unknown as ICombat;
  if (!target) return;
  let combatMgr = target.FindCombatManager();
  if (!combatMgr) return;
  let globalMod = UE.NewObject(InGlobalModifier, this.GetModTarget()) as GlobalDamageModifier;
  globalMod.Target = combatMgr;
  // let globalMod = new GlobalDamageModifier(combatMgr);
  combatMgr.GlobalCombatModifiers.Add(globalMod);
  this.AppliedGlobalModifiers.Add(globalMod);
 }

 //call this if you want to modify the target's combat team
 RemoveGlobalCombatModifier(InGlobalModifier:TSubclassOf<GlobalDamageModifier>):void{
  let target = this.GetModTarget() as unknown as ICombat;
  if (!target) return;
  let combatMgr = target.FindCombatManager();
  if (!combatMgr) return;
  let foundMod = this.GetGlobalModifier(InGlobalModifier);
  if (!foundMod) return;
  let index = combatMgr.GlobalCombatModifiers.FindIndex(foundMod);
  combatMgr.GlobalCombatModifiers.RemoveAt(index);
  this.AppliedGlobalModifiers.RemoveAt( this.AppliedGlobalModifiers.FindIndex(foundMod));
 }

 GetGlobalModifier(InGlobalModifier:TSubclassOf<GlobalDamageModifier>):GlobalDamageModifier{
  let num = this.AppliedGlobalModifiers.Num();
  for (let i = 0; i < num; i++) {
   let ele = this.AppliedGlobalModifiers.Get(i);//todo check get index start.
   if (ele.GetClass()==InGlobalModifier) return ele;
  }
  return;
 }
}

export default Modifier;