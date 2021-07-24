
let n=Number(prompt('Enter list size'));

let list=[];
let students=[[]];
for(let i=0;i<n;i++){
    list[0]=prompt('Enter your name');
    list[1]=prompt('Enter your surname');
    list[2]=prompt('Enter your gender(Male/Female)');
    list[3]=Number(prompt('Enter your age'));
    students[i]=list;
}
console.log('Name   |Surname    |Gender     |Age        |')
console.log(students);
for(var i=0;i<n;i++)
{
    console.log(students[i][0]+'  '+students[i][1]+'  '+students[i][2]+'   '+students[i][3]);
}