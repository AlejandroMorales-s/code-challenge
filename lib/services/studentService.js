class StudentService {
    static getAllStudentsAndTheirFields(partners) {
        return partners;
    }
    static getEmails(partners) {
        const partner = partners.filter((student) => student.haveCertification === true);
        return partner.map(partner => partner.email);
    }
}
module.exports = StudentService;