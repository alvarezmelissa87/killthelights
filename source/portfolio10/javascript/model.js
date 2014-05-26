function Grid(){
  var rows = 5
  var columns = 5
  var grid = new Array()
  for(var i = 0; i < rows; i++) {
    grid[i] = new Array()
    for(j = 0; j < columns; j++)
      grid[i][j] = null
    }

  this.board = grid
  this.won = false
}

Grid.prototype = {
  changeBoard: function(row, col) {
    console.log(row, col);
  }
}