import { Person } from '../src/logic.js'

describe('Object "Date" creation', () => {
    test('should create Date class', () => {
        let newPerson = new Person(3,21,2002);
        console.log(newPerson);
        expect(newPerson.birthMonth).toEqual(3);
        expect(newPerson.birthDay).toEqual(21);
        expect(newPerson.birthYear).toEqual(2002);
    });
  });

  describe('Method today()', () => {
    test('should get todays date and add to Person object', () => {
        let newPerson = new Person(3,21,2002);
        console.log(newPerson);
        newPerson.today();
        console.log(newPerson);
        expect(newPerson.nowMonth).toEqual(6);
        expect(newPerson.nowDay).toEqual(31);
        expect(newPerson.nowYear).toEqual(2021);
    });
  });