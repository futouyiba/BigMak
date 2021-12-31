import {Struct, TMap} from "ue";
import SHitMaterialSlot from "./SHitMaterialSlot";

class SHitFeedbackSlot extends Struct{
    MaterialIndexes: TMap<number, SHitMaterialSlot>;
}

export default SHitFeedbackSlot;