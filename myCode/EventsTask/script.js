// Task 1
const btnSum = () => {
  const num1 = document.getElementById("num-1").value;
  const num2 = document.getElementById("num-2").value;

  const total = parseInt(num1) + parseInt(num2);
  console.log(total);

  document.getElementById("displayVal").innerText = total;
};

// Task 2
const btnEqual = () => {
  const eq1 = document.getElementById("enter-1").value;
  const eq2 = document.getElementById("enter-2").value;

  if (eq1 === eq2) {
    document.getElementById("displayVal-1").innerText = "Equal";
  } else {
    document.getElementById("displayVal-1").innerText = "UnEqual";
  }
};

// Task 3
const candiction = () => {
  const num1 = document.getElementById("input-1").value;
  const num2 = document.getElementById("input-2").value;

  if (num1 < num2) {
    document.getElementById("display-1").innerHTML = "Greaterthan";
  } else if (num1 == num2) {
    document.getElementById("display-1").innerHTML = "Equal";
  } else {
    document.getElementById("display-1").innerHTML = "Lessthan";
  }
};

// Task 4

const sumKyeUp = () => {
  const temp = document.getElementById("input-3").value;
  var sum = 0;
  for (var i = 0; i < temp.length; i++) {
    sum += parseInt(temp[i]);
  }

  document.getElementById("display-2").innerHTML = sum;
};

// Task 5

const smark = () => {
  const mark = document.getElementById("input-4").value;
  let result = "";

  if (mark >= 75) {
    result = "A";
  } else if (mark >= 65) {
    result = "B";
  } else if (mark >= 45) {
    result = "C";
  } else if (mark >= 35) {
    result = "S";
  } else {
    result = "Fail";
  }
  document.getElementById("display-3").innerText = result;
};

// Task 6

const position = () => {
  const posi = document.getElementById("input-5").value;
  let rst = "";

  switch (posi) {
    case "intern":
      rst = " Intern Software Engineer"
      break;

    case "ase":
      rst = "Associate Software Engineer"
      break;

      case "se":
      rst = " Software Engineer"
      break;

      case "sse":

        rst = " Senior Software Engineer"
        break;

      case "atl":

        rst = " Assistant Tech Engineer"
        break;

        case "tl":
        rst = "Tech Lead"
        break;
    default:
      rst = "Error key word"
  }

  document.getElementById("display-4").innerText = rst;
};

// Task 7
const character = () => {
  var userInput = document.getElementById('input-6').value;
  var arr = [] ; 
  
  for (let i = 0; i < userInput.length; i++) {
     arr[i] = userInput[i]
  }
  document.getElementById('display-5').innerText = arr
}

//Task8
var myArray = []
const push = () => {
   const user = document.getElementById('input-7').value;
      myArray.push(user)
      document.getElementById('input-7').value =""
     
}

const print = () => {
  document.getElementById('display-7').innerText = myArray

}

//task 09 

const logIn = () => {

 var uName = "AdMin"
 var pw = "1234"

 var userName = document.getElementById('input-8').value;
 var password = document.getElementById('input-9').value;
var mw

 if(uName.toLowerCase() == userName.toLowerCase() && pw.toLowerCase() == password){
    mw="Success Login........"
 }else{
    mw="Faild Login........"
 }
 document.getElementById('display-6').innerHTML = mw
} 

//task10

const randamsum = () => {
var num1 =  document.getElementById("1input").value = Math.floor(Math.random() * 100);
var num2 =  document.getElementById("2input").value = Math.floor(Math.random() * 100);

document.getElementById('sum').innerText = num1+ num2

}

//home task 11
var ranAarr = new Array (10)

const randamArray = () => {
for (var i = 0 ; i < ranAarr.length ; i ++){
  ranAarr[i] = Math.floor(Math.random() * 100);

}
document.getElementById('randArryPrint').innerText = ranAarr
}

const calculationArray = () => {
var  input =  document.getElementById('inputCal').value;
var divide = []
   for(var i = 0 ; i < ranAarr.length ; i++){
   
    if(ranAarr[i]%input == 0){
      // divide[i] = ranAarr[i]
      divide.push(" "+ranAarr[i]+"  ")
    }
   }

   document.getElementById('calArray').innerText = divide

}






