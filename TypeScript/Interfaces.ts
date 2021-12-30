import * as UE from 'ue'
import {SDamageResult} from './CombatManagerBase'

interface ICombat{
    // return: DiedFromDamages as boolean.
    TakeDamge(InDamageResult:SDamageResult):boolean;
}