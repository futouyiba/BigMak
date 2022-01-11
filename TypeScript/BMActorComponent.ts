import {$MulticastDelegate, ActorComponent} from "ue";

class BMActorComponent extends ActorComponent{
    bIsReady:boolean;
    onReady: $MulticastDelegate<()=>void>;
    onInitialization:$MulticastDelegate<()=>void>;
    onRequestDestroy:$MulticastDelegate<(ActorComponent)=>void>;

    IsReady():boolean{
        return this.bIsReady;
    }

    SetReady(ready:boolean):void{
        this.bIsReady = ready;
        this.onReady.Broadcast();
        this.onReady.Clear();
    }
}