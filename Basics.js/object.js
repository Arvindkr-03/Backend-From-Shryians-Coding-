//Objects:
//  Objects is a collection of key-value pairs,
//  Keys are also known as properties that holds some values inside.
//  It must be written inside the middle curly braces.
//  It always stored as a string.

var obj={
    name:"Rohit Sharma",
    play:"Cricket",
    age:43
}
// console.log(obj.name);
// console.log("Plays");          // Basic methods
// console.log(obj.play);

// console.log(obj['name']);
// console.log("Plays");
// console.log(obj['play']);
// console.log(obj['age']);

// Object.values(obj).forEach(v => console.log(v));        //new one

Object.entries(obj).forEach(([k, v]) => console.log(`${k}: ${v}`));
