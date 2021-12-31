import * as ue from 'ue'
import {Object} from "ue";

class Bonuses extends Object{
    FlatBonus:number;
    RatioBonus: number;

    constructor(    FlatBonus:number,    RatioBonus: number) {
        super();
        this.FlatBonus = FlatBonus;
        this.RatioBonus = RatioBonus;
    }
}

export default Bonuses;