//Q1.
//Two ways to declear empty array:
//1. using Array() method
let arr1=Array()
//2. using []
let arr2=[]

console.log(arr1);
console.log(arr2);

//Q2.
let arr=[1, 2, 4, 3, 6, 5]; 

//Q3.
let arrlen=arr.length;
document.getElementById('output').innerHTML=arrlen;

//Q4.
let firstItem=arr[0], midItem=arr[arrlen/2], lastItem=arr[arrlen-1];
console.log(firstItem);
console.log(midItem);
console.log(lastItem);

//Q5.
mixedDataTypes=[1,'a',"abhijeet",true,13243234234234234234343];
console.log(typeof(mixedDataTypes[mixedDataTypes.length-2]));
console.log(mixedDataTypes.length);

//Q6.
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple','IBM', 'Oracle', 'Amazon']

//Q7.
console.log(itCompanies);

//Q8.
console.log(itCompanies.length);

//Q9.
let firstComp=itCompanies[0], midComp=itCompanies[(itCompanies.length-1)/2], lastComp=itCompanies[itCompanies.length-1];
console.log(firstComp);
console.log(midComp);
console.log(lastComp);

//Q10.same as 7

//Q11.
for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase());
}

//Q12.
console.log(itCompanies.toString());

//Q13.
if(itCompanies.includes('Amazon'))
    console.log('Amazon')
else
    console.log('not found')
//or using indexOf
if(itCompanies.indexOf('Amaz')!=-1)
    console.log('Amazon')
else
    console.log('not found')


//Q14. loop and check count for every element

//Q15.
console.log(arr.sort());

//Q16.
console.log(arr.reverse());

//Q17.
console.log(itCompanies.slice(0,3));

//Q18.
console.log(itCompanies.slice(itCompanies.length-3,));

//Q19. same as 18

//Q20. 
console.log(itCompanies.splice(0,1));

//Q21-23 same as 20





//Q1.
// let age = prompt('enter age');
// if(age>=18)
//     console.log('old')
// else
//     console.log('child')

//level 2 switch ques.
let score=93
switch(true){
    case score>=80 && score<=100:
        console.log('A');
        break;
    case score>=70 && score<=89:
        console.log('B');
        break;
}






//level-1 objects:
//Q1.
dog = {}
//Q2.
console.log(dog);

//Q3.
dog = {
    'name':'lebron',
    'legs':'4',
    'color':'golden',
    'age':'3',
    bark: function(){
        return 'woof woof';
    }
}
console.log(dog);

//Q4. 
console.log(dog.name);
console.log(dog.bark());

//Q5. add new property to object
let newProp = {
    'breed':'retriever',
    getDogInfo : function(){
        
    }
}

Object.assign(dog, newProp);
console.log(dog);


//level1 functions
function fullname(firstname, lastname){
    return firstname+lastname;
}
console.log(fullname('abhi','jeet'));

//destructuring exercise
const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    job: "Instructor and Developer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "D3.js",
    ],
    languages: ["Amharic", "English", "Suomi(Finnish)"],
};

function getPersonInfo(person){
    const [firstName, lastName, age, country, job, skills, languages]= person;
}

getPersonInfo(person.firstName);





