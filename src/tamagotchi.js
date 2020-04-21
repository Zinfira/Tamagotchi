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
    if (this.foodLevel <= 8) {
      this.foodLevel += 2;
    } else {
      return "I'm not hungry!";
    }
  }


  setEnergy() {
    setInterval(() => {
      if (this.energyLevel > 0) {
        this.energyLevel -= 1;
      }
    }, 2500);
  }
  napTime() {
    if (this.energyLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  nap() {
    this.energyLevel = 10;
  }
  giveTea() {
    if (this.energyLevel <= 8) {
      this.energyLevel += 2;
    } else {
      return "I don't want tea yet!";
    }    
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
  giveToy() {
    if (this.playLevel <= 8) {
      this.playLevel += 2;
    } else {
      return "I don't want to play!";
    }
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




  giveMovie() {
    if (this.playLevel <= 7) {
      this.playLevel += 3; 
      this.energyLevel -= 1;
    } else {
      return "I don't want to watch movies";
    }
  }

  giveCake() {
    if (this.foodLevel <= 7) {
      this.foodLevel += 3; 
      this.energyLevel -= 1;
      this.playLevel -= 1;
    } else {
      return "I don't want to eat cake now";
    }
  }

  giveRedBull() {
    if (this.energyLevel <= 7) {
      this.energyLevel += 3;
      this.foodLevel -= 2;
      this.playLevel -= 1;
    } else {
      return "It's too early for energy drinks!";
    }
  }
  


}