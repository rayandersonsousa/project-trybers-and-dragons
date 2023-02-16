import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energy: EnergyType;
  private static _mageInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'mana';
  }

  public static createdArchetypeInstances(): number {
    this._mageInstance += 1;
    return this._mageInstance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Mage;