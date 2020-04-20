export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.energyLevel = 10;
    this.playLevel = 10;
    this.poopLevel = 10;
    this.happyLevel = 10;
    this.life = 10;    
  }

  setHunger() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel -= 1;
      }
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
  giveApple() {
    this.foodLevel += 2;
  }


  setEnergy() {
    setInterval(() => {
      if (this.energyLevel > 0) {
        this.energyLevel -= 1;
      }
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
      if (this.playLevel > 0) {
        this.playLevel -= 1;
      }
    }, 2500);
  }
  playTime() {
    if (this.playLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  play() {
    this.playLevel = 10;
  }
  
  setDeath() {
    setInterval(() => {
      this.life--;
    }, 50001);
  }
  dieTime() {
    if ((this.foodLevel > 0) && (this.energyLevel > 0) && (this.playLevel > 0)) {
      return false;
    } else {
      return true;
    }
  }
  dead() {
    this.foodLevel = 0;
    this.energyLevel = 0;
    this.playLevel = 0;
  }

  
  


}