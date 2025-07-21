import TotalDisplay from "./components/TotalDisplay.jsx";
import CalcButton from "./components/CalcButton.jsx";
import { useReducer } from "react";
import { reducer } from "./store/reducers.jsx";
import { initialState } from "./store/reducers.jsx";
import { changeOperation, applyNumber,clearDisplay,
  result,
  memoryAdd,
  memoryRecall,
  memoryClear } from "./store/actions.jsx";



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

 function handleClick(number) {
  dispatch(applyNumber(number));
 }

 function handleOperationClick(op) {
  dispatch(changeOperation(op));
 }

 function handleSıfırla(ce) {
  dispatch(clearDisplay(ce))
 }

 function handleResult() {
  dispatch(result())
 }
 function handleMemoryAdd() {
  dispatch(memoryAdd());
}

function handleMemoryRecall() {
  dispatch(memoryRecall());
}

function handleMemoryClear() {
  dispatch(memoryClear());
}

  return (
    <div>
      <nav className="text-center py-6 px-4 bg-stone-800 text-white text-xl/none">
        Reducer Challenge
      </nav>

      <div className="mt-12 mx-auto w-75">
        <form name="Cal">
          <TotalDisplay value={state.temp !== 0 ? state.temp : state.total} />
          <div className="flex justify-between bg-black text-white text-sm px-3 py-2">
            <span id="operation">
              <b>Operation:</b> {state.operation}
            </span>
            <span id="memory">
              <b>Memory:</b> {state.memory}
            </span>
          </div>
          <div className="flex">
            <CalcButton value={"M+"} onClick={handleMemoryAdd}/>
            <CalcButton value={"MR"} onClick={handleMemoryRecall}/>
            <CalcButton value={"MC"} onClick={handleMemoryClear}/>
          </div>
          <div className="flex">
            <CalcButton value={1} onClick={() => handleClick(1)}/>
            <CalcButton value={2} onClick={() => handleClick(2)}/>
            <CalcButton value={3} onClick={() => handleClick(3)}/>
          </div>

          <div className="flex">
            <CalcButton value={4} onClick={() => handleClick(4)}/>
            <CalcButton value={5} onClick={() => handleClick(5)}/>
            <CalcButton value={6} onClick={() => handleClick(6)}/>
          </div>

          <div className="flex">
            <CalcButton value={7} onClick={() => handleClick(7)}/>
            <CalcButton value={8} onClick={() => handleClick(8)}/>
            <CalcButton value={9} onClick={() => handleClick(9)}/>
          </div>
          <div className="flex">
            <CalcButton value={"+"} onClick={() => handleOperationClick("+")}/>
            <CalcButton value={0} onClick={() => handleClick(0)}/>
            <CalcButton value={"-"} onClick={() => handleOperationClick("-")}/>
          </div>
          <div className="flex">
            <CalcButton value={"*"} onClick={() => handleOperationClick("*")}/>
            <CalcButton value={"/"} onClick={() => handleOperationClick("/")}/>
            <CalcButton value={"CE"} onClick={handleSıfırla}/>
          </div>

          <div className="flex">
            <CalcButton value={"="} onClick={handleResult}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;


