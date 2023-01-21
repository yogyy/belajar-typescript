import {useEffect, useRef, useState} from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  return (
    <div>
      HookTimer - {timer}
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
