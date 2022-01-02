import * as UE from "ue";
import {EAction, TArray} from "ue";

class ActionManger extends UE.ActorComponent {
    ForbidActions(NewForbiddenAction: TArray<EAction>, ForceCancel: boolean) :TArray<number>{
        return UE.NewArray<number>();
    }
}

export default ActionManger;