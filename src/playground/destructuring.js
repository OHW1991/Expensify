const person={
    name: 'OHW',
    age: 27,
    location:{
        city: 'Haifa',
        temp: 25
    }
}

const{name='Anonymous',age: a}=person;

console.log(`${name} is ${a}.`)

const address=['41 pinkser street','Atta','Israel','28000'];

const [,city,country]=address;

console.log(`You are in ${city}, ${country}.`);