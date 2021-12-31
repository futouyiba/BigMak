import * as ue from "ue";
import {edit_on_instance, uproperty, ufunction} from "ue";
import CombatManagerBase from "./CombatManagerBase";
import SDamageResult from "./Structs/SDamageResult";
import Bonuses from "./Structs/Bonuses";

// Allows us to retrieve the damage event of a combat manager to modify the damage dealt depending on criteria we decide.
//
// It's never directly spawned, we're spawning child classes instead.
//
// Create child classes to create and customize MCE features.
class GlobalDamageModifier extends ue.Object {
    @edit_on_instance()
    Target:CombatManagerBase;// todo add "expose on spawn"

    constructor(Target:CombatManagerBase,  Outer?: ue.Object, Name?: string, ObjectFlags?: number){
        super(Outer,Name, ObjectFlags);
        this.Target = Target;
    }

    bOffensiveModifier:boolean=false;

    ReturnDamageModifier(InDamageResult:SDamageResult):Bonuses{
        return new Bonuses(0,0);
    }

    // todo check "pure" within blueprint editor
    // @ufunction.ufunction(ue.ufunction.BlueprintPure)
    GetOwningManager():CombatManagerBase{
        return this.Target;
    }
}

export default GlobalDamageModifier;