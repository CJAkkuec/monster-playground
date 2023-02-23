import { useRouter } from "next/router";

import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import monsterMaker from "../utils/monsterMaker";
import { useState, useRef } from "react";

import { Fredoka_One } from "@next/font/google";
import { Covered_By_Your_Grace } from "@next/font/google";
import { nanoid } from "nanoid";

const fredoka = Fredoka_One({ weight: "400", subsets: ["latin"] });
const yourGrace = Covered_By_Your_Grace({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const fontFredoka = fredoka.className;
  const fontYourGrace = yourGrace.className;

  const focusRef = useRef(null);
  const [myMonster, setMyMonster] = useLocalStorageState("myMonster", {
    defaultValue: null,
  });

  const router = useRouter();

  // Only Business Logic required on the client
  // Creates a monster, creates an id
  // Monster is then handed over to the server
  function handleRandomizeMonster() {
    setMyMonster(monsterMaker());
  }

  function handleSubmitId(event) {
    event.preventDefault();
    console.log(event);
    const id = nanoid();
    setMyMonster({ ...myMonster, userId: id });

    router.push("/playground");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onRandomizeMonster={handleRandomizeMonster}
        onSubmitId={handleSubmitId}
        myMonster={myMonster}
        fontFredoka={fontFredoka}
        fontYourGrace={fontYourGrace}
        focusRef={focusRef}
      />
    </>
  );
}
