import * as UE from "ue";
import {TSubclassOf} from "ue";
import Skill from "./Skill"

class SkillManager extends UE.ActorComponent{
    dummy:number;

    // means " find skill "
    HasSkill(SkillToModify: TSubclassOf<Skill>):Skill {
        return null;
    }
}

export default SkillManager;