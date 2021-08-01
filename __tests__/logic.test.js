import Date from '../src/logic.js'

describe('Object "Date" creation', () => {
    test('should create Date class', () => {
        let newDate = new Date(03,21,2002);
        console.log(newDate);
        expect(newDate.name).toEqual(03,21,0021);
    });
  });