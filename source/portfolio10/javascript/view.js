function View(){
}

View.prototype = {
  playerIdentifier: function (player){
    $("#" + player).css("color", "blue" )
  },

  playerReset: function(player){
    $("#" + player).css("color", "black" )

  },

  updateBoard: function(player, row, column){
    col = $('#'+ column)
    var ending_cell = col.find('div:nth-child(' + row + ')' )
    var $imgToken = $('<img>', { src: 'images/' + player + '.png' })
    this.animateTokenDrop($imgToken, ending_cell)
    // ending_cell.html(imgToken)
  },

  animateTokenDrop: function($token, destination_cell){
    var offset = destination_cell.offset()

    destination_cell.html($token)

    $token.css({
      left: offset.left + 3,
      top: '-10px',
      position: 'absolute'
    })

    $token.animate(
      { top: offset.top }, 1000, 'easeOutBounce', setRelative
    );
  },

  displayWinner: function(winner){
    $(".bam").css("display", "inline")
    $(".bam h1").text("You got decked by " + winner + "!")
  },

}

  function setRelative(){
    $(this).css({ position: 'relative', top: "", left: "" })
  }