import { useEffect, useState } from "react";
import { init } from "../utils/socket";
import { socket } from "../utils/socket";

import styled from "styled-components";
import Layout from "../components/Layout";
import Playground from "../components/Playground";
import Button from "../components/Button";
import MessageForm from "../components/MessageForm";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

function PlaygroundPage({ myMonster, fontFredoka, focusRef }) {
  const [allMonsters, setAllMonsters] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!myMonster) return;

    init(myMonster);
    console.log("user connected");

    socket?.on("allMonsters", (monsters) => {
      setAllMonsters(monsters);
    });
  }, [myMonster]);

  const otherMonsters = allMonsters.filter(
    (monster) => monster.userId !== myMonster.userId
  );

  const myCurrentMonster = allMonsters.filter(
    (monster) => monster.userId === myMonster.userId
  );

  //Message System
  function handleChange(inputValue) {
    setValue(inputValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    socket.emit("monsterMessage", { message: value });
    setValue("");
    setTimeout(() => {
      socket.emit("monsterMessage", { message: "" });
    }, 3000);
    focusRef.current.focus();
  }

  //Emotes
  function handleClick(action) {
    socket.emit("monsterEmote", { emote: action });
    setTimeout(() => {
      socket.emit("monsterEmote", { emote: "" });
    }, 3000);
    focusRef.current.focus();
  }

  return (
    <Layout>
      {myCurrentMonster.length > 0 && (
        <>
          <Playground
            focusRef={focusRef}
            myMonster={myCurrentMonster[0]}
            otherMonsters={otherMonsters}
          />
          <ButtonWrapper>
            <Button
              action="happy"
              onClick={handleClick}
              fontFredoka={fontFredoka}
            />
            <Button
              action="heart"
              onClick={handleClick}
              fontFredoka={fontFredoka}
            />
            <Button
              action="star"
              onClick={handleClick}
              fontFredoka={fontFredoka}
            />
          </ButtonWrapper>
          <MessageForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            message={myMonster.message}
            value={value}
          />
        </>
      )}
    </Layout>
  );
}

export default PlaygroundPage;
