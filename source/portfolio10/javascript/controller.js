$(document).ready(function(){
  view = new View()
  model = new Grid()
  controller = new Controller(view, model)
  // Button click listeners here
  controller.boardSet();
  controller.bindListeners();
}); // end document ready


function Controller(view, model){
  this.view = view
  this.model = model
}

Controller.prototype = {

  boardSet: function() {
    var _this = this;

    this.model.board.forEach(function(row, rowIndex) {
      row.forEach(function(cell, colIndex) {
        if (cell) {
          _this.view.turnOn(rowIndex, colIndex);
        }
      })
    })
  },

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
    this.model.changeBoard((rowNum-1), (colNum-1)) // sending two integers
    ///here
  },




} // End Controller