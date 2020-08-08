const person={name:'jack William',age:17,job:'facebooker',gfName:'Ema Watson',address:'kochu khet',phone:'01717112211',friends:['Tom Hanks','Tom cruise','Tom yarn']};
//const gfName=person.gfName;
//const phone=person.phone;
const {phone,gfName}=person;
console.log(gfName,phone);

const complexObject={
    name:'abc',
    info:{
        address:'kola-bagan',
        leader:'Tiger leader'
    }
}
const {leader}=complexObject.info;
console.log(leader);
