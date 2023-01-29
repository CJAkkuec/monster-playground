import styled from "styled-components";

import Layout from "./components/Layout";
import Playground from "./components/Playground";
import Button from "./components/Button";
import { useState, useRef, useEffect } from "react";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

function App() {
  const [emote, setEmote] = useState(null);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  function handleClick(action) {
    setEmote(action);
    setTimeout(() => {
      setEmote(null);
    }, 3000);
    focusRef.current.focus();
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(value);
    setValue("");
    setTimeout(() => {
      setMessage("");
    }, 3000);
    focusRef.current.focus();
  }

  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <Layout>
      <Playground emote={emote} message={message} focusRef={focusRef} />
      <ButtonWrapper>
        <Button action="happy" onClick={handleClick} />
        <Button action="heart" onClick={handleClick} />
        <Button action="star" onClick={handleClick} />
      </ButtonWrapper>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          maxLength={30}
          placeholder="30 char max"
          value={message !== "" ? "Wait ..." : value}
          onChange={(event) => setValue(event.target.value)}
          disabled={message !== ""}
        />
      </form>
    </Layout>
  );
}

export default App;
