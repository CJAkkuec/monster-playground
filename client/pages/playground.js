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

function PlaygroundPage({
  myMonster,
  onSubmit,
  onClick,
  fontFredoka,
  focusRef,
  handleChange,
  value,
}) {
  const [allMonsters, setAllMonsters] = useState([]);

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
              onClick={onClick}
              fontFredoka={fontFredoka}
            />
            <Button
              action="heart"
              onClick={onClick}
              fontFredoka={fontFredoka}
            />
            <Button action="star" onClick={onClick} fontFredoka={fontFredoka} />
          </ButtonWrapper>
          <MessageForm
            onSubmit={onSubmit}
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
