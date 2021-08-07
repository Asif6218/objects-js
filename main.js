//object

var student={
    name:'asif',
    age: 21,
    address:{
        state:'KL',
        city:'Malappuram'
    }
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.address);
console.log(student['address']['city']);

student.graduate=true;
console.log(student);

//function within object
var video={
    name:'access 101 js tutorial',
    play: function(){
        console.log('video played')
    } 
}
console.log(video.play());