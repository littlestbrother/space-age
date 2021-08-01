import { Person } from '../src/logic.js'

describe('Object "Date" creation', () => {
    test('should create Date class', () => {
        let newPerson = new Person(19,'male',true);
        console.log(newPerson);
        expect(newPerson.age).toEqual(19);
        expect(newPerson.gender).toEqual('male');
        expect(newPerson.helmet).toEqual(true);

    });
  });

  describe('getLifeExp()', () => {
    test('should calculate users life expectancy', () => {
        let newPerson = new Person(19,'male',true);
        console.log(newPerson);
        newPerson.getLifeExp()
        expect(newPerson.getLifeExp()).toEqual(20);
    });
  });
