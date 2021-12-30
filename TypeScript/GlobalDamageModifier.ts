import * as ue from "ue";
import {edit_on_instance, uproperty, ufunction} from "ue";
import CombatManagerBase from "./CombatManagerBase";
import {SDamageResult} from "./Structs";


class GlobalDamageModifier extends ue.Object {
    @edit_on_instance()
    @uproperty.uproperty(ue.uproperty.ExposeOnSpawn)
    Target:CombatManagerBase;// todo add "expose on spawn"

    constructor(Target:CombatManagerBase,  Outer?: ue.Object, Name?: string, ObjectFlags?: number){
        super(Outer,Name, ObjectFlags);
        this.Target = Target;


    }

    bOffensiveModifier:boolean=false;

    ReturnDamageModifier(InDamageResult:SDamageResult):{FlatBonus:number, RatioBonus: number}{
        return {FlatBonus:0,RatioBonus:0};
    }

    // todo check "pure" within blueprint editor
    @ufunction.ufunction(ue.ufunction.BlueprintPure)
    GetOwningManager():CombatManagerBase{
        return this.Target;
    }
}

export default GlobalDamageModifier;