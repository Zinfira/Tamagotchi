export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 100;
    this.energyLevel = 100;
    this.playLevel = 100;
  }

  setHunger() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel -= 1;
      } 
      if (this.foodLevel > 100) {
        this.foodLevel = 100;
      }
    }, 500);
  }
  foodTime() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  feed() {
    this.foodLevel += 5;
  }
  giveApple() {
    if (this.foodLevel <= 80) {
      this.foodLevel += 20;
    } else {
      return "I'm not hungry!";
    }
  }


  setEnergy() {
    setInterval(() => {
      if (this.energyLevel > 0) {
        this.energyLevel -= 1;
      }
      if (this.energyLevel > 100) {
        this.energyLevel = 100;
      }
    }, 500);
  }
  napTime() {
    if (this.energyLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  nap() {
    this.energyLevel += 5;
  }
  giveTea() {
    if (this.energyLevel <= 80) {
      this.energyLevel += 20;
    } else {
      return "I don't want tea yet!";
    }    
  }


  setPlay() {
    setInterval(() => {
      if (this.playLevel > 0) {
        this.playLevel -= 1;
      }
      if (this.playLevel > 100) {
        this.playLevel = 100;
      }
    }, 500);
  }
  playTime() {
    if (this.playLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  play() {
    this.playLevel += 5;
  }
  giveToy() {
    if (this.playLevel <= 80) {
      this.playLevel += 20;
    } else {
      return "I don't want to play!";
    }
  }

  dieTime() {
    if ((this.foodLevel <= 0) || (this.energyLevel <= 0) || (this.playLevel <= 0)) {
      return true;
    } else {
      return false;
    }
  }
  dead() {
    this.foodLevel = 0;
    this.energyLevel = 0;
    this.playLevel = 0;
  }



  giveMovie() {
    this.playLevel += 30; 
    this.energyLevel -= 10;
  }

  giveCake() {
    this.foodLevel += 30; 
    this.energyLevel -= 10;
    this.playLevel -= 10;
  }

  giveRedBull() {
    this.energyLevel += 30;
    this.foodLevel -= 20;
    this.playLevel -= 10;
  }
  
  


}