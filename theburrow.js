//Burrow pseudocode problem

const flavors = ['Natural' , 'Coconut' , 'Almond' , 'Vanilla'];
const prices = [14000 , 14000 , 16000 , 16000];
const stocks = [5 , 5 , 2 , 0];
const userProductOption = [];

burrows(flavors,prices,stocks);

function burrows(flavors , prices){

console.log("The flavors are:\n\n1.Natural\n2.Coconut\n3.Almond\n4.Vanilla\n\n");

let userOption = flavors[2];
let quantity = 3;

switch(true){

    case(userOption === flavors[0] && quantity >= 1):{

        userProductOption.push("\nFlavor: " + flavors[0] , "\nTotal to pay: " + prices[0] * quantity , "\nAmount: " + quantity);
        console.log("Your shopping cart has:\n" + userProductOption);
        break;
        }

    case(userOption === flavors[1] && quantity >= 1):{

        userProductOption.push("\nFlavor: " + flavors[1] , "\nTotal to pay: " + prices[1] * quantity , "\nAmount: " + quantity);
        console.log("Your shopping cart has:\n" + userProductOption);
        break;
        }

    case(userOption === flavors[2] && quantity <= 2):{

        userProductOption.push("\nFlavor: " + flavors[2] , "\nTotal to pay: " + prices[2] * quantity , "\nAmount: " + quantity);
        console.log("Your shopping cart has:\n" + userProductOption);
        break;
        }

    default:
        console.log("The flavor you chose: " + flavors[2] + "\n\nWe don't have at the moment, sorry :( ");
    }
}


