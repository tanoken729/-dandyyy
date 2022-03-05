import { useState } from "react";
import { ColoredMessage } from "./views/components/ColoredMessage";

export const App = () => {
  // stateの定義
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    // alert();
    setNum(num + 1);
  };
  return (
    <>
      <h1>こんにちは</h1>
      <ColoredMessage />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
