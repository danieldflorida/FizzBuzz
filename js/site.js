//get values
function getValues(){
    let numbers = [];
    let fizz = document.getElementById("fizz").value;
    let buzz = document.getElementById("buzz").value;

    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    if(Number.isInteger(fizz) && Number.isInteger(buzz)){
        numbers = generateNumbers();
        displayNumbers(numbers, fizz, buzz);
    }else {
        alert("You must enter integers");
    }

    
}


//generate numbers from 1 to 100
function generateNumbers(){
    let numbers = [];
    for (let index = 0; index < 100; index++) {
        numbers.push(index + 1);
    }
    return numbers;
}


//display numbers
function displayNumbers(numbers, fizz, buzz){
    //declare empty string;
    //


    let templateRows = "";
    let temp = "";
    for (let index = 0; index < numbers.length; index++) {

        //check if number belongs to both fizz and buzz, fizz, or buzz, and save it to a variable temp
        if((numbers[index] % fizz == 0) && (numbers[index] % buzz == 0)){
            temp = "fizzbuzz";
        }
        else if (numbers[index] % fizz == 0){
            temp = "fizz";
        }
        else if (numbers[index] % buzz == 0){
            temp = "buzz";
        }else {
            temp = numbers[index];
        }

        //construct a row
        if((index + 1) % 5 == 1){
            templateRows += `<tr><td class="${temp}">${temp}</td>`;
            if((index + 1) == numbers.length){
                templateRows += `</tr>`;
            }
        }else if(((index + 1) % 5 == 0) || ((index + 1) == numbers.length)){
            templateRows += `<td class="${temp}">${temp}</td></tr>`;
        }else {
            templateRows += `<td class="${temp}">${temp}</td>`;
        }

        //else if((index + 1) == numbers.length){
         //   templateRows += `<td>${temp}</td></tr>`;
        //}      
    }

document.getElementById("results").innerHTML = templateRows;
}
