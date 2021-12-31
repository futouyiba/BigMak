import {Cost, EStatCarrier, Struct, TArray} from "ue";

class SSkillCost extends Struct{
    TargetCarrier: EStatCarrier;
    Costs: TArray<Cost>;
}

export default SSkillCost;