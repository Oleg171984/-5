function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function startProgram() {
    let continueCalculation = true;

    while (continueCalculation) {

        let userInput = prompt("Введіть число N, щоб перевірити чи є воно простим:");
        if (userInput === null) {
            alert("Програму завершено!");
            break;
        }

        let number = parseInt(userInput, 10);
        if (isNaN(number)) {
            alert("Введено некоректне число! Спробуйте знову.");
            continue;
        }


        if (isPrime(number)) {
            alert(`Число ${number} є простим.`);
        } else {
            alert(`Число ${number} не є простим.`);
        }

        let userResponse = confirm("Хочете перевірити інше число?");
        if (!userResponse) {
            alert("Дякую за використання програми! До побачення.");
            continueCalculation = false;
        }
    }
}

startProgram();
