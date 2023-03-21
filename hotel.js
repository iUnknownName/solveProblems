//Program that allows a hotel to validate available rooms and verify check-in

const maximumRooms = 20;
const occupiedRooms =[];
let desiredRooms = 20;
let checkInTime = 12;

hotel(maximumRooms);

function hotel(maximumRooms){

    console.log("The rooms required are: " + desiredRooms);

    if(desiredRooms <= 20 && checkInTime <= 12){

        let availableRooms = maximumRooms - desiredRooms;

    if(availableRooms >= desiredRooms){

        for (let index = 0; index < desiredRooms; index+= 1) {
            occupiedRooms.push(index); 

        }
        console.log("Your rooms have been successfully selected: " + occupiedRooms + ". There is a total of rooms available of: " + availableRooms);
    }else{
        console.log("No rooms available");
    }

    }else{
    console.log("You are out of CheckIn hours, there are no rooms available, we are sorry");
    }

}