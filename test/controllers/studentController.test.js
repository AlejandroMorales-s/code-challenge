const StudentController = require("./../../lib/controllers/studentController");

describe("StudentController", () => {
    test("Get all students and their fields", () => {
        const partner = StudentController.getAllStudentsAndTheirFields();
        expect(partner).toBeDefined();
    });
    test("Get all students and their fields", () => {
        const mails = StudentController.getEmails();
        expect(mails[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("Students with more than 500 credits", () => {
        const partner = StudentController.getStudentsWithMoreThan500Credits();
        let status;
        partner.forEach((element) => element.credits > 500 ? status = true : status = false);
        
        expect(status).toBe(true);
    });
});