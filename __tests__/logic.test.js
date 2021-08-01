import Date from '../src/logic.js'

describe('Object "Date" creation', () => {
    test('should create Date class', () => {
        let newDate = new Date(3,21,2002);
        console.log(newDate);
        expect(newDate.month).toEqual(3);
        expect(newDate.day).toEqual(21);
        expect(newDate.year).toEqual(21);
    });
  });