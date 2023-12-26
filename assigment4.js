// ..............................................level-1 Question 1......................  
// question 1

let age = 30;
if(age>18){
    console.log("you are old enough to drive");
}else{
    console.log("you are left with 3 years to drive");
}

let age1 = 15;
if(age1>18){
    console.log("you are old enough to drive");
}else{
    console.log("you are left with 3 years to drive");
}

// ....................................................question 2.......................

let myAge=25;
let yourAge=30;
if(myAge>30){
    console.log("my age is greater than your age");
}else{
    console.log("you are 5 years older than me");
}

// ........................question3.................................

let a =4;
let b=3;
if(a>b){
    console.log("a is greater than b");
}else{
    console.log("a is less than b")
}
//or
let a =2;
let b=3;
if(a>b){
    console.log("a is greater than b");
}else{
    console.log("a is less than b")
}


let x= 2
if(x%2==0){
    console.log("2 is an even number");

}else{
    console.log("9 is an odd number")
}

let x1= 9
if(x%2==0){
    console.log("2 is an even number");

}else{
    console.log("9 is an odd number")
}


//.............................................. level-2 question 1............................................

function calculateGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score < 89) {
        return 'B';
    } else if (score >= 60 && score < 69) {
        return 'C';
    } else if (score >= 50 && score < 59) {
        return 'D';
    } else if (score >= 0 && score < 49) {
        return 'F';
    } else {
        return 'Invalid score. Please enter a score between 0 and 100.';
    }
}

// Example usage:
const studentScore =68;
const studentGrade = calculateGrade(studentScore);

console.log(`Score: ${studentScore}`);
console.log(`Grade: ${studentGrade}`);


// function calculateGrade(score){
//     if(score>=80 && score<=100){
//         return 'A';
//     }else if (score>=70 && score< 89){
//         return 'B';
//     } else if(score>=60 && score<69){
//         return 'C';
//     }else if(score>=50 && score<59){
//         return 'D';
//     }else if(score>=0 && score<49){
//         return 'F'
//     }else{
//         return 'Invalid score please enter the score between 0 and 100';
//     }
// }
// const studentScore =80;
// const studentGrade = calculateGrade(studentScore);

// console.log('score: ${studentScore}');
// console.log('Grade: ${studentGrade}');


//.......................level 2 Question 1.....................

// let score=87;
// switch (true){
//     case(score>=80 && score<=100):
//     console.log("Grade A");
//     break;
    
//     case(score>=70 && score<=89):
//     console.log("Grade B");
//     break;

//     case(score<=60 && score<=69):
//     console.log("Grade C");
//     break;

//     case(score<=50 && score>=59):
//     console.log("Grade D");
//     break;

//     case(score>=0 && score<=49):
//     console.log("Grade F");
//     break;

//     default:
//         console.log("Enter the valid score");
    


// }


//.............................Question 2....................

// let monthsUserInput = prompt('october')
// let months = monthsUserInput.toLowerCase()

var months= 'january';

switch(months){
    case 'september': case 'october': case 'november':
        console.log("the season is Autumn");
        break;
        
        case 'december': case 'january': case 'february':
            console.log("the season is winter");
            break;

            case 'march': case 'april': case 'may':
                console.log("the season is spring");
                break;

                case 'june': case 'august': case 'july':
                    console.log("the season is summer");
                    break;

                    default:
                        console.log("Enter the valid months");
}



var months= 11;
switch(months){
    case 9: case 10: case 11:
        console.log("the season is autumn")
        break;
        case 12: case 1: case 2:
            console.log("the season is winter");
            break;

            default:
                console.log("enter the valid months");
}


//.........................question 3...............

var days = 'monday';

switch(days){
    case 'saturday':
        console.log("saturday is a weekend ");
        break;

        case 'saturDay':
            console.log("saturday is weekend ");
            break;

            case 'Friday':
                console.log("Friday is a working day");
                break;

                case 'FriDAY':
                console.log("Friday is a working day")
                break;

                default:
                    console.log("enter the valid day");
}



//................................LEVEL 3 Question 1.........................

var months = 'january'
switch(months){
    case 'january':
        console.log("january has 31 days");
        break;

        case 'JANUARY':
            console.log("january has 31 days");
            break;

            case 'February':
                console.log("February has 28 days");
                break;
                
                case 'FEbruary':
                    console.log("February has 28 days")
                    break;

                    default:
                        console.log("Enter the valid months")
}

//...............................Question 2...........................

var months= 'February'
switch(months){
    case ' february':
        console.log("february is 28 days");
        break;

        case 'February':
            console.log("February is 29 days")
            break;

            default:
                console.log("Enter the valid months")
}