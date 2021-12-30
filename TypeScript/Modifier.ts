import * as UE from 'ue'
import {Action, edit_on_instance, ETeam, TArray} from 'ue'
import Skill from "./Skill";
import ActionManger from "./ActionManger";
import StatManager from "./StatManager";
import {SSkillCost} from "./Structs";
import GlobalDamageModifier from "./GlobalDamageModifier";

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
}

export default Modifier;