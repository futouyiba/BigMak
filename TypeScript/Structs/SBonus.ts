import * as ue from 'ue'
import {Object} from "ue";

class SBonus extends Object{
    FlatBonus:number;
    RatioBonus: number;

    constructor(    FlatBonus:number,    RatioBonus: number) {
        super();
        this.FlatBonus = FlatBonus;
        this.RatioBonus = RatioBonus;
    }
}

export default SBonus;