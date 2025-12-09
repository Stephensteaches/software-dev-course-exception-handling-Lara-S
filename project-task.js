/*
Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records. The program is meant to:
  
  Allow users to enter an animal type and adoption fee.
  
  Add the animal and fee to a list.
  
  Retrieve the adoption fee for a specific animal when requested.

However, the initial developer left the program in a buggy state, with missing exception-handling logic
and some errors in the implementation. Your job is to fix it!



Instructions
Start by Understanding the Errors:
Run the program and observe the exceptions that occur. Document what the exceptions are and where they happen.

Write Exception Handling Code:
Use try/catch blocks to handle the errors so the program doesn’t crash when incorrect input or unexpected situations occur.

Test and Debug:
Test the program with valid and invalid inputs to confirm that exceptions are handled gracefully
and the program continues running as intended.
*/


// Will need to import / install readline-sync if not done so already within project dir: npm install readline-sync 
const readlineSync = require('readline-sync');

// Initial Code with Bugs (modified to use readline-sync)
let animals = [];
let fees = [];


function addAnimal(name, fee) {
try {
    if (!name || fee < 0) {
        throw new Error("Invalid animal name or adoption fee!");
    }
    animals.push (name);
    fees.push (fee);
    console.log(`${name} added with a fee of $${fee}.`);
} catch (error) {
    console.log (animals);
    console.log (`Error: ${error.message}`);
}
}

function getAdoptionFee(animalName) {
try {
    let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
     console.log(`${animalName}'s adoption fee is $${getAdoptionFee(animalName)}.`);
    return fees[index];
}catch (error) {
    //console.log (fees);
    console.log (`Error: ${error.message}`);
}
}

// Main program
console.log("Welcome to the Pet Shelter System");
while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();
    if (action === "exit") {
        console.log("Goodbye!");
        break;
    }

        if (action === "add") {
            let animal = readlineSync.question("Enter the animal's name: ");
            let fee = Number(readlineSync.question("Enter the adoption fee: "));
            addAnimal(animal, fee);
            //console.log(`${animal} added with a fee of $${fee}.`);
        } 
        else if (action === "fee") {
        let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
       //console.log(`${animal}'s adoption fee is $${getAdoptionFee(animal)}.`);
        } else {
        console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
    }
}

/*
Problems to Solve

Invalid Input Errors:
  What happens if the user provides a negative adoption fee or leaves the name blank?
  --When no name is provided or a negative fee is entered, the program throws
  --Error: Invalid animal name or adoption fee!
  --This happens in the addAnimal function when it is called during the add action in the main program.
  What happens if the user tries to find the fee for an animal that hasn’t been added?
  --When an animal is not found, the program throws Error: Animal not found in records!
  --This happens inside the getAdoptionFee function when it is called during the fee action in the main program.

  --If I add in a weird fee like letters instead of a number in the add action, 
  --the program does not throw an error because Number("letters") results in NaN, which is less than 0.
  --What will happen is that when the fee for that animal is requested it will result in a $NaN, a logic error.

Code Flow Problems:
  What happens if the program throws an exception? Does the rest of the code continue running?
  --If the program throws an exception, the program will halt and an error object will be recorded in the terminal screen.

Structured Exception Handling:
  Add try/catch blocks to handle the above errors gracefully.
*/
