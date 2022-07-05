const Student=require('../app/student');
const assert=require("assert");

describe("Update test",()=>{
    let updater;
    beforeEach((done)=>{
        updater=new Student({name:"Updater"});
        updater.save()
            .then(()=>done())
    });

    it("update user in db",()=>{
        updater.set('name','uppdater');
        updater.save()
            .then (()=>Student.find({}))
            .then(Student=>{
                assert(student[0]!=="Updater");
            });
    });
});