$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    // this formula found here:
    // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    // Math.floor(Math.random() * (max - min + 1)) + min;


    $("#randomNumber").text(Random);
    // Appending random number to the randomNumber id in the html doc

    var gem1 = Math.floor(Math.random() * 11 + 1) // (12 - 1) + 1
    var gem2 = Math.floor(Math.random() * 11 + 1)
    var gem3 = Math.floor(Math.random() * 11 + 1)
    var gem4 = Math.floor(Math.random() * 11 + 1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12


    // Setting initial variables to 0
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    //  Displaying wins and losses to the correct div
    $("#numberWins").html(wins);
    $("#numberLosses").html(losses);


    //RESET THIS MOFO
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $("#randomNumber").html(Random);
        gem1 = Math.floor(Math.random() * 11 + 1); // (12 - 1) + 1 - same as upper setup
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);
        playerTotal = 0;
        $("#finalTotal").html(playerTotal); // write 
    }


    //adds the wins to the playerTotal
    function chickenDinner() {
        alert("Winnner winner Chicken Dinner");
        wins++;
        $("#numberWins").html(wins);
        reset();
    }

    //addes the losses to the playerTotal
    function loser() {
        alert("You went over and lost");
        losses++;
        $("#numberLosses").html(losses);
        reset()
    }

    //sets up click for jewels
    $("#blue").on("click", function () {
        playerTotal = playerTotal + gem1;
        console.log("New playerTotal= " + playerTotal);
        $("#finalTotal").html(playerTotal);

        //sets win/lose conditions
        if (playerTotal === Random) {
            chickenDinner();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $("#green").on("click", function () {
        playerTotal = playerTotal + gem2;
        console.log("New playerTotal= " + playerTotal);
        $("#finalTotal").html(playerTotal);
        if (playerTotal == Random) {
            chickenDinner();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $("#red").on("click", function () {
        playerTotal = playerTotal + gem3;
        console.log("New playerTotal= " + playerTotal);
        $("#finalTotal").html(playerTotal);
        //sets win/lose conditions
        if (playerTotal == Random) {
            chickenDinner();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $("#yellow").on("click", function () {
        playerTotal = playerTotal + gem4;
        console.log("New playerTotal= " + playerTotal);
        $("#finalTotal").html(playerTotal);

        if (playerTotal == Random) {
            chickenDinner();
        }
        else if (playerTotal > Random) {
            loser();
        }
    });
}); 