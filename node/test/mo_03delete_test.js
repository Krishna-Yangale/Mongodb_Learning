const Student = require('../app/student');
const assert = require("assert");
describe("delete test", () => {
    let deleter;

    beforeEach((done) => {
        deleter = new Student({ name: "deleter" });
        deleter.save().then(() => done());
    });

    it('delete data from db', (done) => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({ name: 'deleter' }))
            .then((student) => {
                assert(student === null);
                done();
            });
    });

});