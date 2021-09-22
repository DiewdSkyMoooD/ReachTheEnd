let input = {};
let end = 0;
let char;
function search(inputs){
  input = inputs;
  end = input.grid-1;
  if(right(0,0,0))return true;
  if(down(0,0,0))return true;
  return false;
}

function finished(row, col){
    return row === end && col==end;  
}

function move(moves){
    return moves < input.moves;
}

function right(row, col, moves){
    if(finished(row, col))return true;
    if(move(moves)){
        char=input.routes[row][col]
        if (char === '.'){
            if(col < (input.grid-1) && right(row, col+1, moves+1))return true;
            if(row < (input.grid-1) && down(row+1, col, moves+1))return true;
            if(row > 0 && top(row-1, col, moves+1))return true;
            return false;
        }
    }return false;
}

function left(row, col, moves){
    if(finished(row, col))return true;
    if(move(moves)){
        char=input.routes[row][col]
        if (char === '.'){
            if(row < (input.grid-1) && down(row+1, col, moves+1))return true;
            if(col > 0 && left(row, col-1, moves+1))return true;
            if(row > 0 && top(row-1, col, moves+1))return true;
            return false;
        }
    }return false;
}

function down(row, col, moves){
    if(finished(row,col))return true;
    if(move(moves)){
        char=input.routes[row][col]
        if (char === '.'){
            if(col < (input.grid-1) && right(row, col+1, moves+1))return true;
            if(row < (input.grid-1) && down(row+1, col, moves+1))return true;
            if(col > 0 && left(row, col-1, moves+1))return true;
            return false;
        }
    }return false;
}

function top(row, col, moves){
    if(finished(row,col))return true;
    if(move(moves)){
        char=input.routes[row][col]
        if (char === '.'){
            if(col <(input.grid-1) && right(row, col+1, moves+1))return true;
            if(col > 0 && left(row, col-1, moves+1))return true;
            if(row > 0 && top(row-1, col, moves+1))return true;
            return false;
        }
    }return false;
}

module.exports=search;