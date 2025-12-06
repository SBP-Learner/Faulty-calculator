const readline = require("readline");

function input(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => 
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    })
  );
}
function getrandomint(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

async function main() {

  let choose;
  console.log("Welcome to the faulty calculator!\n------Warning-------\nIt has 10% chance to give wrong answer.");

  do{
    let random = getrandomint(1,10);
    console.log(random);


let num1 = await input("Enter the first number: ");
let operator = await input("Entere the operator (+, -, *, /) : ");
let num2 = await input("Enter the second number: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
if(random == 1){
  switch(operator) {
  case '*' :
    let sum = num1 + num2;
    console.log("The product of "+ num1 +" and "+ num2 +" is ", sum);
    break;
  case '+' :
    let sub = num1 - num2;
    console.log("The sum of "+ num1 +" and "+ num2 +" is ", sub);
    break;
  case '/' :
    let mult = num1 ** num2;
    console.log("The divison of "+ num1 +" by "+ num2 +" is ", mult);
    break;
  case '-' :
    if(num2 == 0){
      console.log("Second number cannot be zero.");
    } else{ 
    let div = num1 / num2;
    console.log("The difference between "+ num1 +" by "+ num2 +" is ", div);
    }
    break;
  default :
    console.log("Invalid Operator! ...");
    break;
}

} else {
switch(operator) {
  case '+' :
    let sum = num1 + num2;
    console.log("The sum of "+ num1 +" and "+ num2 +" is ", sum);
    break;
  case '-' :
    let sub = num1 - num2;
    console.log("The difference between "+ num1 +" and "+ num2 +" is ", sub);
    break;
  case '*' :
    let mult = num1 * num2;
    console.log("The product of "+ num1 +" and "+ num2 +" is ", mult);
    break;
  case '/' :
    if(num2 == 0){
      console.log("Second number cannot be zero.");
    } else{ 
    let div = num1 / num2;
    console.log("The division of "+ num1 +" by "+ num2 +" is ", div);
    }
    break;
  default :
    console.log("Invalid Operator! ...");
    break;
}
}
choose = await input("Do you want to continue (Type 'Yes' to continue) : ")
} while((choose === "Yes" ) || ( choose === "yes"));

}

main ();