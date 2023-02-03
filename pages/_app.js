import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import monsterMaker from "../utils/monsterMaker";
import { useRef } from "react";

import { Fredoka_One } from "@next/font/google";
import { Covered_By_Your_Grace } from "@next/font/google";

const fredoka = Fredoka_One({ weight: "400", subsets: ["latin"] });
const yourGrace = Covered_By_Your_Grace({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const fontFredoka = fredoka.className;
  const fontYourGrace = yourGrace.className;

  const focusRef = useRef(null);
  const [myMonster, setMyMonster] = useLocalStorageState("myMonster", {
    defaultValue: null,
  });

  function handleRandomizeMonster() {
    setMyMonster(monsterMaker());
  }

  function handleClick(action) {
    setMyMonster({ ...myMonster, emote: action });
    setTimeout(() => {
      setMyMonster({ ...myMonster, emote: null });
    }, 3000);
    focusRef.current.focus();
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMyMonster({ ...myMonster, message: value });
    setValue("");
    setTimeout(() => {
      setMyMonster({ ...myMonster, message: null });
    }, 3000);
    focusRef.current.focus();
  }

  function handleAddIceCream() {
    setMyMonster({ ...myMonster, iceCream: myMonster.iceCream + 1 });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onRandomizeMonster={handleRandomizeMonster}
        onSubmit={handleSubmit}
        onClick={handleClick}
        myMonster={myMonster}
        handleAddIceCream={handleAddIceCream}
        fontFredoka={fontFredoka}
        fontYourGrace={fontYourGrace}
      />
    </>
  );
}
