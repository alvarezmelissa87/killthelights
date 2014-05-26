function View(){
}

View.prototype = {
  turnOn: function(row, col) {
    var translator = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" }
    // console.log(row, col, translator[col + 1]);
   $('#'+ col).find("." + translator[row + 1]).addClass('on')
  },
}