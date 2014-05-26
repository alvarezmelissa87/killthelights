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
    this.flip(row, col);
    this.flip(row-1, col);
    this.flip(row+1, col);
    this.flip(row, col-1);
    this.flip(row, col+1);
  },

  randomVal: function() {
    var values = [true, false]
    return values[ Math.floor(Math.random()*2) ];
  },

  flip: function(row, col) {
    if (this.outOfBounds(row, col)) { return; }

    if (this.board[row][col]) {
      this.board[row][col] = false;
    }
    else {
      this.board[row][col] = true;
    }
  },

  outOfBounds: function(row, col) {
    if (row > 4 || col > 4 || row < 0 || col < 0) {
      return true;
    }
  },
}