
  var min = 19;
  var max = 120
  var targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  $("#targetNumber").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var lose = 0;

  // var numberOptions = Math.floor(Math.random() * 12) + 1;
  var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 1);
  console.log(numberOptions);

  // for loop to create gold nuggets for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, create an image
    var imageNugget = $("<img>");

    imageNugget.addClass("image");

    // src link to the nugget image
    imageNugget.attr("src", "http://www.goldwhy.com/gold-images/gold-nugget.jpg");

    // data attribute set equal to the array value.
    imageNugget.attr("data-nuggetvalue", numberOptions[i]);

    $("#images").append(imageNugget);
  }

  $(".image").on("click", function() {

    var nuggetValue = ($(this).attr("data-nuggetvalue"));
    nuggetValue = parseInt(nuggetValue);

    counter += nuggetValue;

    $("#score").text(counter)

    if (counter === targetNumber) {
      $("#score").text("YOU WIN!");
      // $("#win").text(wins += 1);
    }

    else if (counter >= targetNumber) {
      $("#score").text("YOU LOSE!");
      // $("#lose").text(lose += 1);
    }

  });
