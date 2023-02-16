import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._orcInstance += 1;
    return this._orcInstance;
  }
}

export default Orc;