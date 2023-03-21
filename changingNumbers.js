//Program that from a list of numbers from 1 to 10 changes the odd numbers to a random number

//List of numbers from 1 to 10
const listOfNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
//list of even numbers up to 20
//const listOfEvenNumbers = [2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20];

//Go through the list of numbers and check the odd number
function changingOddsToEvens(listOfNumbers){

    for (let index = 0; index < listOfNumbers.length; index += 1) {
        let check = listOfNumbers[index];
        if(check % 2 !== 0){
            let newNumber = addEvenNumber();
            listOfNumbers[index] = newNumber;
        }
    }
    return listOfNumbers;
}

//Add an even random number
function addEvenNumber(listOfEvenNumbers){

    let chosenNumber = 12
    //let chosenNumber = Math.floor(Math.random() * (listOfEvenNumbers[9] - listOfEvenNumbers[0] + 1))  + listOfEvenNumbers[0];
    if(chosenNumber % 2 == 0){
        return chosenNumber;
    }
    //return chosenNumber;
    }
//returns the list with the odd numbers replaced by the selected even number
console.log(changingOddsToEvens(listOfNumbers));