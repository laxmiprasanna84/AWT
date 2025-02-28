let person={
    fname:"john",
    lname:"doe",
}
person.age=35;
console.log(fname);

person.fullname = function(){
    return(this.fname+" "+this.lname);
}
console.log(person.fullname());

console.log(person.age);