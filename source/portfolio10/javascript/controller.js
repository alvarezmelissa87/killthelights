$(document).ready(function(){
  view = new View()
  board = new Grid()
  controller = new Controller(view, board)
  // Button click listeners here
  controller.bindListeners()
  // Reset button listener to clear board
}); // end document ready


function Controller(view, board){
  this.view = view
  this.board = board
}

Controller.prototype = {
  bindListeners: function(){
    $('.gameboard').on("click", ".col .one", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".col .two", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".col .three", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".col .four", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".col .five", this.delegateEvent.bind(this))
    $('#reset').on("click",this.resetBoard.bind(this))
  },

  resetBoard: function(){
    location.reload();
  },

  delegateEvent: function(e){
    debugger
    var rowNum = e.currentTarget.className // returns a string like "one" need to convert
      if (rowNum === "one"){
        rowNum = 1
      } else if (rowNum === "two") {
        rowNum = 2
      } else if (rowNum === "three") {
        rowNum = 3
      } else if (rowNum === "four") {
        rowNum = 4
      } else {
        rowNum = 5
      }

    colNum = parseInt(e.currentTarget.parentElement.id)
    coord = board.changeBoard((rowNum-1), (colNum-1)) // sending two integers
    ///here
    row = coord[0]+1
    column = coord[1]+1
    var winner=board.checkWin(board.player)
    if (winner === true) {
      view.displayWinner(board.player)
    }
    view.updateBoard(board.player, row, column)
    // view.displayWinner(winner)
    view.playerReset(board.player)
    board.playerToken()
    view.playerIdentifier(board.player)
  },




} // End Controller