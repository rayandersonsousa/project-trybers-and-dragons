import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._elfInstance += 1;
    return this._elfInstance;
  }
}

export default Elf;