import { Tamagotchi } from './../src/tamagotchi.js';

describe('Kitty', () => {
  jest.useFakeTimers();
  let kitty;

  beforeEach(function() {
    kitty = new Tamagotchi("Kitty");
    kitty.setHunger();
    kitty.setEnergy();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10, an energy level of 10 when it is created', () => {
    expect(kitty.name).toEqual("Kitty");
    expect(kitty.foodLevel).toEqual(10);
    expect(kitty.energyLevel).toEqual(10);
  });
  test('should have a food level 8 after 5001 milliseconds', () => {
    jest.advanceTimersByTime(5001);
    expect(kitty.foodLevel).toEqual(8);
  });
  test('should get very hungry if the food level drops below zero', function() {
    kitty.foodLevel = 0;
    expect(kitty.dieTime()).toEqual(true);
  });
  test('should get very hungry if 25 seconds pass without feeding', function () {
    jest.advanceTimersByTime(25001);
    expect(kitty.dieTime()).toEqual(true);
  });
  test('should have a food level of 10 if it is fed', function() {
    jest.advanceTimersByTime(22500);
    kitty.feed();
    expect(kitty.foodLevel).toEqual(10);
  });
})