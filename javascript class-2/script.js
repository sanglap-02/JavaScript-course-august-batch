// console.log("hello");

// data tyepes 

const a = 'b'
const name = "sanglap"
console.log(typeof a);

// premitive and non-primitive


let num1=4

let num2 =num1

num2=10

console.log(num1);




// stack and heap memory 
// premitive --> stack memory 
// non-premitive --> heap memory --> you will get a reference 

const b = 4
 const arr=[1,2,3,4]

 console.log(arr);

//  console.log(b);
//  let temp=b
//  temp=10
//  console.log(b);

 let arr_new=arr
 arr_new=arr_new.push(10)

 console.log(arr);


console.log(1+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+3);
console.log(1+2+"3");

// coresion

// **** Strings ***
// let str =new String('    sanglap kundus   ')
// console.log(str);
// console.log(str.length);
// // username :   sanglap

// console.log(str.charAt(14));
// console.log(str.trim('s'));

// sanglap
// SangLap

// *** Date ***
// const today = new Date()
// console.log(today);
// console.log(today.toLocaleDateString());
// console.log(today.toISOString());

// arrays 
const arr10 = [1,"sanglap","kundus",true,null,undefined,NaN,Infinity,-Infinity]


const arr2 = [1, 2, 3, 4, 5, 6]
// The array is JS is mutable
// console.log(arr2);
// console.log(arr2[2]);

console.log(arr2);

console.log(arr2[2]);

arr2.push(19)
console.log(arr2);

const arr3 = [7, 8]

// arr2.push(arr3)

// console.log(arr2);
const new_arr = arr2.concat(arr3)
console.log(new_arr);

// [1,2,3,4,5,5,[7,8]]




// functions in Javascript

// function print() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }

// print()

// print()


//function defination
function sum (a,b){ //parameters
    // console.log(a+b);
    return a+b
}

function multiply(a,b){
    return a*b
}

const ans2=multiply(3.5,4.5)

console.log(ans2);

// calling the function
// sum(1,2) // arguments

const ans=sum(3,4)
// console.log(ans);

const func=function(a,b) {
    return a*b
}


const func3=function (c,d){
    return c*d
}


const func4=(a,b)=>{
    return a+10+b;
}

// flat arrow function 

const func2=(a,b)=> a*b

// console.log(func2(10,10));

// **** Objects ***

const student={
    'name' : 'sanglap',
    marks : '100',
    class : '4'
}

console.log(student.marks);

// scopes 

function fun() {
    const a="10"
    const b=20
    const innerVariable="hi"

    // console.log("marks 1 is "+a+" marks 2 is "+b);
    // console.log(`marks 1 is ${a.length} marks 2 is ${b}`);
    console.log(innerVariable);
}

// console.log(innerVariable);

fun()

// **** loops ****

// for , while, do while and forEach

const arr5=[1,"sanglap",true,7]

// for(let i=0;i<arr5.length;i++){
//     console.log(arr5[i])
// }

let i=10
// while(i<arr5.length){
//     console.log(arr5[i])
//     i++
// }

do{
    console.log(arr5[i]);
    i++;
}while(i<arr5.length)
// it will get executed at least once





// temp++ or ++temp ==> temp=temp+1

let temp=10
// console.log(temp++); // first use then increase 
// console.log(++temp); // first increase then use 



const newarr=[1,2,3,4]

// for(let index=0;index<newarr.length;index++){
//     console.log(`the value at index ${index} is ${newarr[index]}`)
// }


let index=0;

while(index<newarr.length){
    console.log(`the value at index ${index} is ${newarr[index]}`)
    index++
}


newarr.forEach((value,index)=>{
    console.log(index,value)
})


//do while loop

let j=0;

do{
    console.log(`the value at index ${j} is ${newarr[j]}`)
    j++
}while(j<newarr.length)



// newarr.forEach((value,index)=>{
//     console.log(index,value)
// })














