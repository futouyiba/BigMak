import * as UE from 'ue'
import {TArray} from "ue";
import Modifier from "./Modifier";

class Skill extends UE.ActorComponent{
    CurrentModifiers: TArray<Modifier>;

}

export default Skill;