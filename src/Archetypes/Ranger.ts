import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energy: EnergyType;
  private static _rangerInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    this._rangerInstance += 1;
    return this._rangerInstance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;