import * as ue from "ue";
import {edit_on_instance, uproperty, ufunction} from "ue";
import CombatManagerBase from "./CombatManagerBase";
import SDamageResult from "./Structs/SDamageResult";
import SBonus from "./Structs/SBonus";

// Allows us to retrieve the damage event of a combat manager to modify the damage dealt depending on criteria we decide.
//
// It's never directly spawned, we're spawning child classes instead.
//
// Create child classes to create and customize battle features.
// todo for example, if we want to do a shield that mitigate 50% damage, derive from this.
class GlobalDamageModifier extends ue.Object {
    @edit_on_instance()
    Target:CombatManagerBase;// todo add "expose on spawn"

    constructor(Target:CombatManagerBase,  Outer?: ue.Object, Name?: string, ObjectFlags?: number){
        super(Outer,Name, ObjectFlags);
        this.Target = Target;
    }

    bOffensiveModifier:boolean=false;

    ReturnDamageModifier(InDamageResult:SDamageResult):SBonus{
        return new SBonus(0,0);
    }

    // todo check "pure" within blueprint editor
    @ufunction.umeta(ue.ufunction.BlueprintPure)
    GetOwningManager():CombatManagerBase{
        return this.Target;
    }
}

export default GlobalDamageModifier;