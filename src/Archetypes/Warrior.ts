import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energy: EnergyType;
  private static _warriorInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    this._warriorInstance += 1;
    return this._warriorInstance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;