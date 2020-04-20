export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.energyLevel = 10;
    this.playLevel = 10;
    this.poopLevel = 10;
    this.sleepLevel = 10;    
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 2500);
  }
  foodTime() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  feed() {
    this.foodLevel = 10;
  }


  setEnergy() {
    setInterval(() => {
      this.energyLevel--;
    }, 2500);
  }
  napTime() {
    if(this.energyLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  nap() {
    this.energyLevel = 10;
  }


  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, 2500);
  }
naplayTime() {
    if (this.playLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  
  

  
  


}