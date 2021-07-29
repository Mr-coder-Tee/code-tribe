import React, { Component } from 'react';

class MyTask extends Component {
    state = {  
        users:[
            {
                id:1,
                name:'Terrnce',
                surname:'Manaka',
                age:26,
                location:'Makgofe'
            },
            {
                id:2,
                name:'Linneth',
                surname:'chauke',
                age:17,
                loaction:'polokwane'
            },
            {
                id:3,
                name:'Queen',
                surname:'Esther',
                age:24,
                loaction:'Turf'
            },
            {
                id:4,
                name:'Lilliahn',
                surname:'Nunga',
                age:27,
                loaction:'Tzaneen'
            },
            {
                id:5,
                name:'Andries',
                surname:'Sebola',
                age:14,
                loaction:'seshego'
            },
        ]
    }
    render() { 
        return (
            <div>
                {
                    this.state.users.map((rowdata,i)=>
                    <div>
                        <ul>
                            {this.state.users.map(user=>
                            <li key={user.id}>
                                {user.name}{" \t"}
                                {user.surname}{" \t"}
                                {user.age}{", "}{this.checkAge(user.age)}
                            </li>
                            )}
                        </ul>
                    </div>

                    )
                }
            </div>
        );
    }
    checkAge=(age)=>{
        return age>=18?'you are old enough to code ':'you are not old enough to code';
    }
    checkAge(age){
        return age>=18?'you are old enough to code ':'you are not old enough to code';
    }
}
 
export default MyTask;

// if(age>18)
// you are old enough to code 
// else
// you are not old enough to code

//name|surname and age-if statement result here


// {rowdata.name}{'  '}
// {rowdata.surname}{'  '}
// {rowdata.age}{',  '}
// {this.checkAge(rowdata.age)}