
// number, win/lose counters
  var counter = 0;
  var wins = 0;
  var lose = 0;

  $("#win").text(wins);
  $("#lose").text(lose);

  $("#start").on("click", function() {
    start();
  })

function start() {
  counter = 0;
  // create target number
  var min = 19;
  var max = 120;
  var targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  $("#targetNumber").text(targetNumber);

// create array of numbers to be added to images
  var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 1);
  console.log(numberOptions);

$("#images").empty()
  // for loop to create gold nuggets for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    //create an image
    var imageNugget = $("<img>");

    imageNugget.addClass("img-responsive col-md-3 image");

    // src link to the nugget image
    imageNugget.attr("src", "http://www.goldwhy.com/gold-images/gold-nugget.jpg");

    // add data attribute set equal to the array value.
    imageNugget.attr("data-nuggetvalue", numberOptions[i]);

    // select images section and add image
    $("#images").append(imageNugget);
  }//end image loop

// click event for iamges
  $(".image").on("click", function() {

    var nuggetValue = ($(this).attr("data-nuggetvalue"));
    nuggetValue = parseInt(nuggetValue);

    // add number attacted to clicked image to value
    counter += nuggetValue;
    // select score section and place score
    $("#score").text(counter)

    // if else statement for win/lose message
    if (counter === targetNumber) {
      $("#score").text("YOU WIN!");
      wins += 1;
      $("#win").text(wins);
      start();
    }
    else if (counter > targetNumber) {
      $("#score").text("YOU LOSE!");
      lose += 1;
      $("#lose").text(lose);
      start();
    }
  });//end click event
}
