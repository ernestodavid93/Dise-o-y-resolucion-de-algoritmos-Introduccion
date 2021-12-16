function checkEmptyString(str) {
    if(str){
    console.log(str.charAt(0));
    }else{
    console.log("This string is empty");
    }
}

let str = prompt("Introduce una cadena");

checkEmptyString(str);