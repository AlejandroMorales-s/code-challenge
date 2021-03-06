const StudentService = require("./../../lib/services/studentService");
const Reader = require("./../../lib/utils/reader");

describe("StudentService", () => {
    test("getAllStudentsAndTheirFields", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getAllStudentsAndTheirFields(partners);

        expect(partner).toBeDefined();
    });

    test("Students email", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getEmails(partners);
        
        expect(partner[0]).toBe("Todd@visualpartnership.xyz");
    });

    test("Students with more than 500 credits", () => {
        const partners = Reader.readJsonFile("visualpartners.json");
        const partner = StudentService.getStudentsWithMoreThan500Credits(partners);
        let status;
        partner.forEach((element) => element.credits > 500 ? status = true : status = false);
        
        expect(status).toBe(true);
    });
});