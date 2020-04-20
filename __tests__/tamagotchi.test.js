import { Tamagotchi } from './../src/tamagotchi.js';

describe('Kitty', () => {
  jest.useFakeTimers();
  let kitty;

  beforeEach(function() {
    kitty = new Tamagotchi("Kitty");
    kitty.setHunger();
    kitty.setEnergy();
    kitty.setPlay();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10, an energy level of 10, play level of 10 when it is created', () => {
    expect(kitty.name).toEqual("Kitty");
    expect(kitty.foodLevel).toEqual(10);
    expect(kitty.energyLevel).toEqual(10);
    expect(kitty.playLevel).toEqual(10);
    expect(kitty.happyLevel).toEqual(10);
  });
  
  test('food level should go down by 1 every 2.5 seconds', () => {
    jest.advanceTimersByTime(2501);
    expect(kitty.foodLevel).toEqual(9);
  });
  test('should get very hungry if the food level drops below zero', function() {
    kitty.foodLevel = 0;
    expect(kitty.foodTime()).toEqual(true);
  });
  test('should get very hungry if 50 seconds pass without feeding', function () {
    jest.advanceTimersByTime(50001);
    expect(kitty.foodTime()).toEqual(true);
  });
  test('should have a food level of 10 if it is fed', function() {
    jest.advanceTimersByTime(22500);
    kitty.feed();
    expect(kitty.foodLevel).toEqual(10);
  });
  test('should raise food level by +2 when given an apple', function() {
    jest.advanceTimersByTime(25000);
    kitty.giveApple();
    expect(kitty.foodLevel).toEqual(+2);
  })
  
  test('energy level should go down by 1 every 2.5 seconds', () => {
    jest.advanceTimersByTime(2500);
    expect(kitty.energyLevel).toEqual(9);
  });
  test('should get very tired if the energy level drops below zero', function() {
    kitty.energyLevel = 0;
    expect(kitty.napTime()).toEqual(true);
  });
  test('should get very tired if 50 seconds pass without a nap', function() {
    jest.advanceTimersByTime(50001);
    expect(kitty.napTime()).toEqual(true);
  });
  test('should have an energy level of 10 if it has a nap', function () {
    jest.advanceTimersByTime(22500);
    kitty.nap();
    expect(kitty.energyLevel).toEqual(10);
  });

  test('play level should go down by 1 every 2.5 seconds', () => {
    jest.advanceTimersByTime(2500);
    expect(kitty.playLevel).toEqual(9);
  });
  test('should get very sad if the play level drops below zero', function() {
    kitty.playLevel = 0;
    expect(kitty.playTime()).toEqual(true);
  });
  test('should get very sad if 50 seconds pass without games', function() {
    jest.advanceTimersByTime(50001);
    expect(kitty.playTime()).toEqual(true);
  });
  test('should have a play level of 10 if it plays games', function () {
    jest.advanceTimersByTime(22500);
    kitty.play();
    expect(kitty.playLevel).toEqual(10);
  });

  test('should kill tamagotchi if food, energy and play levels will be 0', function() {
    kitty.feed();
    kitty.nap();
    kitty.play();
    jest.advanceTimersByTime(25001);
    console.log(kitty.foodLevel);
    console.log(kitty.energyLevel);
    console.log(kitty.playLevel);
    kitty.dead();
    expect(kitty.dieTime()).toEqual(true);
  });
})