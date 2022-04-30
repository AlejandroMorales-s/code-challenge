const StudentController = require('./../../lib/controllers/studentController');

describe('StudentController', () => {
    test('Get all students and their fields', () => {
        const partner = StudentController.getAllStudentsAndTheirFields();

        expect(partner).toBeDefined();
    });
})