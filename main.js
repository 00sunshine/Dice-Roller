let dieRolls = [];
let rollButton = douument.querySelector("#rollButton");
let userInput = document (nubofRolls);
let totalSpan = document.querySelector("#total")
let showAllRolls = document.querySelector("showAllrolls")
let showAllRolls = querySelector ()

rollButton.addEventListener("Click", function(event) { 
    let diceCount = userInput.value 

    let total = 0

    for(let i = 1; i <= diceCount; i++) {


        let roll = Math.floor(Math.ramdon()) *6 ) +1 

        //add the rolls to the array 
        dieRolls.push(roll)

        total = tatal + roll;
    }


    totalSpan.innerHTML = total
})

showAllRolls.addEventListener(click, function(event) {
    for(let i = 0; i < i <diceroll.lenght ; i++ )
    const newDiceString = "<li class="dice"> + dieRolls " + "</Li>";
    allRolls.innerHTML = allRollsElement.innerHTML + newDiceString; 
    
}
