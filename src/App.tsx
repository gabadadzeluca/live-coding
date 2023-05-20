import React, { useReducer } from "react";
import Circle from "./components/Circle";
import "./App.css";

const ACTIONS = {
  ADD_CIRCLE: "ADD_CIRCLE",
  UNDO: "UNDO",
  REDO: "REDO",
};

const COLORS = ["red", "blue", "white", "black", "pink", "green", "gray"];

const reducer = (state, action) => {
  console.log("STATE:", state);
  switch (action.type) {
    case ACTIONS.ADD_CIRCLE:
      return [...state, action.payload];
    case ACTIONS.UNDO:
      const updatedCirclesList = state.slice(0, -1);
      
      return updatedCirclesList;
    case ACTIONS.REDO:
      
    default:
      throw new Error("Unrecognised action");
  }
};

function App() {
  const [circlesList, dispatch] = useReducer(reducer, []);
  
  const drawCircle = (e: React.MouseEvent) => {
    const x = e.pageX;
    const y = e.pageY;
    const circle = {
      x,
      y,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    dispatch({ type: ACTIONS.ADD_CIRCLE, payload: circle });
  };
  const undoClick = () =>{
    dispatch({type: ACTIONS.UNDO})
  }

  return (
    <div className="App">
      <div>
        <button>Redo</button>
        <button onClick={undoClick}>Undo</button>
      </div>
      <div onClick={drawCircle} className='canvas'>
        {circlesList.map((circle) => (
          <Circle {...circle}/>
        ))}
      </div>
    </div>
  );
}

export default App;
