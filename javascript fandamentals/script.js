


function user(age,name ,gender){
    let letter;
    gender=='Male'?letter='M':letter='F';
    console.log('Hi '+name+' '+letter);
    return age;
}

let __age=Number(prompt("Enter your age"));
let __name=prompt("Enter your name");
let __gender=prompt("Enter your gender (Male/Female");

let age=user(__age,__name,__gender)
if(age>=18){
    console.log('You are above 18');
}else{
    console.log('You are not 18 yet');
}