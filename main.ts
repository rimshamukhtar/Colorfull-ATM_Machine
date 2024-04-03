#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let myBalance= 10000; // Dollars
let myPin= 1234;

console.log(chalk.blue("\n \tWelcome to Rimsha's ATM-Machine\n \t"));
 let pinAnswer= await inquirer.prompt(
    [
    {
        name: "pin",
        message: chalk.yellow("Enter your pin code"),
        type: "number",
    }
    ]
)
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nCorrect pin code, Login Successfully!\n") );
//console.log(`Current account balance is ${myBalance}`)

let operationAns = await inquirer.prompt(
[
    {
        name: "operation",
        message: "Please select a option",
        type: "list",
        choices: ["Withdraw", "Check balance"]
    }
]
);
     
  
    if (operationAns.operation === "Withdraw") {
let withdrawAns = await inquirer.prompt([
    {
        name: "withdrawMethod",
        type: "list",
        message: "Select a withdrawal Method:",
        choices: ["Fast Cash", "Enter Amount"]
    }
])
if (withdrawAns.withdrawMethod === "Fast Cash"){
   let fastCashAns = await inquirer.prompt([
    {
        name: "fastCash",
        type: "list",
        message:"Select Amount",
        choices: [1000, 2000, 5000, 10000, 20000, 50000 ]
        }
   ])
   if(fastCashAns.fastCash > myBalance){
    console.log(chalk.red("Insufficient Balance"));
   }
   else{
    myBalance -= fastCashAns.fastCash
    console.log(`${fastCashAns.fastCash} withdraw successfully`);
    console.log(`Your Remaining balance is ${myBalance}`);
   }
}
else if (withdrawAns.withdrawMethod === "Enter Amount"){
    let amountAns = await inquirer.prompt ([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ])
if (amountAns.amount > myBalance){
console.log(chalk.red("Insufficient Balance"));
}
else{
myBalance -= amountAns.amount;
console.log(`${amountAns.amount} withdraw successfully`);
console.log(`Your Remaining Balance is ${myBalance}`)
}
}
             
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your Account balance is ${myBalance}`)
    }

else {
    console.log("Incorrect pin number");
}
}
else{
    console.log(chalk.red("Pin is incorrect , Try Again"));
}