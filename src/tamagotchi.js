export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.poopLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
    this.energyLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 2500);
  }

  setEnergy() {
    setInterval(() => {
      this.energyLevel--;
    }, 5000);
  }
  
  dieTime() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  feed() {
    this.foodLevel = 10;
  }
  
  


}