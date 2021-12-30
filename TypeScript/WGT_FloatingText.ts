import * as UE from 'ue'

class WGT_FloatingText extends UE.UserWidget{
    bShouldMove:boolean;
    bShouldFade:boolean;
    FadeSpeed:number;
    Duration:number;
    Velocity:UE.Vector;
    DisplayedText:string;

    
}

export default WGT_FloatingText;