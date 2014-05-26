$(document).ready(function(){
  view = new View()
  model = new Grid()
  controller = new Controller(view, model)
  // Button click listeners here
  controller.renderBoard();
  controller.bindListeners();
}); // end document ready


function Controller(view, model){
  this.view = view;
  this.model = model;
}

Controller.prototype = {

  renderBoard: function() {
    var _this = this;
    console.log('rendering')
    this.model.board.forEach(function(row, rowIndex) {
      row.forEach(function(cell, colIndex) {
        if (cell) {
          _this.view.turnOn(rowIndex, colIndex);
        } else {
          _this.view.turnOff(rowIndex, colIndex);
        }
      })
    })
  },

  bindListeners: function(){
    $('.gameboard').on("click", ".row .one", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".row .two", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".row .three", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".row .four", this.delegateEvent.bind(this))
    $('.gameboard').on("click", ".row .five", this.delegateEvent.bind(this))
    $('#reset').on("click",this.resetBoard.bind(this))
  },

  resetBoard: function(){
    location.reload();
  },

  delegateEvent: function(e){
    // var rowNum = e.currentTarget.className // returns a string like "one" need to convert
    var $cell = $(e.currentTarget),
        colNum = $cell.data('index'),
        rowNum = $cell.closest('.row').attr('id');

    // colNum = parseInt(e.currentTarget.parentElement.id)
    this.model.changeBoard((rowNum-1), (colNum-1)) // sending two integers
    console.log(this.model.board);
    this.renderBoard();
  },




} // End Controller