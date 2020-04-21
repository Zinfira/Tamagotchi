export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 100;
    this.energyLevel = 100;
    this.playLevel = 100;
    this.poopLevel = 100;
    this.happyLevel = 100;
    this.life = 100;
  }

  setHunger() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel -= 5;
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
    this.foodLevel = 100;
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
        this.energyLevel -= 5;
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
    this.energyLevel = 100;
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
        this.playLevel -= 5;
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
    this.playLevel = 100;
  }
  giveToy() {
    if (this.playLevel <= 80) {
      this.playLevel += 20;
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
    if (this.playLevel <= 70) {
      this.playLevel += 30; 
      this.energyLevel -= 10;
    } else {
      return "I don't want to watch movies";
    }
  }

  giveCake() {
    if (this.foodLevel <= 70) {
      this.foodLevel += 30; 
      this.energyLevel -= 10;
      this.playLevel -= 10;
    } else {
      return "I don't want to eat cake now";
    }
  }

  giveRedBull() {
    if (this.energyLevel <= 70) {
      this.energyLevel += 30;
      this.foodLevel -= 20;
      this.playLevel -= 10;
    } else {
      return "It's too early for energy drinks!";
    }
  }
  


}