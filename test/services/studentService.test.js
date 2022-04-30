const StudentService = require('./../../lib/services/studentService');
const Reader = require('./../../lib/utils/reader');

describe('StudentService', () => {
    test('getAllStudentsAndTheirFields', () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getAllStudentsAndTheirFields(partners);

        expect(partner).toBeDefined();
    });
});