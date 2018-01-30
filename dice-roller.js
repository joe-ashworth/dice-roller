var numOfDice;
var numOfSides;
var total = 0;

function updateVars() {
  numOfDice = $("#number-of-dice").val();
  numOfSides = $("#sides").val();
}

//Event Listener setup
$("#roll").click(function() {
  total = 0;
  $('#dice').html('');
  updateVars();
  rollDice(numOfDice, numOfSides);
});

function rollDice(quan, sides) {
  for (i = 1; i <= quan; i++) {
    rollDie(sides);

  }
}

function rollDie(sides) {
  var randomNum = Math.floor((Math.random() * sides) + 1);
  var newString = '<div class="die">' + randomNum + '</div>';
  total = total + randomNum;
  $("#result").html(total);
  $("#dice").append(newString);
}