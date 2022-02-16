let array1 = ["Dog", "Cat", "Fish"]

// let count = 0;

// while (count <= 2){
//     console.log(array1[count]);
//     count++;
// }


//same as while loop
for (let count = 0; count <= 2; count++){
    console.log(array1[count]);
}

//for of loop
for (let element of array1) {
    console.log(element[0])
    //console.log(element);
}


//with strings
let str = "Orange!";
for (let count = 0; count < str.length; count++){
    console.log(str[count]);
}

for (let char of str){
    console.log(char);
}