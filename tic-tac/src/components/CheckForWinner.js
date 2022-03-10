export const checkForWinner = (squares,setWinner) => {
    let cases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    cases.forEach((case_) => {
      if (
        squares[case_[0]] &&
        squares[case_[0]] === squares[case_[1]] &&
        squares[case_[1]] === squares[case_[2]]
      ) {
        setWinner(squares[case_[0]]);
        
      }
    });
  };
