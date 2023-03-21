//Program that organizes students of legal age in one list and minors in another

const studentsOfLegalAge = [];
const underageStudents = [];
let studentsList = ['Rosa' , 'Stephania' , 'Maria Jose' , 'Ivan' , 'Juliana' , 'Juan Jose' , 'Pedro' , 'Jorge' , 'Diego' , 'Jose' , 'Tomas' , 'Santiago' ,
 'Valentina' , 'Mauricio' , 'Daniel' , 'Juan Pablo' , 'Felipe' , 'Paola' , 'Luciana' , 'Melissa' , 'Gloria' , 'Yaneth' , 'Maria Fernanda' , 'Alejandra' ,
 'Alejandro' , ''];
let studentAge = [21 , 23 , 20 , 25 , 20 , 16 , 14 , 14, 15, 17 , 19 , 30 , 22 , 29 , 28 , 32 , 45 , 50 , 12 , 10 , 25 , 21 , 19 , 13 , 16];

validateStudents(studentsList, studentAge);

function validateStudents(studentsList , studentAge){

    if(studentsList.length === studentAge.length){
        for (let index = 0; index < studentsList.length; index+= 1) {
            if(studentAge[index] <= 18){
                underageStudents.push(studentsList[index] + " = " + studentAge[index]);
            }else{
                studentsOfLegalAge.push(studentsList[index] + " = " + studentAge[index]);
            }
            
        }
    }else{
        console.log("Check if all 25 students enrolled");
    }
}

console.log("\nList of underage students:\n");
console.log(underageStudents);
console.log("\nList of students of legal age:\n");
console.log(studentsOfLegalAge);
