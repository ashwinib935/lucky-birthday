var dateOfBirth = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var buttonCheck = document.querySelector("#btn-check");
var checkedMessage = document.querySelector("#checkedMessage");


buttonCheck.addEventListener("click", checkBirthdayLucky);

function calculateSumOfBdate(bDate) {
    var sum = 0;
    var digitsOfBdate = bDate.replaceAll("-", "");
    for (let i = 0; i < digitsOfBdate.length; i++) {
        sum = sum + Number(digitsOfBdate.charAt(i));
    }
    return sum;
}

function checkModulus(sumofDigits, luckyNum) {
    var check = false;
    if (sumofDigits % luckyNum == 0) {
        check = true;
    }
    return check;
}


function checkBirthdayLucky() {
    var bDate = dateOfBirth.value;
    var luckyNum = luckyNumber.value;
    if (bDate && luckyNum) {

        var sumofDigits = calculateSumOfBdate(bDate)
        var checkLuck = checkModulus(sumofDigits, Number(luckyNum));

        if (checkLuck) {
            checkedMessage.innerText = "YAA !! Your Birtday is lucky. 😎😊🎉"
        } else {
            checkedMessage.innerText = "Sorry!! Your Birthday is unlucky. 😢"
        }
    } else {
        checkedMessage.innerText = "Please provide both fields ... Date of birth and lucky number !!!."
    }
}