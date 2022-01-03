import * as UE from "ue";
import {Action, EAction, TArray} from "ue";

class ActionManger extends UE.ActorComponent {
    InputsEnabled: boolean;
    ForbidActions(NewForbiddenAction: TArray<EAction>, ForceCancel: boolean) :TArray<number>{
        return null;
    }

    SetAction(ModifiedAction: UE.Action):boolean {
        return false;
    }

    ActionToInt(InAction:EAction):number{
        return 0;
    }

    CancelCurrentAction() {

    }

    GetAction(Action: EAction):Action {
        return null;
    }
}

export default ActionManger;