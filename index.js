




//first form
var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input");
var elList = document.querySelector(".list");

//second form
var elForm_chack = document.querySelector(".form-chack");
var elInput_chack = elForm_chack.querySelector(".input-chack");
var chacking_result = document.querySelector(".chacking-result");


var result = [];

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    elList.innerHTML = "";

    var input = elInput.value.trim();

    result.push(input);

    for (product of result) {
        var item = document.createElement("li");
        // var chackbox = document.createElement("input");
        // chackbox.setAttribute("type", "chackbox");
        // item.appendChild(chackbox);
        item.textContent = product

        elList.appendChild(item);
    }
    elInput.value = null;

    console.log(result);
});


elForm_chack.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var input_chack = elInput_chack.value.trim();


    if (result.includes(input_chack)) {
        chacking_result.textContent = "Bor"
    } else {
        chacking_result.textContent = "Yo'q", elInput.value = input_chack;
    }

    elInput_chack.value = null;


});







