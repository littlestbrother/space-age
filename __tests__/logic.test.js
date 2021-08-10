import Person from '../src/logic.js'

describe('Object male-helmet "Person" creation', () => {
  test('should create Person object', () => {
    let newPerson = new Person(19, 'male', true);
    expect(newPerson.age).toEqual(19);
    expect(newPerson.gender).toEqual('male');
    expect(newPerson.helmet).toEqual(true);

  });
});

describe('Object female-helmet "Person" creation', () => {
  test('should create Person object', () => {
    let newPerson = new Person(21, 'female', true);
    expect(newPerson.age).toEqual(21);
    expect(newPerson.gender).toEqual('female');
    expect(newPerson.helmet).toEqual(true);

  });
});

describe('Object horse-no-helmet "Person" creation', () => {
  test('should create Person object', () => {
    let newPerson = new Person(34, 'horse', false);
    expect(newPerson.age).toEqual(34);
    expect(newPerson.gender).toEqual('horse');
    expect(newPerson.helmet).toEqual(false);

  });
});

describe('getLifeExp()', () => {
  test('should calculate users life expectancy', () => {
    let newPerson = new Person(19, 'male', true);
    newPerson.getLifeExp();
    expect(newPerson.lifeExp).toEqual(57);
  });
});

describe('getLifeExp()', () => {
  test('should calculate users life expectancy', () => {
    let newPerson = new Person(19, 'female', true);
    newPerson.getLifeExp();
    expect(newPerson.lifeExp).toEqual(62);
  });
});

describe('getLifeExp()', () => {
  test('should calculate users life expectancy', () => {
    let newPerson = new Person(19, 'female', false);
    newPerson.getLifeExp();
    expect(newPerson.lifeExp).toEqual(0);
  });
});

describe('getLifeExp()', () => {
  test('should calculate users life expectancy', () => {
    let newPerson = new Person(19, 'horse', true);
    newPerson.getLifeExp();
    expect(newPerson.lifeExp).toEqual(-19);
  });
});

describe('calc()', () => {
  test('should calculate append the users age and life expectency multiplied by planets multiplier', () => {
    let newPerson = new Person(19, 'male', true);
    newPerson.getLifeExp();
    newPerson.calc();
    expect(newPerson.mercuryAge).toEqual(4.56);
    expect(newPerson.mercuryExp).toEqual(13.68);
    expect(newPerson.venusAge).toEqual(11.78);
    expect(newPerson.venusExp).toEqual(35.34);
    expect(newPerson.marsAge).toEqual(35.72);
    expect(newPerson.marsExp).toEqual(107.16);
    expect(newPerson.jupiterAge).toEqual(225.34);
    expect(newPerson.jupiterExp).toEqual(676.02);
  });
});