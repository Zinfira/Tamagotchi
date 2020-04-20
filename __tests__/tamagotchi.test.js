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
  });
  
  test('should have a food level 8 after 5001 milliseconds', () => {
    jest.advanceTimersByTime(5001);
    expect(kitty.foodLevel).toEqual(8);
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
  
  test('should have an energy level of 8 after 5001 milliseconds', () => {
    jest.advanceTimersByTime(5001);
    expect(kitty.energyLevel).toEqual(8);
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

  test('should have a play level of 8 after 5001 millisecimds', () => {
    jest.advanceTimersByTime(5001);
    expect(kitty.playLevel).toEqual(8);
  });
  test('should get very sad if the play level drops below zero', function() {
    kitty.playLevel = 0;
    expect(kitty.playTime()).toEqual(true);
  });
  test('should get very sad if 50 seconds pass without games', function() {
    jest.advanceTimersByTime(50001);
    expect(kitty.playTime()).toEqual(true);
  });
})