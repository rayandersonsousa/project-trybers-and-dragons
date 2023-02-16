import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energy: EnergyType;
  private static _necromancerInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'mana';
  }

  public static createdArchetypeInstances(): number {
    this._necromancerInstance += 1;
    return this._necromancerInstance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;