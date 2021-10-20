//print numbers up to input
function getNum(){
  let num = document.getElementById("number").value;
  let result = "1";
  for (i=2; i<=num; i++){
    result = result.concat(', ', i);
  }
 console.log(document.getElementById("number").value); 
  document.getElementById("output").innerHTML = result;
}

//ditto, using arr not string
function getNum() {
  let num = document.getElementById("number").value;
  let arr = [];
 for (i=1; i<=num; i++){
   arr.push(i);
 }
  document.getElementById("output").innerHTML = arr;
}

//fib sequence up to input times
function getNum() {
  let num = document.getElementById("number").value;
  let arr = [0];
  if (num > 1)  {
    arr[1] = 1;
    for (let i = 2; i < num; i++ ) {
      let add = arr[i-1] + arr[i-2];
      arr[i] = add;
    }
  }
  document.getElementById("output").innerHTML = arr;
}

//arrow add function
let add = (a, b) => a + b;

//sort array numerically
var numArray = [140000, 104, 99];
function sortArr(arr){
  arr.sort(function(a, b) {
  return a - b;
});
  return arr;
}

numArr1.sort((a,b) => a-b)

// prime?
function isPrime(num){
  for (let i=2; i<num; i++){
    if (num % i == 0){
      return false;
    }
  } return true;
}

//greatest common demonitator
function isGC(a, b) {
  var divisor = 2, 
      greatestDivisor = 1;
  if (a < 2 || b < 2)
     return 1;
  
  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}
console.log(isGC(12, 144));


//look into slice
//look into concat array
//review array functions
//review string functions