function View(){
}

View.prototype = {
  turnOn: function(row, col) {
      // console.log(row, col, translator[col + 1]);
   this.getCell(row, col).addClass('on')
  },

  turnOff: function(row, col) {
   this.getCell(row, col).removeClass('on')
  },

  getCell: function(row, col) {
    var translator = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" }
    return $('#'+ (row +1)).find("." + translator[col + 1])
  },

  showWinMessage: function() {
    $(".win").fadeIn();
    $(".win h1").text("MWAH HA HA!")
    $('#mask').show();
  },
}