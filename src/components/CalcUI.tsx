import {useState} from "react";

type ResultProps<T> = {
  name: number;
};

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export const CalcUI = () => {
  const [currentValue, setCurrentValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNextValue, setWaitingForNextValue] = useState<boolean>(false);

  const handleButtonClick = (btn: string | number) => {
    if (typeof btn === "number" || btn === ".") {
      if (waitingForNextValue) {
        setCurrentValue(btn.toString());
        setWaitingForNextValue(false);
      } else {
        setCurrentValue(currentValue + btn.toString());
      }
    } else if (btn === "C") {
      setCurrentValue("");
      setDisplayValue("0");
      setOperator(null);
      setWaitingForNextValue(false);
    } else if (btn === "+-" && currentValue !== "") {
      setCurrentValue((parseFloat(currentValue) * -1).toString());
    } else if (btn === "%") {
      const value = parseFloat(currentValue) / 100;
      setCurrentValue(value.toString());
      setWaitingForNextValue(true);
    } else if (btn === "+" || btn === "-" || btn === "X" || btn === "/") {
      if (currentValue !== "") {
        if (operator && !waitingForNextValue) {
          handleOperator();
        }
        setOperator(btn.toString());
        setDisplayValue(currentValue);
        setWaitingForNextValue(true);
      }
    } else if (btn === "=") {
      handleOperator();
      setWaitingForNextValue(true);
      setOperator(null);
    }
  };

  const handleOperator = () => {
    const currentValueFloat = parseFloat(currentValue);
    if (operator === "+") {
      setCurrentValue((parseFloat(displayValue) + currentValueFloat).toString());
    } else if (operator === "-") {
      setCurrentValue((parseFloat(displayValue) - currentValueFloat).toString());
    } else if (operator === "X") {
      setCurrentValue((parseFloat(displayValue) * currentValueFloat).toString());
    } else if (operator === "/") {
      setCurrentValue((parseFloat(displayValue) / currentValueFloat).toString());
    } else {
      setCurrentValue(currentValueFloat.toString());
    }
    setDisplayValue(currentValueFloat.toString());
  };

  return (
    <>
      <div className="container w-[256px] my-0 mx-auto text-center p-3 rounded-md bg-sky-600">
        <h1>calculator tsx</h1>
        <form action="">
          <input type="number" value={currentValue} readOnly />
        </form>
        <div className="keypad">
          {btnValues.flat().map((btn, i) => {
            return (
              <button
                key={i}
                className={btn === "=" ? "equals" : ""}
                onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
