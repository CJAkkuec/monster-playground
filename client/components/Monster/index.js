import styled from "styled-components";
import Emote from "../Emote";

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

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Monster({ top, left, monster, randomizeMode }) {
  return (
    <>
      {!randomizeMode && (
        <>
          <UserBox top={top} left={left}>
            <UserName>
              {monster.name}: {monster.iceCream}
            </UserName>
            {monster.emote !== "" && <Emote emote={monster.emote} />}
            {monster.message !== "" && (
              <UserMessage>{monster.message}</UserMessage>
            )}
          </UserBox>
          <UserMonster src={monster.img} top={top} left={left} />
        </>
      )}
      {randomizeMode && (
        <>
          <Flex>
            <UserName>{monster.name}</UserName>
            <UserMonster src={monster.img} />
          </Flex>
        </>
      )}
    </>
  );
}

export default Monster;
