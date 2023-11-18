console.log("External js");

document.write("ACPT");

document.write("<br>");

document.write("ACPT");

document.write("<h2>ACPT</h2>");
document.write("<button>Click Me</button>");
// alert("js display out")

//Number
const num = 12.5;

//Srring
const name = "Imesh";

//Boolean
const boo = true;

//Object

const obj = {
  name: "Imesh",
  run: function name() {},
};

//Array
const array = [125, "hiruBro", 45.26, obj];

//Variyable

// Var / Let / Const

//========== Let ==========

let l = 32;
//let l = 20; // can not redeclared
console.log(l); //32

{
  let ll = 100;
  console.log(ll); //only use in tis scope or this function //100
}
//console.log(ll); //Block scope pitatat uvariyabl;e ek use kal anohakiya ERROR

l = 73;
console.log(l); // apply values //73

//========== Var  ==========

var v = 74;
console.log(v); //74

var v = 63;
console.log(v); //63 Can Redecleya variyable

v = 72; // rese assing values;
console.log(v); //72

{
  var vv = 59;
}
console.log(vv); //59 can use out a scope

//========== Const ==========

const c = 98;
console.log(c); //98

//c = 87; //cant apply value

{
  const cc = 99;
}
//console.log(cc)// scope ekn pita use kala nohakiya

//Aricmatic Oparatis
const a = 6;
const b = 4;

//Addition (+)
console.log(a + b); //10

//Subtraction (-)
console.log(a - b); //2

//Multiplication (*)
console.log(a * b); //24

//Division (/)
console.log(a / b); //1.5

//Moduls (%)
console.log(a % b); //2

//Incerment (++)
let h = 10;
h++;
console.log(h); //11

//Decerment (--)
let j = 10;
j--;
console.log(j); //9

//Comparison Operators
const e = 14;
const d = 13;

//Equal(==)
console.log("Equal : ", e == d); //false

//Not Equal(!=)
console.log("Not Equal : ", e != d); //true

//Greater Than (>)
console.log("Greater Than : ", e > d); //true

//Less Than (<)
console.log("Less Than : ", e < d); //false

//Greater Than  or Equal to (>=)
console.log("Greater Than  or Equal to : ", e >= d); //true

//Less Than  or Equal to (<=)
console.log("ess Than  or Equal to : ", e <= d); //false

//Logica;l Oparaters
const y = true;
const x = false;

//AND(&&)
console.log("AND : ", y && x); //false // dekam atrue wenn ona

//OR(||)
console.log("OR : ", y && x); //true // deken ekk ho true viya uthui

//NOT(!)
console.log("NOT : ", !y); //true

//Function

//nomal function
function myName() {
  console.log("Nomal function");
}
myName();

//arrow function
let arrowFunction = () => {
  console.log("Arrow Function");
};
arrowFunction();

//Paramiter Nomal  Function
function student(n1, n2, n3) {
  console.log("Student One Name : ", n1);
  console.log("Student Two Name : ", n2);
  console.log("Student Three Name : ", n3);
  console.log("===================");
}
student("Kamal", "Amal", "Esadi");
student("Tisu", "Ishu", "Eru");

//Paramiter Arrow  Function
const food = (f1, f2, f3) => {
  console.log("Food One Name : ", f1);
  console.log("Food Two Name : ", f2);
  console.log("Food Three Name : ", f3);
  console.log("===================");
};

food("Cake", "Ice creem", "Chocalet");
food("Rice", "Egg", "Hot bun");

//Task 1
const task = (num1, num2) => {
  var sum = num1 + num2;
  console.log("Your Sum Is : " + sum);
  console.log("===================");
};

task(12, 3);

//Task 1 return
const task2 = (n1, n2) => {
  var rSum = n1 + n2;
  return rSum;
};
const result = task2(10, 6);

console.log("Return Sum is : ", result);

//OR
console.log(task2(20, 40));

//Flow Controllers

//IF

const n1 = 600;
const n2 = 400;

if (n1 < n2) {
  console.log("true");
  if (n1 > 100) {
    console.log("Nested If");
  }
} else if (n1 == n2) {
  console.log("Same");
} else {
  console.log("Else Part");
}

//Switch

const val = "AFSD";

switch (val) {
    case "IJSE":
        console.log("1----------------");
        break;

    case "AFSD":
        console.log("2-----AFSD---------");
        break;

    default:
        console.log("Error=======");
        break;
}
const arr= [10,45,67,34,87]

//loop

//forloop
for(let i = 0; i < 10 ; i++){
    console.log(arr[i]);
}

//whileloop
let loop = 0;
while(loop < arr.length){
    console.log(arr[loop],"----------");
    loop++;
}

//do while loop

let child = 0 ;
do{
  console.log(arr[child],"******");
  child++;
}while(child < arr.length)


//break
for(let i = 0 ; i < arr.length ; i++){
  console.log(arr[i]);
  if(arr[i] == 67){
    break;
  }

}

//object

const persion = {
  name: "Hiru bro",
  address: "Panadura",
  id: "9232348433",
  age: "29",

  run : function(){
    console.log("run")
  },

  eat : function(){
    console.log("eat")
  },

  sing : function(){
    console.log("sing")
  },
}

const name01 = persion.id; 
console.log(name01)

persion.run();
persion.eat();
persion.sing();

//Array
 console.log("===========ARRAYS===========");
const arr1 = [45,"Iemsh",true,persion]
console.log(arr1[3].name);
arr1[3].run()

const fruits = ["Banana","Orange","Apple","Mongo"]
console.log(fruits);

//pop
// const fruit = fruits.pop()
// console.log(fruits);
// console.log(fruit); //last index value ek eliyta  adala gani

//push
// fruits.push("Stobary")
// console.log(fruits); // last index apply new value 

//shft
// const fruit = fruits.shift()
// console.log(fruits);
// console.log(fruit); // fis index eke valuw ek wena variyable ekta gani 

// unshift
// fruits.unshift("Stobary")
// console.log(fruits); 

//Event Hadaling
console.log("===========Event Hadaling===========");

//onclick
function clickMe(){
  //  alert("on click alert");
  // console.log("on click");
  document.write("Hiru Bro");
}

//onChange
const changeText = () => {
  const text = document.getElementById("changeText").value;
  console.log(text);

   document.getElementById("getChangeText").value = text;
}

// <!-- mouse over -->
const mouseOver = () => {
  document.getElementById("mouse").style.backgroundColor= 'green'
  document.getElementById("mouse").style.width= '200px'

}

const mouseOut = () => {
  document.getElementById("mouse").style.backgroundColor='red'
  document.getElementById("mouse").style.width='100px'
}

// img over

const imgOver = () => {
  document.getElementById("img").src = 'assets/chat-c-2.png'
}

const imgOut= () => {
  document.getElementById("img").src = 'assets/chat-c-1.png'
}