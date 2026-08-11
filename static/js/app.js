const num1Input = document.getElementById("quantity1");
const num2Input = document.getElementById("quantity2");
const result = document.getElementById("result");

function calculate(operation) {
    const num1 = num1Input.value.trim();
    const num2 = num2Input.value.trim();

    if (num1 === "" || num2 === "") {
        result.innerHTML = "Error: Please enter both numbers.";
        return;
    }

    const parsedNum1 = Number(num1);
    const parsedNum2 = Number(num2);

    if (Number.isNaN(parsedNum1) || Number.isNaN(parsedNum2)) {
        result.innerHTML = "Error: Please enter valid numbers only.";
        return;
    }

    fetch(`/${operation}?num1=${encodeURIComponent(parsedNum1)}&num2=${encodeURIComponent(parsedNum2)}`)
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
