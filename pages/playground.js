import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import monsterMaker from "../utils/monsterMaker";

import Layout from "../components/Layout";
import Playground from "../components/Playground";
import Button from "../components/Button";
import MessageForm from "../components/MessageForm";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const users = [{ user: 1 }, { user: 2 }, { user: 3 }];

function PlaygroundPage() {
  const [otherMonsters, setOtherMonsters] = useState(
    users.map((user) => monsterMaker())
  );

  const [myMonster, setMyMonster] = useState(monsterMaker());
  const [value, setValue] = useState("");
  const focusRef = useRef(null);

  // For Prototyping Purposes
  useEffect(() => {
    const intervalId = setInterval(() => {
      pseudoMovement();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function pseudoMovement() {
    const updatedMonsters = otherMonsters.map((monster) => {
      let updatedMonster = {
        ...monster,
        x: Math.floor(Math.random() * 900),
        y: Math.floor(Math.random() * 900),
      };

      return updatedMonster;
    });

    setOtherMonsters(updatedMonsters);
  }
  // For Prototyping Purposes

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

  function handleChange(inputValue) {
    setValue(inputValue);
  }

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <Layout>
      <Playground
        focusRef={focusRef}
        myMonster={myMonster}
        otherMonsters={otherMonsters}
      />
      <ButtonWrapper>
        <Button action="happy" onClick={handleClick} />
        <Button action="heart" onClick={handleClick} />
        <Button action="star" onClick={handleClick} />
      </ButtonWrapper>
      <MessageForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        message={myMonster.message}
        value={value}
      />
    </Layout>
  );
}

export default PlaygroundPage;
