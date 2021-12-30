import * as UE from 'ue'
import {Action, edit_on_instance, ETeam, TArray, TSubclassOf} from 'ue'
import Skill from "./Skill";
import ActionManger from "./ActionManger";
import StatManager from "./StatManager";
import {SSkillCost} from "./Structs";
import GlobalDamageModifier from "./GlobalDamageModifier";
import {ICombat} from './Interfaces'

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
  let target = <ICombat>(this.GetModTarget());
  if (!target) return;
 }

 GetModTarget():UE.Object{
  return this.Target;
 }
}

export default Modifier;