$(document).ready(function() {
  var currentPlayer = "X";
  var gameWon = false;
  var message = $(".message");
  var confetti = null;

  $(".cell").click(function() {
    if (!$(this).hasClass("x") && !$(this).hasClass("o") && !gameWon) {
      $(this).addClass(currentPlayer.toLowerCase());
      $(this).text(currentPlayer);
      checkForWinner();
      switchPlayer();
    }
  });

  function checkForWinner() {
    var winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];
      if (
        $(".cell").eq(combo[0
