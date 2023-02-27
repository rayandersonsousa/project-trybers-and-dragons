import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(public character: Fighter, public entity: SimpleFighter[]) {
    super(character);
  }

  fight(): number {
    this.entity.forEach((monster) => {
      this.character.attack(monster);
      monster.attack(this.character);
    });
    if (this.character.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}

export default PVE;