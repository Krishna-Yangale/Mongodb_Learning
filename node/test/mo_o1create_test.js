const Student=require('../app/student');
const assert=require("assert");

describe('create test',()=>{
    it('create a user in dabase',()=>{
        const sam=new Student({name:"sam"});
        sam.save()
            .then(()=>{
                assert(!sam.isNew);
            })
            .catch(()=>{
                console.log("erroe");
            });
    });
});