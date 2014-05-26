function Grid(){
  var rows = 5
  var columns = 5
  var grid = new Array()
  for(var i = 0; i < rows; i++) {
    grid[i] = new Array()
    for(j = 0; j < columns; j++)
      grid[i][j] = this.randomVal();
    }

  this.board = grid
  this.won = false
}

Grid.prototype = {
  changeBoard: function(row, col) {
    console.log(row, col);
  },

  randomVal: function() {
    var values = [true, false]
    return values[ Math.floor(Math.random()*2) ];
  },

  sendBoard: function() {

  },
}