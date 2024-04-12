import "./App.css";
import { Fragment, useState } from "react";

/* 

To Do's:

[x] 3x3 grid
[x] 9 buttons
[x] switch (automagically) between players X and O
[ ] check win state => display winner
[ ] restart button

*/

const initialState = [
  {
    id: 1,
    mark: undefined,
  },
  {
    id: 2,
    mark: undefined,
  },
  {
    id: 3,
    mark: undefined,
  },
  {
    id: 4,
    mark: undefined,
  },
  {
    id: 5,
    mark: undefined,
  },
  {
    id: 6,
    mark: undefined,
  },
  {
    id: 7,
    mark: undefined,
  },
  {
    id: 8,
    mark: undefined,
  },
  {
    id: 9,
    mark: undefined,
  },
];

function App() {
  const [field, setField] = useState(initialState);
  const [player, setPlayer] = useState("X");

  function handleOnClick(id) {
    setField(
      field.map((box) => (box.id === id ? { ...box, mark: player } : box))
    );
    setPlayer(player === "X" ? "O" : "X"); // x ? y : z
  }

  //hier können wir reagieren
  function checkWin() {
    //check all rows
    //0 1 2
    //3 4 5
    //6 7 8
    allThreeAreTheSame(0, 1, 2);
    allThreeAreTheSame(3, 4, 5);
    allThreeAreTheSame(6, 7, 8);

    //check all columns
    //0 3 6
    //1 4 7
    //2 5 8
    allThreeAreTheSame(0, 3, 6);
    allThreeAreTheSame(1, 4, 7);
    allThreeAreTheSame(2, 5, 8);

    //check diaginals
    //0 4 8
    //2 4 6
    allThreeAreTheSame(0, 4, 8);
    allThreeAreTheSame(2, 4, 6);

    function allThreeAreTheSame(fieldA, fieldB, fieldC) {
      //code for checking if all three marks are the same
    }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section>
        {field.map((box) => (
          <Fragment key={box.id}>
            <button
              onClick={() => handleOnClick(box.id)}
              disabled={box.mark === "X" || box.mark === "O"} /* add win */
            >
              {box.mark}
            </button>
            {/* {index % 3 === 2 && <br />} */}
            {/* {index === 2 && <br />}
            {index === 5 && <br />} */}
          </Fragment>
        ))}
      </section>
    </>
  );
}

export default App;
