import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._halflingInstance += 1;
    return this._halflingInstance;
  }
}

export default Halfling;