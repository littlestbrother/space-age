import { Person } from '../src/logic.js'

describe('Object "Person" creation', () => {
    test('should create Person object', () => {
        let newPerson = new Person(19,'male',true);
        expect(newPerson.age).toEqual(19);
        expect(newPerson.gender).toEqual('male');
        expect(newPerson.helmet).toEqual(true);

    });
  });

  describe('getLifeExp()', () => {
    test('should calculate users life expectancy', () => {
        let newPerson = new Person(19,'male',true);
        newPerson.getLifeExp();
        expect(newPerson.lifeExp).toEqual(57);
    });
  });

  describe('calc()', () => {
    test('should calculate append the users age and life expectency multiplied by planets multiplier', () => {
        let newPerson = new Person(19,'male',true);
        console.log(newPerson);
        newPerson.getLifeExp();
        newPerson.calc();
        expect(newPerson.mercuryAge).toEqual(4.56);
        expect(newPerson.mercuryExp).toEqual(13.68);
        expect(newPerson.venusAge).toEqual(11.78);
        expect(newPerson.venusExp).toEqual(35.34);
        expect(newPerson.marsAge).toEqual(35.72);
        expect(newPerson.marsExp).toEqual(107.16);
        expect(newPerson.jupiterAge).toEqual(0);
        expect(newPerson.jupiterExp).toEqual(0);
    });
  });