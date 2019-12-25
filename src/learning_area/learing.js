// so react.js really likes this, so I need to learn it.

//create an objecct
const person = {
    firstName: 'skyler',
    lastName: 'fetter',
    id: 1254,
    fullName: function(){
        return this.firstName + "" + this.lastName;
    }
};

console.log(person.fullName())