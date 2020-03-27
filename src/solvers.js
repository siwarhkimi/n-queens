/*           _
___  ___ | |_   _____ _ __ ___
/ __|/ _ \| \ \ / / _ \ '__/ __|
\__ \ (_) | |\ V /  __/ |  \__ \
|___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such
// that none of them can attack each other



/*
arr= [
  [0, 0, 0, 0],//solution.rows()[0][]
  [0, 0, 0, 0],//solution.rows()[1]
  [0, 0, 0, 0],//solution.rows()[2]
  [0, 0, 0, 0],//solution.rows()[3]
] 


*/

window.findNRooksSolution = function(n) {
  //var solution = undefined; //fixm
  var solution = new Board({'n':n});
  for (var i = 0; i < solution.rows().length; i++){
    for(var j = 0; j < solution.rows().length; j++){
      solution.togglePiece(i,j);
      if(solution.hasAnyRooksConflicts()){
        solution.togglePiece(i,j)
      }
    }
  }
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};
// function factoriel(n) {
//   if(n === 0 || n ===1){
//     return 1;
//   }else{
//     return n * factoriel(n-1);
//   }

//}


//return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// ok we will join  :) 
// window.countNRooksSolutions = function(n) {
//   var solutionCount =0; //fixme
//   var solutionBoard = new Board({'n':n});

//   console.log('Number of solutions for ' + n + ' rooks:', factoriel(n));
//   return factoriel(n);
// };
window.countNRooksSolutions = function(n) {
  var solutionCount =0; //fixme
  var solutionBoard = new Board({'n':n});
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount ;
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n':n});
  var countSol=0
 // solution.togglePiece(0,1);
    if(n!==2&& n!==3){
     
      for (var i = 0; i < solution.rows().length; i++){
        for(var j = 0; j < solution.rows().length; j++){
          solution.togglePiece(i,j);
          if(solution.hasAnyQueensConflicts()){
            solution.togglePiece(i,j);
          }
          
        }
        
      }
    }else{
      solution.rows()
    }
    
  /*function generate(row){
      while(row < n){ 
        //  for (var k = 0; k < n; k++){
    //   solution.togglePiece(row,k)
    //   if(!solution.hasAnyQueensConflicts()){
    //     generate(row+1)
    //   }
        else{
          solution.togglePiece(row,k)
        }
        }
      }
    
    // }*/
    
    
    
    
    
    
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows()));
    return solution.rows();
    
  }
  
  // return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
  window.countNQueensSolutions = function(n) {
    var solutionCount = undefined; //fixme
    
    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  };
  