import styled from "styled-components";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";
import Emote from "../Emote";

const randomName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals],
});

const UserBox = styled.div`
  position: absolute;
  top: calc(${(props) => props.top}px - 100px);
  left: ${(props) => props.left}px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 120px;
`;

const UserMonster = styled.img`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: 100px;
  height: 100px;
`;

const UserName = styled.span`
  color: var(--dark-choc);
  font-size: 0.8rem;
  background: var(--butter);
  padding: 2px;
`;

const UserMessage = styled.span`
  background: var(--cream);
  color: var(--dark-choc);
  border-radius: 10px;
  padding: 4px;
`;

const colors = ["green", "blue", "yellow", "purple"];
const randomIndex = Math.floor(Math.random() * colors.length);
const monsterColor = colors[randomIndex];

let monsterSrc = "";

switch (monsterColor) {
  case "green":
    {
      monsterSrc = "./assets/monsters/green.gif";
    }
    break;
  case "purple":
    {
      monsterSrc = "./assets/monsters/purple.gif";
    }
    break;
  case "blue":
    {
      monsterSrc = "./assets/monsters/blue.gif";
    }
    break;
  case "yellow":
    {
      monsterSrc = "./assets/monsters/yellow.gif";
    }
    break;
  default:
    break;
}

function Monster({ top, left, emote, message, counter }) {
  console.log(message);
  return (
    <>
      <UserBox top={top} left={left}>
        <UserName>
          {randomName}: {counter}
        </UserName>
        <Emote emote={emote} />
        {message !== "" && <UserMessage>{message}</UserMessage>}{" "}
      </UserBox>
      <UserMonster src={monsterSrc} top={top} left={left} />
    </>
  );
}

export default Monster;
