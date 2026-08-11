const num1Input = document.getElementById("quantity1");
const num2Input = document.getElementById("quantity2");
const result = document.getElementById("result");

function calculate(operation) {
    const num1 = num1Input.value;
    const num2 = num2Input.value;

    fetch(`/${operation}?num1=${num1}&num2=${num2}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.answer !== undefined) {
                result.innerHTML = "Answer: " + data.answer;
            } else {
                result.innerHTML = "Error: " + data.error;
            }
        });
}

document.querySelector(".addition")
    .addEventListener("click", function () {
        calculate("add");
    });

document.querySelector(".subtraction")
    .addEventListener("click", function () {
        calculate("subtract");
    });

document.querySelector(".multiplication")
    .addEventListener("click", function () {
        calculate("multiply");
    });

document.querySelector(".division")
    .addEventListener("click", function () {
        calculate("divide");
    });
